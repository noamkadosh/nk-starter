FROM nk/base AS base

FROM base AS builder

WORKDIR /app

RUN turbo prune @nk/storybook --docker
 
COPY bun.lock bun.lock
COPY package.json package.json

COPY /app/out/json/ .
RUN bun install --frozen-lockfile
 
COPY /app/out/full/ .
RUN bun run turbo run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV="production"
ENV HOSTNAME="0.0.0.0"
ENV PORT="3000"

# ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/apps/storybook/.storybook ./apps/storybook/.storybook
COPY --from=builder /app/apps/storybook/storybook-static ./apps/storybook/storybook-static

EXPOSE 6006

CMD ["bun", "run", "start"]
