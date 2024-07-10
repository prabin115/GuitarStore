#node block
FROM node:20-alpine3.19 AS nodework
WORKDIR /myapp
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

#nginx block
FROM nginx:1.27.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /myapp/dist . 
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]