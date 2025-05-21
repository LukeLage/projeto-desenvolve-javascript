const nomes = [];
const inputNomes = document.querySelector("#name");

function adicionarNome() {
    const nome = inputNomes.value.trim();

    if (nome === ' ') return;

    if (!nomes.includes(nome)) {
        nomes.push(nome);
        inputNomes.value = '';
        atualizarTexto();
    }

    inputNomes.value = ' '
};

function atualizarTexto (){
    const elementoTexto = document.getElementById('text');

    if (nomes.length === 0) {
        elementoTexto.innerHTML = 'Ninguém curtiu';
    } else if (nomes.length === 1) {
        elementoTexto.innerHTML = `${nomes[0]} curtiu`;
    } else if (nomes.length === 2) {
        elementoTexto.innerHTML = `${nomes[0]} e ${nomes[1]} curtiram`;
    } else {
        elementoTexto.innerHTML = `${nomes[0]}, ${nomes[1]} e mais ${nomes.length - 2} curtiram`;
    }
}