# Aula 1: Introdução ao SCRUM

## Introdução a Gestão de Projetos e ao SCRUM

### Gestão de Projetos Tradicional Versus Metodologias Ágeis:

O método tradicional de desenvolvimento de software, também conhecido como Waterfall, baseia-se numa sequencia bem definida e pouco flexível para o desenvolvimento do software, onde cada fase do desenvolvimento ocorre apenas após a fase anterior ter sido concluída. De maneira geral as etapas do desenvolvimento de um software podem ser definidas da seguinte forma:

1. Requisitos
2. Design
3. Implementação
4. Verificação
5. Manutenção

Quando desenvolvido da forma tradicional, o software só vai pra produção após todas as funcionalidades terem sido implementadas. Isso pode ser problemático, pois o cliente só terá contato com o software após um longo período e o software pode não satisfazer suas necessidades.

Foi mostrado também que o Princípio de Paretto se aplica ao desenvolvimento de software, onde 20% das funcionalidades constumam gerar 80% do benefício e esperado. As outras 80% das funcionalidades correspondem a apenas 20% dos benefícios!

A partir deste cenário, as metodologias ágeis surgiram como uma alternativa para a forma tradicional de se fazer software. A gestão de projeto ágil divide o desenvolvimento de softwares de forma iterativa, onde a cada iteração busca-se desenvolver uma nova funcionalidade.

As principais características das metologias ágeis são:

- Escopo adptativo e desenvolvido ao longo de todo o projeto
- Fases do projeto divididas por funcionalidades
- Permitem aos clientes verem partes do software funcionando a cada etapa
- Incentiva o feedback constante do cliente para que ocorram as mudanças e melhorias nas próximas etapas

### Metodologia SCRUM

A metologia SCRUM, é a metodologia ágil mais famosa e utilizada atualmente, podendo ser definida como um framework de projetos ágeis, baseando-se em três pilares:

- **Transparência**: todos os desenvolvedores e integrantes trocam informações e conversam constantemente sobre o andamento do projeto, buscando atingir a maior transparência possível no desenvolvimento. Além disso, a metodologia baseia-se no feedback constante dos usuários por meio da quebra do projeto em entregas que sejam mínimas e funcionais.
- **Adaptação**: os requisitos do projeto mudam ao longo do tempo. O feedback constante e o processo iterativo do SCRUM contribuem para a adaptação do escopo e objetivos do projeto para satisfazer as necessidades dos clientes.
- **Inspeção**: as frequentes reuniões (como os Daily Meetings) permitem a constante inspeção do desenvolvimento do projeto onde os desenvolvedores ficam cientes do trabalho de todos os integrantes da equipe contribuindo para o direcionamento e aprendizado progressivo ao longo do desenvolvimento.

O SCRUM é caracterizado por ciclos chamados de Sprints com duração máxima de até 30 dias, onde a cada sprint busca-se entregar uma nova funcionalidade do software (embora, em alguns casos, isso não seja possível).

Dado as características acima, a metodologia SCRUM contribui para o desenvolvimento de softwares de maneira mais rápida e flexível. Algumas das razões para adotar o SCRUM são:

- Menor tempo de entrega (2 a 4 semanas), priorizando a entrega do software em partes menores, porém funcionais.
- Melhor gerenciamento de risco: incertezas reduzidas devido as iterações constantes com o cliente
- Maior valor ao negócio: as funcionalidades principais e mais importantes são priorizadas através do Backlog.
- Comprometimento e motivação contínua do time de desenvolvimento.
- Envolve o cliente com as etapas do desenvolvimento e permite o time aprender contínuamente.

## Papéis e responsabilidades dos integrantes do time:

Na metodologia SCRUM, o time tem papel fundamental para que os resultados sejam alcançados. As equipes devem ser capazes de se auto-organizarem para o desenvolvimento do Sprint e as tarefas são responsabilidade de todos os integrantes. Desta maneira, o time se torna fortemente comprometido com os resultados.

A metodologia SCRUM Divide o time em 3 responsabilidades principais: _Product Owner_, _SCRUM Master_ e _Time de Desenvolvimento (DEV)_

**Product Owner**:

- É uma única pessoa que representa a área de negócios.
- É ele (ou ela) o responsável definir as funcionalidades do software, que são anotadas no _Product Backlog_.
- O Product Owner (ou P.O.) prioriza as funcionalidades de acordo com o valor que elas agregam ao cliente ou negócio.
- É responsável também por garantir que os DEV's entendam os itens do Backlog.

**SCRUM Master**:

- É responsável por garantir a aplicação correta da metodologia SCRUM
- Pode auxiliar o Product Owner no planejamento do Backlog e na transcrição das informações para o time DEV.
- Entretanto, o SCRUM Master (ou S.M.) não é responsável por delegar tarefas.
- Outra função é auxiliar o time no desenvolvimento das tarefas, permitindo que se tornem cada vez mais independentes.

**Time de Desenvolvimento**:

- Possuem as habilidades técnicas para o desenvolvimento do software
- Geralmente, é formado por 3 a 9 desenvolvedores.
- O time DEV geralmente é formado por DEV's multidisciplinares, ou seja, DEV's que dominam todas as etapas do desenvolvimento. Entretanto, muitas vezes haverão DEV's especialistas em determinadas etapas do desenvolvimento, que se desenvolverão nas outras áreas ao longo do tempo.

## Cerimônias do SCRUM:

As cerimônias são diferentes reuniões desenvolvidas ao longo do desenvolvimento de um Sprint do SCRUM. Pra entendê-las, deve-se conhecer primeiramente o conceito de Time Box:

**Time Box**: Nada mais é do que o tempo máximo para o desenvolvimento de um Sprint ou cerimônia do SCRUM.

Como dito anteriormente, os Sprints (do inglês: corrida ou arrancada) são os principais eventos do SCRUM, duranto no máximo 30 dias. Em cada Sprint, uma nova funcionalidade ou parte do software é desenvolvida. As Sprints são constituídas de diferentes reuniões, sendo elas:

- **Planejamento da Sprint**: Ocorrre no início da sprint e tem duração de 8 horas em Sprints de 30 dias, envolvendo o P.O, S.M e o time de Desenvolvimento. Nas primeiras quatro horas define-se "_o que fazer_". Nestas horas o Product Owner explica ao time as funcionalidades e o que deve ser feito a partir do Product Backlog previamente desenvolvido. Nas quatro horas seguintes, o time de desenvolvimento discorre sobre o que será necessário para entregar as atividades propostas pelo P.O, utilizando-se de técnicas como o "Planning Poker" para estimar o tempo necessário para cada tarefa. Por fim o time de desenvolvimento comunica ao P.O o que será possível de ser entregue na sprint.

- **Reuniões Diárias (Daily Meetings)**: Reuniões diárias compostas por todos os integrantes do SCRUM Team, com um Time-Box de 15 minutos e normalmente feitas com os integrantes de pé (para que sejam mais objetivos em suas falas). Nesta reunião cada membro diz o que fez no dia anterior, o que pretende fazer no presente dia e se há algum impedimento para desenvolver suas tarefas.
- **Revisão da Sprint (Sprint Review)**: Revisão que ocorre no último dia da Sprint, com timebox de 4 horas (Em Sprints de 30 dias), onde o time DEV apresenta ao P.O. o trabalho realizado. Após a aceitação do P.O, o software é colocado em produção e possíveis feedbacks do PO são levados para a última Sprint.
- **Retrospectiva**: Reunião do time DEV (PO e SCRUM Master também podem participar) onde todos apontam os erros cometidos ao longo da Sprint ou mesmo na Sprint Review. Os DEV's devem ser o mais transparentes possíveis para que o time possa evoluir com os erros e melhorar para as próximas Sprints.s