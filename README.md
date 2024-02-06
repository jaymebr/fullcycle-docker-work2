# Informações Gerais

Criação de 3 containers utilizando o docker-compose. O docker-compose irá atualizar as imagens dos containers e vai gerar o banco de dados vazio inclusive com a tabela que será utilizada para os cadastros.

### **Banco de Dados (mysql)** ###

### **App Node.js** ###
       o (porta 3000 somente visível na network do docker)

       o Irá conectar ao banco de dados e realizar as operações de Insert e Select na tabela people.

       o Irá responder as requisições feitas ao nginx na porta 8080.

### **Nginx** ###
        o	Utilizando proxy reverso porta 8080 para 3000
        
        o	Irá servir de proxy reverso, onde o usuário irá acessar a porta 8080 localhost porém o que será processado sera na porta 3000 do app node.

# Execução

Para executar o container execute no terminal:  **docker run --rm jaymebr/fullcycle**
