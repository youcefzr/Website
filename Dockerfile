FROM node:20
WORKDIR /app
ENV NODE_PATH=/app/node_modules
COPY package.json package-lock.json panda.config.ts ./
RUN apt-get update && apt-get install -y --no-install-recommends build-essential libpng-dev libjpeg-turbo8-dev zlib1g-dev
RUN npm cache clean --force && npm install --include=optional
COPY . .
RUN npm run build
EXPOSE 3271

CMD ["npm", "start"]