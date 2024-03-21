FROM node:20.2.0 AS build
WORKDIR /frontend
COPY . .
RUN rm -rf node_modules package-lock.json && npm install
RUN ["npm","run", "build"]

FROM nginx:1.25.3 AS prod
COPY --from=build /frontend/dist /usr/share/nginx/html