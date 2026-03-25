# CantinaOn

Aplicativo mobile desenvolvido em **React Native com Expo** para simular o fluxo de atendimento de uma cantina escolar/acadêmica. O projeto permite visualizar um cardápio, adicionar itens ao carrinho, calcular o valor total da compra e gerar uma senha de atendimento para retirada no balcão.

Este repositório foi criado como **trabalho acadêmico**, com foco em praticar conceitos de desenvolvimento mobile, componentização, navegação entre telas e gerenciamento de estado local em aplicações React Native.

---

## Sumário

- [1. Visão geral do projeto](#1-visão-geral-do-projeto)
- [2. Objetivo do aplicativo](#2-objetivo-do-aplicativo)
- [3. Tecnologias utilizadas](#3-tecnologias-utilizadas)
- [4. Bibliotecas e comandos de instalação](#4-bibliotecas-e-comandos-de-instalação)
- [5. Estrutura de pastas](#5-estrutura-de-pastas)
- [6. Como executar o projeto](#6-como-executar-o-projeto)
- [7. Funcionalidades do app](#7-funcionalidades-do-app)
- [8. Fluxo de uso do usuário](#8-fluxo-de-uso-do-usuário)
- [9. Possíveis problemas e soluções](#9-possíveis-problemas-e-soluções)
- [10. Melhorias futuras sugeridas](#10-melhorias-futuras-sugeridas)
- [11. Autores e orientador](#11-autores-e-orientador)
- [12. Licença](#12-licença)

---

## 1. Visão geral do projeto

O **CantinaOn** é um aplicativo de pedidos simples voltado ao contexto de cantina. A aplicação foi estruturada com três telas principais:

1. **Tela inicial (Home)**: exibe os produtos disponíveis no cardápio.
2. **Tela de carrinho (Sale/Carrinho)**: agrupa os itens selecionados e apresenta o total da compra.
3. **Tela de senha (Password)**: gera uma senha numérica para retirada do pedido.

A navegação é feita com **React Navigation**, enquanto os estados locais são controlados com **React Hooks** (`useState`). As imagens dos produtos são armazenadas localmente na pasta `assets`.

---

## 2. Objetivo do aplicativo

O propósito deste projeto é demonstrar, de forma prática, os principais fundamentos de uma aplicação mobile acadêmica:

- criação de interfaces com **React Native**;
- navegação entre telas;
- passagem de parâmetros entre rotas;
- manipulação de listas e agrupamento de dados;
- cálculo de valores no carrinho;
- uso de imagens locais no aplicativo;
- simulação de um fluxo real de compra e retirada de pedido.

Além de servir como entrega de faculdade, o projeto também pode ser utilizado como base para futuras evoluções, como autenticação, integração com banco de dados, API de pagamentos e histórico de pedidos.

---

## 3. Tecnologias utilizadas

As principais tecnologias e ferramentas utilizadas neste projeto são:

- **React Native** – desenvolvimento da interface mobile.
- **Expo** – ambiente e ferramentas para execução do app.
- **React** – base para construção dos componentes.
- **React Navigation** – navegação entre telas.
- **Native Stack Navigator** – gerenciamento de rotas em pilha.
- **Expo Status Bar** – controle da barra de status.
- **react-native-safe-area-context** – suporte a áreas seguras em dispositivos.
- **react-native-screens** – otimização de navegação nativa.

### Versões utilizadas no projeto

| Tecnologia / biblioteca | Versão |
| --- | --- |
| expo | `~54.0.33` |
| react | `19.1.0` |
| react-native | `0.81.5` |
| @react-navigation/native | `^7.2.0` |
| @react-navigation/native-stack | `^7.14.7` |
| expo-status-bar | `~3.0.9` |
| react-native-safe-area-context | `~5.6.0` |
| react-native-screens | `~4.16.0` |

---

## 4. Bibliotecas e comandos de instalação

Se você deseja recriar o ambiente do projeto manualmente, os comandos abaixo representam a instalação das bibliotecas principais.

### 4.1 Criar o projeto com Expo

```bash
npx create-expo-app CantinaOn
```

### 4.2 Instalar dependências principais

```bash
npx expo install expo expo-status-bar react-native react-native-safe-area-context react-native-screens
npm install react @react-navigation/native @react-navigation/native-stack
```

### 4.3 Instalar todas as dependências do repositório clonado

Se o projeto já foi clonado, o mais prático é utilizar:

```bash
npm install
```

### 4.4 Scripts disponíveis

```bash
npm run start
npm run android
npm run ios
npm run web
```

**Descrição dos scripts:**

- `npm run start`: inicia o servidor do Expo.
- `npm run android`: abre o app em um emulador/dispositivo Android.
- `npm run ios`: abre o app em simulador iOS (somente em macOS).
- `npm run web`: executa o projeto no navegador.

---

## 5. Estrutura de pastas

A estrutura atual do projeto é simples e organizada em arquivos de tela na raiz, além da pasta de recursos estáticos.

```text
CantinaOn/
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── splash-icon.png
│   └── imagens dos produtos (.jpg)
├── App.js
├── HomeScreen.js
├── PasswordScreen.js
├── shoppingCartScreens.js
├── index.js
├── app.json
├── package.json
├── package-lock.json
└── README.md
```

### Explicação dos arquivos principais

- **`App.js`**: configura a navegação principal entre as telas do aplicativo.
- **`HomeScreen.js`**: exibe o cardápio, os produtos e o botão do carrinho.
- **`shoppingCartScreens.js`**: mostra os itens selecionados, quantidades agrupadas e valor total.
- **`PasswordScreen.js`**: gera e exibe a senha do pedido.
- **`index.js`**: registra o componente principal da aplicação com o Expo.
- **`app.json`**: contém configurações do projeto Expo, ícones e splash screen.
- **`assets/`**: reúne imagens dos produtos e ícones do app.

### Sugestão de organização futura

Caso o projeto evolua, uma estrutura mais escalável pode ser:

```text
src/
├── components/
├── screens/
├── navigation/
├── services/
├── utils/
└── assets/
```

Essa separação facilita manutenção, testes e crescimento da aplicação.

---

## 6. Como executar o projeto

Abaixo está o passo a passo completo para rodar o aplicativo localmente.

### 6.1 Pré-requisitos

Antes de começar, tenha instalado em sua máquina:

- **Node.js** (versão LTS recomendada);
- **npm**;
- **Expo Go** no celular Android/iOS, caso deseje testar em dispositivo físico;
- opcionalmente, **Android Studio** ou simulador iOS para emuladores.

### 6.2 Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd fiap-cpad-cp1-CantinaOn
```

### 6.3 Instalar as dependências

```bash
npm install
```

### 6.4 Iniciar o projeto

```bash
npm run start
```

### 6.5 Executar no dispositivo ou emulador

Após iniciar o Expo:

- pressione **`a`** no terminal para abrir no Android;
- pressione **`i`** para abrir no iOS (em macOS);
- pressione **`w`** para abrir na Web;
- ou escaneie o **QR Code** com o aplicativo **Expo Go** no celular.

### 6.6 Fluxo de execução esperado

1. O app abre na tela de cardápio.
2. O usuário toca em um produto.
3. Um alerta confirma a adição ao carrinho.
4. O contador do carrinho é atualizado.
5. Ao abrir o carrinho, o total é calculado automaticamente.
6. Ao tocar em **Pagar**, o app gera uma senha para retirada.

---

## 7. Funcionalidades do app

### 7.1 Tela inicial – Cardápio

Na tela inicial, o usuário visualiza os produtos disponíveis para compra.

**Recursos presentes nessa tela:**

- listagem de itens com imagem, nome e preço;
- botão de carrinho no topo;
- badge com quantidade de itens selecionados;
- alerta para confirmar a adição de produtos ao carrinho.

**Produtos cadastrados atualmente:**

- Paçoca;
- Pão de batata;
- Cachorro-quente;
- Coxinha.

### 7.2 Tela de carrinho

A tela de carrinho apresenta um resumo dos itens escolhidos.

**Recursos presentes nessa tela:**

- agrupamento automático de itens repetidos;
- exibição da quantidade de cada produto;
- cálculo do valor total do pedido;
- botão de pagamento;
- mensagem de carrinho vazio quando nenhum item foi selecionado.

### 7.3 Tela de senha

Após confirmar a compra, o aplicativo exibe uma senha numérica aleatória.

**Recursos presentes nessa tela:**

- geração de senha aleatória;
- instrução para aguardar o chamado no balcão;
- botão para voltar ao menu principal.

---

## 8. Fluxo de uso do usuário

O fluxo principal do aplicativo funciona da seguinte forma:

1. **Entrada no app**: o usuário acessa a tela inicial.
2. **Seleção de produto**: toca em um item do cardápio.
3. **Confirmação**: escolhe adicionar o item ao carrinho.
4. **Carrinho**: acessa o carrinho pelo ícone superior.
5. **Revisão do pedido**: visualiza itens, quantidades e total.
6. **Pagamento**: toca no botão para prosseguir.
7. **Senha de retirada**: recebe um número para acompanhamento do pedido.
8. **Retorno ao menu**: pode voltar à tela inicial para um novo pedido.

---

## 9. Possíveis problemas e soluções

Abaixo estão alguns problemas comuns que podem ocorrer durante o uso ou desenvolvimento do projeto.

### 9.1 Erro de navegação entre telas

**Problema:** a tela não abre ou o app apresenta erro ao navegar.

**Possíveis causas:**

- nome da rota diferente entre `navigate()` e o `Stack.Screen`;
- componente importado com nome incorreto;
- parâmetro esperado não enviado pela rota.

**Solução:**

- verificar se os nomes das rotas estão exatamente iguais;
- conferir os imports em `App.js`;
- garantir que `selectedItems` esteja sendo enviado ao abrir o carrinho.

### 9.2 Imagens não aparecem

**Problema:** as imagens dos produtos não são exibidas.

**Possíveis causas:**

- caminho incorreto no `require()`;
- arquivo movido ou renomeado dentro da pasta `assets`;
- erro de digitação na extensão da imagem.

**Solução:**

- validar o caminho do arquivo em `HomeScreen.js`;
- manter os arquivos na pasta `assets`;
- reiniciar o cache do Expo com:

```bash
npx expo start -c
```

### 9.3 Botão de pagamento desabilitado

**Problema:** o botão **Pagar** aparece cinza e não pode ser pressionado.

**Causa:** o carrinho está vazio.

**Solução:**

- adicionar pelo menos um item ao carrinho antes de prosseguir;
- verificar se o item foi realmente confirmado no alerta da tela inicial.

### 9.4 Alterações não aparecem no app

**Problema:** você alterou o código, mas o aplicativo continua exibindo a versão anterior.

**Solução:**

```bash
npx expo start -c
```

Esse comando limpa o cache do Expo e força uma nova leitura dos arquivos.

### 9.5 Dependências com versões incompatíveis

**Problema:** erros após instalar bibliotecas manualmente.

**Solução:**

- preferir `npx expo install` para bibliotecas relacionadas ao ecossistema Expo;
- apagar `node_modules` e reinstalar, se necessário:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 10. Melhorias futuras sugeridas

Como evolução do projeto, podem ser implementadas as seguintes melhorias:

- tela de login ou identificação do usuário;
- persistência de carrinho;
- histórico de pedidos;
- integração com API ou banco de dados;
- controle real de fila de atendimento;
- cadastro dinâmico de produtos;
- cálculo de estoque disponível;
- melhoria visual com componentes reutilizáveis;
- separação do projeto em pastas `components`, `screens` e `navigation`.

---

## 11. Autores e orientador

Preencha esta seção com os dados do trabalho acadêmico.

**Autores:**

- RM 565437 - Leonardo Lopes Oliveira 
- RM 563119 - Lucas
- RM 563462 - Cadu
- RM 564878 - Felipe krzyzanovski

**Orientador(a):**

- Hercules Lima Ramos

**Instituição:**

- Faculdade / Universidade
- Curso
- Disciplina
- Semestre / Turma

---

## 12. Licença

Este projeto possui finalidade **exclusivamente acadêmica**.

Seu uso está destinado a estudos, demonstrações e avaliações universitárias. Caso necessário, a instituição ou o grupo pode complementar esta seção com uma licença específica, mas no estado atual o projeto deve ser tratado como **material acadêmico**.

---

## Considerações finais

O **CantinaOn** representa uma aplicação mobile simples, mas suficiente para demonstrar conceitos importantes de desenvolvimento com React Native e Expo. A documentação deste repositório foi estruturada para facilitar a compreensão do projeto, sua execução local e a apresentação acadêmica do trabalho.

Se desejar, este README também pode ser expandido no futuro com:

- capturas de tela do aplicativo;
- diagrama de navegação;
- wireframes;
- requisitos funcionais e não funcionais;
- backlog do projeto;
- roadmap de melhorias.
