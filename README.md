#Informações Gerais
Criação de 3 containers utilizando o docker-compose.
O docker-compose irá atualizar as imagens dos containers e vai gerar o banco de dados vazio inclusive com a tabela que será utilizada para os cadastros.
•	Banco de Dados (mysql)

•	App Node.js
o	(porta 3000 somente visível na network do docker)
o	Irá conectar ao banco de dados e realizar as operações de Insert e Select na tabela people.
o	Irá responder as requisições feitas ao nginx na porta 8080.

•	Nginx 
o	Utilizando proxy reverso porta 8080 para 3000
o	Irá servir de proxy reverso, onde o usuário irá acessar a porta 8080 localhost porém o que será processado sera na porta 3000 do app node.
#Execução
Premissas: docker-desktop ou docker-engine devidamente configurados.
1.	Executar o comando no terminal, na raiz do projeto.
docker-compose up -d –build
Ao executar o comando, o docker irá atualizar as imagens e irá executar os 3 containers mencionados acima.

2.	Executar a seguinte url: 
http://localhos:8080 

Ao executar irá ser exibido uma página com a Listagem de usuários cadastrados no banco de dados.

NOTA: Tota vez que executar essa url ou simples mente pressionar o F5 para atualizar a página, será gerado um nome de pessoa aleatório e utomaticamente será cadastrado no banco de dados e a página irá exibir todos os registros cadastrados inclusive o último.
	

