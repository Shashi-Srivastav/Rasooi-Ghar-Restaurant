FROM node:20-alpine
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 1234
CMD ["npm","start"]
