FROM node:10.15

ADD package-lock.json /package-lock.json
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm install

ADD ./dist /dist

EXPOSE 3000

CMD ["npm" "start"]