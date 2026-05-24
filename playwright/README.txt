#>npx playwright test example --project=chromium

Running 2 tests using 2 workers
  2 passed (2.9s)

#>npx playwright show-report         

Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.
Project: chromium
24/5/2026, 14.34.32
Total time: 2.9s
example.spec.ts
    has titlechromium
        1.8s
        example.spec.ts:3
    get started linkchromium
        2.2s
        example.spec.ts:10

npx playwright codegen --output tests/sample.spec.ts https://playwright.dev
===========================================================================
see sample.spec.ts

npx playwright test sample --project=chromium
=============================================

Running 1 test using 1 worker
  1 passed (5.4s)

To open last HTML report run:

  npx playwright show-report

npx playwright test --ui
========================
Starts the interactive UI mode.
