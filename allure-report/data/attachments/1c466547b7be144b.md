# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Add to Cart - RoadReady Wheels >> should complete full flow: search -> PDP -> add to cart -> quantity toggle -> checkout -> address
- Location: tests\cart.spec.ts:24:7

# Error details

```
Error: locator.click: Error: strict mode violation: locator('input[role="combobox"][aria-haspopup="listbox"]') resolved to 3 elements:
    1) <input value="" type="search" role="combobox" id="rc_select_27" autocomplete="off" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" aria-owns="rc_select_27_list" aria-controls="rc_select_27_list" class="ant-select-selection-search-input"/> aka locator('#rc_select_27')
    2) <input value="" type="search" role="combobox" id="rc_select_25" autocomplete="off" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" aria-owns="rc_select_25_list" aria-controls="rc_select_25_list" class="ant-select-selection-search-input"/> aka locator('#rc_select_25')
    3) <input value="" type="search" role="combobox" id="rc_select_26" autocomplete="off" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" aria-owns="rc_select_26_list" aria-controls="rc_select_26_list" class="ant-select-selection-search-input"/> aka locator('#rc_select_26')

Call log:
  - waiting for locator('input[role="combobox"][aria-haspopup="listbox"]')

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
                - generic "TCS, raja sharma, w3vvvvvvvvvvvvvv, Mountain View, Kansas 60612 , 9368047877" [ref=e54]
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
                  - generic "Kansas" [ref=e77]
                - textbox "ZIP Code" [ref=e82]: "60612"
              - textbox "Phone number" [ref=e83]: "9368047877"
              - generic [ref=e84]:
                - heading "Enter Billing Address" [level=3] [ref=e85]
                - generic [ref=e86]:
                  - checkbox "Use Shipping Address" [ref=e87]
                  - generic [ref=e88]: Use Shipping Address
                - generic [ref=e89]:
                  - generic [ref=e90]:
                    - textbox "First name" [ref=e91]: rajadddddddddddddddddddddd
                    - textbox "Last name" [ref=e92]: sharmadddddddddddddd
                  - textbox "Address Line 1" [ref=e93]: w3vvvvvvvvvvvvvv
                  - textbox "Address Line 2 (optional)" [ref=e94]
                  - textbox "Company (optional)" [ref=e95]: TCS
                  - generic [ref=e96]:
                    - textbox "City" [ref=e97]: Mountain View
                    - generic [ref=e100]:
                      - combobox [ref=e102]
                      - generic "Kansas" [ref=e103]
                    - textbox "ZIP Code" [ref=e108]: "60612"
                  - textbox "Phone number" [ref=e109]: "9368047877"
                - generic [ref=e111] [cursor=pointer]:
                  - checkbox "Apply sales tax to this order Your account is tax-exempt. Checking this will charge sales tax to this order only. Tax is calculated from your shipping address state when applicable." [ref=e112]
                  - generic [ref=e113]:
                    - generic [ref=e114]: Apply sales tax to this order
                    - generic [ref=e115]: Your account is tax-exempt. Checking this will charge sales tax to this order only. Tax is calculated from your shipping address state when applicable.
              - generic [ref=e116]:
                - button "Return to cart" [ref=e117] [cursor=pointer]
                - button "Continue" [ref=e120] [cursor=pointer]
        - generic [ref=e122]:
          - generic [ref=e123]:
            - heading "Order Summary (3 items)" [level=3] [ref=e124]
            - generic [ref=e125]:
              - generic [ref=e127]:
                - img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [ref=e129]
                - generic [ref=e130]:
                  - paragraph [ref=e131] [cursor=pointer]: 2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim
                  - paragraph [ref=e132]: "SKU: 560-08094"
                - generic [ref=e133]:
                  - paragraph [ref=e134]: $147.15
                  - paragraph [ref=e135]: "Qty: 1"
              - generic [ref=e137]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e139]
                - generic [ref=e140]:
                  - paragraph [ref=e141] [cursor=pointer]: 2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim
                  - paragraph [ref=e142]: "SKU: 560-64127"
                - generic [ref=e143]:
                  - paragraph [ref=e144]: $198.55
                  - paragraph [ref=e145]: "Qty: 2"
            - generic [ref=e146]:
              - generic [ref=e147]: Note:Shipping costs depend on your shipping address and may be recalculated on the next screen for final confirmation.
              - generic [ref=e148]:
                - generic [ref=e149]: Subtotal (3 items))
                - generic [ref=e150]: $544.25
              - generic [ref=e151]:
                - generic [ref=e152] [cursor=pointer]: Apply Promo Code
                - generic [ref=e156]:
                  - textbox "Enter Coupon Code" [ref=e157]
                  - button "Apply" [ref=e158] [cursor=pointer]
              - generic [ref=e159]:
                - generic [ref=e160]: "Total:"
                - generic [ref=e161]: $544.25
          - generic [ref=e163]:
            - heading "NEED HELP?" [level=2] [ref=e164]
            - generic [ref=e165]:
              - generic [ref=e172]:
                - link "HASSLE-FREE RETURNS" [ref=e173] [cursor=pointer]:
                  - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
                - paragraph [ref=e174]: We strive to have the best customer service in the business.
              - generic [ref=e181]:
                - link "FREE SHIPPING" [ref=e182] [cursor=pointer]:
                  - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
                - paragraph [ref=e183]: Free shipping anywhere in the continental United States.
              - generic [ref=e187]:
                - link "1-YEAR WARRANTY" [ref=e188] [cursor=pointer]:
                  - /url: /faq/what-is-your-product-warranty?id=9
                - paragraph [ref=e189]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
              - generic [ref=e194]:
                - link "100% COMPATIBLE" [ref=e195] [cursor=pointer]:
                  - /url: /faq/will-the-wheel-fit-my-vehicle?id=16
                - paragraph [ref=e196]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
      - generic [ref=e197]:
        - heading "Questions? Our team of wheel experts are standing by." [level=3] [ref=e198]
        - generic [ref=e199]:
          - link [ref=e200] [cursor=pointer]:
            - /url: tel:1-888-790-5899
            - paragraph [ref=e204]: 1-888-790-5899
          - link [ref=e205] [cursor=pointer]:
            - /url: mailto:support@roadreadywheels.com
            - paragraph [ref=e210]: support@roadreadywheels.com
          - button [ref=e211] [cursor=pointer]:
            - paragraph [ref=e215]: Live Chat
      - generic [ref=e217]:
        - generic [ref=e218]:
          - heading "Certified & Secured by:" [level=4] [ref=e219]
          - img "Trusted Secure" [ref=e222]
        - generic [ref=e223]:
          - heading "We Accept:" [level=4] [ref=e224]
          - generic [ref=e225]:
            - generic [ref=e226]:
              - img "American Express" [ref=e228]
              - img "Visa" [ref=e230]
              - img "Mastercard" [ref=e232]
              - img "Paypal" [ref=e234]
              - img "Discover" [ref=e236]
              - img "Apple Pay" [ref=e238]
              - img "Affirm" [ref=e240]
            - generic [ref=e241]:
              - img "Amazon Pay" [ref=e243]
              - img "Google Pay" [ref=e245]
    - contentinfo [ref=e246]:
      - generic [ref=e247]:
        - generic [ref=e248]:
          - generic [ref=e249]:
            - heading "Contact Us" [level=3] [ref=e250]
            - generic [ref=e251]:
              - paragraph [ref=e252]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e253] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e254]:
                - text: "Text:"
                - link "217-635-2033" [ref=e255] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e256] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e257]:
              - link "Visit our Facebook page" [ref=e258] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e261] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e262]
              - link "Visit our Instagram page" [ref=e263] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e267] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e271]:
              - img "BBB Accredited" [ref=e273]
              - img "WTC Member" [ref=e275]
          - generic [ref=e276]:
            - heading "Support" [level=3] [ref=e277]
            - generic [ref=e278]:
              - link "Returns and Refunds" [ref=e279] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e280] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e281] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e282] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e283] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e284] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e285] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e286] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e287]:
            - heading "Why Road Ready" [level=3] [ref=e288]
            - generic [ref=e289]:
              - link "About Us" [ref=e290] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e291] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e292]:
            - heading "Divisions" [level=3] [ref=e293]
            - generic [ref=e294]:
              - link "Wholesale" [ref=e295] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e296] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e297]:
          - paragraph [ref=e299]:
            - strong [ref=e300]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e301]:
            - paragraph [ref=e302]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e303]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e304] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  1   | import { Page, Locator } from "playwright/test";
  2   | import BasePage from "./BasePage";
  3   | 
  4   | export default class AddressPage extends BasePage {
  5   |   readonly addressDropdown: Locator;
  6   |   readonly addressOptions: Locator;
  7   |   readonly useShippingAddressCheckbox: Locator;
  8   |   readonly salesTaxCheckbox: Locator;
  9   |   readonly continueButton: Locator;
  10  | 
  11  |   constructor(page: Page) {
  12  |     super(page);
  13  | 
  14  |     // Available Shipping Addresses dropdown
  15  |     this.addressDropdown = page.locator(
  16  |       'input[role="combobox"][aria-haspopup="listbox"]'
  17  |     );
  18  | 
  19  |     // Address options shown after opening dropdown
  20  |     this.addressOptions = page.locator(
  21  |       '.ant-select-item-option'
  22  |     );
  23  | 
  24  |     // "Use Shipping Address" checkbox
  25  |     this.useShippingAddressCheckbox = page.getByText(
  26  |       "Use Shipping Address",
  27  |       { exact: true }
  28  |     ).locator("..").locator('input[type="checkbox"]');
  29  | 
  30  |     // "Apply sales tax to this order" checkbox
  31  |     this.salesTaxCheckbox = page.getByText(
  32  |       "Apply sales tax to this order",
  33  |       { exact: true }
  34  |     ).locator("..").locator('input[type="checkbox"]');
  35  | 
  36  |     // Continue button
  37  |     this.continueButton = page.getByRole("button", {
  38  |       name: "Continue",
  39  |       exact: true,
  40  |     });
  41  |   }
  42  | 
  43  |   /**
  44  |    * Selects a random address from the available address list.
  45  |    */
  46  |   async selectRandomAddress() {
  47  |     // Open address dropdown
> 48  |     await this.addressDropdown.click();
      |                                ^ Error: locator.click: Error: strict mode violation: locator('input[role="combobox"][aria-haspopup="listbox"]') resolved to 3 elements:
  49  | 
  50  |     // Wait for address options
  51  |     await this.addressOptions.first().waitFor({
  52  |       state: "visible",
  53  |     });
  54  | 
  55  |     const count = await this.addressOptions.count();
  56  | 
  57  |     if (count === 0) {
  58  |       throw new Error("No shipping addresses found");
  59  |     }
  60  | 
  61  |     // Generate random index
  62  |     const randomIndex = Math.floor(Math.random() * count);
  63  | 
  64  |     console.log(
  65  |       `Selecting random address: ${randomIndex + 1} of ${count}`
  66  |     );
  67  | 
  68  |     const randomAddress = this.addressOptions.nth(randomIndex);
  69  | 
  70  |     const addressText = await randomAddress.textContent();
  71  | 
  72  |     console.log(
  73  |       "Selected address:",
  74  |       addressText?.trim()
  75  |     );
  76  | 
  77  |     await randomAddress.click();
  78  |   }
  79  | 
  80  |   /**
  81  |    * Selects "Use Shipping Address".
  82  |    */
  83  |   async selectUseShippingAddress() {
  84  |     if (!(await this.useShippingAddressCheckbox.isChecked())) {
  85  |       await this.useShippingAddressCheckbox.check();
  86  |     }
  87  |   }
  88  | 
  89  |   /**
  90  |    * Selects "Apply sales tax to this order".
  91  |    */
  92  |   async selectSalesTax() {
  93  |     if (!(await this.salesTaxCheckbox.isChecked())) {
  94  |       await this.salesTaxCheckbox.check();
  95  |     }
  96  |   }
  97  | 
  98  |   /**
  99  |    * Clicks Continue.
  100 |    */
  101 |   async clickContinue() {
  102 |     await this.continueButton.click();
  103 |   }
  104 | 
  105 |   /**
  106 |    * Complete address page flow.
  107 |    */
  108 |   async completeAddress() {
  109 |     await this.selectRandomAddress();
  110 |     await this.selectUseShippingAddress();
  111 |     await this.selectSalesTax();
  112 |     await this.clickContinue();
  113 |   }
  114 | }
```