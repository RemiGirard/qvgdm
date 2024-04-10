FROM node:20.12.1

EXPOSE 8081

COPY . /app/

WORKDIR /app/

RUN npm install

ENTRYPOINT ["npx", "expo"]