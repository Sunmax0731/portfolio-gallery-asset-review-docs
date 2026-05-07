# 制作物ギャラリー・素材レビュー・公開Docs

画像、生成物、BOOTH商品、素材CRM、3D/Blender/Unity素材レビュー、Markdown公開ドキュメントをまとめる。

| 項目 | 内容 |
| --- | --- |
| Rank | 75 |
| Domain | WebApp |
| Idea No. | 4 |
| Repository | portfolio-gallery-asset-review-docs |
| 主な公開先 | GitHub Pages / GitHub Release |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: UI/レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/cli.mjs`: CLI。
- `public/`: 静的WebApp。

## Validation

`npm test` で代表シナリオ、QCDS、docs ZIP、文字化け、WebApp非blank表示を検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
