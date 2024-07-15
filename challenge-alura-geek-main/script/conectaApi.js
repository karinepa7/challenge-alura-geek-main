
async function listaProdutos () {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarProduto(nome, valor, imagem, id) {
    const conexao =  await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error ("Não foi possível cadastrar o produto!");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function excluirProduto(ProdutoId) {
    try {
        const conexao = await fetch(`http://localhost:3000/produtos/${ProdutoId}`, {
            method: "DELETE",
        });
        const data = await conexao.json();
        console.log(data); 
    } catch (error) { 
        console.error("Erro ao deletar produto:", error);
        throw error;
    }  
}

async function buscaProduto(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos,
    criarProduto, 
    buscaProduto,
    excluirProduto
}
