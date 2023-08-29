import { ListarTodosTipos, ListarTodosCarros, InserirCarro, DeletarCarro, alterar } from "../repository/carrorepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get('/tipo', async (req, resp) => {
    try{
        let r = await ListarTodosTipos()
        resp.send(r)
    }

    catch (err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
});

endpoints.get('/veiculo', async (req, resp) => {
    try{
        let r = await ListarTodosCarros()
        resp.send(r)
    }

    catch (err){
        resp.status(500).send({ erro: 'Ocorreu um erro!'})
    }
});

endpoints.post('/veiculo', async (req, resp) => {
    try{

        let carro = req.body
        
        if (!carro.nome) {
            throw new Error('Modelo Obrigatório.');
        }

        if (isNaN(carro.ano)) {
            throw new Error('Ano precisa ser um número.')
        }
        
        let r = await InserirCarro(carro)
        resp.send(r)
    }

    catch (err){
        resp.status(500).send({ erro: err.message })
    }
} )

endpoints.delete('/veiculo/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let r = await DeletarCarro(id);
        resp.send()
    }

    catch (err){
        resp.status(500).send ({ erro: 'Ocorreu um erro!'})
    }
})

endpoints.put('/veiculo/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let carro = req.body
        let r = await alterar(id, carro);
        resp.send()
    }

    catch (err){
        resp.status(500).send ({ erro: 'Ocorreu um erro!'})
    }
})

export default endpoints;