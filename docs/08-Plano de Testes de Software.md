## Plano de Testes de Software

| Casos de Teste | CT-01 - Acessar tela de login e cadastro de usuário |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-007 - O sistema terá tela de Login e senha // RNF-007 - A plataforma interativa deve permitir o acesso apenas de usuários cadastrados |
|`Objetivo do teste` | Testar o acesso a tela de login, criar um usário e senha e testar a recuperação de senha |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Não possui uma conta? Cadastre-se" |
||3 - Preencher os campos obrigatórios (Nome, Ultimo nome, E-mail, Username, Data de Nascimento, Telefone, Crie uma senha, Confirme sua senha) |
||4 - Clicar em "Cadastrar" |
||5 - Clicar em "Esqueceu sua senha?" |
||6 - Preencher o campo com "E-mail, usuário ou telefone" |
||7 - Clicar no botão "Enviar" |
|`Critério de Êxito` | O usuário criou um login e senha e conseguiu redecuperar a senha. |


| Casos de Teste | CT-02 - Criar categorias |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-01 -  O sistema permite agrupar valores por seções (categorias) |
|`Objetivo do teste` | Testar a criação de categorias |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar"|
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " + " |
||6 - Clicar no botão "Categorias" |
||7 - Informar o título da categoria e o tipo (débito ou crédito)|
||8 - Clicar no botão "Inserir categoria"  |
|`Critério de Êxito` | As categorias foram criadas. |


| Casos de Teste | CT-03 - Fazer lançamentos, visualizar lançamentos por mês (entradas e saída por mês) |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-002 - O sistema permite o lançamento de débitos // RF-003 - O sistema permite o lançamento de créditos // RF-004 - O sistema permite datar lançamentos (exemplo: pagamentos ou recebimentos futuros)  // RF-005 - O sistema permite a visualização de entradas e saídas por mês |
|`Objetivo do teste` | Realizar lançamentos e filtrar a visualização por mês |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Informar o Usuário e Senha | 
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " + " |
||6 - Preencher os campos obrigatórios |
||7 - Clicar no botão "Inserir" | 
||8 - Selecionar no filtro o mês e ano desejado para filtrar |
||9 - Clicar no botão "Ok" |
|`Critério de Êxito` | Lançamentos feitos com sucesso, Filtros por período realizado. |


| Casos de Teste | CT-04- Definir meta e visualizar alterações no status da meta|
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-006 - O sistema permite a definição de meta e visualização do progresso de atingimento |
|`Objetivo do teste` | Definir e visualizar progresso da meta |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão "+" |
||6 - Informar o valor da meta |
||7 - Clicar o botão "Inserir" | 
||8 - Clicar em "Resumo" |
|`Critério de Êxito` | Meta cadastrada e o status visualizado na aba "Resumo" |
