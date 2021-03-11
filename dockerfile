FROM node:latest
WORKDIR /home/node/app/frontend
RUN npm install
EXPOSE 8080
CMD ["npm","run","serve"]
