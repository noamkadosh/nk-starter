FROM node:22.13.0-alpine

ARG BUN_VERSION=1.2.0

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat bash curl unzip
WORKDIR /app

RUN curl -fsSL https://bun.sh/install | bash -s -- bun-v${BUN_VERSION}

ENV PATH="${PATH}:/root/.bun/bin"

RUN bun install --global turbo@^2
COPY . .
