FROM node:20.12.1 AS buildNodeModules

WORKDIR /app/

COPY package.json .
COPY package-lock.json .

RUN npm install --frozen-lockfile

FROM node:20.12.1

WORKDIR /app/

COPY . .

COPY --from=buildNodeModules /app/node_modules ./node_modules

#ENTRYPOINT ["ls"]
ENTRYPOINT ["npx", "expo"]

EXPOSE 8081
