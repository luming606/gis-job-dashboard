# GIS 求职大屏服务端镜像（API + 瓦片服务共用一个构建文件，分 target 区分）
# 基础镜像用 Node 24：瓦片服务依赖 Node 24 内置 node:sqlite；API 同样兼容。
FROM docker.io/library/node:24-alpine AS base
WORKDIR /app/server
COPY server/package.json server/package-lock.json ./
RUN npm ci --omit=dev
COPY server/ ./
# 注意：不拷贝 .env。数据库连接走容器环境变量 DATABASE_URL（见 docker-compose.yml）。

FROM base AS api
EXPOSE 3111
CMD ["node", "index.js"]

FROM base AS tiles
EXPOSE 3112
CMD ["node", "tile-server.mjs"]
