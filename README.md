# VmControl

## Descrição do Projeto

O VMControl é uma plataforma web de  gestão e monitoramento de Maquinas Virtuais. Os principais objetivos da plataforma são:
- **Centralização:** Unificar a administração de todas as VMs em um único local, facilitando o controle e a coordenação das operações.
- **Monitoramento Contínuo:** Facilita no alocamento de recursos de maneira eficiente e evitar desperdícios.
- **Escalabilidade:** Facilita a adição ou remoção de VMs conforme necessário, suportando o crescimento ou a redução de forma rápida e eficiente.
Desse modo a plataforma consegue simplificar, para o usuário final, a administração de suas máquinas virtuais.



## Tecnologias Utilizadas

O projeto foi desenvolvido com o Angular 17, sendo gerado com o Angular CLI na versão 17.3.8.

- HTML
- SCSS
- Angular
- Typescript

- **Biblioteca para gráficos:** Chart.js



## Design da Plataforma

As cores da plataforma foram baseadas na cores usadas na logo da Ustore, como maneira de reforçar a indentidade visual da empresa. O desing foi pensando na experiência do usuario, deixando os dados principais em destaque e disponibilizando um header para que ele pudesse navegar tranquilamente pela página. Todo o planejamento do desing foi feito a partir de uma prototipação no figma.
Link Figma: (https://www.figma.com/design/YWB3LuRb4l26bDeFYwPr01/Projeto-Ustore?node-id=0-1&t=3mnnZkXPJx9QRnZp-1)



## Intalação e Uso

Para executar o projeto localmente, siga as etapas:

1. Clone o repositório: `https://github.com/KeylaneCardoso/vm-control.git`
2. Execute o servidor: `ng server`
3. Acesse a plataforma no seu navegador: `http://localhost:4200/`.




## Implementações Incompletas

- Validações dos formulários (feito apenas de maneira parcial);
- Salvamento dos dados no localStorage (feito de maneira parcial);
- Criação de um componente de alerta porém sem sucesso para implementar;



## Tópicos em Falta

- gitignore;



## Desafios e Descobertas

Este foi o primeiro projeto que desenvolvi em Angular. Anteriormente, tive contato apenas com o React.js. Foi um desafio realmente desafiador que me tirou da minha zona de conforto e me fez desenvolver muitas habilidades, tanto as hard skills, que foram aprender a usar o framework, quanto as soft skills, onde foi preciso gerir bem o tempo para conseguir entregar o projeto com a melhor qualidade possível dentro do prazo proposto.

Esse projeto foi iniciado em outro repositório, porém, quando o criei, coloquei a tag `--no-standalone`, o que acabou gerando uma série de complicações com os módulos dos componentes, dificultando o processo de importação dos componentes. Por isso, decidi que seria mais viável criar outro repositório, desta vez com componentes standalone.

Apesar de ser um framework robusto, o Angular me chamou muito a atenção pela maneira como o projeto fica completo e organizado, facilitando a estruturação do projeto.Por conta de sua robustez, a curva de aprendizado acabou sendo mais demorada do que a do React, mas acredito que tudo pode ser aprendido, basta dedicação. Pretendo estudar mais sobre o Angular para melhorar cada vez mais meu trabalho e superar as dificuldades que tive no desenvolvimento dessa plataforma.