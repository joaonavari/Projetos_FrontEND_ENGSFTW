function verificarCPF() {
    const input = document.getElementById('cpfInput').value;
    const resultadoDiv = document.getElementById('resultado');

    const cpf = input.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        mostrarResultado('CPF Inválido!', false, resultadoDiv);
        return;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    
    let resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    
    if (resto !== parseInt(cpf.charAt(9))) {
        mostrarResultado('CPF Inválido!', false, resultadoDiv);
        return;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    
    if (resto !== parseInt(cpf.charAt(10))) {
        mostrarResultado('CPF Inválido!', false, resultadoDiv);
        return;
    }

    mostrarResultado('CPF Válido!', true, resultadoDiv);
}

function mostrarResultado(mensagem, isValido, elemento) {
    elemento.textContent = mensagem;
    
    if (isValido) {
        elemento.className = 'valido';
    } else {
        elemento.className = 'invalido';
    }
} 

const inputCPF = document.getElementById('cpfInput');


inputCPF.addEventListener('input', function(e) {
    let valor = e.target.value;

    valor = valor.replace(/\D/g, '');

    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');

    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');

    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    e.target.value = valor;
});