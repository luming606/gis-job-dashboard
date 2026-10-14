# 大屏前端镜像：构建期打包 Vue 应用，运行期由 nginx 静态托管并反代 /api
FROM docker.io/library/node:20-alpine AS build
WORKDIR /app/web
COPY web/package.json web/package-lock.json ./
RUN npm ci
COPY web/ ./
ARG VITE_TILE_SERVER=http://localhost:3112
ENV VITE_TILE_SERVER=$VITE_TILE_SERVER
RUN npm run build

FROM docker.io/library/nginx:alpine AS runtime
COPY web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/web/dist /usr/share/nginx/html
EXPOSE 80
