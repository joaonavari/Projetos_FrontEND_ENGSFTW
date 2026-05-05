function inserirImagem() {

    const container = document.getElementById('container-imagem');
    const img = document.createElement('img');

    img.src = 'img/Tabela_Jogos.png'; 
    img.style.width = '100%';
    img.style.maxWidth = '600px';
    img.style.display = 'block';
    img.style.margin = '20px auto';

    container.innerHTML = ''; 
    container.appendChild(img);
}