import { Produto } from "./produtos/produto"
import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo-enum"
import { ProdutoVariante } from "./produtos/produto-variante"
import { ProdutoDigital } from "./produtos/produto_digital"

//exercicios feitos pela profa aqui
console.log("rodando")


const produto = new Produto("Regata Laranja", 100, "Regata Laranja M")
/*const produtoObj: ProdutoInterface = {
    nome: "produto obj",
    descricao: "",
    preco: 0,
    tipo: ProdutoTipoEnum.DIGITAL
}*/

const produtoDigital = new ProdutoDigital( "Código Limpo", 90, "Abordando as complexidades de um software limpo.")
const SubregataRosa = new ProdutoVariante("Regata", 110, "Modelo primavera, tamanho G", 'Rosa')
const Subregatapreta = new ProdutoVariante("Regata", 110, "Modelo rock, tamanho P", 'Preto')


const display = (...produtos: ProdutoInterface[]): void => {
    const carrinhoProdutos = produtos.map((produto)=>{
        return{
        nome: produto.nome,
        preco: produto.preco,
        descricao: produto.descricao,
        estaDisponivel: produto.estaDisponivel()
        }
    })
    console.table(carrinhoProdutos)
}

//simulando carrinho
display(produto, produtoDigital, SubregataRosa, Subregatapreta)