FROM golang:1.19-bullseye
RUN apt update && apt install git
RUN mkdir /bridge
WORKDIR /bridge
ADD . /bridge/
RUN CGO_ENABLED=0 GOOS=linux go build --ldflags '-extldflags "-static"' -o app .

CMD ["./app"]