# RoadReady Wheels – Playwright + TypeScript Automation Framework

## Folder Structure

```
roadready-playwright/
├── pages/                  # Page Objects (locators + actions, NO assertions of business logic)
│   ├── BasePage.ts         # Common reusable methods (click, fill, expectVisible...)
│   ├── HomePage.ts         # Home page ("/") locators & actions
│   └── LoginPage.ts        # Login page ("/login") locators & actions
├── fixtures/
│   └── pageFixtures.ts     # Custom test fixture — auto-injects Page Objects into tests
├── test-data/
│   └── login.data.ts       # Static test data (emails, passwords, expected messages)
├── utils/
│   └── helpers.ts          # Generic, page-independent helper functions
├── tests/
│   └── login.spec.ts       # Actual test cases (one file per feature/flow)
├── playwright.config.ts    # Global config (baseURL, browsers, timeouts, reporters)
├── .env.example            # Copy to .env for local secrets (never commit .env)
└── .github/workflows/      # CI pipeline (GitHub Actions)
```

## Setup

```bash
npm install
npx playwright install
cp .env.example .env   # fill in real staging credentials
```

## Run tests

```bash
npm test                  # all tests, headless
npm run test:headed       # see the browser
npm run test:ui           # Playwright's interactive UI mode (best for debugging)
npm run test:login        # only login.spec.ts
npm run report            # open last HTML report

