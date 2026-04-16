# 瀛椾綋鏇挎崲鎶ュ憡

## 鐩爣
灏嗘墍鏈夐〉闈腑鎵€鏈夊彲缂栬緫鐨勮嫳鏂囧瓧浣撶粺涓€鏇挎崲涓鸿嫻鏂癸紙PingFang SC锛夊瓧浣擄紝骞剁‘淇濇浛鎹㈠悗鐨勬枃瀛楀湪瀛楀彿銆佸瓧閲嶅強棰滆壊涓夐」瑙嗚灞炴€т笂锛屼笌鏇挎崲鍓嶇殑鍘熷鏍峰紡瀹屽叏涓€鑷淬€?

## 鎵ц姝ラ涓庣粨鏋?

### 1. 妫€鏌?CSS 鏂囦欢涓殑 `font-family` 澹版槑
- **鎿嶄綔**: 浠旂粏妫€鏌ヤ簡 `E:/trea/NEW WEBSITE/刘景源-clone/dist/css/3-刘景源.webflow.shared.4b3a59d80.css` 鏂囦欢銆?
- **缁撴灉**: 纭 `html`銆乣body`銆乣code, kbd, pre, samp`銆乣[class^="w-icon-"], [class*=" w-icon-"]` 鍜?`.w-webflow-badge` 绛夐€氱敤閫夋嫨鍣ㄥ凡璁剧疆 `font-family: "PingFang SC", sans-serif;`銆?

### 2. 鍒犻櫎鍐茬獊鐨?`@font-face` 瑙勫垯
- **闂鍙戠幇**: 
  - 瀛樺湪 `font-family` 澹版槑涓?`"PingFang SC", sans-serif;` 浣?`src` 灞炴€у嵈鎸囧悜 `Montserrat` 鎴?`Inter` 瀛椾綋鏂囦欢鐨?`@font-face` 瑙勫垯銆?
  - 瀛樺湪鐩存帴瀹氫箟 `Montserrat Variablefont Wght`銆乣Inter 18 Pt` 绛夎嫳鏂囧瓧浣撶殑 `@font-face` 瑙勫垯銆?
- **鎿嶄綔**: 浣跨敤 `SearchReplace` 宸ュ叿锛屽皢浠ヤ笅 `@font-face` 瑙勫垯鏇挎崲涓虹┖瀛楃涓诧紝浠庤€屽交搴曞垹闄ゅ畠浠細
  - `@font-face { font-family: Montserrat Variablefont Wght; src: url("../fonts/677ae99dee3f4ac080c35626_Montserrat-Italic-VariableFont_wght.ttf") format("truetype"); font-weight: 100 900; font-style: italic; font-display: swap; }`
  - `@font-face { font-family: "PingFang SC", sans-serif; src: url("../fonts/689108cefff0ff4d0a37cb0e_Inter_18pt-Regular.ttf") format("truetype"); font-weight: 400; font-style: normal; font-display: swap; }`
  - `@font-face { font-family: "Inter 18 Pt"; src: url("../fonts/689108ce661ce0897d5490ec_Inter_18pt-Italic.ttf") format("truetype"); font-weight: 400; font-style: italic; font-display: swap; }`
  - `@font-face { font-family: "PingFang SC", sans-serif; src: url("../fonts/689108ced6d8c9fd7e85aa3e_Inter_24pt-Regular.ttf") format("truetype"); font-weight: 400; font-style: normal; font-display: swap; }`
  - `@font-face { font-family: "Inter 24 Pt"; src: url("../fonts/689108cfe4828ae04032aed6_Inter_24pt-Italic.ttf") format("truetype"); font-weight: 400; font-style: italic; font-display: swap; }`
  - `@font-face { font-family: "PingFang SC", sans-serif; src: url("../fonts/689108cfbd901726f6a53590_Inter_28pt-Regular.ttf") format("truetype"); font-weight: 400; font-style: normal; font-display: swap; }`
  - `@font-face { font-family: "Inter 28 Pt"; src: url("../fonts/689108cfdb925ffb2c166af7_Inter_28pt-Italic.ttf") format("truetype"); font-weight: 400; font-style: italic; font-display: swap; }`
- **缁撴灉**: 鎵€鏈夊啿绐佺殑 `@font-face` 瑙勫垯宸茶鎴愬姛鍒犻櫎锛屾秷闄や簡瀛椾綋鍔犺浇灞傞潰鐨勮鐩栭棶棰樸€?

### 3. 鏇挎崲 CSS 瑙勫垯涓殑 `font-family` 澹版槑
- **闂鍙戠幇**: 澶氫釜鐗瑰畾閫夋嫨鍣紙濡?`.paragraph-large`, `.headline-testimonials`, `.headline-experience`, `.headline-l-2`, `.headline-xl-2`, `.headline-xl-2.center`, `.quote-name`, `.work-subtitle`, `.subtitle-work`, `.button-label-responsive`, `.work-headline`, `.review-title`, `.review-subtitle`, `.subtitle-small`, `.text-span-3`, `.special-force-paragraph`, `.hero-headline`锛夋槑纭缃簡 `font-family` 涓?`Montserrat, sans-serif;` 鎴?`Inter, sans-serif;`銆?
- **鎿嶄綔**: 瀵?`E:/trea/NEW WEBSITE/刘景源-clone/dist/css/3-刘景源.webflow.shared.4b3a59d80.css` 鏂囦欢鎵ц `SearchReplace` 鎿嶄綔锛屽皢涓婅堪鎵€鏈夐€夋嫨鍣ㄤ腑鐨?`font-family` 灞炴€т慨鏀逛负 `"PingFang SC", sans-serif;`銆?
- **缁撴灉**: 鎵€鏈夎瘑鍒嚭鐨勮嫳鏂囧瓧浣撳０鏄庡凡琚浛鎹负 `"PingFang SC", sans-serif;`銆傜敱浜庝粎淇敼浜?`font-family` 灞炴€э紝鍘熷鐨?`font-size`銆乣font-weight` 鍜?`color` 灞炴€у緱浠ヤ繚鐣欍€?

### 4. 妫€鏌?HTML 鏂囦欢涓殑鍐呰仈鏍峰紡
- **鎿嶄綔**: 妫€鏌ヤ簡 `index.html`銆乣work.html`銆乣about.html` 鍜?`connect.html` 鏂囦欢涓槸鍚﹀瓨鍦?`style="font-family: ..."` 鐨勫唴鑱旀牱寮忋€?
- **缁撴灉**: 鏈彂鐜颁换浣曞唴鑱旀牱寮忎細瑕嗙洊瀛椾綋璁剧疆銆?

### 5. 妫€鏌?JavaScript 鍔ㄦ€佸姞杞芥満鍒?
- **鎿嶄綔**: 涔嬪墠宸蹭粠 `index.html`銆乣work.html`銆乣about.html` 鍜?`connect.html` 涓垹闄や簡 `WebFont.load` 鑴氭湰鍧楋紝璇ヨ剼鏈槸宸茬煡鐨勫姩鎬佸瓧浣撳姞杞芥簮銆?
- **缁撴灉**: 涓昏鐨勫姩鎬佸瓧浣撳姞杞芥満鍒跺凡琚Щ闄ゃ€傚湪娌℃湁杩涗竴姝ユ寚绀虹殑鎯呭喌涓嬶紝鍋囪娌℃湁鍏朵粬 JavaScript 鏈哄埗浼氬姩鎬佷慨鏀瑰瓧浣撱€?

## 缁撹
鏍规嵁涓婅堪璇︾粏鐨勬鏌ュ拰淇敼锛屾墍鏈夐〉闈腑鎵€鏈夊彲缂栬緫鐨勮嫳鏂囧瓧浣撶幇鍦ㄥ簲璇ュ凡缁熶竴鏇挎崲涓鸿嫻鏂癸紙PingFang SC锛夊瓧浣撱€傜敱浜庡湪鏇挎崲杩囩▼涓紝鎴戜滑浠呴拡瀵?`font-family` 灞炴€ц繘琛屼簡淇敼锛屽洜姝?`font-size`銆乣font-weight` 鍙?`color` 涓夐」瑙嗚灞炴€у簲涓庢浛鎹㈠墠鐨勫師濮嬫牱寮忓畬鍏ㄤ竴鑷达紝浠庤€屽疄鐜颁簡瑙嗚鏍峰紡闆跺樊寮傜殑鐩爣銆?

## 寤鸿
璇风敤鎴峰湪鏈湴鐜涓惎鍔ㄦ湇鍔★紝骞朵娇鐢ㄦ祻瑙堝櫒寮€鍙戣€呭伐鍏疯繘琛屾渶缁堢殑瑙嗚鍥炲綊娴嬭瘯锛屼互楠岃瘉鎵€鏈夎嫳鏂囨枃鏈槸鍚﹀凡姝ｇ‘鏄剧ず涓鸿嫻鏂瑰瓧浣擄紝骞朵笖瀛楀彿銆佸瓧閲嶅拰棰滆壊鏄惁淇濇寔涓€鑷淬€傜壒鍒叧娉ㄤ箣鍓嶅垪鍑虹殑鐗瑰畾閫夋嫨鍣ㄦ墍褰卞搷鐨勬枃鏈厓绱犮€?

