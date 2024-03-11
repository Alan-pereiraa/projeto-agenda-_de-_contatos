// Selecionando elementos do HTML
const nameInput = document.querySelector("#input-name");
const contatoInput = document.querySelector("#input-telephone-contact");
const buttonSubmit = document.querySelector("#button-form");
const nameUsuario = document.querySelector("#name-usuario");
const contatoUsuario = document.querySelector("#contato-usuario");
// Criando dois arrays
const numeros = [];// Aqui será armazenado os dados do usuário
const nomes = []// Aqui será armazenado os dados do usuário
// Aqui estou colocando o conteudo de linhas como vazio; Ou seja, zerando;
let linhas = ""; // Reseta a tabela evitando items duplicados

// Chamo o evento quando clico o botão de enviar
buttonSubmit.addEventListener('click', (event) => {
     event.preventDefault();

     adicionaLinha();// Chamada da função adicionaLinha
     atualizaTabela();// Chamada da função atualizaLinha
     exibeTabela();// Chamada da função exibeTabela

});

function adicionaLinha() {

     // Se o nome digitado já estiver dentro do array exiba o alert;
     // nomes.includes(namInput.value) - a function include irá procurar dentro do array "nomes" se no campo de entrada nameInput.value existe um elemento igual a aquele e retorna true ou false.
     if (nomes.includes(nameInput.value)) {

          alert(`O nome ${nameInput.value} já está incluso!`)

     } else {

          nomes.push(nameInput.value);
          numeros.push(contatoInput.value);

          // Cria a tabela 
          let linha = '<tr>';
          linha += `<td>${nameInput.value}</td>`;
          linha += `<td>${contatoInput.value}</td>`;
          linha += '</tr>';

          linhas += linha;

     }

     // Reseta os inputs
     nameInput.value = "";
     contatoInput.value = "";

}

function atualizaTabela() {

     // Seleciona a tag tbody
     const bodyTable = document.querySelector('tbody');
     // Troca po conteúdo do tbody pelo que esmazenado na variável linhas
     bodyTable.innerHTML = linhas;
}

function exibeTabela() {

          //Obtém os valores dos campos de entrada
          const nameInputValor = nameInput.value;// Alan Pereira
          const contatoInputValor = contatoInput.value;// 42 991556137
     
          //Atualiza os elementos HTML com os valores dos campos de entrada
          nameUsuario.innerHTML = nameInputValor;// <td id="name-usuario">${nameInput.value}</td>
          contatoUsuario.innerHTML = contatoInputValor;// <td id="name-usuario">${contatoInput.value}</td>

}
