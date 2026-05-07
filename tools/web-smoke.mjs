import http from "node:http";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
const browsers = ["C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", "C:/Program Files/Microsoft/Edge/Application/msedge.exe", "C:/Program Files/Google/Chrome/Application/chrome.exe"];
const browser = browsers.find((candidate) => fs.existsSync(candidate));
if (!browser) throw new Error("Headless browser not found");
const publicRoot = path.resolve("public");
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://127.0.0.1").pathname;
  const target = path.join(publicRoot, pathname === "/" ? "index.html" : pathname);
  if (!target.startsWith(publicRoot) || !fs.existsSync(target)) { res.writeHead(404); res.end("not found"); return; }
  res.writeHead(200, { "content-type": target.endsWith(".css") ? "text/css" : target.endsWith(".js") ? "text/javascript" : "text/html; charset=utf-8" });
  res.end(fs.readFileSync(target));
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const port = server.address().port;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "closed-alpha-edge-"));
fs.mkdirSync("dist", { recursive: true });
const screenshot = path.resolve("dist/web-smoke.png");
try {
  const url = "http://127.0.0.1:" + port + "/";
  const q = (value) => "'" + String(value).replaceAll("'", "''") + "'";
  const ps = "$ErrorActionPreference='Stop'; & " + q(browser) + " --headless=new --disable-gpu --disable-extensions --no-first-run --user-data-dir=" + q(profile) + " --screenshot=" + q(screenshot) + " " + q(url) + " 2>$null; if (!(Test-Path -LiteralPath " + q(screenshot) + ")) { exit 1 }";
  execFileSync("powershell", ["-NoProfile", "-Command", ps], { encoding: "utf8", timeout: 45000, stdio: "ignore" });
  const html = fs.readFileSync(path.join(publicRoot, "index.html"), "utf8");
  const app = fs.readFileSync(path.join(publicRoot, "app.js"), "utf8");
  const shotOk = fs.existsSync(screenshot) && fs.statSync(screenshot).size > 5000;
  if (!shotOk || !html.includes("data-testid=\"result\"") || !app.includes("happy-path")) throw new Error("WebApp smoke failed: blank screenshot or missing scenario source");
  fs.writeFileSync("dist/web-smoke-result.json", JSON.stringify({ result: "passed", nonBlank: true, browser: path.basename(browser), screenshot: "dist/web-smoke.png" }, null, 2) + "\n", "utf8");
  console.log("web-smoke ok");
} finally {
  server.close();
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 250 }); } catch {}
}
