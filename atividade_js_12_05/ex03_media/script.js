const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', function() {
    const nome = document.getElementById('nomeAluno').value;
    
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const resultadoDiv = document.getElementById('resultado');

    if (nome === '' || document.getElementById('nota1').value === '' || 
        document.getElementById('nota2').value === '' || document.getElementById('nota3').value === '') {
        resultadoDiv.textContent = 'Por favor, preencha o nome e todas as notas.';
        resultadoDiv.className = 'reprovado';
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    let mensagemHTML = `<strong>Aluno(a):</strong> ${nome} <br> <strong>Média:</strong> ${media.toFixed(2)} <br>`;

    if (media >= 7.0) {
        
        mensagemHTML += `<strong>Situação:</strong> Aprovado!`;
        resultadoDiv.className = 'aprovado';
        
    } else if (media >= 4.0 && media < 7.0) {
        
        const faltaParaDez = 10 - media;
        mensagemHTML += `<strong>Situação:</strong> Em Exame. <br> Faltam <strong>${faltaParaDez.toFixed(2)}</strong> pontos para atingir a nota 10 no exame.`;
        resultadoDiv.className = 'exame';
        
    } else {
        
        mensagemHTML += `<strong>Situação:</strong> Reprovado.`;
        resultadoDiv.className = 'reprovado';
        
    }

    resultadoDiv.innerHTML = mensagemHTML;
});