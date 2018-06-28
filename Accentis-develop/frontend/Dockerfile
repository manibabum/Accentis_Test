FROM node:9 as build

WORKDIR /build

COPY package.json ./
RUN npm i

COPY ./ ./
RUN npm run build

FROM node:9 as runner
WORKDIR /app

COPY ./server/package.json .

RUN npm i

COPY ./server/index.js ./
COPY --from=build /build/dist/ ./content

CMD npm run start
