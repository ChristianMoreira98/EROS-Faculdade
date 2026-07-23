## Eros Faculdade

Site institucional fictício de uma faculdade de tecnologia, desenvolvido como projeto de estudo. A proposta é simples: um site de página única (single page) com informações sobre a instituição, os cursos oferecidos, um modal de aviso institucional e um formulário de pré-inscrição, além de um botão de alternância entre tema claro e tema escuro.

O foco principal do projeto não é a complexidade da aplicação, mas sim a prática de conceitos fundamentais de desenvolvimento web front-end, especialmente o uso de JavaScript puro (sem frameworks ou bibliotecas) para manipular o DOM, validar dados de formulário, controlar a exibição de elementos na tela e alterar dinamicamente estilos da página.

## Objetivo do projeto

Este projeto foi criado com fins de estudo, servindo como exercício prático para três temas principais:

Manipulação de formulários com JavaScript: captura de valores digitados pelo usuário, validação de campos obrigatórios e exibição de mensagens de retorno na tela sem a necessidade de recarregar a página.
Alternância de tema (dark mode): uso de classes CSS controladas via JavaScript para trocar toda a paleta de cores da página em tempo real, incluindo a troca do ícone do botão de tema.
Exibição de um modal (janela sobreposta): uso de classes CSS controladas via JavaScript para mostrar e esconder um aviso institucional por cima do conteúdo da página, junto com um fundo escurecido (overlay).

## Tecnologias utilizadas
HTML5: estruturação semântica do conteúdo (cabeçalho, seções, modal, formulário e rodapé).
CSS3: estilização da página, com uso de variáveis CSS (custom properties) para organizar as cores dos temas claro e escuro, além de Flexbox para a construção dos layouts e da responsividade.
JavaScript (Vanilla JS): toda a lógica de interação da página, incluindo a validação do formulário de inscrição, a alternância do tema visual e o controle de abertura/fechamento do modal, escrita sem o uso de bibliotecas ou frameworks externos.
Google Fonts: fontes web utilizadas para compor a identidade visual do site (uma fonte de destaque para títulos, uma fonte para o corpo do texto e uma fonte monoespaçada para elementos que remetem a código).
Estrutura dos arquivos
index.html: estrutura e conteúdo da página.
style.css: toda a estilização, incluindo as variáveis de cor dos dois temas, o modal e as regras de responsividade.
script.js: lógica em JavaScript, dividida em três funções principais, explicadas a seguir.

## Alternância de tema claro e escuro

O botão localizado no cabeçalho do site permite ao usuário alternar entre o tema claro e o tema escuro. O funcionamento é baseado na adição e remoção de uma classe CSS no elemento body da página. Quando essa classe está presente, um novo conjunto de variáveis de cor entra em vigor, alterando o fundo, o texto, as bordas e os destaques de toda a página de uma só vez. O ícone exibido no botão (sol ou lua) também é atualizado via JavaScript, refletindo o tema ativo no momento.

## Formulário de pré-inscrição

A seção de inscrição contém um formulário simples com três campos: nome completo, curso desejado e turno. Ao clicar no botão de envio, uma função em JavaScript é responsável por:

Capturar o valor preenchido em cada campo do formulário.
Verificar se todos os campos obrigatórios foram preenchidos.
Exibir uma mensagem de erro caso algum campo esteja em branco.
Exibir uma mensagem de confirmação personalizada, montada com os dados informados pelo usuário, caso o preenchimento esteja correto.

Toda essa validação acontece no lado do cliente (client-side), sem envio real dos dados para um servidor, já que o objetivo aqui é estudar a lógica de manipulação do DOM e não a construção de um back-end.

Modal de aviso institucional

Na seção de cursos, um botão abre um modal (uma janela sobreposta ao conteúdo da página) com um comunicado institucional. A exibição do modal é controlada por duas funções em JavaScript:

Uma função que adiciona uma classe CSS tanto ao modal quanto a um elemento de fundo escurecido (overlay), tornando os dois visíveis na tela.
Uma função que remove essa mesma classe de ambos os elementos, escondendo o modal e o overlay novamente.

O fechamento pode ser feito tanto pelo botão "Fechar" dentro do modal quanto clicando na área escurecida ao redor dele, já que o clique no overlay também está ligado à função de fechamento.

## Responsividade

O layout foi construído utilizando Flexbox, sem o uso de CSS Grid, com o objetivo de manter a lógica de responsividade mais simples e direta. A página se adapta a diferentes tamanhos de tela através de media queries, reorganizando os elementos em telas menores:

Em telas grandes, o conteúdo principal e a demonstração visual da seção inicial ficam lado a lado, e os cursos são exibidos em múltiplas colunas.
Em tablets, o número de colunas dos cursos é reduzido.
Em celulares, todos os elementos passam a ocupar a largura total da tela, empilhados verticalmente, incluindo o menu de navegação, que se reorganiza abaixo do cabeçalho.
Visualização do projeto

Link para a visualização do projeto: https://christianmoreira98.github.io/EROS-Faculdade/
