# Traceability Matrix

| Requirement | Implementation | Test | Docs | Evidence |
| --- | --- | --- | --- | --- |
| 必須項目検査 | src/validators.mjs | tests/core.test.mjs | docs/specification.md | docs/release-evidence.json |
| warning検査 | src/validators.mjs | tests/representative-suite.test.mjs | docs/test-plan.md | docs/qcds-strict-metrics.json |
| docs ZIP | tools/package-docs.mjs | npm test | docs/release-checklist.md | dist/portfolio-gallery-asset-review-docs-docs.zip |
| 手動テスト分離 | docs/manual-test.md | docs/strict-manual-test-addendum.md | docs/manual-test.md | GitHub prerelease assets |
