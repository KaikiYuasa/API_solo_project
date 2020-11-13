# API_solo_project

## GET /api/hero

### 処理概要
- すべてのヒーローデータを取得します。

### URLパラメーター
- なし

### リクエスト
- なし

### レスポンス
- 200

## POST /api/hero

### 処理概要
- ヒーローデータを追加します。

### URLパラメーター
- なし

### リクエスト

```
{
    "name": string,
    "gender": string,
    "eyecolor": string,
    "race": string,
    "haircolor": string,
    "height": number,
    "publisher": string,
    "skincolor": string,
    "alignment": string,
    "weight": number
}
```

### レスポンス
- 201

## PATCH /api/hero/:id

### 処理概要
- ヒーローデータを更新します。
### URLパラメーター
- id: 更新したいヒーローのIDを指定します。
### リクエスト

```
{
    ["name": string,]
    ["gender": string,]
    ["eyecolor": string,]
    ["race": string,]
    ["haircolor": string,]
    ["height": number,]
    ["publisher": string,]
    ["skincolor": string,]
    ["alignment": string,]
    ["weight": number]
}
```

### レスポンス
- 200

## DELETE /api/hero/:id

### 処理概要
- ヒーローデータを削除します。
### URLパラメーター
- id: 削除したいヒーローのIDを指定します。
### リクエスト
- なし

### レスポンス
- 200