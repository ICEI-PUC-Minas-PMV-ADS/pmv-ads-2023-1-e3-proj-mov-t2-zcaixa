# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>
 
## Artefatos

No projeto nominado "ZCaixa Mobile" no Visual Studio Code,  seguimos realizando o desenvolvimento do projeto por meio Local (na própria máquina). Ao finalizar as alterações necessárias e realizando commit para o presente respositório. Outro membro do grupo pode importar as atualizações por meio do GitHub Desktop e dar andamento em seu VSCode local. 

Iniciando o a atendimento aos requisitos RF-007	e RF-008, implementamos o front-end das telas onde as funcionalidades de login, cadastro e recuperação de senha estarão associadas. Os arquivos (ou páginas da aplicação) Inicio.tsx e Login.tsx utilizam a variável "styles" localizada no arquivo Estilos.tsx onde importam as propriedades de estilização para os objetos das páginas (textos, botões, tamanhos, espaçamentos...). 
Abaixo a print de parte dos códigos:

<br>**Inicio.tsx** <br>
o Arquivo início é a página inicial da aplicação onde o usuário pode navegar para a área de login ou cadastro de usuário.
<br><a href="4-Metodologia.md">Link do código</a>

<br>**Login.tsx**<br>
A págnia Login é onde o usuário pode navegar para a área de cadastro ou recuperação de senha. Nela existem todas as funções necessárias para a autenticação do usuário como validação de preenchimento dos campos, função de login e passagem de valores para o contexto do usuário.
<br><a href="4-Metodologia.md">Link do código</a>

<br>**Cadastro.tsx**<br>
A página de cadastro é onde contém o formulário para a criação de uma conta para utilizar a aplicação. Nela contém as funções necessárias para o cadastro como a verificação dos dados preenchidos e envio dos dados para a API.
<br><a href="4-Metodologia.md">Link do código</a>

<br>**Route.tsx**<br>
O arquivo Route.tsx é o principal componente do aplicativo (utilizado no APP.tsx) pois é responsável por definir as rotas de navegação que utiliza a informação de autenticação no contexto do usuário para definir quais páginas serão exibidas.
<br><a href="4-Metodologia.md">Link do código</a>

<br>**Auth.tsx**<br>
O Arquivo Auth.tsx é o componente que utiliza a biblioteca NativeStackNavigator para apresentar as páginas para o usuário que não realizou a autenticação na aplicação. São elas Inicio, Login, Cadastro e Recuperação de senha.
<br><a href="4-Metodologia.md">Link do código</a>

<br>**Main.tsx**<br>
O Arquivo Main.tsx é o componente que utiliza a biblioteca NativeStackNavigator para apresentar a página para o usuário que realizou autenticação na aplicação. A página Caixa.tsx.
<br><a href="4-Metodologia.md">Link do código</a>

<br>**Caixa.tsx**<br>



