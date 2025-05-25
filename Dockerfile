FROM node:20
WORKDIR /app
COPY package.json package-lock.json panda.config.ts ./
RUN npm install --include=optional && npm install tar-fs
COPY . .
RUN npm run build
EXPOSE 3271

CMD ["npm", "start"]