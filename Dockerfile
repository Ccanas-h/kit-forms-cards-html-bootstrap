# FROM node:lts-alpine AS builder
# WORKDIR /tmp/node
# COPY package.json ./
# RUN npm i && \
#     npm install -g @angular/cli@13

# COPY . ./
# RUN ng build --configuration development

FROM nginx:alpine
# COPY --from=builder /tmp/node/docker/nginx/html/ /usr/share/nginx/html/
COPY docker/nginx/html/ /usr/share/nginx/html/
COPY docker/nginx/404/* /usr/share/nginx/html/error/
COPY docker/nginx/default.conf /etc/nginx/conf.d