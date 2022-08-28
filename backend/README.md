# bridge-backend

## APIサーバーの起動方法

`.env`を作成し以下のように記入する:

```text
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_USER=bridge
MYSQL_PASSWORD=bridge
MYSQL_DATABASE=bridge
MYSQL_ADDRESS=localhost
MYSQL_PORT=3306

PORT=3000
```

その後、

```shell
docker-compose up -d
```

