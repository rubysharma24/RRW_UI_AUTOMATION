# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Add to Cart - RoadReady Wheels >> should complete full flow: search -> PDP -> add to cart -> quantity toggle -> checkout
- Location: tests\cart.spec.ts:19:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('div.fixed.inset-0[class*="z-[1000]"]').getByRole('button', { name: /Decrease quantity/i }).first()
    - locator resolved to <button aria-label="Decrease quantity of 2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" class="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <path d="M5 12h14"></path> from <div class="fixed inset-0 z-[1000] overflow-hidden transition-opacity duration-300 opacity-100 pointer-events-auto">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <path d="M5 12h14"></path> from <div class="fixed inset-0 z-[1000] overflow-hidden transition-opacity duration-300 opacity-100 pointer-events-auto">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="p-4 border-b">…</div> from <div class="fixed inset-0 z-[1000] overflow-hidden transition-opacity duration-300 opacity-100 pointer-events-auto">…</div> subtree intercepts pointer events
  4 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <path d="M5 12h14"></path> from <div class="fixed inset-0 z-[1000] overflow-hidden transition-opacity duration-300 opacity-100 pointer-events-auto">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <path d="M5 12h14"></path> from <div class="fixed inset-0 z-[1000] overflow-hidden transition-opacity duration-300 opacity-100 pointer-events-auto">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="p-4 border-b">…</div> from <div class="fixed inset-0 z-[1000] overflow-hidden transition-opacity duration-300 opacity-100 pointer-events-auto">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="p-4 border-b">…</div> from <div class="fixed inset-0 z-[1000] overflow-hidden transition-opacity duration-300 opacity-100 pointer-events-auto">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <path d="M5 12h14"></path> from <div class="fixed inset-0 z-[1000] overflow-hidden transition-opacity duration-300 opacity-100 pointer-events-auto">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: 2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim - Road Ready Wheels
  - iframe [ref=e3]
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e8]:
        - link "ROADREADY" [ref=e9] [cursor=pointer]:
          - /url: /
        - generic [ref=e12]:
          - combobox "Search category" [ref=e14] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=e16]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=e17]
        - generic [ref=e18]:
          - generic [ref=e19]:
            - button "Resale" [ref=e22] [cursor=pointer]
            - button "Wholesale" [ref=e24] [cursor=pointer]
          - button "Select State" [ref=e27] [cursor=pointer]
          - generic [ref=e34]: "|"
          - button [ref=e36] [cursor=pointer]
          - generic [ref=e42]: "|"
          - button "Open cart" [ref=e43] [cursor=pointer]:
            - generic [ref=e48]: "5"
    - generic [ref=e51]:
      - generic [ref=e52]:
        - heading "Your Cart (5 items)" [level=2] [ref=e53]
        - button "Close cart" [ref=e54] [cursor=pointer]
      - generic [ref=e59]:
        - generic [ref=e60] [cursor=pointer]:
          - checkbox "E-Mail Shopping Cart To Me" [ref=e61]
          - text: E-Mail Shopping Cart To Me
        - generic [ref=e62]:
          - textbox "Enter your email" [ref=e63]
          - button "Send Email" [ref=e64] [cursor=pointer]
      - generic [ref=e65]:
        - generic [ref=e69]:
          - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e71]
          - generic [ref=e72]:
            - generic [ref=e73]:
              - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=4] [ref=e74] [cursor=pointer]
              - button "Remove 2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim from cart" [ref=e75] [cursor=pointer]
            - paragraph [ref=e79]: "SKU: 560-64127"
            - generic [ref=e80]:
              - generic [ref=e81]:
                - button "Decrease quantity of 2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e82] [cursor=pointer]
                - generic [ref=e84]: "5"
                - button "Increase quantity of 2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e85] [cursor=pointer]
              - generic [ref=e87]: $198.55
        - generic [ref=e88]:
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e91]: Subtotal (5 items)
              - generic [ref=e92]: $992.75
            - button "Shipping Select State" [ref=e94] [cursor=pointer]:
              - generic [ref=e95]: Shipping
              - button "Select State" [ref=e100]
            - generic [ref=e101]:
              - generic [ref=e102]: Total
              - generic [ref=e103]: $992.75
          - generic [ref=e104]:
            - paragraph [ref=e105]: Express Checkouts
            - generic [ref=e106]:
              - generic [ref=e107]:
                - img "Amazon Pay"
                - generic:
                  - generic:
                    - img "AmazonPay"
                - button "Pay with Amazon Pay" [ref=e108] [cursor=pointer]
              - generic [ref=e109]:
                - img "Google Pay"
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - button "Pay with GPay"
                - button "Pay with Google Pay" [ref=e110] [cursor=pointer]
          - button "Complete Checkout" [ref=e112] [cursor=pointer]
          - generic [ref=e113]:
            - img "American Express" [ref=e115]
            - img "Visa" [ref=e117]
            - img "Mastercard" [ref=e119]
            - img "PayPal" [ref=e121]
            - img "Discover" [ref=e123]
            - img "Apple Pay" [ref=e125]
            - img "Affirm" [ref=e127]
          - separator [ref=e128]
          - generic [ref=e129]:
            - paragraph [ref=e130]: Questions?
            - generic [ref=e131]:
              - link [ref=e132] [cursor=pointer]:
                - /url: tel:1-888-790-5899
              - link [ref=e136] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
              - button "Open live chat" [ref=e141] [cursor=pointer]
          - generic [ref=e145]:
            - paragraph [ref=e146]: Awesomely Secured 🔒
            - img "Trusted Secure" [ref=e148]
    - banner [ref=e149]:
      - generic [ref=e153]:
        - generic [ref=e154]:
          - generic [ref=e155]: Browse By Vehicle
          - generic "Select Make" [ref=e156] [cursor=pointer]:
            - generic [ref=e158]:
              - combobox "Select Make" [ref=e160]
              - generic: Select Make
          - generic "Select Model" [ref=e161] [cursor=pointer]:
            - generic [ref=e163]:
              - combobox "Select Model" [disabled] [ref=e165]
              - generic: Select Model
          - generic "Select Year" [ref=e166] [cursor=pointer]:
            - generic [ref=e168]:
              - combobox "Select Year" [disabled] [ref=e170]
              - generic: Select Year
          - button "Search" [ref=e171] [cursor=pointer]
        - generic [ref=e172]:
          - generic [ref=e173]: Browse All Wheels
          - generic [ref=e174]:
            - button "By Category" [ref=e175] [cursor=pointer]
            - button "Top Brands" [ref=e176] [cursor=pointer]
            - button "Featured Items" [ref=e177] [cursor=pointer]
    - generic [ref=e180]:
      - generic [ref=e181]:
        - heading "Your Cart (5 items)" [level=2] [ref=e182]
        - button "Close cart" [ref=e183] [cursor=pointer]
      - generic [ref=e188]:
        - generic [ref=e189] [cursor=pointer]:
          - checkbox "E-Mail Shopping Cart To Me" [ref=e190]
          - text: E-Mail Shopping Cart To Me
        - generic [ref=e191]:
          - textbox "Enter your email" [ref=e192]
          - button "Send Email" [ref=e193] [cursor=pointer]
      - generic [ref=e194]:
        - generic [ref=e198]:
          - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e200]
          - generic [ref=e201]:
            - generic [ref=e202]:
              - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=4] [ref=e203] [cursor=pointer]
              - button "Remove 2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim from cart" [ref=e204] [cursor=pointer]
            - paragraph [ref=e208]: "SKU: 560-64127"
            - generic [ref=e209]:
              - generic [ref=e210]:
                - button "Decrease quantity of 2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e211] [cursor=pointer]
                - generic [ref=e213]: "5"
                - button "Increase quantity of 2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e214] [cursor=pointer]
              - generic [ref=e216]: $198.55
        - generic [ref=e217]:
          - generic [ref=e218]:
            - generic [ref=e219]:
              - generic [ref=e220]: Subtotal (5 items)
              - generic [ref=e221]: $992.75
            - button "Shipping Select State" [ref=e223] [cursor=pointer]:
              - generic [ref=e224]: Shipping
              - button "Select State" [ref=e229]
            - generic [ref=e230]:
              - generic [ref=e231]: Total
              - generic [ref=e232]: $992.75
          - generic [ref=e233]:
            - paragraph [ref=e234]: Express Checkouts
            - generic [ref=e235]:
              - generic [ref=e236]:
                - img "Amazon Pay"
                - generic:
                  - generic:
                    - img "AmazonPay"
                - button "Pay with Amazon Pay" [ref=e237] [cursor=pointer]
              - generic [ref=e238]:
                - img "Google Pay"
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - button "Pay with GPay"
                - button "Pay with Google Pay" [ref=e239] [cursor=pointer]
          - button "Complete Checkout" [ref=e241] [cursor=pointer]
          - generic [ref=e242]:
            - img "American Express" [ref=e244]
            - img "Visa" [ref=e246]
            - img "Mastercard" [ref=e248]
            - img "PayPal" [ref=e250]
            - img "Discover" [ref=e252]
            - img "Apple Pay" [ref=e254]
            - img "Affirm" [ref=e256]
          - separator [ref=e257]
          - generic [ref=e258]:
            - paragraph [ref=e259]: Questions?
            - generic [ref=e260]:
              - link [ref=e261] [cursor=pointer]:
                - /url: tel:1-888-790-5899
              - link [ref=e265] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
              - button "Open live chat" [ref=e270] [cursor=pointer]
          - generic [ref=e274]:
            - paragraph [ref=e275]: Awesomely Secured 🔒
            - img "Trusted Secure" [ref=e277]
    - generic [ref=e280]:
      - paragraph [ref=e282]: 2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim
      - generic [ref=e283]:
        - generic [ref=e284]:
          - generic [ref=e285]: $198.55
          - generic [ref=e287]: $579.00
        - button "Add To Cart" [ref=e288] [cursor=pointer]
    - generic [ref=e294]:
      - navigation [ref=e295]:
        - button "Honda" [ref=e296] [cursor=pointer]
        - generic [ref=e297]: ">"
        - button "Accord" [ref=e298] [cursor=pointer]
        - generic [ref=e299]: ">"
        - generic [ref=e300]: 2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim
      - generic [ref=e301]:
        - generic [ref=e302]:
          - generic [ref=e303]:
            - generic [ref=e304]:
              - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=e306]
              - button [ref=e307] [cursor=pointer]
              - button [ref=e310] [cursor=pointer]
            - generic:
              - generic [ref=e314]:
                - generic [ref=e315]: Top Trending Honda
                - button "Show 2 more top seller titles" [ref=e316] [cursor=pointer]: "+2"
              - generic: 6,555 All-Time Units Sold
            - generic [ref=e317]:
              - button [disabled] [ref=e318]
              - generic [ref=e321]:
                - button [ref=e322] [cursor=pointer]:
                  - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim view 1" [ref=e324]
                - button [ref=e325] [cursor=pointer]:
                  - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim view 2" [ref=e327]
                - button [ref=e328] [cursor=pointer]:
                  - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim view 3" [ref=e330]
                - button [ref=e331] [cursor=pointer]:
                  - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim view 4" [ref=e333]
                - button [ref=e334] [cursor=pointer]:
                  - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim view 5" [ref=e336]
                - button [ref=e337] [cursor=pointer]:
                  - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim view 6" [ref=e339]
                - button [ref=e340] [cursor=pointer]:
                  - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim view 7" [ref=e342]
                - button [ref=e343] [cursor=pointer]:
                  - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim view 8" [ref=e345]
                - button [ref=e346] [cursor=pointer]:
                  - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim view 9" [ref=e348]
              - button [ref=e349] [cursor=pointer]
          - table [ref=e353]:
            - rowgroup [ref=e354]:
              - row [ref=e355]:
                - cell "Condition" [ref=e356]
                - cell "New" [ref=e357]
              - row [ref=e358]:
                - cell "Brand" [ref=e359]
                - cell "Road Ready" [ref=e360]
              - row [ref=e361]:
                - cell "Hollander" [ref=e362]
                - cell "560-64127" [ref=e363]
              - row [ref=e364]:
                - cell "OEM Part Number(s)" [ref=e365]
                - cell "42700TVAA94, 42700TVAA93, 42800TVCAE0" [ref=e366]
              - row [ref=e367]:
                - cell "Vehicle Fitment" [ref=e368]
                - cell "Honda Accord" [ref=e369]
              - row [ref=e370]:
                - cell "Type" [ref=e371]
                - cell "OEM Replacement Wheel" [ref=e372]
              - row [ref=e373]:
                - cell "Material" [ref=e374]
                - cell "Alloy" [ref=e375]
              - row [ref=e376]:
                - cell "Years of fitment" [ref=e377]
                - cell "2018, 2019, 2020, 2021, 2022" [ref=e378]
              - row [ref=e379]:
                - cell "Diameter" [ref=e380]
                - cell "19\"" [ref=e381]
              - row [ref=e382]:
                - cell "Width" [ref=e383]
                - cell "8.5\"" [ref=e384]
              - row [ref=e385]:
                - cell "Gross Weight" [ref=e386]
                - cell "33.7" [ref=e387]
              - row [ref=e388]:
                - cell "Color" [ref=e389]
                - cell "Black" [ref=e390]
              - row [ref=e391]:
                - cell "Bolt Pattern" [ref=e392]
                - cell "5x114.3mm or 5x4.5\"" [ref=e393]
              - row [ref=e394]:
                - cell "Offset" [ref=e395]
                - cell "50 mm" [ref=e396]
              - row [ref=e397]:
                - cell "Center Bore" [ref=e398]
                - cell "64.1 mm" [ref=e399]
              - row [ref=e400]:
                - cell "Finish" [ref=e401]
                - cell "Machined Face with Painted Inlay" [ref=e402]
              - row [ref=e403]:
                - cell "OEM Tire Size" [ref=e404]
                - cell "235/40R19" [ref=e405]
              - row [ref=e406]:
                - cell "Lug Nut Thread Size" [ref=e407]
                - cell "M12 x 1.5" [ref=e408]
              - row [ref=e409]:
                - cell "Tire Pressure (PSI)" [ref=e410]
                - cell "32" [ref=e411]
              - row [ref=e412]:
                - cell "UPC" [ref=e413]
                - cell "850012266174" [ref=e414]
        - generic [ref=e415]:
          - generic [ref=e417]:
            - heading "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=1] [ref=e418]: 2018-2022 Honda Accord19x8.5 Alloy Wheel / Rim
            - generic [ref=e419]:
              - generic [ref=e420]:
                - img "Year range arrow" [ref=e422]
                - generic [ref=e423]:
                  - generic [ref=e424]: "2018"
                  - generic [ref=e426]: "2022"
              - link "See Product Details" [ref=e429] [cursor=pointer]:
                - /url: "#product-details-tabs"
          - generic [ref=e431]:
            - generic [ref=e432]: $198.55
            - generic [ref=e434]: $579.00
            - generic [ref=e435]:
              - text: YOU SAVE
              - generic [ref=e436]: $380.45
          - generic [ref=e437]:
            - generic [ref=e440] [cursor=pointer]:
              - combobox [ref=e442]
              - generic "1" [ref=e443]
            - button "Add To Cart" [ref=e444] [cursor=pointer]
          - generic [ref=e450]:
            - generic [ref=e451]:
              - paragraph [ref=e452]: Express Checkouts
              - generic [ref=e453]:
                - generic [ref=e454]:
                  - img "Amazon Pay"
                  - generic:
                    - generic:
                      - img "AmazonPay"
                  - button "Pay with Amazon Pay" [ref=e455] [cursor=pointer]
                - generic [ref=e456]:
                  - img "Google Pay"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - button "Pay with GPay"
                  - button "Pay with Google Pay" [ref=e457] [cursor=pointer]
            - generic [ref=e458]:
              - generic [ref=e459]: In Stock
              - generic [ref=e460]: Free Shipping
              - generic [ref=e461]: 1 Year Warranty
            - separator [ref=e462]
            - generic [ref=e463]: Ships Tomorrow
            - generic [ref=e470]: "Expected Delivery: Monday, September 14th - Tuesday, September 15th"
      - generic [ref=e478]:
        - heading "Customers Who Viewed This Item Also Viewed" [level=2] [ref=e479]
        - generic [ref=e480]:
          - region [ref=e481]:
            - generic [ref=e483]:
              - group [ref=e484]:
                - generic [ref=e485]:
                  - generic [ref=e486]:
                    - button "Add to wishlist" [ref=e489] [cursor=pointer]
                    - link [ref=e492] [cursor=pointer]:
                      - /url: /products/2018-2020-19x8-5-honda-accord-aluminum-wheel-rim
                      - img "2018-2020 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=e495]
                  - generic [ref=e496]:
                    - link [ref=e497] [cursor=pointer]:
                      - /url: /products/2018-2020-19x8-5-honda-accord-aluminum-wheel-rim
                      - heading "2018-2020 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=3] [ref=e498]
                    - generic [ref=e500]:
                      - generic [ref=e501] [cursor=pointer]
                      - link "405 All-Time Units Sold" [ref=e515] [cursor=pointer]:
                        - /url: /products/2018-2020-19x8-5-honda-accord-aluminum-wheel-rim
                    - generic [ref=e517]: $221.63
                    - generic [ref=e519]: "Hollander: 560-64126"
                    - generic [ref=e522]:
                      - generic [ref=e523]: 🚚
                      - button "Please Select State" [ref=e524] [cursor=pointer]
                    - generic [ref=e526]:
                      - button "1" [ref=e528] [cursor=pointer]
                      - button "Add To Cart" [ref=e532] [cursor=pointer]
              - group [ref=e533]:
                - generic [ref=e534]:
                  - generic [ref=e535]:
                    - button "Add to wishlist" [ref=e538] [cursor=pointer]
                    - link [ref=e541] [cursor=pointer]:
                      - /url: /products/2008-2010-17x7-5-honda-accord-genuine-oem-alloy-wheel-rim
                      - img "2008-2010 17x7.5 Honda Accord Genuine OEM Alloy Wheel / Rim" [ref=e544]
                  - generic [ref=e545]:
                    - link [ref=e546] [cursor=pointer]:
                      - /url: /products/2008-2010-17x7-5-honda-accord-genuine-oem-alloy-wheel-rim
                      - heading "2008-2010 17x7.5 Honda Accord Genuine OEM Alloy Wheel / Rim" [level=3] [ref=e547]
                    - generic [ref=e549]:
                      - generic [ref=e550] [cursor=pointer]
                      - link "On Sale" [ref=e564] [cursor=pointer]:
                        - /url: /products/2008-2010-17x7-5-honda-accord-genuine-oem-alloy-wheel-rim
                    - generic [ref=e566]: $231.74
                    - generic [ref=e568]: "Hollander: 560-63934A"
                    - generic [ref=e571]:
                      - generic [ref=e572]: 🚚
                      - button "Please Select State" [ref=e573] [cursor=pointer]
                    - generic [ref=e575]:
                      - button "1" [ref=e577] [cursor=pointer]
                      - button "Add To Cart" [ref=e581] [cursor=pointer]
              - group [ref=e582]:
                - generic [ref=e583]:
                  - generic [ref=e584]:
                    - button "Add to wishlist" [ref=e587] [cursor=pointer]
                    - link [ref=e590] [cursor=pointer]:
                      - /url: /products/2016-2017-19-x8-honda-accord-aluminum-wheel-rim
                      - img "2016-2017 Honda Accord 19x8 Alloy Wheel / Rim" [ref=e593]
                  - generic [ref=e594]:
                    - link [ref=e595] [cursor=pointer]:
                      - /url: /products/2016-2017-19-x8-honda-accord-aluminum-wheel-rim
                      - heading "2016-2017 Honda Accord 19x8 Alloy Wheel / Rim" [level=3] [ref=e596]
                    - generic [ref=e598]:
                      - generic [ref=e599] [cursor=pointer]
                      - link "1,938 All-Time Units Sold" [ref=e613] [cursor=pointer]:
                        - /url: /products/2016-2017-19-x8-honda-accord-aluminum-wheel-rim
                    - generic [ref=e615]: $206.14
                    - generic [ref=e617]: "Hollander: 560-64083"
                    - generic [ref=e619]:
                      - generic [ref=e620]: 🚚
                      - button "Please Select State" [ref=e621] [cursor=pointer]
                    - generic [ref=e623]:
                      - button "1" [ref=e625] [cursor=pointer]
                      - button "Add To Cart" [ref=e629] [cursor=pointer]
              - group [ref=e630]:
                - generic [ref=e631]:
                  - generic [ref=e632]:
                    - button "Add to wishlist" [ref=e635] [cursor=pointer]
                    - link [ref=e638] [cursor=pointer]:
                      - /url: /products/2013-2017-19x8-honda-accord-aluminum-wheel-rim
                      - img "2013-2017 Honda Accord 19x8 Alloy Wheel / Rim" [ref=e641]
                  - generic [ref=e642]:
                    - link [ref=e643] [cursor=pointer]:
                      - /url: /products/2013-2017-19x8-honda-accord-aluminum-wheel-rim
                      - heading "2013-2017 Honda Accord 19x8 Alloy Wheel / Rim" [level=3] [ref=e644]
                    - generic [ref=e646]:
                      - generic [ref=e647] [cursor=pointer]
                      - link "315 All-Time Units Sold" [ref=e661] [cursor=pointer]:
                        - /url: /products/2013-2017-19x8-honda-accord-aluminum-wheel-rim
                    - generic [ref=e663]: $194.81
                    - generic [ref=e665]: "Hollander: 560-64055B"
                    - generic [ref=e668]:
                      - generic [ref=e669]: 🚚
                      - button "Please Select State" [ref=e670] [cursor=pointer]
                    - generic [ref=e672]:
                      - button "1" [ref=e674] [cursor=pointer]
                      - button "Add To Cart" [ref=e678] [cursor=pointer]
              - group [ref=e679]:
                - generic [ref=e680]:
                  - generic [ref=e681]:
                    - button "Add to wishlist" [ref=e684] [cursor=pointer]
                    - link [ref=e687] [cursor=pointer]:
                      - /url: /products/2018-2021-17x7-5-honda-accord-aluminum-wheel-rim1
                      - img "2018-2021 Honda Accord 17x7.5 Alloy Wheel / Rim" [ref=e690]
                  - generic [ref=e691]:
                    - link [ref=e692] [cursor=pointer]:
                      - /url: /products/2018-2021-17x7-5-honda-accord-aluminum-wheel-rim1
                      - heading "2018-2021 Honda Accord 17x7.5 Alloy Wheel / Rim" [level=3] [ref=e693]
                    - generic [ref=e695]:
                      - generic [ref=e696] [cursor=pointer]
                      - link "109 All-Time Units Sold" [ref=e710] [cursor=pointer]:
                        - /url: /products/2018-2021-17x7-5-honda-accord-aluminum-wheel-rim1
                    - generic [ref=e712]: $153.09
                    - generic [ref=e714]: "Hollander: 560-64124"
                    - generic [ref=e717]:
                      - generic [ref=e718]: 🚚
                      - button "Please Select State" [ref=e719] [cursor=pointer]
                    - generic [ref=e721]:
                      - button "1" [ref=e723] [cursor=pointer]
                      - button "Add To Cart" [ref=e727] [cursor=pointer]
              - group [ref=e728]:
                - generic [ref=e729]:
                  - generic [ref=e730]:
                    - button "Add to wishlist" [ref=e733] [cursor=pointer]
                    - link [ref=e736] [cursor=pointer]:
                      - /url: /products/2018-2022-17x7-5-honda-accord-aluminum-wheel-rim
                      - img "2018-2022 Honda Accord 17x7.5 Alloy Wheel / Rim" [ref=e739]
                  - generic [ref=e740]:
                    - link [ref=e741] [cursor=pointer]:
                      - /url: /products/2018-2022-17x7-5-honda-accord-aluminum-wheel-rim
                      - heading "2018-2022 Honda Accord 17x7.5 Alloy Wheel / Rim" [level=3] [ref=e742]
                    - generic [ref=e744]:
                      - generic [ref=e745] [cursor=pointer]
                      - link "204 All-Time Units Sold" [ref=e759] [cursor=pointer]:
                        - /url: /products/2018-2022-17x7-5-honda-accord-aluminum-wheel-rim
                    - generic [ref=e761]: $179.66
                    - generic [ref=e763]: "Hollander: 560-63141"
                    - generic [ref=e766]:
                      - generic [ref=e767]: 🚚
                      - button "Please Select State" [ref=e768] [cursor=pointer]
                    - generic [ref=e770]:
                      - button "1" [ref=e772] [cursor=pointer]
                      - button "Add To Cart" [ref=e776] [cursor=pointer]
              - group [ref=e777]:
                - generic [ref=e778]:
                  - generic [ref=e779]:
                    - button "Add to wishlist" [ref=e782] [cursor=pointer]
                    - link [ref=e785] [cursor=pointer]:
                      - /url: /products/2008-2012-honda-accord-four-piece-set-silver-wheel-cover-caps-hubcaps
                      - img "2008-2012 Honda Accord Four Piece Set Silver Wheel Cover Caps / Hubcaps" [ref=e788]
                  - generic [ref=e789]:
                    - link [ref=e790] [cursor=pointer]:
                      - /url: /products/2008-2012-honda-accord-four-piece-set-silver-wheel-cover-caps-hubcaps
                      - heading "2008-2012 Honda Accord Four Piece Set Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=e791]
                    - generic [ref=e793]:
                      - generic [ref=e794] [cursor=pointer]
                      - link "1,424 All-Time Units Sold" [ref=e808] [cursor=pointer]:
                        - /url: /products/2008-2012-honda-accord-four-piece-set-silver-wheel-cover-caps-hubcaps
                    - generic [ref=e810]: $68.71
                    - generic [ref=e812]: "Hollander: 570-0034"
                    - generic [ref=e814]:
                      - generic [ref=e815]: 🚚
                      - button "Please Select State" [ref=e816] [cursor=pointer]
                    - generic [ref=e818]:
                      - button "1" [ref=e820] [cursor=pointer]
                      - button "Add To Cart" [ref=e824] [cursor=pointer]
              - group [ref=e825]:
                - generic [ref=e826]:
                  - generic [ref=e827]:
                    - button "Add to wishlist" [ref=e830] [cursor=pointer]
                    - link [ref=e833] [cursor=pointer]:
                      - /url: /products/2016-2017-17x7-5-honda-accord-aluminum-wheel-rim
                      - img "2016-2017 Honda Accord 17x7.5 Alloy Wheel / Rim" [ref=e836]
                  - generic [ref=e837]:
                    - link [ref=e838] [cursor=pointer]:
                      - /url: /products/2016-2017-17x7-5-honda-accord-aluminum-wheel-rim
                      - heading "2016-2017 Honda Accord 17x7.5 Alloy Wheel / Rim" [level=3] [ref=e839]
                    - generic [ref=e841]:
                      - generic [ref=e842] [cursor=pointer]
                      - link "1,265 All-Time Units Sold" [ref=e856] [cursor=pointer]:
                        - /url: /products/2016-2017-17x7-5-honda-accord-aluminum-wheel-rim
                    - generic [ref=e858]: $182.24
                    - generic [ref=e860]: "Hollander: 560-64080"
                    - generic [ref=e862]:
                      - generic [ref=e863]: 🚚
                      - button "Please Select State" [ref=e864] [cursor=pointer]
                    - generic [ref=e866]:
                      - button "1" [ref=e868] [cursor=pointer]
                      - button "Add To Cart" [ref=e872] [cursor=pointer]
              - group [ref=e873]:
                - generic [ref=e874]:
                  - generic [ref=e875]:
                    - button "Add to wishlist" [ref=e878] [cursor=pointer]
                    - link [ref=e881] [cursor=pointer]:
                      - /url: /products/2018-2021-17x7-5-honda-accord-aluminum-wheel-rim
                      - img "2018-2021 Honda Accord 17x7.5 Alloy Wheel / Rim" [ref=e884]
                  - generic [ref=e885]:
                    - link [ref=e886] [cursor=pointer]:
                      - /url: /products/2018-2021-17x7-5-honda-accord-aluminum-wheel-rim
                      - heading "2018-2021 Honda Accord 17x7.5 Alloy Wheel / Rim" [level=3] [ref=e887]
                    - generic [ref=e889]:
                      - generic [ref=e890] [cursor=pointer]
                      - link "On Sale" [ref=e904] [cursor=pointer]:
                        - /url: /products/2018-2021-17x7-5-honda-accord-aluminum-wheel-rim
                    - generic [ref=e906]: $152.16
                    - generic [ref=e908]: "Hollander: 560-64125"
                    - generic [ref=e911]:
                      - generic [ref=e912]: 🚚
                      - button "Please Select State" [ref=e913] [cursor=pointer]
                    - generic [ref=e915]:
                      - button "1" [ref=e917] [cursor=pointer]
                      - button "Add To Cart" [ref=e921] [cursor=pointer]
              - group [ref=e922]:
                - generic [ref=e923]:
                  - generic [ref=e924]:
                    - button "Add to wishlist" [ref=e927] [cursor=pointer]
                    - link [ref=e930] [cursor=pointer]:
                      - /url: /products/2008-2010-18x8-honda-accord-aluminum-wheel-rim
                      - img "2008-2010 Honda Accord 18x8 Alloy Wheel / Rim" [ref=e933]
                  - generic [ref=e934]:
                    - link [ref=e935] [cursor=pointer]:
                      - /url: /products/2008-2010-18x8-honda-accord-aluminum-wheel-rim
                      - heading "2008-2010 Honda Accord 18x8 Alloy Wheel / Rim" [level=3] [ref=e936]
                    - generic [ref=e938]:
                      - generic [ref=e939] [cursor=pointer]
                      - link "137 All-Time Units Sold" [ref=e953] [cursor=pointer]:
                        - /url: /products/2008-2010-18x8-honda-accord-aluminum-wheel-rim
                    - generic [ref=e955]: $200.67
                    - generic [ref=e957]: "Hollander: 560-63937"
                    - generic [ref=e960]:
                      - generic [ref=e961]: 🚚
                      - button "Please Select State" [ref=e962] [cursor=pointer]
                    - generic [ref=e964]:
                      - button "1" [ref=e966] [cursor=pointer]
                      - button "Add To Cart" [ref=e970] [cursor=pointer]
          - generic [ref=e971]:
            - button [ref=e972] [cursor=pointer]
            - button [ref=e975] [cursor=pointer]
      - generic [ref=e979]:
        - generic: "\""
        - generic: "\""
        - generic [ref=e980]:
          - generic [ref=e982]:
            - generic [ref=e983]:
              - blockquote [ref=e984]: “5 stars for super fast shipping. Another 5 stars for excellent packaging — rim arrived in great condition, no dents or scratches. Fits perfectly and has no issue clearing the caliper or steering components. A great experience; I wouldn't hesitate to use them again.”
              - separator [ref=e985]
              - generic [ref=e986]: B. Greasor
            - generic [ref=e987]:
              - blockquote [ref=e988]: “Ordered a set of rims and they came in pristine condition. Highly recommend this company.”
              - separator [ref=e989]
              - generic [ref=e990]: G. Fuller
            - generic [ref=e991]:
              - blockquote [ref=e992]: “The rim came in quick and looked great — no damage to it or the packaging. It matched the factory rims perfectly! I will be ordering here again when the time comes.”
              - separator [ref=e993]
              - generic [ref=e994]: A. Mini
            - generic [ref=e995]:
              - blockquote [ref=e996]: “Item received as described, shipped fast, and a spot-on match as far as looks and size. I will be looking for all my rims at Road Ready. Thank you!”
              - separator [ref=e997]
              - generic [ref=e998]: P. Rockland
            - generic [ref=e999]:
              - blockquote [ref=e1000]: “Looks like the factory wheels at half the price!”
              - separator [ref=e1001]
              - generic [ref=e1002]: T. Thurman
            - generic [ref=e1003]:
              - blockquote [ref=e1004]: “Absolutely love them! They will be used as my 'winter wheels' here in the Buffalo, NY area.”
              - separator [ref=e1005]
              - generic [ref=e1006]: E. Bienas
            - generic [ref=e1007]:
              - blockquote [ref=e1008]: “Very quick and fast service — had exactly what I was looking for at a very reasonable price!”
              - separator [ref=e1009]
              - generic [ref=e1010]: C. Bock
            - generic [ref=e1011]:
              - blockquote [ref=e1012]: “Arrived quicker than expected and works fine on our Smart Car.”
              - separator [ref=e1013]
              - generic [ref=e1014]: Redbudok86
            - generic [ref=e1015]:
              - blockquote [ref=e1016]: “Wheels came as advertised. Opened the boxes the following week and found one damaged. Took a picture and sent to customer service — they delivered a replacement. I'll shop here again.”
              - separator [ref=e1017]
              - generic [ref=e1018]: Folgers4545
            - generic [ref=e1019]:
              - blockquote [ref=e1020]: “Great rims at a great price. The guys at the tire store insisted on checking balance before mounting — they were nearly perfect, better than most factory rims! One rim was damaged in shipment and RoadReady replaced it immediately, without waiting for the shipper to resolve the claim.”
              - separator [ref=e1021]
              - generic [ref=e1022]: WN4ISX
          - generic [ref=e1023]:
            - button "Go to testimonial 1" [ref=e1024] [cursor=pointer]
            - button "Go to testimonial 2" [ref=e1025] [cursor=pointer]
            - button "Go to testimonial 3" [ref=e1026] [cursor=pointer]
            - button "Go to testimonial 4" [ref=e1027] [cursor=pointer]
            - button "Go to testimonial 5" [ref=e1028] [cursor=pointer]
            - button "Go to testimonial 6" [ref=e1029] [cursor=pointer]
            - button "Go to testimonial 7" [ref=e1030] [cursor=pointer]
            - button "Go to testimonial 8" [ref=e1031] [cursor=pointer]
            - button "Go to testimonial 9" [ref=e1032] [cursor=pointer]
            - button "Go to testimonial 10" [ref=e1033] [cursor=pointer]
      - generic [ref=e1034]:
        - generic [ref=e1037]:
          - generic [ref=e1038]:
            - img "Wheels sold" [ref=e1040]
            - generic [ref=e1041]: 1,000,000wheels sold
          - generic [ref=e1042]:
            - img "Shipments on time" [ref=e1044]
            - generic [ref=e1045]: 99% of shipmentson time
          - generic [ref=e1046]:
            - img "Customers back on the road" [ref=e1048]
            - generic [ref=e1049]: 500,000 customersback on the road
          - generic [ref=e1050]:
            - img "24 hour fulfillment" [ref=e1052]
            - generic [ref=e1053]: 24 hour fulfillmentturnaround
          - generic [ref=e1054]:
            - img "Strong carton packaging" [ref=e1056]
            - generic [ref=e1057]: Strong cartonpackaging
          - generic [ref=e1058]:
            - img "Insurance grade verified" [ref=e1060]
            - generic [ref=e1061]: Insurance gradeverified
          - generic [ref=e1062]:
            - img "Free shipping" [ref=e1064]
            - generic [ref=e1065]: Free shippingon all orders
          - generic [ref=e1066]:
            - img "1-Year Warranty" [ref=e1068]
            - generic [ref=e1069]: 1-YearWarranty
          - generic [ref=e1070]:
            - img "Quality tested and DOT approved" [ref=e1072]
            - generic [ref=e1073]: Quality tested andDOT approved
        - generic [ref=e1076]:
          - generic [ref=e1077]:
            - heading "Shipping Information" [level=4] [ref=e1078]
            - generic [ref=e1079]:
              - paragraph [ref=e1080]: "Road Ready Wheels is committed to fulfilling customer orders as quickly as possible for your convenience. Below is detailed information about our shipping processes:"
              - generic [ref=e1081]:
                - heading "Same-Day and Next-Day Shipping" [level=5] [ref=e1082]
                - list [ref=e1083]:
                  - listitem [ref=e1084]:
                    - strong [ref=e1085]: "Same-Day Shipping Cut-Off:"
                    - text: Orders placed by 1:30 PM CST will ship the same business day. Orders placed after 1:30 PM CST will ship the next business day.
                  - listitem [ref=e1086]:
                    - strong [ref=e1087]: "Weekend Orders:"
                    - text: Orders placed on Friday after 1:30 PM CST, Saturday, or Sunday will be shipped on the following Monday. This excludes federal or national holidays when our warehouses are closed.
              - button "See More" [ref=e1088] [cursor=pointer]
          - generic [ref=e1089]:
            - heading "Warranty Information" [level=4] [ref=e1090]
            - generic [ref=e1091]:
              - paragraph [ref=e1092]: At Road Ready Wheels, we stand behind the quality of our products. All wheels sold on our website are covered by a one-year warranty from the original date of purchase. This warranty ensures that the wheels are free from defects in materials and workmanship and are in full functioning condition.
              - button "See More" [ref=e1093] [cursor=pointer]
      - generic [ref=e1095]:
        - generic [ref=e1096]:
          - generic [ref=e1097]:
            - heading "Will this rim fit my tire?" [level=2] [ref=e1098]
            - paragraph [ref=e1099]: "That's a great question. An easy way to answer this is by looking at your tire and finding the letter \"R\". For example:"
            - generic [ref=e1100]:
              - generic [ref=e1101]:
                - generic [ref=e1103]: R14
                - generic [ref=e1104]: = 14" Tire (fits a 14" rim)
              - generic [ref=e1105]:
                - generic [ref=e1107]: R15
                - generic [ref=e1108]: = 15" Tire (fits a 15" rim)
              - generic [ref=e1109]:
                - generic [ref=e1111]: R16
                - generic [ref=e1112]: = 16" Tire (fits a 16" rim)
              - generic [ref=e1113]:
                - generic [ref=e1115]: R17
                - generic [ref=e1116]: = 17" Tire (fits a 17" rim)
              - generic [ref=e1117]:
                - generic [ref=e1119]: R18
                - generic [ref=e1120]: = 18" Tire (fits a 18" rim)
              - generic [ref=e1121]:
                - generic [ref=e1123]: R19
                - generic [ref=e1124]: = 19" Tire (fits a 19" rim)
              - generic [ref=e1125]:
                - generic [ref=e1127]: R20
                - generic [ref=e1128]: = 20" Tire (fits a 20" rim)
              - generic [ref=e1129]:
                - generic [ref=e1131]: R22
                - generic [ref=e1132]: = 22" Tire (fits a 22" rim)
          - img "Stack of tires" [ref=e1134]
        - generic [ref=e1135]:
          - img "Wheel close-up" [ref=e1137]
          - generic [ref=e1138]:
            - heading "Assurance of Quality and Value" [level=2] [ref=e1139]
            - paragraph [ref=e1140]: At Road Ready Wheels, we understand the importance of offering a single, specialized product at an unparalleled level of quality and value. To achieve this, we have meticulously researched and partnered with the most reputable suppliers in the industry. After extensive efforts, we have identified and collaborated with 24 distinguished manufacturers across 10 countries. These partnerships enable us to deliver premium-grade wheels at the most competitive prices available on the market.
            - heading "Guaranteed Compatibility" [level=3] [ref=e1141]
            - paragraph [ref=e1142]: Road Ready Wheels products are engineered to meet and exceed OEM (Original Equipment Manufacturer) specifications. They are designed to integrate seamlessly with key components, including hubcaps, center caps, TPMS sensors, tires, and lug nuts, ensuring dependable performance and optimal fit for your vehicle.
      - generic [ref=e1143]:
        - generic [ref=e1144]:
          - heading "Road Ready Overall Ratings and Reviews" [level=2] [ref=e1145]
          - separator [ref=e1146]
        - generic [ref=e1148]:
          - generic [ref=e1151]:
            - generic [ref=e1152]: 1,855 Reviews
            - generic [ref=e1165]: 4.7 out of 5 stars
            - generic [ref=e1167]:
              - generic [ref=e1168]:
                - generic [ref=e1169]: 5 Stars
                - generic [ref=e1172]: 89%
              - generic [ref=e1173]:
                - generic [ref=e1174]: 4 Stars
                - generic [ref=e1177]: 4%
              - generic [ref=e1178]:
                - generic [ref=e1179]: 3 Stars
                - generic [ref=e1182]: 2%
              - generic [ref=e1183]:
                - generic [ref=e1184]: 2 Stars
                - generic [ref=e1187]: 2%
              - generic [ref=e1188]:
                - generic [ref=e1189]: 1 Stars
                - generic [ref=e1192]: 3%
          - generic [ref=e1193]:
            - generic [ref=e1194]:
              - generic [ref=e1196]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1198]
                - generic [ref=e1199]:
                  - generic [ref=e1211]:
                    - generic [ref=e1212]:
                      - text: "5"
                      - generic [ref=e1213]: ★
                    - link [ref=e1214] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1215]
                  - paragraph [ref=e1216]: Wheels delivered on time and in perfect condition. Packing materials well protected the wheels. Great price for new wheels.
                  - generic [ref=e1217]:
                    - generic [ref=e1218]: bkkata
                    - generic [ref=e1219]:
                      - generic [ref=e1223]: Certified Buyer
                      - generic [ref=e1224]: •
                      - generic [ref=e1225]: July 20, 2026
              - generic [ref=e1227]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1229]
                - generic [ref=e1230]:
                  - generic [ref=e1242]:
                    - generic [ref=e1243]:
                      - text: "5"
                      - generic [ref=e1244]: ★
                    - link [ref=e1245] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1246]
                  - paragraph [ref=e1247]: Shipping box was intact.
                  - generic [ref=e1248]:
                    - generic [ref=e1249]: Bryon
                    - generic [ref=e1250]:
                      - generic [ref=e1254]: Certified Buyer
                      - generic [ref=e1255]: •
                      - generic [ref=e1256]: July 13, 2026
              - generic [ref=e1258]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1260]
                - generic [ref=e1261]:
                  - generic [ref=e1273]:
                    - generic [ref=e1274]:
                      - text: "5"
                      - generic [ref=e1275]: ★
                    - link [ref=e1276] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1277]
                  - paragraph [ref=e1278]: 5 Stars
                  - generic [ref=e1279]:
                    - generic [ref=e1280]: Palwinder
                    - generic [ref=e1281]:
                      - generic [ref=e1285]: Certified Buyer
                      - generic [ref=e1286]: •
                      - generic [ref=e1287]: July 6, 2026
              - generic [ref=e1289]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1291]
                - generic [ref=e1292]:
                  - generic [ref=e1304]:
                    - generic [ref=e1305]:
                      - text: "5"
                      - generic [ref=e1306]: ★
                    - link [ref=e1307] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1308]
                  - paragraph [ref=e1309]: Perfect match and fit!
                  - generic [ref=e1310]:
                    - generic [ref=e1311]: Jz
                    - generic [ref=e1312]:
                      - generic [ref=e1316]: Certified Buyer
                      - generic [ref=e1317]: •
                      - generic [ref=e1318]: June 28, 2026
              - generic [ref=e1320]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1322]
                - generic [ref=e1323]:
                  - generic [ref=e1335]:
                    - generic [ref=e1336]:
                      - text: "5"
                      - generic [ref=e1337]: ★
                    - link [ref=e1338] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1339]
                  - paragraph [ref=e1340]: Delivered on time. Friendly service. Well protected parcel. Left parcel in a safe place
                  - generic [ref=e1341]:
                    - generic [ref=e1342]: Caliber
                    - generic [ref=e1343]:
                      - generic [ref=e1347]: Certified Buyer
                      - generic [ref=e1348]: •
                      - generic [ref=e1349]: May 26, 2026
              - generic [ref=e1351]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1353]
                - generic [ref=e1354]:
                  - generic [ref=e1366]:
                    - generic [ref=e1367]:
                      - text: "5"
                      - generic [ref=e1368]: ★
                    - link [ref=e1369] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1370]
                  - paragraph [ref=e1371]: Fit perfect
                  - generic [ref=e1372]:
                    - generic [ref=e1373]: Lahfischer
                    - generic [ref=e1374]:
                      - generic [ref=e1378]: Certified Buyer
                      - generic [ref=e1379]: •
                      - generic [ref=e1380]: May 14, 2026
              - generic [ref=e1382]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1384]
                - generic [ref=e1385]:
                  - generic [ref=e1397]:
                    - generic [ref=e1398]:
                      - text: "5"
                      - generic [ref=e1399]: ★
                    - link [ref=e1400] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1401]
                  - paragraph [ref=e1402]: Great rim and it fit very well
                  - generic [ref=e1403]:
                    - generic [ref=e1404]: Spencer
                    - generic [ref=e1405]:
                      - generic [ref=e1409]: Certified Buyer
                      - generic [ref=e1410]: •
                      - generic [ref=e1411]: May 7, 2026
              - generic [ref=e1413]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1415]
                - generic [ref=e1416]:
                  - generic [ref=e1428]:
                    - generic [ref=e1429]:
                      - text: "5"
                      - generic [ref=e1430]: ★
                    - link [ref=e1431] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1432]
                  - paragraph [ref=e1433]: yes we were very happy
                  - generic [ref=e1434]:
                    - generic [ref=e1435]: matt johnson
                    - generic [ref=e1436]:
                      - generic [ref=e1440]: Certified Buyer
                      - generic [ref=e1441]: •
                      - generic [ref=e1442]: March 2, 2026
              - generic [ref=e1444]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1446]
                - generic [ref=e1447]:
                  - generic [ref=e1459]:
                    - generic [ref=e1460]:
                      - text: "5"
                      - generic [ref=e1461]: ★
                    - link [ref=e1462] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1463]
                  - paragraph [ref=e1464]: Excellent pruduct
                  - generic [ref=e1465]:
                    - generic [ref=e1466]: Guest
                    - generic [ref=e1467]:
                      - generic [ref=e1471]: Certified Buyer
                      - generic [ref=e1472]: •
                      - generic [ref=e1473]: December 23, 2025
              - generic [ref=e1475]:
                - img "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [ref=e1477]
                - generic [ref=e1478]:
                  - generic [ref=e1490]:
                    - generic [ref=e1491]:
                      - text: "5"
                      - generic [ref=e1492]: ★
                    - link [ref=e1493] [cursor=pointer]:
                      - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                      - heading "2018-2022 19x8.5 Honda Accord Alloy Wheel / Rim" [level=3] [ref=e1494]
                  - paragraph [ref=e1495]: Delivered on time
                  - generic [ref=e1496]:
                    - generic [ref=e1497]: Manuel
                    - generic [ref=e1498]:
                      - generic [ref=e1502]: Certified Buyer
                      - generic [ref=e1503]: •
                      - generic [ref=e1504]: November 4, 2025
            - button "Load More" [ref=e1506] [cursor=pointer]
    - generic [ref=e1508] [cursor=pointer]:
      - generic [ref=e1509]: ↑
      - generic [ref=e1510]: Back to Top
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import BasePage from './BasePage';
  3  | 
  4  | export default class CartPage extends BasePage {
  5  |   readonly cartDrawer: Locator;
  6  |   readonly cartHeading: Locator;
  7  |   readonly openCartButton: Locator;
  8  |   readonly removeItemButtons: Locator;
  9  |   readonly quantityIncreaseButton: Locator;
  10 |   readonly quantityDecreaseButton: Locator;
  11 |   readonly quantityValue: Locator;
  12 |   readonly completeCheckoutButton: Locator;
  13 |   readonly dontHavePOButton: Locator;
  14 |   readonly completeOrderButton: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     super(page);
  18 | 
  19 |     this.openCartButton = page.getByRole('button', {
  20 |       name: 'Open cart',
  21 |     });
  22 | 
  23 |     // Actual active/open cart overlay
  24 |     this.cartDrawer = page.locator(
  25 |       'div.fixed.inset-0[class*="z-[1000]"]'
  26 |     );
  27 | 
  28 |     this.cartHeading = this.cartDrawer.getByRole('heading', {
  29 |       name: /Your Cart/,
  30 |     });
  31 | 
  32 |     this.removeItemButtons = this.cartDrawer.getByRole('button', {
  33 |       name: /Remove .* from cart/i,
  34 |     });
  35 | 
  36 |     this.quantityIncreaseButton = this.cartDrawer
  37 |       .getByRole('button', {
  38 |         name: /Increase quantity/i,
  39 |       })
  40 |       .first();
  41 | 
  42 |     this.quantityDecreaseButton = this.cartDrawer
  43 |       .getByRole('button', {
  44 |         name: /Decrease quantity/i,
  45 |       })
  46 |       .first();
  47 | 
  48 |     this.quantityValue = this.cartDrawer
  49 |       .locator('span.text-sm.min-w-\\[20px\\]')
  50 |       .first();
  51 | 
  52 |     this.completeCheckoutButton = this.cartDrawer
  53 |       .getByRole('button', {
  54 |         name: 'Complete Checkout',
  55 |       })
  56 |       .first();
  57 | 
  58 |     this.completeOrderButton = page.getByRole('button', {
  59 |       name: 'Complete Order',
  60 |     });
  61 | 
  62 |     this.dontHavePOButton = page.getByRole('button', {
  63 |       name: "Don't Have PO",
  64 |     });
  65 |   }
  66 | 
  67 |   async getQuantity(): Promise<number> {
  68 |     const text = await this.quantityValue.innerText();
  69 |     return parseInt(text.trim(), 10);
  70 |   }
  71 | 
  72 |   async toggleQuantity() {
  73 |     const currentQty = await this.getQuantity();
  74 | 
  75 |     console.log('Current quantity:', currentQty);
  76 | 
  77 |     if (currentQty > 1) {
  78 |       // Quantity > 1 → click minus
> 79 |       await this.quantityDecreaseButton.click();
     |                                         ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  80 |     } else {
  81 |       // Quantity = 1 → click plus
  82 |       await this.quantityIncreaseButton.click();
  83 |     }
  84 |   }
  85 | 
  86 |   async clickCompleteCheckout() {
  87 |     await this.completeCheckoutButton.click();
  88 |   }
  89 | 
  90 |   async clickDontHavePO() {
  91 |     await this.dontHavePOButton.click();
  92 |   }
  93 | }
```