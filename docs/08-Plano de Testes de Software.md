## Plano de Testes de Software

| Casos de Teste | CT-01 - Cadastro de Usuário |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-007 - O sistema terá tela de Login e senha // RNF-007 - A plataforma interativa deve permitir o acesso apenas de usuários cadastrados |
|`Objetivo do teste` | Realizar cadastro de usuário |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Não possui uma conta? Cadastre-se" |
||3 - Preencher os campos obrigatórios (Nome, Ultimo nome, Usuário, E-mail, Data de Nascimento, Telefone, Crie uma senha, Confirme sua senha) |
||4 - Clicar em "Cadastrar" |
|`Critério de Êxito` | Usuário cadastrado com sucesso |

| Casos de Teste | CT-01 A - Cadastro de Usuário |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-007 - O sistema terá tela de Login e senha // RNF-007 - A plataforma interativa deve permitir o acesso apenas de usuários cadastrados |
|`Objetivo do teste` | Visualizar validação de campos do formulário de cadastro de usuário |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Não possui uma conta? Cadastre-se" |
||3 - Preencher os campos obrigatórios, campo "E-mail" com endereço de e-mail inválido, campo "Telefone" com número de telefone inválido, campo "Confirme sua senha" com senha diferente |
||4 - Clicar em "Cadastrar" |
|`Critério de Êxito` | Visualizar validação de dados dos campos do formulário |

| Casos de Teste | CT-02 - Realizar Login no Aplicativo
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-007 - O sistema terá tela de Login e senha // RNF-007 - A plataforma interativa deve permitir o acesso apenas de usuários cadastrados |
|`Objetivo do teste` | Realizar login no aplicativo 
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Colocar um Usuário e senha cadastrados |
||4 - Clicar em "Entrar"|
|`Critério de Êxito` | Login foi efetuado com sucesso  

| Casos de Teste | CT-02 A - Realizar Login no Aplicativo
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-007 - O sistema terá tela de Login e senha // RNF-007 - A plataforma interativa deve permitir o acesso apenas de usuários cadastrados |
|`Objetivo do teste` | Visualizar validação de campos do formulário de login 
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Colocar um Usuário e/ou Senha inválidos |
||4 - Clicar em "Entrar"|
|`Critério de Êxito` | O aplicativo informar que os dados estão inválidos 

| Casos de Teste | CT-03 - Criar categorias |
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
||8 - Clicar no botão "Cadastrar"  |
|`Critério de Êxito` | A categoria foi criada. |

| Casos de Teste | CT-03 A - Criar categorias |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-01 -  O sistema permite agrupar valores por seções (categorias) |
|`Objetivo do teste` | Testar a criação de categorias, sem colocar a informação do nome da categoria |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar"|
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " + " |
||6 - Clicar no botão "Categorias" |
||7 - não informar o título da categoria. informar somente o tipo (débito ou crédito)|
||8 - Clicar no botão "Cadastrar"  |
|`Critério de Êxito` | O sistema informou que não foi possível criar a categoria. |

| Casos de Teste | CT-04 - Fazer lançamentos, visualizar lançamentos por mês (entradas e saída por mês) |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-002 - O sistema permite o lançamento de débitos // RF-003 - O sistema permite o lançamento de créditos // RF-004 - O sistema permite datar lançamentos (exemplo: pagamentos ou recebimentos futuros)  // RF-005 - O sistema permite a visualização de entradas e saídas por mês |
|`Objetivo do teste` | Realizar lançamentos e filtrar a visualização por mês |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Informar o Usuário e Senha | 
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " + " |
||6 - Clicar em "Lançamentos" |
||7 - Preencher os campos obrigatórios |
||8 - Clicar no botão "Cadastrar" | 
||9 - Selecionar no filtro o mês e ano desejado para filtrar os lançamentos |
||10 - Clicar no botão "Ok" |
|`Critério de Êxito` | Lançamentos feitos com sucesso, Filtros por período realizado. |

| Casos de Teste | CT-04 A - Fazer lançamentos |
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-002 - O sistema permite o lançamento de débitos // RF-003 - O sistema permite o lançamento de créditos // RF-004 - O sistema permite datar lançamentos (exemplo: pagamentos ou recebimentos futuros)  // RF-005 - O sistema permite a visualização de entradas e saídas por mês |
|`Objetivo do teste` | Realizar lançamentos sem colocar uma informação |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Informar o Usuário e Senha | 
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão " + " |
||6 - Clicar em "Lançamentos" |
||7 - Preencher quase todos os campos obrigatórios |
||8 - Clicar no botão "Cadastrar" | 
|`Critério de Êxito` | O sistema informou que não foi possível concluir o lançamento. |


| Casos de Teste | CT-05 - Definir meta e visualizar alterações no status da meta|
|--------------------|------------------------------------|
|`Requisitos Associados` | RF-006 - O sistema permite a definição de meta e visualização do progresso de atingimento |
|`Objetivo do teste` | Definir e visualizar progresso da meta |
|`Passos` | 
||1 - Acessar o aplicativo móvel |
||2 - Clicar em "Entrar" |
||3 - Informar o Usuário e Senha |
||4 - Clicar no botão "Entrar" |
||5 - Clicar no botão "+" |
||6 - Clicar em "Meta" |
||6 - Informar o valor da meta |
||7 - Clicar no botão "Cadastrar" | 
||8 - Clicar em "Resumo" para visualizar o status da meta cadastrada |
|`Critério de Êxito` | Meta cadastrada e o status visualizado na aba "Resumo" |
