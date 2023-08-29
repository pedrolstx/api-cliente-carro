import { Listartodos, inserir, Delete, alterar } from "../repository/clienterepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get('/cliente', async (req, resp) => {
    try {
      let r = await Listartodos();
      resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
  })

endpoints.post('/cliente', async (req, resp) => {
    try {
      let cliente = req.body;
      let r = await inserir(cliente);
      resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
  })

  endpoints.put('/cliente/:id', async (req, resp) => {
    try {
      let id = req.params.id;
      let cliente = req.body;
      let r = await alterar(id, cliente );
  
      resp.send();
    }
    catch (err) {
      resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
  })

  endpoints.delete('/cliente/:id', async (req, resp) => {
    try {
      let id = req.params.id;
      let r = await Delete(id);
      resp.send();
    }
    catch (err) {
      resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
  })

  export default endpoints





