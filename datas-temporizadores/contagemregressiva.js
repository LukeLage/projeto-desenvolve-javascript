// Data futura para o temporizador
const dataFutura = new Date()
dataFutura.setMinutes (dataFutura.getMinutes() + 1); // Pode alterar o número para alterar o tempo da contagem regressiva

// Temporizador de contagem regressiva que aceita uma data futura e conta o tempo restante até essa data
function calcularTempoRestante(dataFutura){
    
    // Função para atualizar o temporizador na tela
    // Usar setInterval para atualizar a cada segundo
    function atualizarTemporizador(){
        let dataAtual = new Date().getTime();
        const dataFuturaTimestamp = dataFutura.getTime(); 
    
        const diff = dataFuturaTimestamp - dataAtual; 

        if (diff <= 0){
            console.log("Tempo esgotado!")
            console.log("Limpando console em 5 segundos...")
            clearInterval(intervalo);
            setTimeout(() => {
                console.log("Console limpo!");
                console.clear();
            }, 5000);
            return
        }
        const segundos = Math.floor((diff % (1000 * 60)) / 1000);
        const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); 

        console.log("Tempo restante: " + minutos + " minutos e " + segundos + " segundos");
    }
    const intervalo = setInterval(atualizarTemporizador, 1000); 
}

calcularTempoRestante(dataFutura);

