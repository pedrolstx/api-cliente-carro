import { conexao } from "./conection.js";

export async function Listartodos(){
    let comando = `
     select * 
     from tb_cliente
    `

    let [dados] = await conexao.query(comando);
    return dados;
}

export async function inserir(cliente){
    let comando = `
        insert into tb_cliente(nm_cliente, ds_email, nr_telefone, ds_cpf, ds_cnh)
        values(?, ?, ?, ?, ?);
    `
    let [info] = await conexao.query(comando, [
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.cpf,
        cliente.cnh
    ])

    cliente.id = info.insertID;
    return cliente
}

export async function Delete(id){
    let comando = `
        delete from tb_cliente where id_cliente = ?
    `
    let [info] = await conexao.query(comando, [id])

    let linha = info.affectedRows;
    return linha;
}

export async function alterar(id, cliente){
    let comando = `
        update tb_cliente 
        set nm_cliente = ?,
        ds_email = ?,
        nr_telefone = ?,
        ds_cpf = ?,
        ds_cnh = ?
        where id_cliente = ?
    `
    let [info] = await conexao.query(comando, [
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.cpf,
        cliente.cnh,
        id
    ])

    let linha = info.affectedRows;
    return linha;
}