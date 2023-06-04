# Base Image
FROM alpine:latest

# Download Nodejs and NPM
RUN apk add nodejs npm

ENTRYPOINT [ "node", "main.js" ]