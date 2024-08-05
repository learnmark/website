FROM node:20 as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

RUN mkdir /app
COPY --from=build /app/out /app
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
