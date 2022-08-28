# bridge-backend

## APIサーバーの起動方法

しばらくの間は下のコマンドだけで実行できる:

```text
go run .
```

ゆくゆくは以下の通り。

`.env`を作成し以下のように記入する:

```text
PORT=3000
```

その後、

```shell
docker-compose up -d
```

