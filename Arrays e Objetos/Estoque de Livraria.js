// Array do estoque de livros
const livros = [];

// Funções de gerenciamento de estoque

function adicionarLivro(titulo, autor, quantidade) {
    if (typeof quantidade !== 'number' || quantidade <= 0) {
        console.log("Quantidade deve ser um número positivo.");
        return;
    }

    if (livros.some(livro => livro.titulo === titulo)) {
        console.log(`Livro "${titulo}" já existe no estoque.`);
    } else {
        const novoLivro = { titulo, autor, quantidade };
        livros.push(novoLivro);
        console.log(`Livro "${titulo}" adicionado com sucesso!`);
    }
}

function removerLivro(titulo) {
    const index = livros.findIndex(livro => livro.titulo === titulo);
    if (index !== -1) {
        livros.splice(index, 1);
        console.log(`Livro "${titulo}" removido com sucesso!`);
    } else {
        console.log(`Livro "${titulo}" não encontrado.`);
    }
}

function atualizarQuantidade(titulo, novaQuantidade) {
    if (typeof novaQuantidade !== 'number' || novaQuantidade < 0) {
        console.log("Quantidade deve ser um número não negativo.");
        return;
    }

    const livro = livros.find(livro => livro.titulo === titulo);
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade de "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado.`);
    }
}

function listarLivros() {
    if (livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
    } else {
        console.log("Lista de livros:");
        console.log("----------------");
        livros.forEach((livro, index) => {
            console.log(
                `${index + 1}. Título: ${livro.titulo}\n   Autor: ${livro.autor}\n   Quantidade: ${livro.quantidade}\n`
            );
        });
    }
}

function exibirMenu() {
    console.log(`
Sistema de Gerenciamento de Livros
---------------------------------
1. Adicionar livro
2. Remover livro
3. Atualizar quantidade
4. Listar livros
5. Sair
`);
}

// Para usar no Node.js, você precisaria de algo como:
const readline = require('readline-sync');

function executarPrograma() {
    console.log("Bem-vindo ao Sistema de Gerenciamento de Livros!");
    
    let opcao = 0;
    while (opcao !== 5) {
        exibirMenu();
        opcao = parseInt(readline.question("Digite sua opção: "));
        
        switch (opcao) {
            case 1:
                const tituloAdicionar = readline.question("Digite o título do livro: ");
                const autorAdicionar = readline.question("Digite o autor do livro: ");
                const quantidadeAdicionar = parseInt(readline.question("Digite a quantidade do livro: "));
                if (isNaN(quantidadeAdicionar)) {
                    console.log("Quantidade inválida!");
                    break;
                }
                adicionarLivro(tituloAdicionar, autorAdicionar, quantidadeAdicionar);
                break;
            case 2:
                const tituloRemover = readline.question("Digite o título do livro a ser removido: ");
                removerLivro(tituloRemover);
                break;
            case 3:
                const tituloAtualizar = readline.question("Digite o título do livro a ser atualizado: ");
                const novaQuantidade = parseInt(readline.question("Digite a nova quantidade do livro: "));
                if (isNaN(novaQuantidade)) {
                    console.log("Quantidade inválida!");
                    break;
                }
                atualizarQuantidade(tituloAtualizar, novaQuantidade);
                break;
            case 4:
                listarLivros();
                break;
            case 5:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
        
        if (opcao !== 5) {
            readline.question("\nPressione Enter para continuar...");
        }
    }
}

// Executar o programa
executarPrograma();