# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation
- Location: tests\cart.spec.ts:27:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: 0
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim - Road Ready Wheels
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
            - generic [ref=e48]: "1"
    - generic [ref=e51]:
      - generic [ref=e52]:
        - heading "Your Cart (1 items)" [level=2] [ref=e53]
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
          - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e71]
          - generic [ref=e72]:
            - generic [ref=e73]:
              - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=4] [ref=e74] [cursor=pointer]
              - button "Remove 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim from cart" [ref=e75] [cursor=pointer]
            - paragraph [ref=e79]: "SKU: 560-03335B"
            - generic [ref=e80]:
              - generic [ref=e81]:
                - button "Decrease quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e82] [cursor=pointer]
                - generic [ref=e84]: "1"
                - button "Increase quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e85] [cursor=pointer]
              - generic [ref=e87]: $233.58
        - generic [ref=e88]:
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e91]: Subtotal (1 items)
              - generic [ref=e92]: $233.58
            - button "Shipping Select State" [ref=e94] [cursor=pointer]:
              - generic [ref=e95]: Shipping
              - button "Select State" [ref=e100]
            - generic [ref=e101]:
              - generic [ref=e102]: Total
              - generic [ref=e103]: $233.58
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
            - button "top product" [ref=e177] [cursor=pointer]
    - generic [ref=e180]:
      - generic [ref=e181]:
        - heading "Your Cart (1 items)" [level=2] [ref=e182]
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
          - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e200]
          - generic [ref=e201]:
            - generic [ref=e202]:
              - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=4] [ref=e203] [cursor=pointer]
              - button "Remove 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim from cart" [ref=e204] [cursor=pointer]
            - paragraph [ref=e208]: "SKU: 560-03335B"
            - generic [ref=e209]:
              - generic [ref=e210]:
                - button "Decrease quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e211] [cursor=pointer]
                - generic [ref=e213]: "1"
                - button "Increase quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e214] [cursor=pointer]
              - generic [ref=e216]: $233.58
        - generic [ref=e217]:
          - generic [ref=e218]:
            - generic [ref=e219]:
              - generic [ref=e220]: Subtotal (1 items)
              - generic [ref=e221]: $233.58
            - button "Shipping Select State" [ref=e223] [cursor=pointer]:
              - generic [ref=e224]: Shipping
              - button "Select State" [ref=e229]
            - generic [ref=e230]:
              - generic [ref=e231]: Total
              - generic [ref=e232]: $233.58
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
      - paragraph [ref=e282]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim
      - generic [ref=e283]:
        - generic [ref=e284]:
          - generic [ref=e285]: $233.58
          - generic [ref=e287]: $767.00
        - button "Add To Cart" [ref=e288] [cursor=pointer]
    - generic [ref=e294]:
      - navigation [ref=e295]:
        - button "Ford" [ref=e296] [cursor=pointer]
        - generic [ref=e297]: ">"
        - button "F-350" [ref=e298] [cursor=pointer]
        - generic [ref=e299]: ">"
        - generic [ref=e300]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim
      - generic [ref=e301]:
        - generic [ref=e302]:
          - generic [ref=e303]:
            - generic [ref=e304]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e306]
              - button [ref=e307] [cursor=pointer]
              - button [ref=e310] [cursor=pointer]
            - generic:
              - generic [ref=e314]:
                - generic [ref=e315]: Top Alloy Wheel
                - button "Show 1 more top seller titles" [ref=e316] [cursor=pointer]: "+1"
              - generic: 9,267 All-Time Units Sold
            - generic [ref=e317]:
              - button [disabled] [ref=e318]
              - generic [ref=e321]:
                - button [ref=e322] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 1" [ref=e324]
                - button [ref=e325] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 2" [ref=e327]
                - button [ref=e328] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 3" [ref=e330]
                - button [ref=e331] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 4" [ref=e333]
                - button [ref=e334] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 5" [ref=e336]
                - button [ref=e337] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 6" [ref=e339]
                - button [ref=e340] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 7" [ref=e342]
                - button [ref=e343] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 8" [ref=e345]
                - button [ref=e346] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 9" [ref=e348]
                - button [ref=e349] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 10" [ref=e351]
              - button [ref=e352] [cursor=pointer]
          - table [ref=e356]:
            - rowgroup [ref=e357]:
              - row [ref=e358]:
                - cell "Condition" [ref=e359]
                - cell "New" [ref=e360]
              - row [ref=e361]:
                - cell "Brand" [ref=e362]
                - cell "Road Ready" [ref=e363]
              - row [ref=e364]:
                - cell "Hollander" [ref=e365]
                - cell "560-03335B" [ref=e366]
              - row [ref=e367]:
                - cell "OEM Part Number(s)" [ref=e368]
                - cell "4C3Z1007KA" [ref=e369]
              - row [ref=e370]:
                - cell "Vehicle Fitment" [ref=e371]
                - cell "Ford F-350" [ref=e372]
              - row [ref=e373]:
                - cell "Type" [ref=e374]
                - cell "OEM Replacement Wheel" [ref=e375]
              - row [ref=e376]:
                - cell "Material" [ref=e377]
                - cell "Alloy" [ref=e378]
              - row [ref=e379]:
                - cell "Years of fitment" [ref=e380]
                - cell "1999, 2000, 2001, 2002, 2003, 2004" [ref=e381]
              - row [ref=e382]:
                - cell "Diameter" [ref=e383]
                - cell "16\"" [ref=e384]
              - row [ref=e385]:
                - cell "Width" [ref=e386]
                - cell "6\"" [ref=e387]
              - row [ref=e388]:
                - cell "Gross Weight" [ref=e389]
                - cell "21.6" [ref=e390]
              - row [ref=e391]:
                - cell "Color" [ref=e392]
                - cell "Silver" [ref=e393]
              - row [ref=e394]:
                - cell "Bolt Pattern" [ref=e395]
                - cell "8x170mm or 8x6.7\"" [ref=e396]
              - row [ref=e397]:
                - cell "Offset" [ref=e398]
                - cell "120mm" [ref=e399]
              - row [ref=e400]:
                - cell "Center Bore" [ref=e401]
                - cell "125mm" [ref=e402]
              - row [ref=e403]:
                - cell "Finish" [ref=e404]
                - cell "Machined with Clear Coat" [ref=e405]
              - row [ref=e406]:
                - cell "OEM Tire Size" [ref=e407]
                - cell "LT235/85R16" [ref=e408]
              - row [ref=e409]:
                - cell "Lug Nut Thread Size" [ref=e410]
                - cell "M14 x 1.5" [ref=e411]
              - row [ref=e412]:
                - cell "Tire Pressure (PSI)" [ref=e413]
                - cell "59.4 / 69.6" [ref=e414]
              - row [ref=e415]:
                - cell "UPC" [ref=e416]
                - cell "850000502086" [ref=e417]
        - generic [ref=e418]:
          - generic [ref=e420]:
            - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=1] [ref=e421]
            - generic [ref=e422]:
              - generic [ref=e423]:
                - img "Year range arrow" [ref=e425]
                - generic [ref=e426]:
                  - generic [ref=e427]: "1999"
                  - generic [ref=e429]: "2004"
              - link "See Product Details" [ref=e432] [cursor=pointer]:
                - /url: "#product-details-tabs"
          - generic [ref=e434]:
            - generic [ref=e435]: $233.58
            - generic [ref=e437]: $767.00
            - generic [ref=e438]:
              - text: YOU SAVE
              - generic [ref=e439]: $533.42
          - generic [ref=e440]:
            - generic [ref=e443] [cursor=pointer]:
              - combobox [ref=e445]
              - generic "1" [ref=e446]
            - button "Add To Cart" [ref=e447] [cursor=pointer]
          - generic [ref=e453]:
            - generic [ref=e454]:
              - paragraph [ref=e455]: Express Checkouts
              - generic [ref=e456]:
                - generic [ref=e457]:
                  - img "Amazon Pay"
                  - generic:
                    - generic:
                      - img "AmazonPay"
                  - button "Pay with Amazon Pay" [ref=e458] [cursor=pointer]
                - generic [ref=e459]:
                  - img "Google Pay"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - button "Pay with GPay"
                  - button "Pay with Google Pay" [ref=e460] [cursor=pointer]
            - generic [ref=e461]:
              - generic [ref=e462]: In Stock
              - generic [ref=e463]: Free Shipping
              - generic [ref=e464]: 1 Year Warranty
            - separator [ref=e465]
            - generic [ref=e466]: Ships Today if you order in the next 8 hrs 32 mins
            - generic [ref=e473]: "Expected Delivery: Tuesday, September 22nd - Wednesday, September 23rd"
      - generic [ref=e481]:
        - heading "Customers Who Viewed This Item Also Viewed" [level=2] [ref=e482]
        - generic [ref=e483]:
          - region [ref=e484]:
            - generic [ref=e486]:
              - group [ref=e487]:
                - generic [ref=e488]:
                  - generic [ref=e489]:
                    - button "Add to wishlist" [ref=e492] [cursor=pointer]
                    - link [ref=e495] [cursor=pointer]:
                      - /url: /products/2017-2019-20x8-ford-f350sd-aluminum-wheel-rim
                      - img "2017-2019 20x8 Ford F350SD Alloy Wheel / Rim" [ref=e498]
                  - generic [ref=e499]:
                    - link [ref=e500] [cursor=pointer]:
                      - /url: /products/2017-2019-20x8-ford-f350sd-aluminum-wheel-rim
                      - heading "2017-2019 20x8 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e501]
                    - link "360 All-Time Units Sold" [ref=e502] [cursor=pointer]:
                      - /url: /products/2017-2019-20x8-ford-f350sd-aluminum-wheel-rim
                    - generic [ref=e504]: $457.05
                    - generic [ref=e506]: "Hollander: 560-10100"
                    - generic [ref=e509]:
                      - generic [ref=e510]: 🚚
                      - button "Please Select State" [ref=e511] [cursor=pointer]
                    - generic [ref=e513]:
                      - button "1" [ref=e515] [cursor=pointer]
                      - button "Add To Cart" [ref=e519] [cursor=pointer]
              - group [ref=e520]:
                - generic [ref=e521]:
                  - generic [ref=e522]:
                    - button "Add to wishlist" [ref=e525] [cursor=pointer]
                    - link [ref=e528] [cursor=pointer]:
                      - /url: /products/1995-2011-ford-f350-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                      - img "1995-2011 Ford F350 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [ref=e531]
                  - generic [ref=e532]:
                    - link [ref=e533] [cursor=pointer]:
                      - /url: /products/1995-2011-ford-f350-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                      - heading "1995-2011 Ford F350 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=e534]
                    - link "On Sale" [ref=e535] [cursor=pointer]:
                      - /url: /products/1995-2011-ford-f350-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - generic [ref=e537]: $83.49
                    - generic [ref=e539]: "Hollander: 570-07030"
                    - generic [ref=e542]:
                      - generic [ref=e543]: 🚚
                      - button "Please Select State" [ref=e544] [cursor=pointer]
                    - generic [ref=e546]:
                      - button "1" [ref=e548] [cursor=pointer]
                      - button "Add To Cart" [ref=e552] [cursor=pointer]
              - group [ref=e553]:
                - generic [ref=e554]:
                  - generic [ref=e555]:
                    - button "Add to wishlist" [ref=e558] [cursor=pointer]
                    - link [ref=e561] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-steel-wheel-rim
                      - img "1999-2004 16x6 Ford F350SD Steel Wheel / Rim" [ref=e564]
                  - generic [ref=e565]:
                    - link [ref=e566] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-steel-wheel-rim
                      - heading "1999-2004 16x6 Ford F350SD Steel Wheel / Rim" [level=3] [ref=e567]
                    - link "10,032 All-Time Units Sold" [ref=e568] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-steel-wheel-rim
                    - generic [ref=e570]: $120.25
                    - generic [ref=e572]: "Hollander: 560-03336"
                    - generic [ref=e575]:
                      - generic [ref=e576]: 🚚
                      - button "Please Select State" [ref=e577] [cursor=pointer]
                    - generic [ref=e579]:
                      - button "1" [ref=e581] [cursor=pointer]
                      - button "Add To Cart" [ref=e585] [cursor=pointer]
              - group [ref=e586]:
                - generic [ref=e587]:
                  - generic [ref=e588]:
                    - button "Add to wishlist" [ref=e591] [cursor=pointer]
                    - link [ref=e594] [cursor=pointer]:
                      - /url: /products/2005-2024-17x6-5-ford-f350sd-steel-wheel-rim
                      - img "2005-2025 17x6.5 Ford F350SD Steel Wheel / Rim" [ref=e597]
                  - generic [ref=e598]:
                    - link [ref=e599] [cursor=pointer]:
                      - /url: /products/2005-2024-17x6-5-ford-f350sd-steel-wheel-rim
                      - heading "2005-2025 17x6.5 Ford F350SD Steel Wheel / Rim" [level=3] [ref=e600]
                    - link "10,435 All-Time Units Sold" [ref=e601] [cursor=pointer]:
                      - /url: /products/2005-2024-17x6-5-ford-f350sd-steel-wheel-rim
                    - generic [ref=e603]: $144.69
                    - generic [ref=e605]: "Hollander: 560-03615"
                    - generic [ref=e608]:
                      - generic [ref=e609]: 🚚
                      - button "Please Select State" [ref=e610] [cursor=pointer]
                    - generic [ref=e612]:
                      - button "1" [ref=e614] [cursor=pointer]
                      - button "Add To Cart" [ref=e618] [cursor=pointer]
              - group [ref=e619]:
                - generic [ref=e620]:
                  - generic [ref=e621]:
                    - button "Add to wishlist" [ref=e624] [cursor=pointer]
                    - link [ref=e627] [cursor=pointer]:
                      - /url: /products/2005-2023-18x8-ford-f350-steel-wheel-rim3
                      - img "2005-2023 18x8 Ford F350 Steel Wheel / Rim" [ref=e630]
                  - generic [ref=e631]:
                    - link [ref=e632] [cursor=pointer]:
                      - /url: /products/2005-2023-18x8-ford-f350-steel-wheel-rim3
                      - heading "2005-2023 18x8 Ford F350 Steel Wheel / Rim" [level=3] [ref=e633]
                    - link "1,401 All-Time Units Sold" [ref=e634] [cursor=pointer]:
                      - /url: /products/2005-2023-18x8-ford-f350-steel-wheel-rim3
                    - generic [ref=e636]: $165.39
                    - generic [ref=e638]: "Hollander: 560-10190"
                    - generic [ref=e641]:
                      - generic [ref=e642]: 🚚
                      - button "Please Select State" [ref=e643] [cursor=pointer]
                    - generic [ref=e645]:
                      - button "1" [ref=e647] [cursor=pointer]
                      - button "Add To Cart" [ref=e651] [cursor=pointer]
              - group [ref=e652]:
                - generic [ref=e653]:
                  - generic [ref=e654]:
                    - button "Add to wishlist" [ref=e657] [cursor=pointer]
                    - link [ref=e660] [cursor=pointer]:
                      - /url: /products/2023-2026-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim
                      - img "2023-2026 20x8 Ford F-350 SRW Genuine OEM Take-Off Alloy Wheel / Rim" [ref=e663]
                  - generic [ref=e664]:
                    - link [ref=e665] [cursor=pointer]:
                      - /url: /products/2023-2026-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim
                      - heading "2023-2026 20x8 Ford F-350 SRW Genuine OEM Take-Off Alloy Wheel / Rim" [level=3] [ref=e666]
                    - link "On Sale" [ref=e667] [cursor=pointer]:
                      - /url: /products/2023-2026-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim
                    - generic [ref=e669]: $330.20
                    - generic [ref=e671]: "Hollander: 560-10486"
                    - generic [ref=e673]:
                      - generic [ref=e674]: 🚚
                      - button "Please Select State" [ref=e675] [cursor=pointer]
                    - generic [ref=e677]:
                      - button "1" [ref=e679] [cursor=pointer]
                      - button "Add To Cart" [ref=e683] [cursor=pointer]
              - group [ref=e684]:
                - generic [ref=e685]:
                  - generic [ref=e686]:
                    - button "Add to wishlist" [ref=e689] [cursor=pointer]
                    - link [ref=e692] [cursor=pointer]:
                      - /url: /products/2023-2025-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim3
                      - img "2023-2025 20x8 Ford F-350 SRW Genuine OEM Take-Off Alloy Wheel / Rim" [ref=e695]
                  - generic [ref=e696]:
                    - link [ref=e697] [cursor=pointer]:
                      - /url: /products/2023-2025-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim3
                      - heading "2023-2025 20x8 Ford F-350 SRW Genuine OEM Take-Off Alloy Wheel / Rim" [level=3] [ref=e698]
                    - link "On Sale" [ref=e699] [cursor=pointer]:
                      - /url: /products/2023-2025-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim3
                    - generic [ref=e701]: $347.59
                    - generic [ref=e703]: "Hollander: 560-10487"
                    - generic [ref=e705]:
                      - generic [ref=e706]: 🚚
                      - button "Please Select State" [ref=e707] [cursor=pointer]
                    - generic [ref=e709]:
                      - button "1" [ref=e711] [cursor=pointer]
                      - button "Add To Cart" [ref=e715] [cursor=pointer]
              - group [ref=e716]:
                - generic [ref=e717]:
                  - generic [ref=e718]:
                    - button "Add to wishlist" [ref=e721] [cursor=pointer]
                    - link [ref=e724] [cursor=pointer]:
                      - /url: /products/2021-2026-ford-f-350-front-17x6-5-genuine-oem-alloy-wheel-rim
                      - img "2021-2026 Ford F-350 Front 17x6.5 Genuine OEM Alloy Wheel / Rim" [ref=e727]
                  - generic [ref=e728]:
                    - link [ref=e729] [cursor=pointer]:
                      - /url: /products/2021-2026-ford-f-350-front-17x6-5-genuine-oem-alloy-wheel-rim
                      - heading "2021-2026 Ford F-350 Front 17x6.5 Genuine OEM Alloy Wheel / Rim" [level=3] [ref=e730]
                    - link "New" [ref=e731] [cursor=pointer]:
                      - /url: /products/2021-2026-ford-f-350-front-17x6-5-genuine-oem-alloy-wheel-rim
                    - generic [ref=e733]: $379.10
                    - generic [ref=e735]: "Hollander: 560-10477"
                    - generic [ref=e738]:
                      - generic [ref=e739]: 🚚
                      - button "Please Select State" [ref=e740] [cursor=pointer]
                    - generic [ref=e742]:
                      - button "1" [ref=e744] [cursor=pointer]
                      - button "Add To Cart" [ref=e748] [cursor=pointer]
              - group [ref=e749]:
                - generic [ref=e750]:
                  - generic [ref=e751]:
                    - button "Add to wishlist" [ref=e754] [cursor=pointer]
                    - link [ref=e757] [cursor=pointer]:
                      - /url: /products/2010-2025-17x7-5-ford-f350sd-steel-wheel-rim
                      - img "2010-2025 17x7.5 Ford F350SD Steel Wheel / Rim" [ref=e760]
                  - generic [ref=e761]:
                    - link [ref=e762] [cursor=pointer]:
                      - /url: /products/2010-2025-17x7-5-ford-f350sd-steel-wheel-rim
                      - heading "2010-2025 17x7.5 Ford F350SD Steel Wheel / Rim" [level=3] [ref=e763]
                    - link "2,488 All-Time Units Sold" [ref=e764] [cursor=pointer]:
                      - /url: /products/2010-2025-17x7-5-ford-f350sd-steel-wheel-rim
                    - generic [ref=e766]: $147.42
                    - generic [ref=e768]: "Hollander: 560-03828A"
                    - generic [ref=e771]:
                      - generic [ref=e772]: 🚚
                      - button "Please Select State" [ref=e773] [cursor=pointer]
                    - generic [ref=e775]:
                      - button "1" [ref=e777] [cursor=pointer]
                      - button "Add To Cart" [ref=e781] [cursor=pointer]
              - group [ref=e782]:
                - generic [ref=e783]:
                  - generic [ref=e784]:
                    - button "Add to wishlist" [ref=e787] [cursor=pointer]
                    - link [ref=e790] [cursor=pointer]:
                      - /url: /products/1992-1997-16x7-ford-f350-steel-wheel-rim
                      - img "1992-1997 16x7 Ford F350 Steel Wheel / Rim" [ref=e793]
                  - generic [ref=e794]:
                    - link [ref=e795] [cursor=pointer]:
                      - /url: /products/1992-1997-16x7-ford-f350-steel-wheel-rim
                      - heading "1992-1997 16x7 Ford F350 Steel Wheel / Rim" [level=3] [ref=e796]
                    - link "On Sale" [ref=e797] [cursor=pointer]:
                      - /url: /products/1992-1997-16x7-ford-f350-steel-wheel-rim
                    - generic [ref=e799]: $103.06
                    - generic [ref=e801]: "Hollander: 560-03035"
                    - generic [ref=e804]:
                      - generic [ref=e805]: 🚚
                      - button "Please Select State" [ref=e806] [cursor=pointer]
                    - generic [ref=e808]:
                      - button "1" [ref=e810] [cursor=pointer]
                      - button "Add To Cart" [ref=e814] [cursor=pointer]
          - generic [ref=e815]:
            - button [ref=e816] [cursor=pointer]
            - button [ref=e819] [cursor=pointer]
      - generic [ref=e823]:
        - generic: "\""
        - generic: "\""
        - generic [ref=e824]:
          - generic [ref=e826]:
            - generic [ref=e827]:
              - blockquote [ref=e828]: “5 stars for super fast shipping. Another 5 stars for excellent packaging — rim arrived in great condition, no dents or scratches. Fits perfectly and has no issue clearing the caliper or steering components. A great experience; I wouldn't hesitate to use them again.”
              - separator [ref=e829]
              - generic [ref=e830]: B. Greasor
            - generic [ref=e831]:
              - blockquote [ref=e832]: “Ordered a set of rims and they came in pristine condition. Highly recommend this company.”
              - separator [ref=e833]
              - generic [ref=e834]: G. Fuller
            - generic [ref=e835]:
              - blockquote [ref=e836]: “The rim came in quick and looked great — no damage to it or the packaging. It matched the factory rims perfectly! I will be ordering here again when the time comes.”
              - separator [ref=e837]
              - generic [ref=e838]: A. Mini
            - generic [ref=e839]:
              - blockquote [ref=e840]: “Item received as described, shipped fast, and a spot-on match as far as looks and size. I will be looking for all my rims at Road Ready. Thank you!”
              - separator [ref=e841]
              - generic [ref=e842]: P. Rockland
            - generic [ref=e843]:
              - blockquote [ref=e844]: “Looks like the factory wheels at half the price!”
              - separator [ref=e845]
              - generic [ref=e846]: T. Thurman
            - generic [ref=e847]:
              - blockquote [ref=e848]: “Absolutely love them! They will be used as my 'winter wheels' here in the Buffalo, NY area.”
              - separator [ref=e849]
              - generic [ref=e850]: E. Bienas
            - generic [ref=e851]:
              - blockquote [ref=e852]: “Very quick and fast service — had exactly what I was looking for at a very reasonable price!”
              - separator [ref=e853]
              - generic [ref=e854]: C. Bock
            - generic [ref=e855]:
              - blockquote [ref=e856]: “Arrived quicker than expected and works fine on our Smart Car.”
              - separator [ref=e857]
              - generic [ref=e858]: Redbudok86
            - generic [ref=e859]:
              - blockquote [ref=e860]: “Wheels came as advertised. Opened the boxes the following week and found one damaged. Took a picture and sent to customer service — they delivered a replacement. I'll shop here again.”
              - separator [ref=e861]
              - generic [ref=e862]: Folgers4545
            - generic [ref=e863]:
              - blockquote [ref=e864]: “Great rims at a great price. The guys at the tire store insisted on checking balance before mounting — they were nearly perfect, better than most factory rims! One rim was damaged in shipment and RoadReady replaced it immediately, without waiting for the shipper to resolve the claim.”
              - separator [ref=e865]
              - generic [ref=e866]: WN4ISX
          - generic [ref=e867]:
            - button "Go to testimonial 1" [ref=e868] [cursor=pointer]
            - button "Go to testimonial 2" [ref=e869] [cursor=pointer]
            - button "Go to testimonial 3" [ref=e870] [cursor=pointer]
            - button "Go to testimonial 4" [ref=e871] [cursor=pointer]
            - button "Go to testimonial 5" [ref=e872] [cursor=pointer]
            - button "Go to testimonial 6" [ref=e873] [cursor=pointer]
            - button "Go to testimonial 7" [ref=e874] [cursor=pointer]
            - button "Go to testimonial 8" [ref=e875] [cursor=pointer]
            - button "Go to testimonial 9" [ref=e876] [cursor=pointer]
            - button "Go to testimonial 10" [ref=e877] [cursor=pointer]
      - generic [ref=e878]:
        - generic [ref=e881]:
          - generic [ref=e882]:
            - img "Wheels sold" [ref=e884]
            - generic [ref=e885]: 1,000,000wheels sold
          - generic [ref=e886]:
            - img "Shipments on time" [ref=e888]
            - generic [ref=e889]: 99% of shipmentson time
          - generic [ref=e890]:
            - img "Customers back on the road" [ref=e892]
            - generic [ref=e893]: 500,000 customersback on the road
          - generic [ref=e894]:
            - img "24 hour fulfillment" [ref=e896]
            - generic [ref=e897]: 24 hour fulfillmentturnaround
          - generic [ref=e898]:
            - img "Strong carton packaging" [ref=e900]
            - generic [ref=e901]: Strong cartonpackaging
          - generic [ref=e902]:
            - img "Insurance grade verified" [ref=e904]
            - generic [ref=e905]: Insurance gradeverified
          - generic [ref=e906]:
            - img "Free shipping" [ref=e908]
            - generic [ref=e909]: Free shippingon all orders
          - generic [ref=e910]:
            - img "1-Year Warranty" [ref=e912]
            - generic [ref=e913]: 1-YearWarranty
          - generic [ref=e914]:
            - img "Quality tested and DOT approved" [ref=e916]
            - generic [ref=e917]: Quality tested andDOT approved
        - generic [ref=e920]:
          - generic [ref=e921]:
            - heading "Shipping Information" [level=4] [ref=e922]
            - generic [ref=e923]:
              - paragraph [ref=e924]: "Road Ready Wheels is committed to fulfilling customer orders as quickly as possible for your convenience. Below is detailed information about our shipping processes:"
              - generic [ref=e925]:
                - heading "Same-Day and Next-Day Shipping" [level=5] [ref=e926]
                - list [ref=e927]:
                  - listitem [ref=e928]:
                    - strong [ref=e929]: "Same-Day Shipping Cut-Off:"
                    - text: Orders placed by 1:30 PM CST will ship the same business day. Orders placed after 1:30 PM CST will ship the next business day.
                  - listitem [ref=e930]:
                    - strong [ref=e931]: "Weekend Orders:"
                    - text: Orders placed on Friday after 1:30 PM CST, Saturday, or Sunday will be shipped on the following Monday. This excludes federal or national holidays when our warehouses are closed.
              - button "See More" [ref=e932] [cursor=pointer]
          - generic [ref=e933]:
            - heading "Warranty Information" [level=4] [ref=e934]
            - generic [ref=e935]:
              - paragraph [ref=e936]: At Road Ready Wheels, we stand behind the quality of our products. All wheels sold on our website are covered by a one-year warranty from the original date of purchase. This warranty ensures that the wheels are free from defects in materials and workmanship and are in full functioning condition.
              - button "See More" [ref=e937] [cursor=pointer]
      - generic [ref=e939]:
        - generic [ref=e940]:
          - generic [ref=e941]:
            - heading "Will this rim fit my tire?" [level=2] [ref=e942]
            - paragraph [ref=e943]: "That's a great question. An easy way to answer this is by looking at your tire and finding the letter \"R\". For example:"
            - generic [ref=e944]:
              - generic [ref=e945]:
                - generic [ref=e947]: R14
                - generic [ref=e948]: = 14" Tire (fits a 14" rim)
              - generic [ref=e949]:
                - generic [ref=e951]: R15
                - generic [ref=e952]: = 15" Tire (fits a 15" rim)
              - generic [ref=e953]:
                - generic [ref=e955]: R16
                - generic [ref=e956]: = 16" Tire (fits a 16" rim)
              - generic [ref=e957]:
                - generic [ref=e959]: R17
                - generic [ref=e960]: = 17" Tire (fits a 17" rim)
              - generic [ref=e961]:
                - generic [ref=e963]: R18
                - generic [ref=e964]: = 18" Tire (fits a 18" rim)
              - generic [ref=e965]:
                - generic [ref=e967]: R19
                - generic [ref=e968]: = 19" Tire (fits a 19" rim)
              - generic [ref=e969]:
                - generic [ref=e971]: R20
                - generic [ref=e972]: = 20" Tire (fits a 20" rim)
              - generic [ref=e973]:
                - generic [ref=e975]: R22
                - generic [ref=e976]: = 22" Tire (fits a 22" rim)
          - img "Stack of tires" [ref=e978]
        - generic [ref=e979]:
          - img "Wheel close-up" [ref=e981]
          - generic [ref=e982]:
            - heading "Assurance of Quality and Value" [level=2] [ref=e983]
            - paragraph [ref=e984]: At Road Ready Wheels, we understand the importance of offering a single, specialized product at an unparalleled level of quality and value. To achieve this, we have meticulously researched and partnered with the most reputable suppliers in the industry. After extensive efforts, we have identified and collaborated with 24 distinguished manufacturers across 10 countries. These partnerships enable us to deliver premium-grade wheels at the most competitive prices available on the market.
            - heading "Guaranteed Compatibility" [level=3] [ref=e985]
            - paragraph [ref=e986]: Road Ready Wheels products are engineered to meet and exceed OEM (Original Equipment Manufacturer) specifications. They are designed to integrate seamlessly with key components, including hubcaps, center caps, TPMS sensors, tires, and lug nuts, ensuring dependable performance and optimal fit for your vehicle.
      - generic [ref=e987]:
        - generic [ref=e988]:
          - heading "Road Ready Overall Ratings and Reviews" [level=2] [ref=e989]
          - separator [ref=e990]
        - generic [ref=e992]:
          - generic [ref=e995]:
            - generic [ref=e996]: 1,873 Reviews
            - generic [ref=e1009]: 4.7 out of 5 stars
            - generic [ref=e1011]:
              - generic [ref=e1012]:
                - generic [ref=e1013]: 5 Stars
                - generic [ref=e1016]: 88%
              - generic [ref=e1017]:
                - generic [ref=e1018]: 4 Stars
                - generic [ref=e1021]: 5%
              - generic [ref=e1022]:
                - generic [ref=e1023]: 3 Stars
                - generic [ref=e1026]: 2%
              - generic [ref=e1027]:
                - generic [ref=e1028]: 2 Stars
                - generic [ref=e1031]: 2%
              - generic [ref=e1032]:
                - generic [ref=e1033]: 1 Stars
                - generic [ref=e1036]: 3%
          - generic [ref=e1037]:
            - generic [ref=e1038]:
              - generic [ref=e1040]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1042]
                - generic [ref=e1043]:
                  - generic [ref=e1055]:
                    - generic [ref=e1056]:
                      - text: "5"
                      - generic [ref=e1057]: ★
                    - link [ref=e1058] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1059]
                  - paragraph [ref=e1060]: Had Discount Tire do the work unmount the tire from the original 2003 F350 23-year-old rims. The attendant made a point to comment of how well balanced they are, took little to no weights to balance.
                  - generic [ref=e1061]:
                    - generic [ref=e1062]: RKDuet
                    - generic [ref=e1063]:
                      - generic [ref=e1067]: Certified Buyer
                      - generic [ref=e1068]: •
                      - generic [ref=e1069]: August 3, 2026
                  - paragraph [ref=e1074]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1076]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1078]
                - generic [ref=e1079]:
                  - generic [ref=e1091]:
                    - generic [ref=e1092]:
                      - text: "5"
                      - generic [ref=e1093]: ★
                    - link [ref=e1094] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1095]
                  - paragraph [ref=e1096]: Great wheels
                  - generic [ref=e1097]:
                    - generic [ref=e1098]: Hank
                    - generic [ref=e1099]:
                      - generic [ref=e1103]: Certified Buyer
                      - generic [ref=e1104]: •
                      - generic [ref=e1105]: April 9, 2026
                  - paragraph [ref=e1110]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1112]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1114]
                - generic [ref=e1115]:
                  - generic [ref=e1127]:
                    - generic [ref=e1128]:
                      - text: "5"
                      - generic [ref=e1129]: ★
                    - link [ref=e1130] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1131]
                  - paragraph [ref=e1132]: Reasonably priced
                  - generic [ref=e1133]:
                    - generic [ref=e1134]: Marcus McSpadden
                    - generic [ref=e1135]:
                      - generic [ref=e1139]: Certified Buyer
                      - generic [ref=e1140]: •
                      - generic [ref=e1141]: March 20, 2026
                  - paragraph [ref=e1146]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1148]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1150]
                - generic [ref=e1151]:
                  - generic [ref=e1163]:
                    - generic [ref=e1164]:
                      - text: "5"
                      - generic [ref=e1165]: ★
                    - link [ref=e1166] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1167]
                  - paragraph [ref=e1168]: Looks great thank you
                  - generic [ref=e1169]:
                    - generic [ref=e1170]: Guest
                    - generic [ref=e1171]:
                      - generic [ref=e1175]: Certified Buyer
                      - generic [ref=e1176]: •
                      - generic [ref=e1177]: January 28, 2026
                  - paragraph [ref=e1182]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1184]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1186]
                - generic [ref=e1187]:
                  - generic [ref=e1199]:
                    - generic [ref=e1200]:
                      - text: "5"
                      - generic [ref=e1201]: ★
                    - link [ref=e1202] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1203]
                  - paragraph [ref=e1204]: So far so good
                  - generic [ref=e1205]:
                    - generic [ref=e1206]: Guest
                    - generic [ref=e1207]:
                      - generic [ref=e1211]: Certified Buyer
                      - generic [ref=e1212]: •
                      - generic [ref=e1213]: December 4, 2025
                  - paragraph [ref=e1218]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1220]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1222]
                - generic [ref=e1223]:
                  - generic [ref=e1235]:
                    - generic [ref=e1236]:
                      - text: "5"
                      - generic [ref=e1237]: ★
                    - link [ref=e1238] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1239]
                  - paragraph [ref=e1240]: 5 Stars
                  - generic [ref=e1241]:
                    - generic [ref=e1242]: Douglas
                    - generic [ref=e1243]:
                      - generic [ref=e1247]: Certified Buyer
                      - generic [ref=e1248]: •
                      - generic [ref=e1249]: July 29, 2025
                  - paragraph [ref=e1254]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1256]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1258]
                - generic [ref=e1259]:
                  - generic [ref=e1271]:
                    - generic [ref=e1272]:
                      - text: "5"
                      - generic [ref=e1273]: ★
                    - link [ref=e1274] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1275]
                  - paragraph [ref=e1276]: Great rims!! Fit perfectly on truck.
                  - generic [ref=e1277]:
                    - generic [ref=e1278]: Guest
                    - generic [ref=e1279]:
                      - generic [ref=e1283]: Certified Buyer
                      - generic [ref=e1284]: •
                      - generic [ref=e1285]: June 11, 2025
                  - paragraph [ref=e1290]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1292]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1294]
                - generic [ref=e1295]:
                  - generic [ref=e1307]:
                    - generic [ref=e1308]:
                      - text: "5"
                      - generic [ref=e1309]: ★
                    - link [ref=e1310] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1311]
                  - paragraph [ref=e1312]: What a great company!! I ordered a rim over the holiday weekend and received it the same week. Like I said Great company. fast service.
                  - generic [ref=e1313]:
                    - generic [ref=e1314]: Travis
                    - generic [ref=e1315]:
                      - generic [ref=e1319]: Certified Buyer
                      - generic [ref=e1320]: •
                      - generic [ref=e1321]: May 27, 2025
                  - paragraph [ref=e1326]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1328]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1330]
                - generic [ref=e1331]:
                  - generic [ref=e1343]:
                    - generic [ref=e1344]:
                      - text: "5"
                      - generic [ref=e1345]: ★
                    - link [ref=e1346] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1347]
                  - paragraph [ref=e1348]: Delivered on time
                  - generic [ref=e1349]:
                    - generic [ref=e1350]: Black's Tire and Service
                    - generic [ref=e1351]:
                      - generic [ref=e1355]: Certified Buyer
                      - generic [ref=e1356]: •
                      - generic [ref=e1357]: April 24, 2025
                  - paragraph [ref=e1362]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1364]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1366]
                - generic [ref=e1367]:
                  - generic [ref=e1379]:
                    - generic [ref=e1380]:
                      - text: "5"
                      - generic [ref=e1381]: ★
                    - link [ref=e1382] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1383]
                  - paragraph [ref=e1384]: Delivered early
                  - generic [ref=e1385]:
                    - generic [ref=e1386]: Rick
                    - generic [ref=e1387]:
                      - generic [ref=e1391]: Certified Buyer
                      - generic [ref=e1392]: •
                      - generic [ref=e1393]: February 7, 2025
                  - paragraph [ref=e1398]: Reply from Road Ready Team :Thanks for your feedback
            - button "Load More" [ref=e1400] [cursor=pointer]
    - generic [ref=e1402] [cursor=pointer]:
      - generic [ref=e1403]: ↑
      - generic [ref=e1404]: Back to Top
```

# Test source

```ts
  26  | 
  27  |   test(
  28  |     'should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation',
  29  |     async ({
  30  |       categoriesPage,
  31  |       productPage,
  32  |       cartPage,
  33  |       addressPage,
  34  |       checkoutReviewPage,
  35  |       orderConfirmationPage,
  36  |     }) => {
  37  |       test.setTimeout(120000); // this test does 13 steps across ~6 pages — 60s default is too tight
  38  | 
  39  |       let unitPrice = 0;
  40  |       let finalQuantity = 0;
  41  | 
  42  |       // --------------------------------------------------
  43  |       // 1. Search product and open PDP
  44  |       // --------------------------------------------------
  45  | 
  46  |       await test.step(
  47  |         'Search for product and open PDP',
  48  |         async () => {
  49  |           await categoriesPage.searchFor('560-64127');
  50  | 
  51  |           await categoriesPage.page.waitForTimeout(5000);
  52  | 
  53  |           await categoriesPage.clickSearch();
  54  | 
  55  |           await categoriesPage.clickFirstProduct();
  56  | 
  57  |           await expect(productPage.page).toHaveURL(
  58  |             /.*\/products\/.*/i
  59  |           );
  60  |         }
  61  |       );
  62  | 
  63  |       // --------------------------------------------------
  64  |       // 2. Get dynamic product price
  65  |       // --------------------------------------------------
  66  | 
  67  |       await test.step(
  68  |         'Verify PDP price',
  69  |         async () => {
  70  |           const priceText =
  71  |             await productPage.getPriceText();
  72  | 
  73  |           unitPrice = Number(
  74  |             priceText.replace(/[$,]/g, '').trim()
  75  |           );
  76  | 
  77  |           console.log('Unit price:', unitPrice);
  78  | 
  79  |           expect(priceText).toContain('$');
  80  | 
  81  |           expect(unitPrice).toBeGreaterThan(0);
  82  |         }
  83  |       );
  84  | 
  85  |       // --------------------------------------------------
  86  |       // 3. Add product to cart
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
  97  |       // 4. Change quantity dynamically
  98  |       // --------------------------------------------------
  99  | 
  100 |       await test.step(
  101 |         'Update quantity in cart',
  102 |         async () => {
  103 |           const currentQuantity =
  104 |             await cartPage.getQuantity();
  105 | 
  106 |           console.log(
  107 |             'Quantity before toggle:',
  108 |             currentQuantity
  109 |           );
  110 | 
  111 |           await cartPage.toggleQuantity();
  112 | 
  113 |           finalQuantity =
  114 |             await cartPage.getQuantity();
  115 | 
  116 |           console.log(
  117 |             'Quantity after toggle:',
  118 |             finalQuantity
  119 |           );
  120 | 
  121 |           // Quantity must change by exactly 1
  122 |           expect(
  123 |             Math.abs(
  124 |               finalQuantity - currentQuantity
  125 |             )
> 126 |           ).toBe(1);
      |             ^ Error: expect(received).toBe(expected) // Object.is equality
  127 | 
  128 |           expect(finalQuantity).toBeGreaterThan(0);
  129 |         }
  130 |       );
  131 | 
  132 |       // --------------------------------------------------
  133 |       // 5. Proceed to checkout
  134 |       // --------------------------------------------------
  135 | 
  136 |       await test.step(
  137 |         'Proceed to checkout',
  138 |         async () => {
  139 |           await cartPage.clickCompleteCheckout();
  140 | 
  141 |           await cartPage.page.waitForTimeout(2000);
  142 | 
  143 |           await cartPage.dismissRebillPOModal();
  144 |         }
  145 |       );
  146 | 
  147 |       // --------------------------------------------------
  148 |       // 6. Complete address
  149 |       // --------------------------------------------------
  150 | 
  151 |       await test.step(
  152 |         'Complete shipping address',
  153 |         async () => {
  154 |           await addressPage.completeAddress();
  155 |         }
  156 |       );
  157 | 
  158 |       // --------------------------------------------------
  159 |       // 7. Reach Review page
  160 |       // --------------------------------------------------
  161 | 
  162 |       await test.step(
  163 |         'Reach checkout review page',
  164 |         async () => {
  165 |           await checkoutReviewPage.page.waitForURL(
  166 |             /.*checkout\/review.*/i,
  167 |             {
  168 |               timeout: 15000,
  169 |             }
  170 |           );
  171 |         }
  172 |       );
  173 | 
  174 |       // --------------------------------------------------
  175 |       // 8. Select shipping dynamically
  176 |       // --------------------------------------------------
  177 | 
  178 |     await test.step('Select available shipping option', async () => {
  179 |   const shippingLabel = await checkoutReviewPage.selectAvailableShippingOption();
  180 |   console.log('Selected shipping option:', shippingLabel);
  181 | 
  182 |   // Tax/Total recalculate hone ka poora time do
  183 |   await checkoutReviewPage.page.waitForTimeout(3000);
  184 | });
  185 | 
  186 |       // --------------------------------------------------
  187 |       // 9. Verify all calculations dynamically
  188 |       // --------------------------------------------------
  189 | 
  190 |       let expectedTotal = 0;
  191 |       let expectedSubtotal = 0;
  192 | 
  193 |       await test.step(
  194 |         'Verify subtotal, shipping, tax and total calculation',
  195 |         async () => {
  196 |           // waitForTotalsToSettle only reads subtotal + total (the two
  197 |           // rows that have proven reliable every run) and derives the
  198 |           // combined tax+shipping mathematically — tax/shipping recalculate
  199 |           // asynchronously after shipping selection and were blowing past
  200 |           // 8-15s waits on staging even when correctly scoped, which is a
  201 |           // real backend delay, not something a locator fix can solve.
  202 |           const { subtotal, taxPlusShipping, total } =
  203 |             await checkoutReviewPage.waitForTotalsToSettle(
  204 |               unitPrice,
  205 |               finalQuantity
  206 |             );
  207 | 
  208 |           console.log('--------------------------------');
  209 |           console.log('Unit price:', unitPrice);
  210 |           console.log('Quantity:', finalQuantity);
  211 |           console.log('Subtotal:', subtotal);
  212 |           console.log('Tax + Shipping (derived):', taxPlusShipping);
  213 |           console.log('Total:', total);
  214 |           console.log('--------------------------------');
  215 | 
  216 |           expectedSubtotal = Number(
  217 |             (unitPrice * finalQuantity).toFixed(2)
  218 |           );
  219 |           expectedTotal = total; // total is read directly and trusted as-is
  220 | 
  221 |           console.log('Expected subtotal:', expectedSubtotal);
  222 |         }
  223 |       );
  224 | 
  225 |       // --------------------------------------------------
  226 |       // 10. Continue to Payment
```