# SAUNA ROOM (BASE LAYER HOTEL)

プライベートサウナルームのウェブサイト

## GitHub Pagesでの公開方法

1. GitHubリポジトリを作成
2. 以下のファイルをアップロード：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `public/` フォルダ内の全画像ファイル

3. GitHub Pagesを有効化：
   - リポジトリの Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)

## ファイル構成

\`\`\`
/
├── index.html          # メインHTMLファイル
├── styles.css          # スタイルシート
├── script.js           # JavaScript
├── README.md           # このファイル
└── public/             # 画像ファイル
    ├── hero-sauna-image.jpg
    ├── heater-image.jpg
    ├── totonoi-image.jpg
    ├── sauna-image.jpg
    ├── coldbath-image.jpg
    ├── sauna2-image.jpg
    ├── sauna-floorplan.jpg
    ├── fruit-image.jpg
    ├── athletia-image.jpg
    ├── cado-image.jpg
    └── saunaweare-image.png
\`\`\`

## 注意事項

- 画像ファイルは `public/` フォルダに配置してください
- GitHub Pagesでは静的ファイルのみサポートされます
- Next.jsの機能（Server Actions等）は使用できません
