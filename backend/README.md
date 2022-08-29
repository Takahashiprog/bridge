# bridge-backend

## APIサーバーの起動方法

`.env`ファイルに以下の例のように記入する:

```text
PORT=3000
SIGNING_KEY=secret
```

その後以下のコマンドを実行することでサーバーが起動する:

```text
go run .
```

## 以下は無視する

`.env`を作成し以下のように記入する:

その後、

```shell
docker-compose up -d
```
