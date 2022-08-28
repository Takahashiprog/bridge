FROM golang:alpine
RUN apk update && apk add git
RUN mkdir /bridge
WORKDIR /bridge
ADD . /bridge/
RUN CGO_ENABLED=0 GOOS=linux go build --ldflags '-extldflags "-static"' -o app .

FROM alpine:latest
WORKDIR /root/
COPY --from=0 /bridge/app .
EXPOSE 8080
CMD ["./app"]