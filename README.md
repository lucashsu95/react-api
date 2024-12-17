# 啟動

- npm install 下載套件
- npm run dev 開啟server

# 使用套件

- css:

  - scss:
    - vscode: 可以使用 Live Sass Compiler 幫忙編譯
    - webstorm:
      - npm install -g sass (載過不用再載)
      - Settings > Tools > File Watcher > + scss
      - Tool To Run On Changes > Program > 右邊資料夾 > 選sass.cmd

- ESLint
  - npm run dev => 開啟會檢查格式，不符合格式會無法打開
  - vscode: 可以下載ESLint套件，格式不符會有紅底線
  - webstorm: 手動配置ESLint package至node modules裡(Manual ESLint configuration)

# 說明

- Request.type.ts 共用的型態直接放全域，component專屬直接放component內
