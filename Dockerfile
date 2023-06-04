# Base Image
FROM alpine:latest

# Download Nodejs and NPM
RUN apk add nodejs npm

# Create app directory
RUN mkdir /usr/app

# Pasta de trabalho (diretório raiz)
WORKDIR /usr/app

ENTRYPOINT [ "node", "main.js" ]