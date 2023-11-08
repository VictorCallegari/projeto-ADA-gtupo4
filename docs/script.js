const itensMenu = [

    {
        id: "001",
        titulo: "CAMARÃO AO ALHO E ÓLEO",
        valor: "59,99",
        descricao: "Camarões suculentos preparados com alho e óleo, resultando em um prato saboroso e aromático.Um clássico da culinária marítima."
    },

    {
        id: "002",
        titulo: "CHURRASCO GAÚCHO",
        valor: "89,99",
        descricao: " Uma deliciosa peça de carne de churrasco à moda gaúcha, grelhada no ponto perfeito para os amantes de carne."
    },

    {
        id: "003",
        titulo: "FEIJOADA CARIOCA",
        valor: "79,99",
        descricao: " A famosa feijoada carioca, uma refeição reconfortante com feijão preto, carne de porco, linguiça e acompanhamentos. Uma explosão de sabores."
    },

    {
        id: "004",
        titulo: "MACARRONADA ITALIANA",
        valor: "39,99",
        descricao: "Macarrão servido com um rico molho de tomate e queijo ralado, relembrando a autêntica culinária italiana. Uma opção clássica e deliciosa."
    },

    {
        id: "005",
        titulo: "TORTA GELADA DE CHOCOLATE COM NOZES",
        valor: "19,99",
        descricao: "Uma deliciosa sobremesa gelada que combina a riqueza do chocolate com a crocância das nozes em uma torta irresistível e refrescante."
    },

]





//////////FUNÇÕES PARA ADICIONAR A LISTA DE ITENS SELECIONADOS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


const divItem = document.querySelector('.items-list');

// Adicionar evento de clique para todos os botões "SELECIONAR"
const buttonsSelect = document.querySelectorAll('.btn-select');
const itemList = document.querySelector('.items-list');

buttonsSelect.forEach((button, index) => {
    button.addEventListener('click', () => {
        const item = itensMenu[index];
        addItemToSelectedList(item);

        //////////////Adicionar os valores//////////////////////

        //defir as constantes
        
        const addButton = document.getElementById('btn-adicionar-produto'); //adicionará o item
        const subButton = document.getElementById('btn-subtrair-produto');// subtrairá o item
        const input = document.getElementById('quantidade-produto');// acessa o input
        const quantItens = document.getElementById('quantidade-subtotal');// acessa a quantidade de itens
        const valorItens = document.getElementById('valor-subtotal');
        const listValores = "";// criar lista com os valores selecionados

        console.log(listValores);

        // Adicionar ao clicar
        addButton.addEventListener('click', () => {
            input.value = Number(input.value) + 1;
            quantidadeSubtotal();// chama a função ao atualizar o valor
        });

        // Subtrair ao clicar
        subButton.addEventListener('click', () => {
            if (input.value == 0) {
                alert("Excluir item?");
            } else {
                input.value = Number(input.value) - 1;
                quantidadeSubtotal();//chama a função para atualizar o valor
            }
        }); 

        // Atualizar valor total do produto
        function quantidadeSubtotal() {

            const valor = itensMenu[index].valor;

            valorItens.innerText = valor;   
        }
        
    });
});


function addItemToSelectedList(item) {
    const article = document.createElement('article');

    article.innerHTML = `
            <div class="menu-items">
                    <h3>${item.titulo}</h3>
                    <div class="select-item">
                        <button id="btn-subtrair-produto">-</button>
                        <input id="quantidade-produto" type="number" value="0" min="1">
                        <button id="btn-adicionar-produto">+</button>
                    </div>
                </div>`;

    itemList.appendChild(article);

}

