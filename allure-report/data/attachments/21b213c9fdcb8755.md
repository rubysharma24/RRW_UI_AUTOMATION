# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation
- Location: tests\cart.spec.ts:28:7

# Error details

```
Error: OAuth token request failed: 401 {"error":"invalid_client","error_description":"Client authentication failed due to unknown client, no client authentication included, or unsupported authentication method."}

expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: Order Confirmation - Road Ready Wheels
  - iframe [ref=e3]
  - iframe [ref=e4]:
    - button "Support" [ref=f7e4] [cursor=pointer]
  - generic [ref=e5]:
    - banner [ref=e6]:
      - generic [ref=e9]:
        - link "ROADREADY" [ref=e10] [cursor=pointer]:
          - /url: /
        - generic [ref=e13]:
          - combobox "Search category" [ref=e15] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=e17]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=e18]
        - generic [ref=e19]:
          - generic [ref=e20]:
            - button "Resale" [ref=e23] [cursor=pointer]
            - button "Wholesale" [ref=e25] [cursor=pointer]
          - button "Select State" [ref=e28] [cursor=pointer]
          - generic [ref=e35]: "|"
          - button [ref=e37] [cursor=pointer]
          - generic [ref=e43]: "|"
          - button "Cart is empty" [disabled] [ref=e44]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=e49]:
      - generic [ref=e51]:
        - generic [ref=e52]:
          - heading "Thank You For Your Order" [level=1] [ref=e53]
          - paragraph [ref=e55]: Please keep the order number for your reference.
          - generic [ref=e56]:
            - generic [ref=e57]:
              - generic [ref=e58]: "Order Number:"
              - text: R011782054
            - generic [ref=e59]:
              - generic [ref=e60]: "Order Date:"
              - text: 09/17/26
            - generic [ref=e61]:
              - generic [ref=e62]: "Customer Email:"
              - text: raja@g.com
          - generic [ref=e63]:
            - paragraph [ref=e64]: Would you like to send this order confirmation to anyone else? Please input the additional email address below and click SEND.
            - generic [ref=e65]:
              - textbox "Enter email" [ref=e66]
              - button "SEND" [ref=e67] [cursor=pointer]
        - generic [ref=e68]:
          - heading "Order Summary For Your Reference" [level=3] [ref=e69]
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72]: Subtotal (2)
              - generic [ref=e73]: $467.16
            - generic [ref=e74]:
              - generic [ref=e75]: Shipping (Ground Shipping (FREE))
              - generic [ref=e78]: $0.00
            - generic [ref=e79]:
              - generic [ref=e80]: Tax
              - generic [ref=e81]: $45.55
            - generic [ref=e82]:
              - generic [ref=e83]: Discount
              - generic [ref=e84]: $0.00
            - generic [ref=e86]:
              - generic [ref=e87]: Total
              - generic [ref=e88]: $512.71
          - button "VIEW CONTENTS OF ORDER" [ref=e89] [cursor=pointer]
          - button "PRINT" [ref=e90] [cursor=pointer]
      - generic [ref=e95]:
        - generic [ref=e96]:
          - heading "Important Order Information" [level=2] [ref=e98]
          - generic [ref=e99]:
            - paragraph [ref=e100]: PLEASE CONFIRM THE FOLLOWING INFORMATION
            - generic [ref=e101]:
              - generic [ref=e102]: "Rim Size Ordered: 16\""
              - generic [ref=e103]: "Mandatory Tire Size For Exact Fitment: 16\""
            - generic [ref=e104]:
              - generic [ref=e105]:
                - paragraph [ref=e106]: "Example: Look For The Two Numbers Immediately Following R."
                - paragraph [ref=e107]: You Dont Need Complete Or Exact Purchase
              - img "16\" Rim illustration" [ref=e110]
            - paragraph [ref=e111]: Still unsure? Click the button below to send a help request to a wheel expert.
            - button "HELP PLEASE" [ref=e112] [cursor=pointer]
        - generic [ref=e113]:
          - heading "Shipping Information" [level=2] [ref=e115]
          - generic [ref=e116]:
            - generic [ref=e117]:
              - paragraph [ref=e118]: raja sharma
              - paragraph [ref=e119]: TCS
              - paragraph [ref=e120]: w3vvvvvvvvvvvvvv
              - paragraph [ref=e121]: Mountain View California 90012
              - paragraph [ref=e122]: United States
              - paragraph [ref=e123]: "Phone: 9368047877"
            - paragraph [ref=e125]: "Shipping Cost: $0.00"
            - generic [ref=e126]:
              - paragraph [ref=e127]: "Estimated Ship Date: Thursday, September 17th"
              - paragraph [ref=e128]: "Estimated Delivery Date: Wednesday, September 23rd - Thursday, September 24th"
        - generic [ref=e129]:
          - heading "Billing Information" [level=2] [ref=e131]
          - generic [ref=e132]:
            - generic [ref=e133]:
              - paragraph [ref=e134]: raja sharma
              - paragraph [ref=e135]: TCS
              - paragraph [ref=e136]: w3vvvvvvvvvvvvvv
              - paragraph [ref=e137]: Mountain View California 90012
              - paragraph [ref=e138]: United States
              - paragraph [ref=e139]: "Phone: 9368047877"
            - generic [ref=e144]:
              - paragraph [ref=e145]: Payment Method
              - paragraph [ref=e146]: Charge Order
      - generic [ref=e147]:
        - generic [ref=e148]:
          - heading "Customer Support Portal" [level=2] [ref=e150]
          - generic [ref=e151]:
            - list [ref=e152]:
              - listitem [ref=e153]:
                - paragraph [ref=e154]: Do you need to cancel this order?
              - listitem [ref=e155]:
                - paragraph [ref=e156]: Do you need to change this order?
              - listitem [ref=e157]:
                - paragraph [ref=e158]: Do you need to change your shipping information?
              - listitem [ref=e159]:
                - paragraph [ref=e160]: Any other questions?
            - button "SEND REQUEST" [ref=e162] [cursor=pointer]
        - generic [ref=e163]:
          - heading "FAQ Portal" [level=2] [ref=e165]
          - generic [ref=e166]:
            - link "Return Policy" [ref=e167] [cursor=pointer]:
              - /url: /faq
            - link "How Long Does It Take To Ship To Me" [ref=e168] [cursor=pointer]:
              - /url: /faq
            - link "Warranty Policy" [ref=e169] [cursor=pointer]:
              - /url: /faq
            - link "What Comes With My Wheel" [ref=e170] [cursor=pointer]:
              - /url: /faq
    - contentinfo [ref=e171]:
      - generic [ref=e172]:
        - generic [ref=e173]:
          - generic [ref=e174]:
            - heading "Contact Us" [level=3] [ref=e175]
            - generic [ref=e176]:
              - paragraph [ref=e177]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e178] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e179]:
                - text: "Text:"
                - link "217-635-2033" [ref=e180] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e181] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e182]:
              - link "Visit our Facebook page" [ref=e183] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e186] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e187]
              - link "Visit our Instagram page" [ref=e188] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e192] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e196]:
              - img "BBB Accredited" [ref=e198]
              - img "WTC Member" [ref=e200]
          - generic [ref=e201]:
            - heading "Support" [level=3] [ref=e202]
            - generic [ref=e203]:
              - link "Returns and Refunds" [ref=e204] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e205] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e206] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e207] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e208] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e209] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e210] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e211] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e212]:
            - heading "Why Road Ready" [level=3] [ref=e213]
            - generic [ref=e214]:
              - link "About Us" [ref=e215] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e216] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e217]:
            - heading "Divisions" [level=3] [ref=e218]
            - generic [ref=e219]:
              - link "Wholesale" [ref=e220] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e221] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e222]:
          - paragraph [ref=e224]:
            - strong [ref=e225]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e226]:
            - paragraph [ref=e227]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e228]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e229] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  1  | import { APIRequestContext, expect } from '@playwright/test';
  2  | 
  3  | // Staging Storefront API — hitting this directly after checkout is more
  4  | // reliable than re-scraping the confirmation page's DOM: it reads the
  5  | // actual persisted order record instead of racing async-rendered text.
  6  | const API_BASE_URL = 'https://stagingapi.roadreadywheels.com';
  7  | 
  8  | interface OrderAttributes {
  9  |   number: string;
  10 |   email: string;
  11 |   item_total: string;
  12 |   tax_total: string;
  13 |   ship_total: string;
  14 |   promo_total: string;
  15 |   total: string;
  16 |   state: string;
  17 | }
  18 | 
  19 | interface OrderApiResponse {
  20 |   data: {
  21 |     attributes: OrderAttributes;
  22 |   };
  23 | }
  24 | 
  25 | /**
  26 |  * Spree's Storefront API password grant. This staging setup's OAuth app
  27 |  * doesn't require a separate client_id/client_secret — logging in with
  28 |  * just email + password returns a usable access_token — so those are
  29 |  * optional here (env-overridable if your setup ever does need them),
  30 |  * instead of hard-failing when they're unset.
  31 |  */
  32 | export async function getOAuthToken(
  33 |   request: APIRequestContext,
  34 |   email: string,
  35 |   password: string
  36 | ): Promise<string> {
  37 |   const response = await request.post(`${API_BASE_URL}/spree_oauth/token`, {
  38 |     data: {
  39 |       grant_type: 'password',
  40 |       username: email,
  41 |       password: password,
  42 |       client_id: process.env.SPREE_API_CLIENT_ID ?? '',
  43 |       client_secret: process.env.SPREE_API_CLIENT_SECRET ?? '',
  44 |     },
  45 |   });
  46 | 
  47 |   expect(
  48 |     response.ok(),
  49 |     `OAuth token request failed: ${response.status()} ${await response.text()}`
> 50 |   ).toBeTruthy();
     |     ^ Error: OAuth token request failed: 401 {"error":"invalid_client","error_description":"Client authentication failed due to unknown client, no client authentication included, or unsupported authentication method."}
  51 | 
  52 |   const body = await response.json();
  53 |   return body.access_token as string;
  54 | }
  55 | 
  56 | export async function getOrderByNumber(
  57 |   request: APIRequestContext,
  58 |   orderNumber: string,
  59 |   accessToken: string
  60 | ): Promise<OrderAttributes> {
  61 |   const response = await request.get(
  62 |     `${API_BASE_URL}/api/v2/storefront/account/orders/${orderNumber}`,
  63 |     {
  64 |       headers: {
  65 |         Authorization: `Bearer ${accessToken}`,
  66 |       },
  67 |     }
  68 |   );
  69 | 
  70 |   expect(
  71 |     response.ok(),
  72 |     `Order API request failed: ${response.status()} ${await response.text()}`
  73 |   ).toBeTruthy();
  74 | 
  75 |   const body = (await response.json()) as OrderApiResponse;
  76 |   return body.data.attributes;
  77 | }
```