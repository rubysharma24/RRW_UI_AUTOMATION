# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Vehiclefitmentsearch.spec.ts >> Vehicle Fitment Search - End to End >> should search two vehicles, reset between them, and notify me for an out-of-stock result
- Location: tests\Vehiclefitmentsearch.spec.ts:11:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('We will notify you when the')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('We will notify you when the') with timeout 10000ms
  - waiting for getByText('We will notify you when the')
  - Test timeout of 60000ms exceeded.

```

```yaml
- region "Notifications Alt+T"
- alert: 2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim - Road Ready Wheels
- iframe
- banner:
  - link "ROADREADY":
    - /url: /
  - combobox "Search category":
    - option "Search All" [selected]
    - option "Hollander"
    - option "OE#"
  - textbox "Search for wheels":
    - /placeholder: Search globally for make, model, part number... . . .
  - button "Search" [disabled]
  - button "Resale"
  - button "Wholesale"
  - button "Select State":
    - img
    - text: Select State
  - text: "|"
  - button:
    - img
    - img
  - text: "|"
  - button "Cart is empty" [disabled]:
    - img
- heading "Your Cart 0 items" [level=2]
- button "Close cart":
  - img
- paragraph: Your cart is empty
- banner:
  - text: Browse By Vehicle
  - combobox "Select Make"
  - text: Select Make
  - combobox "Select Model" [disabled]
  - text: Select Model
  - combobox "Select Year" [disabled]
  - text: Select Year
  - button "Search"
  - text: Browse All Wheels
  - button "By Category"
  - button "Top Brands"
  - button "Featured Items"
- heading "Your Cart 0 items" [level=2]
- button "Close cart":
  - img
- paragraph: Your cart is empty
- paragraph: 2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim
- text: $351.90
- button "Notify Me"
- navigation:
  - button "Cadillac"
  - text: ">"
  - button "Escalade"
  - text: "> 2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim"
- img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim"
- button:
  - img
- button:
  - img
- text: On Sale
- button [disabled]:
  - img
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 1":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 1"
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 2":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 2"
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 3":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 3"
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 4":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 4"
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 5":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 5"
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 6":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 6"
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 7":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 7"
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 8":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 8"
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 9":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 9"
- button "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 10":
  - img "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim view 10"
- button:
  - img
- table:
  - rowgroup:
    - row "Condition New":
      - cell "Condition"
      - cell "New"
    - row "Brand Road Ready":
      - cell "Brand"
      - cell "Road Ready"
    - row "Hollander 560-05698":
      - cell "Hollander"
      - cell "560-05698"
    - row "OEM Part Number(s) 20937765":
      - cell "OEM Part Number(s)"
      - cell "20937765"
    - row "Vehicle Fitment Cadillac Escalade":
      - cell "Vehicle Fitment"
      - cell "Cadillac Escalade"
    - row "Type OEM Replacement Wheel":
      - cell "Type"
      - cell "OEM Replacement Wheel"
    - row "Material Alloy":
      - cell "Material"
      - cell "Alloy"
    - row "Years of fitment 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023":
      - cell "Years of fitment"
      - cell "2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023"
    - row "Diameter 20\"":
      - cell "Diameter"
      - cell "20\""
    - row "Width 9″":
      - cell "Width"
      - cell "9″"
    - row "Gross Weight 41":
      - cell "Gross Weight"
      - cell "41"
    - row "Color Silver":
      - cell "Color"
      - cell "Silver"
    - row "Bolt Pattern 6x139.7mm or 6x5.5\"":
      - cell "Bolt Pattern"
      - cell "6x139.7mm or 6x5.5\""
    - row "Offset 27mm":
      - cell "Offset"
      - cell "27mm"
    - row "Center Bore 78.1mm":
      - cell "Center Bore"
      - cell "78.1mm"
    - row "Finish Polished":
      - cell "Finish"
      - cell "Polished"
    - row "Lug Nut Thread Size M14 x 1.5":
      - cell "Lug Nut Thread Size"
      - cell "M14 x 1.5"
    - row "Tire Pressure (PSI) 36.2":
      - cell "Tire Pressure (PSI)"
      - cell "36.2"
    - row "UPC 198038131312":
      - cell "UPC"
      - cell "198038131312"
- heading "2015-2023 Cadillac Escalade 20x9 Alloy Wheel / Rim" [level=1]
- img "Year range arrow"
- text: 2015 2023
- link "See Product Details":
  - /url: "#product-details-tabs"
- text: $351.90
- button "Notify Me"
- heading "Customers Who Viewed This Item Also Viewed" [level=2]
- region:
  - group:
    - button "Add to wishlist":
      - img
    - link "2015-2023 Cadillac Escalade 22x9 Painted Hyper Silver Alloy Rims - Set of 4 Wheels":
      - /url: /products/2015-2023-cadillac-escalade-22x9-painted-hyper-silver-alloy-rims-set-of-4-wheels
      - img "2015-2023 Cadillac Escalade 22x9 Painted Hyper Silver Alloy Rims - Set of 4 Wheels"
    - link "2015-2023 Cadillac Escalade 22x9 Painted Hyper Silver Alloy Rims - Set of 4 Wheels":
      - /url: /products/2015-2023-cadillac-escalade-22x9-painted-hyper-silver-alloy-rims-set-of-4-wheels
      - heading "2015-2023 Cadillac Escalade 22x9 Painted Hyper Silver Alloy Rims - Set of 4 Wheels" [level=3]
    - link "On Sale":
      - /url: /products/2015-2023-cadillac-escalade-22x9-painted-hyper-silver-alloy-rims-set-of-4-wheels
    - text: "$1,297.84 Hollander: G-4P-100-0259 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
  - group:
    - button "Add to wishlist":
      - img
    - link "2014-2023 Cadillac Escalade 22x9 Alloy Wheel / Rim":
      - /url: /products/2014-2023-22x9-cadillac-escalade-aluminum-wheel-rim
      - img "2014-2023 Cadillac Escalade 22x9 Alloy Wheel / Rim"
    - link "2014-2023 Cadillac Escalade 22x9 Alloy Wheel / Rim":
      - /url: /products/2014-2023-22x9-cadillac-escalade-aluminum-wheel-rim
      - heading "2014-2023 Cadillac Escalade 22x9 Alloy Wheel / Rim" [level=3]
    - link "175 All-Time Units Sold":
      - /url: /products/2014-2023-22x9-cadillac-escalade-aluminum-wheel-rim
    - text: "$296.42 Hollander: 560-05668 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
  - group:
    - button "Add to wishlist":
      - img
    - link "2007-2020 17x7.5 Cadillac Escalade ESV Steel Wheel / Rim":
      - /url: /products/2007-2020-17x7-5-cadillac-escalade-esv-steel-wheel-rim
      - img "2007-2020 17x7.5 Cadillac Escalade ESV Steel Wheel / Rim"
    - link "2007-2020 17x7.5 Cadillac Escalade ESV Steel Wheel / Rim":
      - /url: /products/2007-2020-17x7-5-cadillac-escalade-esv-steel-wheel-rim
      - heading "2007-2020 17x7.5 Cadillac Escalade ESV Steel Wheel / Rim" [level=3]
    - link "2,319 All-Time Units Sold":
      - /url: /products/2007-2020-17x7-5-cadillac-escalade-esv-steel-wheel-rim
    - text: "$112.74 Hollander: 560-08072 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
  - group:
    - button "Add to wishlist":
      - img
    - link "2014-2020 Cadillac Escalade 17x8 Steel Wheel / Rim":
      - /url: /products/2014-2020-17x8-cadillac-escalade-steel-wheel-rim1
      - img "2014-2020 Cadillac Escalade 17x8 Steel Wheel / Rim"
    - link "2014-2020 Cadillac Escalade 17x8 Steel Wheel / Rim":
      - /url: /products/2014-2020-17x8-cadillac-escalade-steel-wheel-rim1
      - heading "2014-2020 Cadillac Escalade 17x8 Steel Wheel / Rim" [level=3]
    - link "281 All-Time Units Sold":
      - /url: /products/2014-2020-17x8-cadillac-escalade-steel-wheel-rim1
    - text: "$157.12 Hollander: 560-08111 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
  - group:
    - button "Add to wishlist":
      - img
    - link "2015-2020 22x9 Cadillac Escalade ESV Chrome Wheel/Rim":
      - /url: /products/2015-2020-22x9-cadillac-escalade-esv-chrome-wheel-rim
      - img "2015-2020 22x9 Cadillac Escalade ESV Chrome Wheel/Rim"
    - link "2015-2020 22x9 Cadillac Escalade ESV Chrome Wheel/Rim":
      - /url: /products/2015-2020-22x9-cadillac-escalade-esv-chrome-wheel-rim
      - heading "2015-2020 22x9 Cadillac Escalade ESV Chrome Wheel/Rim" [level=3]
    - link "366 All-Time Units Sold":
      - /url: /products/2015-2020-22x9-cadillac-escalade-esv-chrome-wheel-rim
    - text: "$402.16 Hollander: 560-05666 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
  - group:
    - button "Add to wishlist":
      - img
    - link "2007-2013 22 x 9 Cadillac Escalade EXT Chrome Wheel / Rim":
      - /url: /products/2007-2013-22-x-9-cadillac-escalade-ext-chrome-wheel-rim
      - img "2007-2013 22 x 9 Cadillac Escalade EXT Chrome Wheel / Rim"
    - link "2007-2013 22 x 9 Cadillac Escalade EXT Chrome Wheel / Rim":
      - /url: /products/2007-2013-22-x-9-cadillac-escalade-ext-chrome-wheel-rim
      - heading "2007-2013 22 x 9 Cadillac Escalade EXT Chrome Wheel / Rim" [level=3]
    - link "668 All-Time Units Sold":
      - /url: /products/2007-2013-22-x-9-cadillac-escalade-ext-chrome-wheel-rim
    - text: "$351.07 Hollander: 560-05309A 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
  - group:
    - button "Add to wishlist":
      - img
    - link "2023-2026 Cadillac Escalade 22x9 Alloy Wheel / Rim":
      - /url: /products/2023-2026-22x9-cadillac-escalade-alloy-wheel-rim
      - img "2023-2026 Cadillac Escalade 22x9 Alloy Wheel / Rim"
    - link "2023-2026 Cadillac Escalade 22x9 Alloy Wheel / Rim":
      - /url: /products/2023-2026-22x9-cadillac-escalade-alloy-wheel-rim
      - heading "2023-2026 Cadillac Escalade 22x9 Alloy Wheel / Rim" [level=3]
    - link "New":
      - /url: /products/2023-2026-22x9-cadillac-escalade-alloy-wheel-rim
    - text: "$257.82 Hollander: 560-04883 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
  - group:
    - button "Add to wishlist":
      - img
    - link "2023-2024 Cadillac Escalade 22x9 Alloy Wheel / Rim":
      - /url: /products/2023-2024-22x9-cadillac-escalade-aluminum-wheel-rim
      - img "2023-2024 Cadillac Escalade 22x9 Alloy Wheel / Rim"
    - link "2023-2024 Cadillac Escalade 22x9 Alloy Wheel / Rim":
      - /url: /products/2023-2024-22x9-cadillac-escalade-aluminum-wheel-rim
      - heading "2023-2024 Cadillac Escalade 22x9 Alloy Wheel / Rim" [level=3]
    - link "On Sale":
      - /url: /products/2023-2024-22x9-cadillac-escalade-aluminum-wheel-rim
    - text: "$285.80 Hollander: 560-04883 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
  - group:
    - button "Add to wishlist":
      - img
    - link "2015-2020 17x8 Cadillac Escalade Genuine OEM Steel Wheel / Rim":
      - /url: /products/2015-2020-17x8-cadillac-escalade-genuine-oem-steel-wheel-rim2
      - img "2015-2020 17x8 Cadillac Escalade Genuine OEM Steel Wheel / Rim"
    - link "2015-2020 17x8 Cadillac Escalade Genuine OEM Steel Wheel / Rim":
      - /url: /products/2015-2020-17x8-cadillac-escalade-genuine-oem-steel-wheel-rim2
      - heading "2015-2020 17x8 Cadillac Escalade Genuine OEM Steel Wheel / Rim" [level=3]
    - link "On Sale":
      - /url: /products/2015-2020-17x8-cadillac-escalade-genuine-oem-steel-wheel-rim2
    - text: "$132.42 Hollander: 560-05659 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
  - group:
    - button "Add to wishlist":
      - img
    - link "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim":
      - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
      - img "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim"
    - link "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim":
      - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
      - heading "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim" [level=3]
    - link "672 All-Time Units Sold":
      - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
    - text: "$351.07 Hollander: 560-05309A 🚚"
    - button "Please Select State"
    - button "1":
      - text: "1"
      - img
    - button "Add To Cart"
- button:
  - img
- button:
  - img
- text: "\" \""
- blockquote: “5 stars for super fast shipping. Another 5 stars for excellent packaging — rim arrived in great condition, no dents or scratches. Fits perfectly and has no issue clearing the caliper or steering components. A great experience; I wouldn't hesitate to use them again.”
- separator
- text: B. Greasor
- blockquote: “Ordered a set of rims and they came in pristine condition. Highly recommend this company.”
- separator
- text: G. Fuller
- blockquote: “The rim came in quick and looked great — no damage to it or the packaging. It matched the factory rims perfectly! I will be ordering here again when the time comes.”
- separator
- text: A. Mini
- blockquote: “Item received as described, shipped fast, and a spot-on match as far as looks and size. I will be looking for all my rims at Road Ready. Thank you!”
- separator
- text: P. Rockland
- blockquote: “Looks like the factory wheels at half the price!”
- separator
- text: T. Thurman
- blockquote: “Absolutely love them! They will be used as my 'winter wheels' here in the Buffalo, NY area.”
- separator
- text: E. Bienas
- blockquote: “Very quick and fast service — had exactly what I was looking for at a very reasonable price!”
- separator
- text: C. Bock
- blockquote: “Arrived quicker than expected and works fine on our Smart Car.”
- separator
- text: Redbudok86
- blockquote: “Wheels came as advertised. Opened the boxes the following week and found one damaged. Took a picture and sent to customer service — they delivered a replacement. I'll shop here again.”
- separator
- text: Folgers4545
- blockquote: “Great rims at a great price. The guys at the tire store insisted on checking balance before mounting — they were nearly perfect, better than most factory rims! One rim was damaged in shipment and RoadReady replaced it immediately, without waiting for the shipper to resolve the claim.”
- separator
- text: WN4ISX
- button "Go to testimonial 1"
- button "Go to testimonial 2"
- button "Go to testimonial 3"
- button "Go to testimonial 4"
- button "Go to testimonial 5"
- button "Go to testimonial 6"
- button "Go to testimonial 7"
- button "Go to testimonial 8"
- button "Go to testimonial 9"
- button "Go to testimonial 10"
- img "Wheels sold"
- text: 1,000,000 wheels sold
- img "Shipments on time"
- text: 99% of shipments on time
- img "Customers back on the road"
- text: 500,000 customers back on the road
- img "24 hour fulfillment"
- text: 24 hour fulfillment turnaround
- img "Strong carton packaging"
- text: Strong carton packaging
- img "Insurance grade verified"
- text: Insurance grade verified
- img "Free shipping"
- text: Free shipping on all orders
- img "1-Year Warranty"
- text: 1-Year Warranty
- img "Quality tested and DOT approved"
- text: Quality tested and DOT approved
- heading "Shipping Information" [level=4]
- paragraph: "Road Ready Wheels is committed to fulfilling customer orders as quickly as possible for your convenience. Below is detailed information about our shipping processes:"
- heading "Same-Day and Next-Day Shipping" [level=5]
- list:
  - listitem:
    - strong: "Same-Day Shipping Cut-Off:"
    - text: Orders placed by 1:30 PM CST will ship the same business day. Orders placed after 1:30 PM CST will ship the next business day.
  - listitem:
    - strong: "Weekend Orders:"
    - text: Orders placed on Friday after 1:30 PM CST, Saturday, or Sunday will be shipped on the following Monday. This excludes federal or national holidays when our warehouses are closed.
- button "See More"
- heading "Warranty Information" [level=4]
- paragraph: At Road Ready Wheels, we stand behind the quality of our products. All wheels sold on our website are covered by a one-year warranty from the original date of purchase. This warranty ensures that the wheels are free from defects in materials and workmanship and are in full functioning condition.
- button "See More"
- heading "Will this rim fit my tire?" [level=2]
- paragraph: "That's a great question. An easy way to answer this is by looking at your tire and finding the letter \"R\". For example:"
- text: R14 = 14" Tire (fits a 14" rim) R15 = 15" Tire (fits a 15" rim) R16 = 16" Tire (fits a 16" rim) R17 = 17" Tire (fits a 17" rim) R18 = 18" Tire (fits a 18" rim) R19 = 19" Tire (fits a 19" rim) R20 = 20" Tire (fits a 20" rim) R22 = 22" Tire (fits a 22" rim)
- img "Stack of tires"
- img "Wheel close-up"
- heading "Assurance of Quality and Value" [level=2]
- paragraph: At Road Ready Wheels, we understand the importance of offering a single, specialized product at an unparalleled level of quality and value. To achieve this, we have meticulously researched and partnered with the most reputable suppliers in the industry. After extensive efforts, we have identified and collaborated with 24 distinguished manufacturers across 10 countries. These partnerships enable us to deliver premium-grade wheels at the most competitive prices available on the market.
- heading "Guaranteed Compatibility" [level=3]
- paragraph: Road Ready Wheels products are engineered to meet and exceed OEM (Original Equipment Manufacturer) specifications. They are designed to integrate seamlessly with key components, including hubcaps, center caps, TPMS sensors, tires, and lug nuts, ensuring dependable performance and optimal fit for your vehicle.
- heading "Road Ready Overall Ratings and Reviews" [level=2]
- separator
- img
- img
- img
- img
- img
- text: 1,878 Reviews 4.7 out of 5 stars 5 Stars 88% 4 Stars 5% 3 Stars 2% 2 Stars 2% 1 Stars 3%
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 20, 2026
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 19, 2026
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 18, 2026
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 17, 2026
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 16, 2026
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 15, 2026
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 14, 2026
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 13, 2026
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 12, 2026
- img "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim"
- img
- img
- img
- img
- img
- text: 5 ★
- link "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim":
  - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
  - heading "2011-2025 17x6.5 Chevrolet Silverado 3500 Steel Wheel / Rim" [level=3]
- paragraph: Loved it!
- text: Tom
- img
- text: Certified Buyer • September 11, 2026
- button "Load More"
- text: ↑ Back to Top
- dialog "Enter your Email":
  - button "Close":
    - img "close"
  - text: Enter your Email
  - textbox "example@domain.com": raja@g.com
  - button "Cancel"
  - button "Submit"
```

# Test source

```ts
  178 | 
  179 |     // Modal shows up right after Make is picked — dismiss it here instead
  180 |     // of blindly waiting, since it doesn't reliably appear within a fixed
  181 |     // window.
  182 |     await this.dismissShopAsModalIfPresent();
  183 |   }
  184 | 
  185 |   async selectModel(model: string) {
  186 |     await this.dismissShopAsModalIfPresent();
  187 |     await this.modelSelect.click();
  188 |     await this.page.getByText(model, { exact: true }).click();
  189 |   }
  190 | 
  191 |   async selectYear(year: string) {
  192 |     await this.dismissShopAsModalIfPresent();
  193 |     await this.yearSelect.click();
  194 |     await this.page.getByText(year, { exact: true }).click();
  195 |   }
  196 | 
  197 |   async selectCategory(categoryName: string) {
  198 |     await this.dismissShopAsModalIfPresent();
  199 |     await this.click(this.categoryButton(categoryName));
  200 |   }
  201 | 
  202 |   async selectMaterial(materialName: string) {
  203 |     await this.dismissShopAsModalIfPresent();
  204 |     await this.click(this.materialButton(materialName));
  205 |   }
  206 | 
  207 |   async selectDiameter(diameterLabel: string) {
  208 |     await this.dismissShopAsModalIfPresent();
  209 |     await this.click(this.diameterButton(diameterLabel));
  210 |   }
  211 | 
  212 |   /**
  213 |    * Verifies each given value has its own "Remove <value>" chip under
  214 |    * "Selected Filters" — works for any number of filters (Model, Year,
  215 |    * Category, Material, Diameter, ...), since a chip's "Remove" button is
  216 |    * the unambiguous signal that a filter is actually applied.
  217 |    */
  218 |   async expectFiltersApplied(...values: string[]) {
  219 |     for (const value of values) {
  220 |       await expect(this.removeFilterButton(value)).toBeVisible({
  221 |         timeout: 10000,
  222 |       });
  223 |     }
  224 |   }
  225 | 
  226 |   /** After Reset, none of the previously-applied filter chips should remain. */
  227 |   async expectFiltersCleared(...previousValues: string[]) {
  228 |     for (const value of previousValues) {
  229 |       await expect(this.removeFilterButton(value)).toBeHidden({
  230 |         timeout: 10000,
  231 |       });
  232 |     }
  233 |   }
  234 | 
  235 |   async expectFilterSummaryVisible(partialText: string) {
  236 |     await expect(this.filterSummaryText(partialText)).toBeVisible({
  237 |       timeout: 10000,
  238 |     });
  239 |   }
  240 | 
  241 |   /**
  242 |    * Navigates straight to a filtered results URL — mirrors the codegen
  243 |    * recording, which reloaded the filtered listing via the address bar
  244 |    * (e.g. after opening a product from it) instead of re-picking every
  245 |    * dropdown from scratch.
  246 |    */
  247 |   async goToFilteredCategory(params: Record<string, string>) {
  248 |     const query = new URLSearchParams(params).toString();
  249 |     await this.page.goto(
  250 |       `https://staging.roadreadywheels.com/t/categories?${query}`
  251 |     );
  252 |   }
  253 | 
  254 |   /**
  255 |    * Out-of-stock result cards show "Notify Me" instead of "Add To Cart".
  256 |    * Fills and submits the email capture, then confirms the modal actually
  257 |    * closed rather than assuming a specific success toast (whose exact copy
  258 |    * we haven't confirmed yet).
  259 |    */
  260 |   async submitNotifyMe(email: string) {
  261 |     await this.click(this.notifyMeButton);
  262 |     await this.notifyMeEmailInput.click();
  263 |     await this.notifyMeEmailInput.fill(email);
  264 |     await this.click(this.notifyMeSubmitButton);
  265 | 
  266 |     await expect(this.notifyMeEmailInput).toBeHidden({ timeout: 10000 });
  267 |   }
  268 | 
  269 |   /**
  270 |    * PDP "Notify Me" for an out-of-stock item — clicking Add To Cart on such
  271 |    * an item reveals a Submit confirm instead of actually adding it, and no
  272 |    * email field is needed (account email is used automatically).
  273 |    */
  274 |   async submitNotifyMeFromPdp() {
  275 |     await this.click(this.pdpAddToCartButton);
  276 |     await this.click(this.pdpSubmitButton);
  277 | 
> 278 |     await expect(this.pdpNotifyConfirmationText).toBeVisible({
      |                                                  ^ Error: expect(locator).toBeVisible() failed
  279 |       timeout: 10000,
  280 |     });
  281 |   }
  282 | 
  283 |   /**
  284 |    * Returns to the filtered listing from a PDP using the browser's Back
  285 |    * button (mirrors clicking the actual back arrow), rather than a raw
  286 |    * URL — waits for the "Selected Filters" panel to be back on screen so
  287 |    * the next step doesn't race the navigation.
  288 |    */
  289 |   async goBackToListing() {
  290 |     await this.page.goBack();
  291 |     await expect(
  292 |       this.page.getByRole('heading', { name: 'Selected Filters' })
  293 |     ).toBeVisible({ timeout: 10000 });
  294 |   }
  295 | 
  296 |   /**
  297 |    * Clicks Reset and waits for the filter chips to actually clear before
  298 |    * moving on — resetting is followed by a re-render, so proceeding
  299 |    * immediately can land clicks on stale dropdown state.
  300 |    */
  301 |   async resetFilters() {
  302 |     await this.click(this.resetFiltersButton);
  303 | 
  304 |     // Wait for every "Remove X" chip to actually disappear before
  305 |     // continuing, instead of a blind timeout that might fire mid-re-render.
  306 |     await expect(
  307 |       this.page.getByRole('button', { name: /^Remove /i })
  308 |     ).toHaveCount(0, { timeout: 10000 });
  309 | 
  310 |     await this.page.waitForTimeout(2000);
  311 |   }
  312 | 
  313 |   async expectResultsVisible() {
  314 |     await expect(this.hollanderCode).toBeVisible({ timeout: 10000 });
  315 | 
  316 |     const priceCount = await this.resultPrices.count();
  317 |     expect(priceCount).toBeGreaterThan(0);
  318 |   }
  319 | 
  320 |   async clickProductByName(partialName: string) {
  321 |     await this.page
  322 |       .locator('a')
  323 |       .filter({ hasText: partialName })
  324 |       .click();
  325 |   }
  326 | }
```