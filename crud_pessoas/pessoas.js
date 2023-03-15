const express = require('express');
const server = express();
const port = 3001;
server.use(express.json());

const pessoas = ['Renato Oliveira', 'João da Silva', 'Maria João'];

server.get('/pessoas/:index', (req, res) => {
    const { index } = req.params;

    return res.json(pessoas[index]);
});

server.get('/pessoas', (req, res) => {
    return res.json(pessoas);
});

server.post('/pessoas', (req, res) => {
    const { name } = req.body;
    pessoas.push(name);

    return res.json(pessoas);
});

server.put('/pessoas/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    pessoas[index] = name;

    return res.json(pessoas);
});

server.delete('/pessoas/:index', (req, res) => {
    const { index } = req.params;

    if(index < pessoas.length) {
        pessoas.splice(index, 1);
        return res.json({message : 'Cadastro da pessoa deletado'});
    } else {
        return res.json({message : "Indíce não existe"});
    }
});

server.listen(port, () => {
    console.log(`Aplicação executando em http://localhost:${port}/pessoas`);
});