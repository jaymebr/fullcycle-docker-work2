FROM node:16

WORKDIR /usr/src/app

## instalando a bibliotéca FAKER para gerar nomes aleatórios
## Adicionado strutura wait-for para aguardar subida de container do Banco de Dados
RUN npm install --save-dev @faker-js/faker && \
    npm install mysql --save && \
    npm install express --save && \
    apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for



#USER node

#WORKDIR /home/node/app


COPY . .

EXPOSE 3000

#CMD [ "node", "index.js" ]
