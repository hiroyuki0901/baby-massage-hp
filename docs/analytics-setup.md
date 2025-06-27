# Google Analytics & Tag Manager 設定ガイド

## 1. Google Analytics 4 (GA4) セットアップ

### 1.1 GA4プロパティの作成
1. [Google Analytics](https://analytics.google.com/) にアクセス
2. 「管理」→「プロパティを作成」
3. プロパティ名: `はぐたっち - ベビーマッサージ教室`
4. 測定ID (G-XXXXXXXXXX) をメモ

### 1.2 環境変数の設定
`.env.local` ファイルを作成し、測定IDを設定：
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 2. Google Tag Manager (GTM) セットアップ

### 2.1 GTMコンテナの作成
1. [Google Tag Manager](https://tagmanager.google.com/) にアクセス
2. 「アカウントを作成」→「コンテナを作成」
3. コンテナ名: `はぐたっち Website`
4. コンテナID (GTM-XXXXXXX) をメモ

### 2.2 環境変数の設定
`.env.local` に GTM ID を追加：
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 3. カスタムイベント設定

以下のイベントが自動的に追跡されます：

### 3.1 eコマースイベント
- `reservation_start`: 予約プロセス開始
- `purchase`: 予約完了（STORES経由）
- `add_to_cart`: カート追加（将来の拡張用）

### 3.2 エンゲージメントイベント
- `line_click`: LINE公式アカウントクリック
- `phone_click`: 電話番号クリック
- `email_click`: メールアドレスクリック
- `form_submit`: フォーム送信
- `scroll`: スクロール深度（25%, 50%, 75%, 100%）
- `page_engagement`: ページ滞在時間

### 3.3 外部リンクイベント
- `external_link_click`: 外部サイトへのリンククリック

## 4. GTMでの追加設定（推奨）

### 4.1 コンバージョン設定
1. GA4で以下をコンバージョンイベントに設定：
   - `purchase` (予約完了)
   - `form_submit` (お問い合わせ)
   - `line_click` (LINE接触)

### 4.2 カスタムディメンション
以下のカスタムディメンションを設定：
- `lesson_type`: レッスンタイプ
- `reservation_method`: 予約方法 (stores/line)
- `user_type`: ユーザータイプ (new/returning)

## 5. データ確認方法

### 5.1 リアルタイムレポート
- GA4の「リアルタイム」でイベントを確認
- GTMの「プレビューモード」でタグ発火を確認

### 5.2 イベントレポート
- GA4の「イベント」でカスタムイベントを確認
- コンバージョン率をダッシュボードで監視

## 6. プライバシー設定

### 6.1 Cookie同意バナー
必要に応じて Cookie 同意バナーを実装（GDPR対応）

### 6.2 データ保持期間
GA4で適切なデータ保持期間を設定（推奨: 14ヶ月）

## 7. レポート活用

### 7.1 重要な指標
- ページビュー数
- セッション継続時間
- 予約コンバージョン率
- LINE友だち追加率
- モバイル vs デスクトップ利用率

### 7.2 定期レポート
月次でのパフォーマンスレポートを作成し、マーケティング戦略に活用

## 8. トラブルシューティング

### 8.1 イベントが追跡されない場合
1. ブラウザの開発者ツールでエラーを確認
2. GTMプレビューモードで設定を確認
3. 環境変数が正しく設定されているか確認

### 8.2 重複データの場合
- GTMとGA4の直接実装が重複していないか確認
- 開発環境とプロダクション環境で異なる測定IDを使用

## 9. セキュリティ

- 測定IDは公開されても問題ありませんが、管理画面のアクセス権限は適切に設定
- 個人情報（PII）は絶対に送信しない
- IP匿名化を有効にする（GA4では自動的に適用）