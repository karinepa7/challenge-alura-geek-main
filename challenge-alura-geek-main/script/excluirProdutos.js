import { conectaApi } from "./conectaApi.js";



async function excluirProduto(ProdutoId) {
    try {
        await conectaApi.excluirProduto(ProdutoId);
        alert ("Produto excluido com sucesso!");
    } catch(error) {
        console.error("Erro ao excluir protuto", error);
    }

    window.location.reload(true);

}

export { excluirProduto };
