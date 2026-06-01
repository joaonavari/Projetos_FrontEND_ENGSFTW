# 🟩🟨⬛ Clone do Termo em React

Este é um projeto universitário que recria o famoso jogo de palavras "Termo" (baseado no Wordle) construído do zero utilizando React e Vite.

## 🚀 Passo a Passo da Construção

### Passo 1: Preparando o Ambiente
Inicializamos o projeto com o Vite para ter um ambiente de desenvolvimento rápido e moderno:
`npm create vite@latest meu-termo -- --template react`

### Passo 2: Estruturando os Componentes
A interface foi dividida em componentes menores e reutilizáveis:
- **Square:** Representa cada letra e gerencia as cores (verde, amarelo, cinza).
- **Row:** Uma linha inteira com 5 quadrados (letras).
- **Keyboard:** O teclado virtual na tela.

### Passo 3: Gerenciamento de Estado
Utilizamos o Hook `useState` no componente principal para manter o controle:
- Dos chutes já confirmados (`guesses`).
- Do que está sendo digitado no momento (`currentGuess`).
- Das mensagens de notificação (Toast).
- Do status de fim de jogo (`isGameOver`).

### Passo 4: Captura de Teclado e Validação
Implementamos a função `handleInput` que é acionada tanto pelo teclado físico (usando o `useEffect` para criar um Event Listener global) quanto pelo teclado virtual na tela. 
A validação impede que o usuário submeta palavras que não existem no dicionário pré-configurado do jogo.

### Passo 5: Animações e Estilização
Adicionamos CSS puro para gerenciar o layout em Grid e implementamos a animação de "Flip" (virar a carta) utilizando a classe `.flip` combinada com a função `setTimeout` no React, para revelar as cores com um atraso dinâmico letra por letra.