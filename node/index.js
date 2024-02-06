const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const faker = require('@faker-js/faker').fakerPT_BR;
const mysql = require('mysql');
const pool = mysql.createPool(config);

app.get('/', (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) {
            const errorMessage = `<strong style="font-size: larger;">Erro ao conectar com o Banco de Dados</strong><br><br>Por favor, tente novamente em alguns instantes.<br><br><br>Detalhes do erro: ${error.message}`;
            return res.status(500).send(errorMessage);
        }

        try {
            const fullname = faker.person.fullName();

            // Inserir registro no banco de dados
            const insertSql = "INSERT INTO people (name) VALUES ('" + fullname + "')";
            connection.query(insertSql, (error, insertResults, fields) => {
                if (error) {
                    return res.status(500).send('<br>Erro ao inserir no banco de dados: ' + error.message);
                }

                // Consultar a lista de pessoas cadastradas
                const selectSql = "SELECT * FROM people";
                connection.query(selectSql, (error, selectResults, fields) => {
                    if (error) {
                        return res.status(500).send('Erro ao obter lista de pessoas: ' + error.message);
                    }

                    // Preparar retorno da lista.
                    const template = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Pessoas Cadastradas</title>
                        </head>
                        <body>
                            <h1>Listagem de Pessoas</h1>
                            <small>Pressione F5 para gerar um novo registro</small>
                            <p>Registro Inserido com Sucesso: ${fullname}</p>
                            <ul>
                                ${selectResults.map(person => `<li>ID: ${person.id}, Nome: ${person.name}</li>`).join('')}
                            </ul>
                        </body>
                        </html>
                    `;

                    res.send(template);
                });
            });
        } catch (error) {
            res.status(500).send('Erro geral: ' + error.message);
        } finally {            
            connection.release();
        }
    });
});

app.listen(port, () => {
    console.log('App executando na porta ' + port);
});
