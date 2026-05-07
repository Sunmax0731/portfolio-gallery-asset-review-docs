# SKILL

## Start Order

1. README.md を読む。
2. docs/requirements.md、docs/specification.md、docs/design.md を確認する。
3. samples/representative-suite.json と src/product-profile.mjs を合わせる。
4. npm test を実行する。

## Release

`gh release create v0.1.0-alpha.1 --prerelease --latest=false` を使う。Release本文は docs/releases/v0.1.0-alpha.1.md。
## Line Ending Stability

- `.gitattributes` を維持し、docs ZIP 再生成時に改行だけの差分を固定評価根拠にしない。
- PowerShell で内容確認する場合は `Get-Content -Encoding UTF8` を使う。
