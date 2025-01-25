FROM nk/base AS base

FROM base AS builder

WORKDIR /app

RUN turbo prune @nk/web --docker
 
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

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

USER nextjs

EXPOSE 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
