FROM node:18-slim
WORKDIR /app
RUN npm install express axios
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
