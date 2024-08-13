# Secret Word Game

## Descrição

O Secret Word Game é um jogo simples de adivinhação de palavras desenvolvido em React. O objetivo do jogo é adivinhar uma palavra secreta escolhida aleatoriamente a partir de uma lista de palavras. O jogo exibe uma tela inicial, o jogo em si e uma tela de fim de jogo, onde os usuários podem reiniciar o jogo.

## Tecnologias Utilizadas

- React
- CSS para estilização
- Hooks do React (`useState`, `useEffect`, `useCallback`)

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

- `App.js`: Componente principal que gerencia o estado do jogo e renderiza os componentes de tela inicial, jogo e fim de jogo.
- `components/StartScreen.js`: Componente que exibe a tela inicial do jogo e fornece um botão para iniciar o jogo.
- `components/Game.js`: Componente que exibe o jogo em si, permitindo ao usuário adivinhar letras e mostrando o progresso.
- `components/GameOver.js`: Componente que exibe a tela de fim de jogo com a pontuação final e um botão para reiniciar o jogo.
- `data/words.js`: Arquivo contendo a lista de palavras categorizadas para o jogo.
- `App.css`: Arquivo de estilo global para a aplicação.
- `StartScreen.css`: Arquivo de estilo para o componente de tela inicial.
- `Game.css`: Arquivo de estilo para o componente de jogo.
- `GameOver.css`: Arquivo de estilo para o componente de fim de jogo.

## Funcionamento

1. **Tela Inicial**: O jogo começa com uma tela inicial que apresenta o título e um botão para iniciar o jogo.
2. **Jogo**: Quando o jogo é iniciado, uma palavra e uma categoria são escolhidas aleatoriamente. O jogador deve adivinhar as letras da palavra. O jogo exibe as letras já adivinhadas, letras erradas e o número de tentativas restantes.
3. **Tela de Fim de Jogo**: Quando o jogador perde todas as tentativas ou adivinha todas as letras corretamente, a tela de fim de jogo é exibida, mostrando a pontuação final e permitindo reiniciar o jogo.

## Funcionalidades

- **Iniciar o Jogo**: Ao clicar no botão "Começar o jogo", uma nova palavra é escolhida e o jogo é iniciado.
- **Adivinhar Letras**: O jogador pode adivinhar letras que são verificadas contra a palavra secreta. Letras corretas são adicionadas à lista de letras adivinhadas, e letras erradas reduzem o número de tentativas restantes.
- **Tela de Fim de Jogo**: Se o jogador adivinha todas as letras corretamente ou fica sem tentativas, o jogo exibe a pontuação final e um botão para reiniciar o jogo.

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/secret-word-game.git
