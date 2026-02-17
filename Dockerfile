FROM node:18-alpine as deps
WORKDIR /app
COPY package*.json ./
RUN npm install --silent

FROM deps as builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node:18-alpine as development
WORKDIR /app
ENV NODE_ENV=development
COPY package*.json ./
RUN npm install
COPY --from=builder /app .
EXPOSE 80
CMD ["npm", "run", "dev"]

FROM node:18-alpine as production
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --only=production --silent
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
EXPOSE 80
CMD ["npm", "start"]