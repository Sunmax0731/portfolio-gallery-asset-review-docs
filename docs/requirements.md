# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 75 |
| Domain | WebApp |
| Idea No. | 4 |
| Repository | portfolio-gallery-asset-review-docs |
| 主な公開先 | GitHub Pages / GitHub Release |

## 背景

制作物、販売素材、レビュー、公開Docsが分かれ、更新漏れや再利用漏れが起きやすい。

## 目的

画像、生成物、BOOTH商品、素材CRM、3D/Blender/Unity素材レビュー、Markdown公開ドキュメントをまとめる。

## 必須要件

- gallery entry を複数件まとめて検証できる。
- required fields: `id`, `title`, `assetPath`, `reviewStatus`, `publicDoc`, `owner`。
- warning field: `thumbnailPath`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
