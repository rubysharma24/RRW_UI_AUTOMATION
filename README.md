# RoadReady Wheels – Playwright + TypeScript Automation Framework

Page Object Model (POM) based framework. Login flow ke saath ready hai,
future me kisi bhi naye flow (search, cart, checkout, etc.) ke liye
scalable structure.

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
```

---

## THE PART YOU ASKED FOR: "Aage kya kaha add karna hai"

Yahi cheez hai jo is framework ko maintain karna easy banati hai — har
cheez ki apni fixed jagah hai. Neeche ek **decision table** hai: jab bhi
naya test case ya feature aaye, bas apne aap se ye 3 sawal pucho.

| Tumhe kya chahiye? | Kaha add karoge? |
|---|---|
| Ek naya UI element (button, input, link) kisi existing page pe | Us page ke POM file me (e.g. `pages/LoginPage.ts`) — pehle `readonly` locator declare karo, phir constructor me define karo |
| Us element pe ek naya action (click/fill/toggle) | Same POM file me ek naya method banao, jaise `async clickX() {...}` |
| Bilkul naya page (Cart, Checkout, Profile, Search Results) | `pages/` me naya file banao — `BasePage` extend karo, `HomePage.ts` jaisa pattern follow karo |
| Naya page object test me directly use karna | `fixtures/pageFixtures.ts` me ek entry add karo (Fixtures type + extend block) — phir test me sirf destructure karke use hoga, `new` karne ki zarurat nahi |
| Naya test case (existing flow ke andar, jaise login) | `tests/login.spec.ts` me `test.describe` ke andar ek naya `test('...', async ({ homePage, loginPage }) => {...})` block |
| Bilkul naya flow/feature (jaise search, checkout) | Naya spec file: `tests/search.spec.ts` — purane spec file ko mat badhao |
| Naya static data (email, password, expected error message) | `test-data/` me relevant `.data.ts` file me export karo, test me import karo |
| Koi generic helper function (date format, random string) jo kisi ek page se bandha nahi hai | `utils/helpers.ts` |

### Golden Rules (isse hamesha follow karo)

1. **Test file me kabhi locator mat likho.** Test file sirf readable
   "story" honi chahiye: `homePage.goToLogin()`, `loginPage.login(email, password)`.
   Locator/CSS/XPath sirf Page Object file me rehta hai.
2. **Ek flow = ek spec file.** Login ke tests `login.spec.ts` me, cart ke
   `cart.spec.ts` me. Isse merge conflicts kam hote hain jab team parallel
   kaam kare.
3. **Hardcoded data mat likho.** Chahe email ho ya expected text — sab
   `test-data/*.data.ts` me jaaye.
4. **BasePage me sirf generic cheez.** Agar method sirf ek page pe use
   ho raha hai, wo us page ke apne POM file me jaana chahiye, BasePage
   me nahi.
5. **Naya POM banate waqt purane ko copy-paste karo (jaise LoginPage.ts)**
   — sirf locators/methods badlo, class structure same rakho. Isse
   pura team ek hi pattern follow karta hai.

### Example: Agar kal "Create Account" test case add karna ho

1. `pages/LoginPage.ts` me already `createAccountTab` locator hai —
   agar create-account form ke fields chahiye (naam, email, confirm
   password), to ya to isi file me add karo (agar same page/tab pe
   form khulta hai) ya `pages/CreateAccountPage.ts` naya file banao
   (agar alag route/page hai).
2. `fixtures/pageFixtures.ts` me `createAccountPage` fixture add karo
   (agar naya file banaya).
3. `test-data/` me `createAccount.data.ts` banao naam/email/password ke
   saath.
4. `tests/createAccount.spec.ts` naya file banao aur wahi pattern use
   karo jo `login.spec.ts` me hai.

Bas — is table ko follow karoge to kabhi confuse nahi hoge ki "ye code
kaha jayega". Jab bhi tumhe agla test case chahiye ho, mujhe bata dena
ki feature/flow kya hai, main tumhe exactly bata dunga "is file me ye
add karo" — pura code copy-paste karne ki zarurat nahi padegi.
