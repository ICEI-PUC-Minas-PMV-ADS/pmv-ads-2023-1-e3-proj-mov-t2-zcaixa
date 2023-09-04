
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

## Relação de Ambientes de Trabalho 

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue. 

`Ambiente`       `Plataforma`        `Link de Acesso`

Repositório de código fonte | GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa

Documentos do projeto | GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/tree/main/docs

Projeto de Interface e Wireframes | MarvelApp | [Marvel APP - ZCaixa Mobile](https://marvelapp.com/prototype/6a20jd5)

Gerenciamento do Projeto | Sprints / Diagrama de Gantt | GitHub | https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/123


## Gestão de Código Fonte 

A gestão do código fonte do projeto é baseada no conteúdo proporcionado na orientação do projeto, que se dá pela opção commit no GitHub sendo atualizado os requisitos implementados ou ajustados no código fonte, ao mesmo tempo em que se atualiza os cards de sprints apresentados no quadro de tarefas.

## Controle de Versão

A **ferramenta de controle** de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

**O projeto segue o seguinte fluxo de trabalho:**

<Img src="https://user-images.githubusercontent.com/59934631/164794368-739291c2-9ffa-4d38-ae37-640a3dc633b8.png">

**As ramificações podem ser descritas como:**

- **`Master`**: versão original ou espelho da ***versão atual da aplicação***;
- **`Develop`**: cópia da ramificação 'Master" com funcionalidades ainda não publicadass ***(base para 'Feature')***;
- **`Feature`**: ramificação temporária e auxiliar, contendo uma nova ***funcionalidade específica***;
- **`Hotfix`**: ramificação temporária e auxiliar, que contém correções rápidas a serem incluídas direto nas  ramificações **'Main'** e **'Develop'**;
- **`Release`**: ramificação que une os que está pronto em **'Develop'** e inclui na **'Main'** e a partir daí é criada uma nova versão da aplicação.

## Gerenciamento de Projeto

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.

A equipe está organizada da seguinte forma: 

**Project Manager / Scrum Master**: Pedro Ferreira, Tiago Lobo

**Product Owner**: Professor (Mateus Curcino)

**Desenvolvedor líder**: Ricardo Teixeira

**UI/UX Designers**:

- Gabriel Ferreira

**Desenvolvedores Frontend**:

- Gabriel Ferreira
- Leandro Furtado
- Tiago Lobo

**Desenvolvedores Backend**:

- Nicholas
- Pedro Ferreira
- Ricardo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o quadro de tarefas do GitHub KANBAN unindo algumas fazes da metodologia ágil Scrum e estruturado com as seguintes listas: 

●	BACKLOG: Registro de requisições deinidos em conjunto com o Scrum Master e Product Owner do projeto;

●	SPRINT BACKLOG: as tarefas do Backlog são detalhadas e então designadas para cada integrante do desenvolvimento;

●	IN PROGRESS: Recebe os cartões de tarefas que estão sendo desenvolvidas no presente, vindas do Sprint Backlog.

●	IN REVIEW: Esta demonstra cartões que foram executados, mas que devem ser avaliados e discutido pela equipe para determinar a atualização da tarefa para DONNE. Quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista juntamente com um comentário sobre o que está travando a tarefa.

●	DONE: Esta lista representa os cartões que já foram executados, avaliados e dados como feito.


O quadro ZCaixa Project do grupo no GitHub pode ser visualizado no link [ZCaixa Project](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/223) e é apresentado, no estado atual, na Figura abaixo:

![Kanban](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t2-zcaixa/blob/main/docs/img/Kaban.png?raw=true)


### Processo

Ao realizar reuniões para continuidade do projeto, são definidos os cards de tarefas com seus respectivos responsáveis. Ao inicar uma tarefa, deve ser movido o card para a lista "In Progress", após sua execução, é movida para a lista "In Review" o qual haverá uma avaliação por todos integrantes do grupo para concluir que o card deve ser atualizado para a lista "Done".
 

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código : Visual Studio Code;
- Emulador da aplicação: Android Studio, NPM;
- Ferramentas de comunicação: Whatsapp, Teams;
- Gerencimaneto do projeto: GitHub Projects e MS Project;
- Ferramentas de desenho de tela (_wireframing_): MarvelAPP, Heflo;
- Ferramentas para diagramas (conceitual e lógico): Diagrams.net, Astah, Lucid Charts, BRMW.

O editor de código foi escolhido pelo grupo pois é o mais prático e acessível para os integrantes, além de facilitar a alternação de quem está editando o código e salvando diretamente no reposítorio através do GitHub Desktop. Tem um bom dicionário de erros no código e permite acompanhar alterações em tempo real através do navegador.
