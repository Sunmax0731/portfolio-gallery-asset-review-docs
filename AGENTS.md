# AGENTS

portfolio-gallery-asset-review-docs は Rank 75 の WebApp プロダクトです。作業はこのリポジトリ内に限定します。

## Scope

- Repository: D:/AI/WebApp/portfolio-gallery-asset-review-docs
- GitHub: https://github.com/Sunmax0731/portfolio-gallery-asset-review-docs
- Release branch: `codex/closed-alpha-release` を1本だけ使い、完了後は local/remote とも残さない。
- Manual test: ユーザー実施。Codex側では未実施として記録する。

## Remote QCDS Benchmark Rules

- QCDS は Quality、Cost、Delivery、Satisfaction。
- 手動テスト未実施のため Codex単独評価の最高値は `S-`。
- ZIPサイズ、生成時刻、絶対一時パスは固定評価根拠にしない。
- 代表シナリオは `happy-path`、`missing-required`、`warning`、`mixed-batch` を維持する。
## Line Ending Stability

- Git の LF/CRLF 警告を避けるため `.gitattributes` で Markdown / JSON / JS / HTML / CSS / C# / TS / TSX / Python / PowerShell を LF に固定する。
- 改行だけの差分が出た場合は、機能変更と分けて `git add --renormalize .` の結果を確認してから扱う。
