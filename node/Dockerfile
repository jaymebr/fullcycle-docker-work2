FROM node:16

WORKDIR /usr/src/app

## instalando a bibliotéca FAKER para gerar nomes aleatórios
RUN npm install --save-dev @faker-js/faker && \
    npm install mysql --save && \
    npm install express --save


COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
