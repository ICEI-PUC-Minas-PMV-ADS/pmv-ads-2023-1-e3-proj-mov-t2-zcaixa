# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>
 
## Artefatos

No projeto nominado "ZCaixa Mobile" no Visual Studio Code,  seguimos realizando o desenvolvimento do projeto por meio Local (na própria máquina). Ao finalizar as alterações necessárias e realizando commit para o presente respositório. Outro membro do grupo pode importar as atualizações por meio do GitHub Desktop e dar andamento em seu VSCode local. 

Iniciando o a atendimento aos requisitos RF-007	e RF-008, implementamos o front-end das telas onde as funcionalidades de login, cadastro e recuperação de senha estarão associadas. Os arquivos (ou páginas da aplicação) Inicio.tsx e Login.tsx utilizam a variável "styles" localizada no arquivo Estilos.tsx onde importam as propriedades de estilização para os objetos das páginas (textos, botões, tamanhos, espaçamentos...). 
Abaixo a print de parte dos códigos:

<br>**Inicio.tsx** <br>
o Arquivo início é a página inicial da aplicação onde o usuário pode navegar para a área de login ou cadastro de usuário.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/pages/Inicio.tsx">Link do código</a>

<br>**Login.tsx**<br>
A págnia Login é onde o usuário pode navegar para a área de cadastro ou recuperação de senha. Nela existem todas as funções necessárias para a autenticação do usuário como validação de preenchimento dos campos, função de login e passagem de valores para o contexto do usuário.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/pages/Login.tsx">Link do código</a>

<br>**Cadastro.tsx**<br>
A página de cadastro é onde contém o formulário para a criação de uma conta para utilizar a aplicação. Nela contém as funções necessárias para o cadastro como a verificação dos dados preenchidos e envio dos dados para a API.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/pages/Cadastro.tsx">Link do código</a>

<br>**Route.tsx**<br>
O arquivo Route.tsx é o principal componente do aplicativo (utilizado no APP.tsx) pois é responsável por definir as rotas de navegação que utiliza a informação de autenticação no contexto do usuário para definir quais páginas serão exibidas.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/navigations/Route.tsx">Link do código</a>

<br>**Auth.tsx**<br>
O Arquivo Auth.tsx é o componente que utiliza a biblioteca NativeStackNavigator para apresentar as páginas para o usuário que não realizou a autenticação na aplicação. São elas Inicio, Login, Cadastro e Recuperação de senha.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/navigations/Auth.tsx">Link do código</a>

<br>**Main.tsx**<br>
O Arquivo Main.tsx é o componente que utiliza a biblioteca NativeStackNavigator para apresentar a página para o usuário que realizou autenticação na aplicação. A página Caixa.tsx.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/navigations/main.tsx">Link do código</a>

<br>**Caixa.tsx**<br>
O Arquivo Caixa.tsx é o componente principal da aplicação após a autenticação do usuário, que possibilita a navegação entre as páginas Caixa, Resumo, Minha Conta, além das telas de cadastro de lançamentos, categorias e meta.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/pages/Caixa.tsx">Link do código</a>

<br>**Auth.services.tsx**<br>
O Arquivo Auth.services.tsx contém todas as funções e procedimentos para autenticação do usuário assim como a obtenção dos dados para consumo do contexto do usuário dentro da aplicação.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/services/auth.services.tsx">Link do código</a>

<br>**Categorias.services.tsx**<br>
O Arquivo categorias.services.tsx contém as funções e procedimentos para realizar o cadastro e busca das categorias cadastradas para cada usuário.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/services/categorias.services.tsx">Link do código</a>

<br>**Lancamentos.services.tsx**<br>
O Arquivo lancamentos.services.tsx contém as funções e procedimentos para realizar o cadastro, edição, delete, filtro, e busca dos lançamentos do usuário.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/services/lancamentos.services.tsx">Link do código</a>

<br>**urls.tsx**<br>
O Arquivo urls.tsx contém a URL da API declarada como uma constante que é importada e utilizada nos serviços que fazem requisições.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/services/urls.tsx">Link do código</a>

<br>**Webapi.services.tsx**<br>
O Arquivo webapi.services.tsx contém importação e inicialização do Axios para utilizar nos serviços que fazem requisições.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/services/webapi.services.tsx">Link do código</a>

<br>**UserContext.tsx**<br>
O Arquivo contém a criação do um contexto do usuário para fins de autenticação. Nele é armazenado os dados necessários para que a aplicação possa identificar e definir os filtros escolhidos pelo usuário. Fornece os dados necessários do usuário autenticado para as páginas que necessitam do mesmo.
<br><a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/src/Projeto%20VS/ZCAIXAMOBILE/src/contexts/UserContext.tsx">Link do código</a>


