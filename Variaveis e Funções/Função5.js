const a = 5 
const b = 3

soma = (a, b) => a + b;
subtracao = (a, b) => a - b;
multiplicacao = (a, b) => a * b
divisao = (a, b) => a / b

function operacoes(a, b) {
    console.log(`[${soma.name}] entre ${a} e ${b}:`, soma(a, b));
    console.log(`[${subtracao.name}] entre ${a} e ${b}:`, subtracao(a, b));
    console.log(`[${multiplicacao.name}] entre ${a} e ${b}:`, multiplicacao(a, b));
    console.log(`[${divisao.name}] entre ${a} e ${b}:`, divisao(a, b));
}

operacoes(a, b)