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
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=f9e1]:
  - region "Notifications Alt+T"
  - alert [ref=f9e2]
  - generic [ref=f9e3]:
    - banner [ref=f9e4]:
      - generic [ref=f9e7]:
        - link "ROADREADY" [ref=f9e8] [cursor=pointer]:
          - /url: /
        - generic [ref=f9e11]:
          - combobox "Search category" [ref=f9e13] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=f9e15]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=f9e16]
        - generic [ref=f9e17]:
          - generic [ref=f9e18]:
            - button "Resale" [ref=f9e21] [cursor=pointer]
            - button "Wholesale" [ref=f9e23] [cursor=pointer]
          - button "Select State" [ref=f9e26] [cursor=pointer]
          - generic [ref=f9e33]: "|"
          - button [ref=f9e35] [cursor=pointer]
          - generic [ref=f9e41]: "|"
          - button "Cart is empty" [disabled] [ref=f9e42]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=f9e48]:
      - generic [ref=f9e52]:
        - generic [ref=f9e53]:
          - generic [ref=f9e54]: Parts Finder
          - generic [ref=f9e55]:
            - generic [ref=f9e59]:
              - combobox [ref=f9e61]
              - generic: Select Make
            - generic [ref=f9e65]:
              - combobox [ref=f9e67]
              - generic: Select Model
            - generic [ref=f9e71]:
              - combobox [ref=f9e73]
              - generic: Select Year
        - generic [ref=f9e74]:
          - generic [ref=f9e75]: type
          - generic [ref=f9e76]:
            - button "Aftermarket Wheel" [ref=f9e77] [cursor=pointer]
            - button "Genuine OEM Reconditioned Rim" [ref=f9e79] [cursor=pointer]
            - button "OEM Reconditioned Wheel" [ref=f9e81] [cursor=pointer]
            - button "OEM Replacement Hubcap" [ref=f9e83] [cursor=pointer]
            - button "OEM Replacement Wheel" [ref=f9e85] [cursor=pointer]
            - button "OEM Surplus Wheel" [ref=f9e87] [cursor=pointer]
            - button "OEM Take Off Wheel" [ref=f9e89] [cursor=pointer]
            - button "OEM Wheel Rim" [ref=f9e91] [cursor=pointer]
            - button "Simulator" [ref=f9e93] [cursor=pointer]
            - button "Trailer" [ref=f9e95] [cursor=pointer]
        - generic [ref=f9e97]:
          - generic [ref=f9e98]: material
          - generic [ref=f9e99]:
            - button "Alloy" [ref=f9e100] [cursor=pointer]
            - button "Steel" [ref=f9e102] [cursor=pointer]
            - button "ABS Plastic" [ref=f9e104] [cursor=pointer]
        - generic [ref=f9e106]:
          - generic [ref=f9e107]: diameter
          - generic [ref=f9e108]:
            - button "14\"" [ref=f9e109] [cursor=pointer]
            - button "15\"" [ref=f9e111] [cursor=pointer]
            - button "16\"" [ref=f9e113] [cursor=pointer]
            - button "17\"" [ref=f9e115] [cursor=pointer]
            - button "17.5\"" [ref=f9e117] [cursor=pointer]
            - button "18\"" [ref=f9e119] [cursor=pointer]
            - button "19\"" [ref=f9e121] [cursor=pointer]
            - button "19.5\"" [ref=f9e123] [cursor=pointer]
            - button "20\"" [ref=f9e125] [cursor=pointer]
            - button "21\"" [ref=f9e127] [cursor=pointer]
            - button "22\"" [ref=f9e129] [cursor=pointer]
            - button "22.5\"" [ref=f9e131] [cursor=pointer]
            - button "23\"" [ref=f9e133] [cursor=pointer]
            - button "24\"" [ref=f9e135] [cursor=pointer]
            - button "24.5\"" [ref=f9e137] [cursor=pointer]
        - generic [ref=f9e139]:
          - generic [ref=f9e140]: bolt pattern
          - generic [ref=f9e141]:
            - button "3x112.5mm or 3x4.4\"" [ref=f9e142] [cursor=pointer]
            - button "4x98mm or 4x3.9\"" [ref=f9e144] [cursor=pointer]
            - button "4x100mm or 4x3.9\"" [ref=f9e146] [cursor=pointer]
            - button "4x108mm or 4x4.3\"" [ref=f9e148] [cursor=pointer]
            - button "4x114.3mm or 4x4.5\"" [ref=f9e150] [cursor=pointer]
            - button "5x92.3mm or 5x3.6\"" [ref=f9e152] [cursor=pointer]
            - button "5x98mm or 5x3.9\"" [ref=f9e154] [cursor=pointer]
            - button "5x100mm or 5x3.9\"" [ref=f9e156] [cursor=pointer]
            - button "5x105mm or 5x4.1\"" [ref=f9e158] [cursor=pointer]
            - button "5x108mm or 5x4.3\"" [ref=f9e160] [cursor=pointer]
            - button "5x108mm or 5x4.25\"" [ref=f9e162] [cursor=pointer]
            - button "5x110mm or 5x4.3\"" [ref=f9e164] [cursor=pointer]
            - button "5x112mm or 5x4.4\"" [ref=f9e166] [cursor=pointer]
            - button "5x114.3mm or 5x4.5\"" [ref=f9e168] [cursor=pointer]
            - button "5x114.3mm or 5x5\"" [ref=f9e170] [cursor=pointer]
            - button "5x115mm or 5x4.5\"" [ref=f9e172] [cursor=pointer]
            - button "5x116.4mm or 4.6\"" [ref=f9e174] [cursor=pointer]
            - button "5x118.4mm or 4.7\"" [ref=f9e176] [cursor=pointer]
            - button "5x120mm or 5x4.7\"" [ref=f9e178] [cursor=pointer]
            - button "5x120mm or 5x4.75\"" [ref=f9e180] [cursor=pointer]
            - button "5x127mm or 5x5\"" [ref=f9e182] [cursor=pointer]
            - button "5x127mm or 5x4.7\"" [ref=f9e184] [cursor=pointer]
            - button "5x130mm or 5x5.1\"" [ref=f9e186] [cursor=pointer]
            - button "5x135mm or 5x5.3\"" [ref=f9e188] [cursor=pointer]
            - button "5x139.7mm or 5x5.5\"" [ref=f9e190] [cursor=pointer]
            - button "5x150mm or 5x5.9\"" [ref=f9e192] [cursor=pointer]
            - button "5x160mm or 5x6.3\"" [ref=f9e194] [cursor=pointer]
            - button "6x114.3mm or 6x4.5\"" [ref=f9e196] [cursor=pointer]
            - button "6x115mm or 6x4.5\"" [ref=f9e198] [cursor=pointer]
            - button "6x120mm or 6x4.7\"" [ref=f9e200] [cursor=pointer]
            - button "6x127mm or 6x5\"" [ref=f9e202] [cursor=pointer]
            - button "6x130mm or 6x5.1\"" [ref=f9e204] [cursor=pointer]
            - button "6x132mm or 6x5.2\"" [ref=f9e206] [cursor=pointer]
            - button "6x135mm or 6x5.3\"" [ref=f9e208] [cursor=pointer]
            - button "6x139.7mm or 6x5.5\"" [ref=f9e210] [cursor=pointer]
            - button "6x180mm or 6x7.1\"" [ref=f9e212] [cursor=pointer]
            - button "6x205mm or 6x8.1\"" [ref=f9e214] [cursor=pointer]
            - button "6x222.25mm or 6x8.75\"" [ref=f9e216] [cursor=pointer]
            - button "7x150mm or 7x5.9\"" [ref=f9e218] [cursor=pointer]
            - button "8x165.1mm or 8x6.5\"" [ref=f9e220] [cursor=pointer]
            - button "8x170mm or 8x6.7\"" [ref=f9e222] [cursor=pointer]
            - button "8x180mm or 8x7.1\"" [ref=f9e224] [cursor=pointer]
            - button "8x200mm or 8x7.9\"" [ref=f9e226] [cursor=pointer]
            - button "8x210mm or 8x8.3\"" [ref=f9e228] [cursor=pointer]
            - button "8x225mm or 8x8.9\"" [ref=f9e230] [cursor=pointer]
            - button "8x275mm or 8x10.8\"" [ref=f9e232] [cursor=pointer]
            - button "10x184.1mm or 10x7.25\"" [ref=f9e234] [cursor=pointer]
            - button "10-222.25mm or 10-8.75\"" [ref=f9e236] [cursor=pointer]
            - button "10x225mm or 10x8.9\"" [ref=f9e238] [cursor=pointer]
            - button "10x285.7mm or 10x11.2\"" [ref=f9e240] [cursor=pointer]
        - generic [ref=f9e242]:
          - generic [ref=f9e243]: lug count
          - generic [ref=f9e244]:
            - button "3" [ref=f9e245] [cursor=pointer]
            - button "4" [ref=f9e247] [cursor=pointer]
            - button "5" [ref=f9e249] [cursor=pointer]
            - button "6" [ref=f9e251] [cursor=pointer]
            - button "7" [ref=f9e253] [cursor=pointer]
            - button "8" [ref=f9e255] [cursor=pointer]
            - button "10" [ref=f9e257] [cursor=pointer]
        - generic [ref=f9e259]:
          - generic [ref=f9e260]: center bore
          - generic [ref=f9e261]:
            - button "46mm" [ref=f9e262] [cursor=pointer]
            - button "54mm" [ref=f9e264] [cursor=pointer]
            - button "54.06mm" [ref=f9e266] [cursor=pointer]
            - button "54.1mm" [ref=f9e268] [cursor=pointer]
            - button "56mm" [ref=f9e270] [cursor=pointer]
            - button "56.1mm" [ref=f9e272] [cursor=pointer]
            - button "56.5mm" [ref=f9e274] [cursor=pointer]
            - button "56.6mm" [ref=f9e276] [cursor=pointer]
            - button "56.8mm" [ref=f9e278] [cursor=pointer]
            - button "57mm" [ref=f9e280] [cursor=pointer]
            - button "57.1mm" [ref=f9e282] [cursor=pointer]
            - button "57.2mm" [ref=f9e284] [cursor=pointer]
            - button "58mm" [ref=f9e286] [cursor=pointer]
            - button "58.1mm" [ref=f9e288] [cursor=pointer]
            - button "59.1mm" [ref=f9e290] [cursor=pointer]
            - button "60mm" [ref=f9e292] [cursor=pointer]
            - button "60.1mm" [ref=f9e294] [cursor=pointer]
            - button "60.7mm" [ref=f9e296] [cursor=pointer]
            - button "63mm" [ref=f9e298] [cursor=pointer]
            - button "63.1mm" [ref=f9e300] [cursor=pointer]
            - button "63.3mm" [ref=f9e302] [cursor=pointer]
            - button "63.4mm" [ref=f9e304] [cursor=pointer]
            - button "63.5mm" [ref=f9e306] [cursor=pointer]
            - button "63.6mm" [ref=f9e308] [cursor=pointer]
            - button "64mm" [ref=f9e310] [cursor=pointer]
            - button "64.1mm" [ref=f9e312] [cursor=pointer]
            - button "64.2mm" [ref=f9e314] [cursor=pointer]
            - button "65mm" [ref=f9e316] [cursor=pointer]
            - button "65.1mm" [ref=f9e318] [cursor=pointer]
            - button "66mm" [ref=f9e320] [cursor=pointer]
            - button "66.1mm" [ref=f9e322] [cursor=pointer]
            - button "66.45mm" [ref=f9e324] [cursor=pointer]
            - button "66.5mm" [ref=f9e326] [cursor=pointer]
            - button "66.6mm" [ref=f9e328] [cursor=pointer]
            - button "66.87mm" [ref=f9e330] [cursor=pointer]
            - button "66.9mm" [ref=f9e332] [cursor=pointer]
            - button "67mm" [ref=f9e334] [cursor=pointer]
            - button "67.1mm" [ref=f9e336] [cursor=pointer]
            - button "68mm" [ref=f9e338] [cursor=pointer]
            - button "70,3mm" [ref=f9e340] [cursor=pointer]
            - button "70.1mm" [ref=f9e342] [cursor=pointer]
            - button "70.2mm" [ref=f9e344] [cursor=pointer]
            - button "70.3mm" [ref=f9e346] [cursor=pointer]
            - button "70.5mm" [ref=f9e348] [cursor=pointer]
            - button "70.6mm" [ref=f9e350] [cursor=pointer]
            - button "70.8mm" [ref=f9e352] [cursor=pointer]
            - button "71.5mm" [ref=f9e354] [cursor=pointer]
            - button "71.6mm" [ref=f9e356] [cursor=pointer]
            - button "71.8mm" [ref=f9e358] [cursor=pointer]
            - button "72.5mm" [ref=f9e360] [cursor=pointer]
            - button "72.6mm" [ref=f9e362] [cursor=pointer]
            - button "73.1mm" [ref=f9e364] [cursor=pointer]
            - button "74mm" [ref=f9e366] [cursor=pointer]
            - button "74.1mm" [ref=f9e368] [cursor=pointer]
            - button "74.5mm" [ref=f9e370] [cursor=pointer]
            - button "77.8mm" [ref=f9e372] [cursor=pointer]
            - button "78mm" [ref=f9e374] [cursor=pointer]
            - button "78.1mm" [ref=f9e376] [cursor=pointer]
            - button "78.3mm" [ref=f9e378] [cursor=pointer]
            - button "81mm" [ref=f9e380] [cursor=pointer]
            - button "83.7mm" [ref=f9e382] [cursor=pointer]
            - button "84mm" [ref=f9e384] [cursor=pointer]
            - button "84.1mm" [ref=f9e386] [cursor=pointer]
            - button "84.5mm" [ref=f9e388] [cursor=pointer]
            - button "87mm" [ref=f9e390] [cursor=pointer]
            - button "87,1mm" [ref=f9e392] [cursor=pointer]
            - button "87.1mm" [ref=f9e394] [cursor=pointer]
            - button "92.5mm" [ref=f9e396] [cursor=pointer]
            - button "93.1mm" [ref=f9e398] [cursor=pointer]
            - button "95.1mm" [ref=f9e400] [cursor=pointer]
            - button "95.2mm" [ref=f9e402] [cursor=pointer]
            - button "100mm" [ref=f9e404] [cursor=pointer]
            - button "100.3mm" [ref=f9e406] [cursor=pointer]
            - button "106mm" [ref=f9e408] [cursor=pointer]
            - button "106.1mm" [ref=f9e410] [cursor=pointer]
            - button "106.2mm" [ref=f9e412] [cursor=pointer]
            - button "108mm" [ref=f9e414] [cursor=pointer]
            - button "108.1mm" [ref=f9e416] [cursor=pointer]
            - button "110.1mm" [ref=f9e418] [cursor=pointer]
            - button "110.2mm" [ref=f9e420] [cursor=pointer]
            - button "110.5mm" [ref=f9e422] [cursor=pointer]
            - button "110.6mm" [ref=f9e424] [cursor=pointer]
            - button "116mm" [ref=f9e426] [cursor=pointer]
            - button "116.6mm" [ref=f9e428] [cursor=pointer]
            - button "116.7mm" [ref=f9e430] [cursor=pointer]
            - button "116.8mm" [ref=f9e432] [cursor=pointer]
            - button "117mm" [ref=f9e434] [cursor=pointer]
            - button "120.9mm" [ref=f9e436] [cursor=pointer]
            - button "121mm" [ref=f9e438] [cursor=pointer]
            - button "121.0mm" [ref=f9e440] [cursor=pointer]
            - button "121.15mm" [ref=f9e442] [cursor=pointer]
            - button "121.2mm" [ref=f9e444] [cursor=pointer]
            - button "121.3mm" [ref=f9e446] [cursor=pointer]
            - button "122mm" [ref=f9e448] [cursor=pointer]
            - button "123.9mm" [ref=f9e450] [cursor=pointer]
            - button "124mm" [ref=f9e452] [cursor=pointer]
            - button "124.1mm" [ref=f9e454] [cursor=pointer]
            - button "124.2mm" [ref=f9e456] [cursor=pointer]
            - button "124.46mm" [ref=f9e458] [cursor=pointer]
            - button "124.9mm" [ref=f9e460] [cursor=pointer]
            - button "125mm" [ref=f9e462] [cursor=pointer]
            - button "125.1mm" [ref=f9e464] [cursor=pointer]
            - button "125.2mm" [ref=f9e466] [cursor=pointer]
            - button "133.4mm" [ref=f9e468] [cursor=pointer]
            - button "138.8mm" [ref=f9e470] [cursor=pointer]
            - button "139mm" [ref=f9e472] [cursor=pointer]
            - button "140mm" [ref=f9e474] [cursor=pointer]
            - button "142mm" [ref=f9e476] [cursor=pointer]
            - button "142.1mm" [ref=f9e478] [cursor=pointer]
            - button "154mm" [ref=f9e480] [cursor=pointer]
            - button "154.2mm" [ref=f9e482] [cursor=pointer]
            - button "161mm" [ref=f9e484] [cursor=pointer]
            - button "164mm" [ref=f9e486] [cursor=pointer]
            - button "165.1mm" [ref=f9e488] [cursor=pointer]
            - button "167.5mm" [ref=f9e490] [cursor=pointer]
            - button "170.1mm" [ref=f9e492] [cursor=pointer]
            - button "170.2mm" [ref=f9e494] [cursor=pointer]
            - button "220mm" [ref=f9e496] [cursor=pointer]
            - button "220.1mm" [ref=f9e498] [cursor=pointer]
            - button "220.9mm" [ref=f9e500] [cursor=pointer]
            - button "221mm" [ref=f9e502] [cursor=pointer]
            - button "222mm" [ref=f9e504] [cursor=pointer]
        - generic [ref=f9e506]:
          - generic [ref=f9e507]: Availability
          - generic [ref=f9e508] [cursor=pointer]:
            - checkbox "Include Out of Stock" [checked] [ref=f9e509]
            - generic [ref=f9e510]: Include Out of Stock
      - generic [ref=f9e511]:
        - generic [ref=f9e513]:
          - generic [ref=f9e514]: Shop Road Ready Products
          - generic [ref=f9e515]:
            - link [ref=f9e516] [cursor=pointer]:
              - /url: /t/categories
              - button "By Category" [ref=f9e517]
            - link [ref=f9e518] [cursor=pointer]:
              - /url: /t/brand
              - button "Top Brands" [ref=f9e519]
            - link [ref=f9e520] [cursor=pointer]:
              - /url: /t/section
              - button "Featured Items" [ref=f9e521]
        - generic [ref=f9e523]:
          - generic [ref=f9e524]:
            - generic [ref=f9e526]:
              - heading "Alloy Wheels" [level=5] [ref=f9e527] [cursor=pointer]
              - button "View All" [ref=f9e528] [cursor=pointer]
            - generic [ref=f9e530]:
              - generic [ref=f9e531]:
                - generic [ref=f9e532]:
                  - generic [ref=f9e533]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=f9e538] [cursor=pointer]
                  - link [ref=f9e541] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                    - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=f9e544]
                - generic [ref=f9e545]:
                  - link [ref=f9e546] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                    - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=f9e547]
                  - link "9,331 All-Time Units Sold" [ref=f9e548] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                  - generic [ref=f9e550]: $233.58
                  - generic [ref=f9e552]: "Hollander: 560-03335B"
                  - generic [ref=f9e554]:
                    - generic [ref=f9e555]: 🚚
                    - button "Please Select State" [ref=f9e556] [cursor=pointer]
                  - generic [ref=f9e558]:
                    - button "1" [ref=f9e560] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e564] [cursor=pointer]
              - generic [ref=f9e565]:
                - generic [ref=f9e566]:
                  - generic [ref=f9e567]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=f9e572] [cursor=pointer]
                  - link [ref=f9e575] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                    - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=f9e578]
                - generic [ref=f9e579]:
                  - link [ref=f9e580] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                    - heading "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=3] [ref=f9e581]
                  - link "6,559 All-Time Units Sold" [ref=f9e582] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                  - generic [ref=f9e584]: $198.55
                  - generic [ref=f9e586]: "Hollander: 560-64127"
                  - generic [ref=f9e588]:
                    - generic [ref=f9e589]: 🚚
                    - button "Please Select State" [ref=f9e590] [cursor=pointer]
                  - generic [ref=f9e592]:
                    - button "1" [ref=f9e594] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e598] [cursor=pointer]
              - generic [ref=f9e599]:
                - generic [ref=f9e600]:
                  - generic [ref=f9e601]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=f9e606] [cursor=pointer]
                  - link [ref=f9e609] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                    - img "2019-2025 Toyota Corolla 18x8 Alloy Wheel / Rim" [ref=f9e612]
                - generic [ref=f9e613]:
                  - link [ref=f9e614] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                    - heading "2019-2025 Toyota Corolla 18x8 Alloy Wheel / Rim" [level=3] [ref=f9e615]
                  - link "711 All-Time Units Sold" [ref=f9e616] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                  - generic [ref=f9e618]: $228.87
                  - generic [ref=f9e620]: "Hollander: 560-75236C"
                  - generic [ref=f9e622]:
                    - generic [ref=f9e623]: 🚚
                    - button "Please Select State" [ref=f9e624] [cursor=pointer]
                  - generic [ref=f9e626]:
                    - button "1" [ref=f9e628] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e632] [cursor=pointer]
              - generic [ref=f9e633]:
                - generic [ref=f9e634]:
                  - generic [ref=f9e635]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=f9e640] [cursor=pointer]
                  - link [ref=f9e643] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                    - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=f9e646]
                - generic [ref=f9e647]:
                  - link [ref=f9e648] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                    - heading "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=3] [ref=f9e649]
                  - link "6,563 All-Time Units Sold" [ref=f9e650] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                  - generic [ref=f9e652]: $198.55
                  - generic [ref=f9e654]: "Hollander: 560-60337A"
                  - generic [ref=f9e656]:
                    - generic [ref=f9e657]: 🚚
                    - button "Please Select State" [ref=f9e658] [cursor=pointer]
                  - generic [ref=f9e660]:
                    - button "1" [ref=f9e662] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e666] [cursor=pointer]
          - generic [ref=f9e667]:
            - generic [ref=f9e669]:
              - heading "Dually Steel Wheels" [level=5] [ref=f9e670] [cursor=pointer]
              - button "View All" [ref=f9e671] [cursor=pointer]
            - generic [ref=f9e674]:
              - generic [ref=f9e675]:
                - generic [ref=f9e676]: Top Trending Dually Wheels
                - button "Add to wishlist" [ref=f9e681] [cursor=pointer]
                - link [ref=f9e684] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                  - img "2019-2024 17x6 Dodge Ram 3500 Dually Wheel / Rim" [ref=f9e687]
              - generic [ref=f9e688]:
                - link [ref=f9e689] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                  - heading "2019-2024 17x6 Dodge Ram 3500 Dually Wheel / Rim" [level=3] [ref=f9e690]
                - link "729 All-Time Units Sold" [ref=f9e691] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                - generic [ref=f9e693]: $183.75
                - generic [ref=f9e695]: "Hollander: 560-02704"
                - generic [ref=f9e697]:
                  - generic [ref=f9e698]: 🚚
                  - button "Please Select State" [ref=f9e699] [cursor=pointer]
                - generic [ref=f9e701]:
                  - button "1" [ref=f9e703] [cursor=pointer]
                  - button "Add To Cart" [ref=f9e707] [cursor=pointer]
          - generic [ref=f9e708]:
            - generic [ref=f9e710]:
              - heading "Chrome Wheels" [level=5] [ref=f9e711] [cursor=pointer]
              - button "View All" [ref=f9e712] [cursor=pointer]
            - generic [ref=f9e714]:
              - generic [ref=f9e715]:
                - generic [ref=f9e716]:
                  - generic [ref=f9e717]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=f9e722] [cursor=pointer]
                  - link [ref=f9e725] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                    - img "2014-2023 22x9 Cadillac Escalade GMC Sierra Yukon 1500 Chrome Wheel / Rim" [ref=f9e728]
                - generic [ref=f9e729]:
                  - link [ref=f9e730] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                    - heading "2014-2023 22x9 Cadillac Escalade GMC Sierra Yukon 1500 Chrome Wheel / Rim" [level=3] [ref=f9e731]
                  - link "337 All-Time Units Sold" [ref=f9e732] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                  - generic [ref=f9e734]: $363.40
                  - generic [ref=f9e736]: "Hollander: 560-05667"
                  - generic [ref=f9e738]:
                    - generic [ref=f9e739]: 🚚
                    - button "Please Select State" [ref=f9e740] [cursor=pointer]
                  - generic [ref=f9e742]:
                    - button "1" [ref=f9e744] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e748] [cursor=pointer]
              - generic [ref=f9e749]:
                - generic [ref=f9e750]:
                  - generic [ref=f9e751]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=f9e756] [cursor=pointer]
                  - link [ref=f9e759] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                    - img "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim" [ref=f9e762]
                - generic [ref=f9e763]:
                  - link [ref=f9e764] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                    - heading "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim" [level=3] [ref=f9e765]
                  - link "672 All-Time Units Sold" [ref=f9e766] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                  - generic [ref=f9e768]: $351.07
                  - generic [ref=f9e770]: "Hollander: 560-05309A"
                  - generic [ref=f9e773]:
                    - generic [ref=f9e774]: 🚚
                    - button "Please Select State" [ref=f9e775] [cursor=pointer]
                  - generic [ref=f9e777]:
                    - button "1" [ref=f9e779] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e783] [cursor=pointer]
              - generic [ref=f9e784]:
                - generic [ref=f9e785]:
                  - generic [ref=f9e786]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=f9e791] [cursor=pointer]
                  - link [ref=f9e794] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                    - img "2014-2023 22x9 Chevrolet Silverado Suburban Tahoe 1500 Chrome Wheel / Rim" [ref=f9e797]
                - generic [ref=f9e798]:
                  - link [ref=f9e799] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                    - heading "2014-2023 22x9 Chevrolet Silverado Suburban Tahoe 1500 Chrome Wheel / Rim" [level=3] [ref=f9e800]
                  - link "391 All-Time Units Sold" [ref=f9e801] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                  - generic [ref=f9e803]: $363.40
                  - generic [ref=f9e805]: "Hollander: 560-05667"
                  - generic [ref=f9e807]:
                    - generic [ref=f9e808]: 🚚
                    - button "Please Select State" [ref=f9e809] [cursor=pointer]
                  - generic [ref=f9e811]:
                    - button "1" [ref=f9e813] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e817] [cursor=pointer]
              - generic [ref=f9e818]:
                - generic [ref=f9e819]:
                  - generic [ref=f9e820]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=f9e825] [cursor=pointer]
                  - link [ref=f9e828] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                    - img "1999-2018 20x9 GMC Sierra 1500 Chrome Wheel / Rim" [ref=f9e831]
                - generic [ref=f9e832]:
                  - link [ref=f9e833] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                    - heading "1999-2018 20x9 GMC Sierra 1500 Chrome Wheel / Rim" [level=3] [ref=f9e834]
                  - link "499 All-Time Units Sold" [ref=f9e835] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                  - generic [ref=f9e837]: $351.07
                  - generic [ref=f9e839]: "Hollander: 560-05656"
                  - generic [ref=f9e841]:
                    - generic [ref=f9e842]: 🚚
                    - button "Please Select State" [ref=f9e843] [cursor=pointer]
                  - generic [ref=f9e845]:
                    - button "1" [ref=f9e847] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e851] [cursor=pointer]
          - generic [ref=f9e852]:
            - generic [ref=f9e854]:
              - heading "Hubcaps" [level=5] [ref=f9e855] [cursor=pointer]
              - button "View All" [ref=f9e856] [cursor=pointer]
            - generic [ref=f9e858]:
              - generic [ref=f9e859]:
                - generic [ref=f9e860]:
                  - generic [ref=f9e861]: Top Hubcaps
                  - button "Add to wishlist" [ref=f9e866] [cursor=pointer]
                  - link [ref=f9e869] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                    - img "2013-2015 Honda Civic Four Piece Set Silver Wheel Cover Caps / Hubcaps" [ref=f9e872]
                - generic [ref=f9e873]:
                  - link [ref=f9e874] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                    - heading "2013-2015 Honda Civic Four Piece Set Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=f9e875]
                  - link "477 All-Time Units Sold" [ref=f9e876] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                  - generic [ref=f9e878]: $71.85
                  - generic [ref=f9e880]: "Hollander: 570-0020"
                  - generic [ref=f9e883]:
                    - generic [ref=f9e884]: 🚚
                    - button "Please Select State" [ref=f9e885] [cursor=pointer]
                  - generic [ref=f9e887]:
                    - button "1" [ref=f9e889] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e893] [cursor=pointer]
              - generic [ref=f9e894]:
                - generic [ref=f9e895]:
                  - generic [ref=f9e896]: Top Hubcaps
                  - button "Add to wishlist" [ref=f9e901] [cursor=pointer]
                  - link [ref=f9e904] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                    - img "2006-2011 Chevrolet Impala Four Piece Set Silver Wheel Cover Caps / Hubcaps" [ref=f9e907]
                - generic [ref=f9e908]:
                  - link [ref=f9e909] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                    - heading "2006-2011 Chevrolet Impala Four Piece Set Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=f9e910]
                  - link "254 All-Time Units Sold" [ref=f9e911] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                  - generic [ref=f9e913]: $65.01
                  - generic [ref=f9e915]: "Hollander: 570-03021"
                  - generic [ref=f9e918]:
                    - generic [ref=f9e919]: 🚚
                    - button "Please Select State" [ref=f9e920] [cursor=pointer]
                  - generic [ref=f9e922]:
                    - button "1" [ref=f9e924] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e928] [cursor=pointer]
              - generic [ref=f9e929]:
                - generic [ref=f9e930]:
                  - generic [ref=f9e931]: Top Hubcaps
                  - button "Add to wishlist" [ref=f9e936] [cursor=pointer]
                  - link [ref=f9e939] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - img "2015-2024 Ford Transit 150 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [ref=f9e942]
                - generic [ref=f9e943]:
                  - link [ref=f9e944] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - heading "2015-2024 Ford Transit 150 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=f9e945]
                  - link "131 All-Time Units Sold" [ref=f9e946] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                  - generic [ref=f9e948]: $72.99
                  - generic [ref=f9e950]: "Hollander: 570-07068"
                  - generic [ref=f9e953]:
                    - generic [ref=f9e954]: 🚚
                    - button "Please Select State" [ref=f9e955] [cursor=pointer]
                  - generic [ref=f9e957]:
                    - button "1" [ref=f9e959] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e963] [cursor=pointer]
              - generic [ref=f9e964]:
                - generic [ref=f9e965]:
                  - generic [ref=f9e966]: Top Hubcaps
                  - button "Add to wishlist" [ref=f9e971] [cursor=pointer]
                  - link [ref=f9e974] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                    - img "2022-2024 Honda Civic Four Piece Set 16\" Silver/Black Wheel Cover Caps / Hubcaps" [ref=f9e977]
                - generic [ref=f9e978]:
                  - link [ref=f9e979] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                    - heading "2022-2024 Honda Civic Four Piece Set 16\" Silver/Black Wheel Cover Caps / Hubcaps" [level=3] [ref=f9e980]
                  - link "1,435 All-Time Units Sold" [ref=f9e981] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                  - generic [ref=f9e983]: $83.07
                  - generic [ref=f9e985]: "Hollander: 570-10011"
                  - generic [ref=f9e987]:
                    - generic [ref=f9e988]: 🚚
                    - button "Please Select State" [ref=f9e989] [cursor=pointer]
                  - generic [ref=f9e991]:
                    - button "1" [ref=f9e993] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e997] [cursor=pointer]
          - generic [ref=f9e998]:
            - generic [ref=f9e1000]:
              - heading "Steel Wheels" [level=5] [ref=f9e1001] [cursor=pointer]
              - button "View All" [ref=f9e1002] [cursor=pointer]
            - generic [ref=f9e1004]:
              - generic [ref=f9e1005]:
                - generic [ref=f9e1006]:
                  - generic [ref=f9e1007]: Top Steel Wheel
                  - button "Add to wishlist" [ref=f9e1012] [cursor=pointer]
                  - link [ref=f9e1015] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                    - img "2005-2026 Ford F-550 19.5x6 Steel Wheel / Rim" [ref=f9e1018]
                - generic [ref=f9e1019]:
                  - link [ref=f9e1020] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                    - heading "2005-2026 Ford F-550 19.5x6 Steel Wheel / Rim" [level=3] [ref=f9e1021]
                  - link "16,540 All-Time Units Sold" [ref=f9e1022] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                  - generic [ref=f9e1024]: $194.33
                  - generic [ref=f9e1026]: "Hollander: 99042"
                  - generic [ref=f9e1029]:
                    - generic [ref=f9e1030]: 🚚
                    - button "Please Select State" [ref=f9e1031] [cursor=pointer]
                  - generic [ref=f9e1033]:
                    - button "1" [ref=f9e1035] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e1039] [cursor=pointer]
              - generic [ref=f9e1040]:
                - generic [ref=f9e1041]:
                  - generic [ref=f9e1042]: Top Steel Wheel
                  - button "Add to wishlist" [ref=f9e1047] [cursor=pointer]
                  - link [ref=f9e1050] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                    - img "2011-2025 Chevrolet Silverado 3500 17x6.5 Steel Wheel / Rim" [ref=f9e1053]
                - generic [ref=f9e1054]:
                  - link [ref=f9e1055] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                    - heading "2011-2025 Chevrolet Silverado 3500 17x6.5 Steel Wheel / Rim" [level=3] [ref=f9e1056]
                  - link "13,374 All-Time Units Sold" [ref=f9e1057] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                  - generic [ref=f9e1059]: $147.15
                  - generic [ref=f9e1061]: "Hollander: 560-08094"
                  - generic [ref=f9e1063]:
                    - generic [ref=f9e1064]: 🚚
                    - button "Please Select State" [ref=f9e1065] [cursor=pointer]
                  - generic [ref=f9e1067]:
                    - button "1" [ref=f9e1069] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e1073] [cursor=pointer]
              - generic [ref=f9e1074]:
                - generic [ref=f9e1075]:
                  - generic [ref=f9e1076]: Top Steel Wheel
                  - button "Add to wishlist" [ref=f9e1081] [cursor=pointer]
                  - link [ref=f9e1084] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                    - img "2015-2025 16x6 Ford Transit 350 Dually Steel Wheel / Rim" [ref=f9e1087]
                - generic [ref=f9e1088]:
                  - link [ref=f9e1089] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                    - heading "2015-2025 16x6 Ford Transit 350 Dually Steel Wheel / Rim" [level=3] [ref=f9e1090]
                  - link "4,176 All-Time Units Sold" [ref=f9e1091] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                  - generic [ref=f9e1093]: $142.66
                  - generic [ref=f9e1095]: "Hollander: 560-10050S"
                  - generic [ref=f9e1097]:
                    - generic [ref=f9e1098]: 🚚
                    - button "Please Select State" [ref=f9e1099] [cursor=pointer]
                  - generic [ref=f9e1101]:
                    - button "1" [ref=f9e1103] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e1107] [cursor=pointer]
              - generic [ref=f9e1108]:
                - generic [ref=f9e1109]:
                  - generic [ref=f9e1110]: Top Steel Wheel
                  - button "Add to wishlist" [ref=f9e1115] [cursor=pointer]
                  - link [ref=f9e1118] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                    - img "2008-2010 17x6.5 GMC Sierra 3500 Dually Steel Wheel / Rim" [ref=f9e1121]
                - generic [ref=f9e1122]:
                  - link [ref=f9e1123] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                    - heading "2008-2010 17x6.5 GMC Sierra 3500 Dually Steel Wheel / Rim" [level=3] [ref=f9e1124]
                  - link "5,783 All-Time Units Sold" [ref=f9e1125] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                  - generic [ref=f9e1127]: $161.63
                  - generic [ref=f9e1129]: "Hollander: 560-08076A"
                  - generic [ref=f9e1131]:
                    - generic [ref=f9e1132]: 🚚
                    - button "Please Select State" [ref=f9e1133] [cursor=pointer]
                  - generic [ref=f9e1135]:
                    - button "1" [ref=f9e1137] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e1141] [cursor=pointer]
          - generic [ref=f9e1142]:
            - generic [ref=f9e1144]:
              - heading "New OEM Take Off Wheels / Rims" [level=5] [ref=f9e1145] [cursor=pointer]
              - button "View All" [ref=f9e1146] [cursor=pointer]
            - generic [ref=f9e1148]:
              - generic [ref=f9e1149]:
                - generic [ref=f9e1150]:
                  - generic [ref=f9e1151]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=f9e1156] [cursor=pointer]
                  - link [ref=f9e1159] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                    - img "2020-2024 16x6.5 Ford Transit 150 Genuine OEM Take-Off Steel Wheel / Rim" [ref=f9e1162]
                - generic [ref=f9e1163]:
                  - link [ref=f9e1164] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                    - heading "2020-2024 16x6.5 Ford Transit 150 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=f9e1165]
                  - link "1,437 All-Time Units Sold" [ref=f9e1166] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                  - generic [ref=f9e1168]: $138.82
                  - generic [ref=f9e1170]: "Hollander: 560-10283"
                  - generic [ref=f9e1173]:
                    - generic [ref=f9e1174]: 🚚
                    - button "Please Select State" [ref=f9e1175] [cursor=pointer]
                  - generic [ref=f9e1177]:
                    - button "1" [ref=f9e1179] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e1183] [cursor=pointer]
              - generic [ref=f9e1184]:
                - generic [ref=f9e1185]:
                  - generic [ref=f9e1186]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=f9e1191] [cursor=pointer]
                  - link [ref=f9e1194] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                    - img "2010-2025 17x7.5 Ford F250SD Genuine OEM Take-Off Steel Wheel / Rim" [ref=f9e1197]
                - generic [ref=f9e1198]:
                  - link [ref=f9e1199] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                    - heading "2010-2025 17x7.5 Ford F250SD Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=f9e1200]
                  - link "406 All-Time Units Sold" [ref=f9e1201] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                  - generic [ref=f9e1203]: $181.31
                  - generic [ref=f9e1205]: "Hollander: 560-03828A"
                  - generic [ref=f9e1208]:
                    - generic [ref=f9e1209]: 🚚
                    - button "Please Select State" [ref=f9e1210] [cursor=pointer]
                  - generic [ref=f9e1212]:
                    - button "1" [ref=f9e1214] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e1218] [cursor=pointer]
              - generic [ref=f9e1219]:
                - generic [ref=f9e1220]:
                  - generic [ref=f9e1221]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=f9e1226] [cursor=pointer]
                  - link [ref=f9e1229] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                    - img "2010-2024 Mercedes-Benz Sprinter 3500 DRW 16x5.5 Genuine OEM Take-Off Steel Wheel / Rim" [ref=f9e1232]
                - generic [ref=f9e1233]:
                  - link [ref=f9e1234] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                    - heading "2010-2024 Mercedes-Benz Sprinter 3500 DRW 16x5.5 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=f9e1235]
                  - link "599 All-Time Units Sold" [ref=f9e1236] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                  - generic [ref=f9e1238]: $101.68
                  - generic [ref=f9e1240]: "Hollander: 560-85412"
                  - generic [ref=f9e1242]:
                    - generic [ref=f9e1243]: 🚚
                    - button "Please Select State" [ref=f9e1244] [cursor=pointer]
                  - generic [ref=f9e1246]:
                    - button "1" [ref=f9e1248] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e1252] [cursor=pointer]
              - generic [ref=f9e1253]:
                - generic [ref=f9e1254]:
                  - generic [ref=f9e1255]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=f9e1260] [cursor=pointer]
                  - link [ref=f9e1263] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                    - img "2010-2024 16x5.5 Mercedes-Benz Sprinter 3500 Genuine OEM Take-Off Steel Wheel / Rim" [ref=f9e1266]
                - generic [ref=f9e1267]:
                  - link [ref=f9e1268] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                    - heading "2010-2024 16x5.5 Mercedes-Benz Sprinter 3500 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=f9e1269]
                  - link "599 All-Time Units Sold" [ref=f9e1270] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                  - generic [ref=f9e1272]: $101.68
                  - generic [ref=f9e1274]: "Hollander: 560-85413"
                  - generic [ref=f9e1276]:
                    - generic [ref=f9e1277]: 🚚
                    - button "Please Select State" [ref=f9e1278] [cursor=pointer]
                  - generic [ref=f9e1280]:
                    - button "1" [ref=f9e1282] [cursor=pointer]
                    - button "Add To Cart" [ref=f9e1286] [cursor=pointer]
    - contentinfo [ref=f9e1287]:
      - generic [ref=f9e1288]:
        - generic [ref=f9e1289]:
          - generic [ref=f9e1290]:
            - heading "Contact Us" [level=3] [ref=f9e1291]
            - generic [ref=f9e1292]:
              - paragraph [ref=f9e1293]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=f9e1294] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=f9e1295]:
                - text: "Text:"
                - link "217-635-2033" [ref=f9e1296] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=f9e1297] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=f9e1298]:
              - link "Visit our Facebook page" [ref=f9e1299] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=f9e1302] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=f9e1303]
              - link "Visit our Instagram page" [ref=f9e1304] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=f9e1308] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=f9e1312]:
              - img "BBB Accredited" [ref=f9e1314]
              - img "WTC Member" [ref=f9e1316]
          - generic [ref=f9e1317]:
            - heading "Support" [level=3] [ref=f9e1318]
            - generic [ref=f9e1319]:
              - link "Returns and Refunds" [ref=f9e1320] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=f9e1321] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=f9e1322] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=f9e1323] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=f9e1324] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=f9e1325] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=f9e1326] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=f9e1327] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=f9e1328]:
            - heading "Why Road Ready" [level=3] [ref=f9e1329]
            - generic [ref=f9e1330]:
              - link "About Us" [ref=f9e1331] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=f9e1332] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=f9e1333]:
            - heading "Divisions" [level=3] [ref=f9e1334]
            - generic [ref=f9e1335]:
              - link "Wholesale" [ref=f9e1336] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=f9e1337] [cursor=pointer]:
                - /url: /resale
        - generic [ref=f9e1338]:
          - paragraph [ref=f9e1340]:
            - strong [ref=f9e1341]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=f9e1342]:
            - paragraph [ref=f9e1343]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=f9e1344]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=f9e1345] [cursor=pointer]:
                - /url: https://www.w3villa.com/
  - iframe [ref=f9e1346]
  - iframe [ref=f9e1347]:
    - button "Support" [ref=f16e4] [cursor=pointer]
```

# Test source

```ts
  52  |       .locator('div')
  53  |       .filter({ hasText: /^Select Model$/ })
  54  |       .nth(2);
  55  |     this.yearSelect = page
  56  |       .locator(
  57  |         'div:nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search'
  58  |       );
  59  | 
  60  |     this.categoryButton = (categoryName: string) =>
  61  |       page.getByRole('button', { name: categoryName });
  62  | 
  63  |     this.hollanderCode = page.getByText(/^Hollander: 560-/);
  64  | 
  65  |     // Result cards' prices — used to assert results actually rendered,
  66  |     // not just that no error was thrown.
  67  |     this.resultPrices = page.getByText(/^\$/);
  68  | 
  69  |     // Real DOM (confirmed from an actual run) shows Model and Year as
  70  |     // separate removable chips under "Selected Filters" — Make ("Audi")
  71  |     // is NOT its own chip, it's implicit from the initial selection.
  72  |     //
  73  |     // A "Remove X" button IS the definition of an applied filter chip, so
  74  |     // checking for it directly is unambiguous — no parent-traversal scoping
  75  |     // needed at all (the earlier `.locator('..')` approach only walked one
  76  |     // DOM level up from the heading and missed the chip container, which
  77  |     // sits deeper/separately in the DOM).
  78  |     this.removeFilterButton = (value: string) =>
  79  |       page.getByRole('button', { name: `Remove ${value}` });
  80  | 
  81  |     // The "Shop As" modal (full-screen overlay, z-[9999]) re-appears after
  82  |     // the Make selection and blocks every subsequent click underneath it.
  83  |     // Scoped via the nested heading so this doesn't collide with the plain
  84  |     // "Resale" toggle button in the header (that one has no heading inside).
  85  |     this.shopAsModalHeading = page.getByRole('heading', { name: 'Shop As' });
  86  |     this.shopAsResaleOption = page.getByRole('button').filter({
  87  |       has: page.getByRole('heading', { name: 'Resale', exact: true }),
  88  |     });
  89  |     this.shopAsWholesaleOption = page.getByRole('button').filter({
  90  |       has: page.getByRole('heading', { name: 'Wholesale', exact: true }),
  91  |     });
  92  | 
  93  |     // Same filter-button pattern as categoryButton — Material ("Alloy",
  94  |     // "Steel") and Diameter ("20\"") are just more of the same toggle-button
  95  |     // filter groups seen in the sidebar.
  96  |     this.materialButton = (materialName: string) =>
  97  |       page.getByRole('button', { name: materialName });
  98  |     this.diameterButton = (diameterLabel: string) =>
  99  |       page.getByRole('button', { name: diameterLabel });
  100 | 
  101 |     // The breadcrumb-style summary text (e.g. "Cadillac, Escalade, OEM
  102 |     // Replacement Wheel") shown above the results grid once enough filters
  103 |     // are picked — partial match since the full string grows with each
  104 |     // filter added.
  105 |     this.filterSummaryText = (partialText: string) =>
  106 |       page.getByText(partialText, { exact: false });
  107 | 
  108 |     // Shown on a result card instead of "Add To Cart" when that specific
  109 |     // filtered combination has no stock.
  110 |     this.notifyMeButton = page.getByRole('button', { name: 'Notify Me' });
  111 |     this.notifyMeEmailInput = page.getByRole('textbox', {
  112 |       name: 'example@domain.com',
  113 |     });
  114 |     this.notifyMeSubmitButton = page.getByRole('button', { name: 'Submit' });
  115 | 
  116 |     // Sits next to the "Selected Filters" heading — clears every applied
  117 |     // filter chip in one click.
  118 |     this.resetFiltersButton = page.getByRole('button', { name: 'Reset' });
  119 | 
  120 |     // Out-of-stock PDP flow is different from the category-card "Notify Me"
  121 |     // flow above — no email field at all here (uses the logged-in user's
  122 |     // account email). Clicking the normal Add To Cart button on an
  123 |     // out-of-stock product reveals a "Submit" confirm instead, then this
  124 |     // text — confirmed from a real recording, not guessed.
  125 |     this.pdpAddToCartButton = page.locator('#add-to-cart-button');
  126 |     this.pdpSubmitButton = page.getByRole('button', { name: 'Submit' });
  127 |     this.pdpNotifyConfirmationText = page.getByText(
  128 |       'We will notify you when the',
  129 |       { exact: false }
  130 |     );
  131 |   }
  132 | 
  133 |   /**
  134 |    * Call once right after login — the "Shop As" modal is mandatory at that
  135 |    * point, and choosing an option is what lands you on the categories page
  136 |    * with the Make/Model/Year selects available.
  137 |    */
  138 |   async selectShopMode(mode: 'Resale' | 'Wholesale') {
  139 |     await this.shopAsModalHeading.waitFor({ state: 'visible', timeout: 10000 });
  140 | 
  141 |     const option =
  142 |       mode === 'Resale' ? this.shopAsResaleOption : this.shopAsWholesaleOption;
  143 |     await option.click();
  144 | 
  145 |     await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 10000 });
  146 | 
  147 |     // The app appends `just_sign_in=true` to the URL after this selection,
  148 |     // and that flag keeps re-triggering the same modal on later renders
  149 |     // (e.g. once filters are applied) even though a mode was already
  150 |     // chosen — a plain wait isn't enough. Reloading clears it.
  151 |     await this.page.reload();
> 152 |     await this.page.waitForLoadState('networkidle');
      |                     ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  153 | 
  154 |     // Defensive — in case the reload still shows it once more.
  155 |     await this.dismissShopAsModalIfPresent();
  156 |   }
  157 | 
  158 |   /**
  159 |    * Call before any dropdown/button interaction that follows a Make
  160 |    * selection — the modal can pop up more than once, not just immediately
  161 |    * after the first select. A blind wait isn't reliable because the modal's
  162 |    * appearance timing varies; actively checking and dismissing it is.
  163 |    */
  164 |   async dismissShopAsModalIfPresent() {
  165 |     const isModalVisible = await this.shopAsModalHeading
  166 |       .isVisible({ timeout: 3000 })
  167 |       .catch(() => false);
  168 | 
  169 |     if (isModalVisible) {
  170 |       await this.shopAsResaleOption.click();
  171 |       await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 5000 });
  172 |     }
  173 |   }
  174 | 
  175 |   async selectMake(make: string) {
  176 |     await this.makeSelect.click();
  177 |     await this.page.getByText(make, { exact: true }).click();
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
```