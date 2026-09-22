# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should verify shipping, subtotal and total calculation on checkout review
- Location: tests\cart.spec.ts:26:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "https://staging.roadreadywheels.com/checkout/address"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: Checkout - Road Ready Wheels
  - iframe [ref=e3]
  - iframe [ref=e4]:
    - button "Support" [ref=f7e4] [cursor=pointer]
  - generic [ref=e5]:
    - banner [ref=e6]:
      - link "ROADREADY" [ref=e9] [cursor=pointer]:
        - /url: /
    - banner [ref=e11]:
      - generic [ref=e14]:
        - generic [ref=e16]:
          - generic [ref=e17]: "1"
          - generic [ref=e18]: Address
        - generic [ref=e21]:
          - generic [ref=e22]: "2"
          - generic [ref=e23]: Review
        - generic [ref=e26]:
          - generic [ref=e27]: "3"
          - generic [ref=e28]: Payment
    - generic [ref=e29]:
      - generic [ref=e30]:
        - generic [ref=e31]:
          - generic [ref=e33]:
            - heading "Express Checkouts" [level=2] [ref=e35]
            - generic [ref=e36]:
              - generic [ref=e37]:
                - img "Amazon Pay"
                - generic:
                  - generic:
                    - img "AmazonPay"
                - button "Pay with Amazon Pay" [ref=e38] [cursor=pointer]
              - generic [ref=e39]:
                - img "Google Pay"
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - button "Pay with GPay"
                - button "Pay with Google Pay" [ref=e40] [cursor=pointer]
          - generic [ref=e41]:
            - heading "Contact Information" [level=2] [ref=e43]
            - textbox "Email address" [ref=e44]: raja@g.com
          - generic [ref=e45]:
            - heading "Shipping Address" [level=2] [ref=e46]
            - generic [ref=e47]:
              - heading "Available Shipping Addresses" [level=3] [ref=e48]
              - generic [ref=e51]:
                - combobox [ref=e53]
                - generic "TCS, raja sharma, w3vvvvvvvvvvvvvv, Mountain View, California 90012 , 9368047877" [ref=e54]
              - paragraph [ref=e59]: Choose from your saved addresses to auto-fill the form, or select "New Shipping Address" to enter manually.
            - generic [ref=e60]:
              - checkbox "Keep Address for Future Use" [ref=e61]
              - generic [ref=e62]: Keep Address for Future Use
            - generic [ref=e63]:
              - generic [ref=e64]:
                - textbox "First name" [ref=e65]: raja
                - textbox "Last name" [ref=e66]: sharma
              - textbox "Company (optional)" [ref=e67]: TCS
              - textbox "Address Line 1" [ref=e68]: w3vvvvvvvvvvvvvv
              - textbox "Address Line 2 (optional)" [ref=e69]
              - generic [ref=e70]:
                - textbox "City" [ref=e71]: Mountain View
                - generic [ref=e74]:
                  - combobox [ref=e76]
                  - generic "California" [ref=e77]
                - textbox "ZIP Code" [ref=e82]: "90012"
              - textbox "Phone number" [ref=e83]: "9368047877"
              - generic [ref=e84]:
                - heading "Enter Billing Address" [level=3] [ref=e85]
                - generic [ref=e86]:
                  - checkbox "Use Shipping Address" [checked] [ref=e87]
                  - generic [ref=e88]: Use Shipping Address
                - generic [ref=e90] [cursor=pointer]:
                  - checkbox "Apply sales tax to this order Your account is tax-exempt. Checking this will charge sales tax to this order only. Tax is calculated from your shipping address state when applicable." [checked] [ref=e91]
                  - generic [ref=e92]:
                    - generic [ref=e93]: Apply sales tax to this order
                    - generic [ref=e94]: Your account is tax-exempt. Checking this will charge sales tax to this order only. Tax is calculated from your shipping address state when applicable.
              - generic [ref=e95]:
                - button "Return to cart" [ref=e96] [cursor=pointer]
                - button "Continue" [ref=e99] [cursor=pointer]
        - generic [ref=e101]:
          - generic [ref=e102]:
            - heading "Order Summary (2 items)" [level=3] [ref=e103]
            - generic [ref=e106]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e108]
              - generic [ref=e109]:
                - paragraph [ref=e110] [cursor=pointer]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim
                - paragraph [ref=e111]: "SKU: 560-03335B"
              - generic [ref=e112]:
                - paragraph [ref=e113]: $233.58
                - paragraph [ref=e114]: "Qty: 2"
            - generic [ref=e115]:
              - generic [ref=e116]: Note:Shipping costs depend on your shipping address and may be recalculated on the next screen for final confirmation.
              - generic [ref=e117]:
                - generic [ref=e118]: Subtotal (2 items))
                - generic [ref=e119]: $467.16
              - generic [ref=e120]:
                - generic [ref=e121]: Tax
                - generic [ref=e122]: $45.55
              - generic [ref=e123]:
                - generic [ref=e124] [cursor=pointer]: Apply Promo Code
                - generic [ref=e128]:
                  - textbox "Enter Coupon Code" [ref=e129]
                  - button "Apply" [ref=e130] [cursor=pointer]
              - generic [ref=e131]:
                - generic [ref=e132]: "Total:"
                - generic [ref=e133]: $512.71
          - generic [ref=e135]:
            - heading "NEED HELP?" [level=2] [ref=e136]
            - generic [ref=e137]:
              - generic [ref=e144]:
                - link "HASSLE-FREE RETURNS" [ref=e145] [cursor=pointer]:
                  - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
                - paragraph [ref=e146]: We strive to have the best customer service in the business.
              - generic [ref=e153]:
                - link "FREE SHIPPING" [ref=e154] [cursor=pointer]:
                  - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
                - paragraph [ref=e155]: Free shipping anywhere in the continental United States.
              - generic [ref=e159]:
                - link "1-YEAR WARRANTY" [ref=e160] [cursor=pointer]:
                  - /url: /faq/what-is-your-product-warranty?id=9
                - paragraph [ref=e161]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
              - generic [ref=e166]:
                - link "100% COMPATIBLE" [ref=e167] [cursor=pointer]:
                  - /url: /faq/will-the-wheel-fit-my-vehicle?id=16
                - paragraph [ref=e168]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
      - generic [ref=e169]:
        - heading "Questions? Our team of wheel experts are standing by." [level=3] [ref=e170]
        - generic [ref=e171]:
          - link [ref=e172] [cursor=pointer]:
            - /url: tel:1-888-790-5899
            - paragraph [ref=e176]: 1-888-790-5899
          - link [ref=e177] [cursor=pointer]:
            - /url: mailto:support@roadreadywheels.com
            - paragraph [ref=e182]: support@roadreadywheels.com
          - button [ref=e183] [cursor=pointer]:
            - paragraph [ref=e187]: Live Chat
      - generic [ref=e189]:
        - generic [ref=e190]:
          - heading "Certified & Secured by:" [level=4] [ref=e191]
          - img "Trusted Secure" [ref=e194]
        - generic [ref=e195]:
          - heading "We Accept:" [level=4] [ref=e196]
          - generic [ref=e197]:
            - generic [ref=e198]:
              - img "American Express" [ref=e200]
              - img "Visa" [ref=e202]
              - img "Mastercard" [ref=e204]
              - img "Paypal" [ref=e206]
              - img "Discover" [ref=e208]
              - img "Apple Pay" [ref=e210]
              - img "Affirm" [ref=e212]
            - generic [ref=e213]:
              - img "Amazon Pay" [ref=e215]
              - img "Google Pay" [ref=e217]
    - contentinfo [ref=e218]:
      - generic [ref=e219]:
        - generic [ref=e220]:
          - generic [ref=e221]:
            - heading "Contact Us" [level=3] [ref=e222]
            - generic [ref=e223]:
              - paragraph [ref=e224]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e225] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e226]:
                - text: "Text:"
                - link "217-635-2033" [ref=e227] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e228] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e229]:
              - link "Visit our Facebook page" [ref=e230] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e233] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e234]
              - link "Visit our Instagram page" [ref=e235] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e239] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e243]:
              - img "BBB Accredited" [ref=e245]
              - img "WTC Member" [ref=e247]
          - generic [ref=e248]:
            - heading "Support" [level=3] [ref=e249]
            - generic [ref=e250]:
              - link "Returns and Refunds" [ref=e251] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e252] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e253] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e254] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e255] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e256] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e257] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e258] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e259]:
            - heading "Why Road Ready" [level=3] [ref=e260]
            - generic [ref=e261]:
              - link "About Us" [ref=e262] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e263] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e264]:
            - heading "Divisions" [level=3] [ref=e265]
            - generic [ref=e266]:
              - link "Wholesale" [ref=e267] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e268] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e269]:
          - paragraph [ref=e271]:
            - strong [ref=e272]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e273]:
            - paragraph [ref=e274]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e275]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e276] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  52  |           await categoriesPage.clickFirstProduct();
  53  | 
  54  |           await expect(
  55  |             productPage.page
  56  |           ).toHaveURL(/.*\/products\/.*/i);
  57  |         }
  58  |       );
  59  | 
  60  |       // --------------------------------------------------
  61  |       // Get PDP price
  62  |       // --------------------------------------------------
  63  | 
  64  |       await test.step(
  65  |         'Verify PDP price',
  66  |         async () => {
  67  |           const priceText =
  68  |             await productPage.getPriceText();
  69  | 
  70  |           unitPrice = parseFloat(
  71  |             priceText.replace(/[$,]/g, '')
  72  |           );
  73  | 
  74  |           console.log(
  75  |             'Unit price:',
  76  |             unitPrice
  77  |           );
  78  | 
  79  |           expect(priceText).toContain('$');
  80  | 
  81  |           expect(unitPrice).toBeGreaterThan(0);
  82  |         }
  83  |       );
  84  | 
  85  |       // --------------------------------------------------
  86  |       // Add product to cart
  87  |       // --------------------------------------------------
  88  | 
  89  |       await test.step(
  90  |         'Add product to cart',
  91  |         async () => {
  92  |           await productPage.addToCart();
  93  |         }
  94  |       );
  95  | 
  96  |       // --------------------------------------------------
  97  |       // Update quantity dynamically
  98  |       // --------------------------------------------------
  99  | 
  100 |       await test.step(
  101 |         'Update quantity in cart',
  102 |         async () => {
  103 | 
  104 |           const currentQuantity =
  105 |             await cartPage.getQuantity();
  106 | 
  107 |           console.log(
  108 |             'Quantity before toggle:',
  109 |             currentQuantity
  110 |           );
  111 | 
  112 |           await cartPage.toggleQuantity();
  113 | 
  114 |           finalQuantity =
  115 |             await cartPage.getQuantity();
  116 | 
  117 |           console.log(
  118 |             'Quantity after toggle:',
  119 |             finalQuantity
  120 |           );
  121 | 
  122 |           /*
  123 |            * Quantity must change by exactly 1.
  124 |            *
  125 |            * We do NOT expect a hard-coded quantity such
  126 |            * as 2, 3, 4, etc.
  127 |            */
  128 |           expect(
  129 |             Math.abs(
  130 |               finalQuantity - currentQuantity
  131 |             )
  132 |           ).toBe(1);
  133 | 
  134 |           expect(finalQuantity).toBeGreaterThan(0);
  135 |         }
  136 |       );
  137 | 
  138 |       // --------------------------------------------------
  139 |       // Proceed to checkout
  140 |       // --------------------------------------------------
  141 | 
  142 |       await test.step(
  143 |         'Proceed to checkout',
  144 |         async () => {
  145 | 
  146 |           await cartPage.clickCompleteCheckout();
  147 | 
  148 |           await cartPage.page.waitForTimeout(2000);
  149 | 
  150 |           await cartPage.dismissRebillPOModal();
  151 | 
> 152 |           await checkoutReviewPage.page.waitForURL(
      |                                         ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
  153 |             /.*checkout\/review.*/,
  154 |             {
  155 |               timeout: 15000,
  156 |             }
  157 |           );
  158 |         }
  159 |       );
  160 | 
  161 |       // --------------------------------------------------
  162 |       // Complete shipping address
  163 |       // --------------------------------------------------
  164 | 
  165 |       await test.step(
  166 |         'Complete shipping address',
  167 |         async () => {
  168 |           await addressPage.completeAddress();
  169 |         }
  170 |       );
  171 | 
  172 |       // --------------------------------------------------
  173 |       // Verify review page
  174 |       // --------------------------------------------------
  175 | 
  176 |       await test.step(
  177 |         'Reach checkout review page',
  178 |         async () => {
  179 | 
  180 |           await checkoutReviewPage.page.waitForURL(
  181 |             /.*checkout\/review.*/,
  182 |             {
  183 |               timeout: 15000,
  184 |             }
  185 |           );
  186 |         }
  187 |       );
  188 | 
  189 |       // --------------------------------------------------
  190 |       // Select shipping dynamically
  191 |       // --------------------------------------------------
  192 | 
  193 |       await test.step(
  194 |         'Select available shipping option',
  195 |         async () => {
  196 | 
  197 |           await checkoutReviewPage
  198 |             .selectAvailableShippingOption();
  199 | 
  200 |           /*
  201 |            * Give the application time to recalculate
  202 |            * subtotal/tax/shipping/total.
  203 |            */
  204 |           await checkoutReviewPage.page.waitForTimeout(
  205 |             1500
  206 |           );
  207 |         }
  208 |       );
  209 | 
  210 |       // --------------------------------------------------
  211 |       // Validate order calculation
  212 |       // --------------------------------------------------
  213 | 
  214 |       await test.step(
  215 |         'Verify subtotal, shipping, tax and total calculation',
  216 |         async () => {
  217 | 
  218 |           const subtotal =
  219 |             await checkoutReviewPage.getSubtotal();
  220 | 
  221 |           const tax =
  222 |             await checkoutReviewPage.getTax();
  223 | 
  224 |           const shipping =
  225 |             await checkoutReviewPage.getShippingCost();
  226 | 
  227 |           const total =
  228 |             await checkoutReviewPage.getTotal();
  229 | 
  230 |           console.log(
  231 |             `Subtotal: $${subtotal.toFixed(2)}`
  232 |           );
  233 | 
  234 |           console.log(
  235 |             `Tax: $${tax.toFixed(2)}`
  236 |           );
  237 | 
  238 |           console.log(
  239 |             `Shipping: $${shipping.toFixed(2)}`
  240 |           );
  241 | 
  242 |           console.log(
  243 |             `Total: $${total.toFixed(2)}`
  244 |           );
  245 | 
  246 |           // --------------------------------------------
  247 |           // Expected subtotal
  248 |           // --------------------------------------------
  249 | 
  250 |           const expectedSubtotal =
  251 |             Number(
  252 |               (
```