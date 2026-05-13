document.getElementById('btnSimular').addEventListener('click', function() {
    
    const inputValor = document.getElementById('valor').value;
    const bandeira = document.getElementById('bandeira').value;
    const inputParcelas = document.getElementById('parcelas').value;

    if (!inputValor || bandeira === "selecione" || !inputParcelas) {
        alert('Por favor, preencha todos os campos e selecione uma bandeira.');
        return;
    }

    const valorVenda = Number(inputValor);
    const parcelas = Number(inputParcelas);

    let percentualBandeira = 0;

    switch (bandeira) {
        case 'visa':
            percentualBandeira = 0.02;   // 2%
            break;
        case 'master':
            percentualBandeira = 0.0185; // 1.85%
            break;
        case 'elo':
            percentualBandeira = 0.03;   // 3%
            break;
        default:
            percentualBandeira = 0;
    }

    const taxaBandeira = valorVenda * percentualBandeira; 
    

    const jurosTotais = valorVenda * (0.0035 * parcelas); 
    
    const taxaMensalFixaTotal = 12.50 * parcelas; 

    const valorTotal = valorVenda + taxaBandeira + jurosTotais + taxaMensalFixaTotal;
    
    const valorParcela = valorTotal / parcelas;

    const formatoMoeda = { style: 'currency', currency: 'BRL' };

    document.getElementById('resTaxa').textContent = taxaBandeira.toLocaleString('pt-BR', formatoMoeda);
    document.getElementById('resJuros').textContent = jurosTotais.toLocaleString('pt-BR', formatoMoeda);
    document.getElementById('resFixa').textContent = taxaMensalFixaTotal.toLocaleString('pt-BR', formatoMoeda);
    document.getElementById('resParcela').textContent = valorParcela.toLocaleString('pt-BR', formatoMoeda);
    document.getElementById('resTotal').textContent = valorTotal.toLocaleString('pt-BR', formatoMoeda);

    document.getElementById('resultado').classList.remove('oculto');
});