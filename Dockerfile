FROM node:20
WORKDIR /app
ENV NODE_PATH=/app/node_modules
COPY package.json package-lock.json panda.config.ts ./
RUN npm install --include=optional && npm install tar-fs
COPY . .
RUN npm run build
EXPOSE 3271

CMD ["npm", "start"]