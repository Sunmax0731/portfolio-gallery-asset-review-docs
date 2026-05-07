export const productProfile = {
  "repository": "portfolio-gallery-asset-review-docs",
  "title": "制作物ギャラリー・素材レビュー・公開Docs",
  "domain": "WebApp",
  "hostApp": null,
  "rank": 75,
  "tier": "P2",
  "ideaNo": 4,
  "overview": "画像、生成物、BOOTH商品、素材CRM、3D/Blender/Unity素材レビュー、Markdown公開ドキュメントをまとめる。",
  "problem": "制作物、販売素材、レビュー、公開Docsが分かれ、更新漏れや再利用漏れが起きやすい。",
  "differentiation": "制作物の見た目、販売情報、レビュー、公開文書を同じWeb管理画面で扱う。",
  "publish": "GitHub Pages / GitHub Release",
  "surface": "Static WebApp + CLI validation core",
  "entity": "gallery entry",
  "requiredFields": [
    "id",
    "title",
    "assetPath",
    "reviewStatus",
    "publicDoc",
    "owner"
  ],
  "warningField": "thumbnailPath",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
