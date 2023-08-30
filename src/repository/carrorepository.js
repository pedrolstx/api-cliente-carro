import { conexao } from "./conection.js";

export async function InserirCarro(carro){
    let comando = `insert into tb_carro(nm_modelo, nr_ano, nm_fabricante, ds_placa, id_tipo_carro)
                                 values(?, ?, ?, ?, ?);`

    let [info] = await conexao.query(comando, [
        carro.nome,
        carro.ano,
        carro.fabricante,
        carro.placa,
        carro.tipo, 
    ])

    carro.id = info.insertId

    return carro;
}

export async function ListarTodosTipos(){
    let comando = `select * from tb_tipo_carro`
    let [dados] = await conexao.query(comando);
    return dados;
}

export async function ListarTodosCarros(){
    let comando = `select * from tb_carro`
    let [dados] = await conexao.query(comando);
    return dados;
}

export async function DeletarCarro(id){
    let comando = `delete from tb_carro where id_carro = ?`
    let [info] = await conexao.query(comando, [id])
    let linha = info.affectedRow;
    return linha
}

export async function alterar(id, carro){
    let comando = `update tb_carro set
    nm_modelo = ?,
    nm_fabricante = ?,
    ds_placa = ?,
    id_tipo_carro = ?
    where id_carro = ?`

    let [info] = await conexao.query(comando, [
        carro.nome,
        carro.fabricante,
        carro.placa,
        carro.tipo,
        id
    ]
        )

        let linha = info.affectedRows;

        return linha;

}

