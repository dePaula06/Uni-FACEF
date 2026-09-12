# 🎓 Universidade Santo Agostinho

Sistema web para gerenciamento e manipulação de dados de alunos da Universidade Santo Agostinho.

O projeto foi desenvolvido para a disciplina de **Estrutura de Dados**, utilizando uma estrutura de dados heterogênea dinâmica baseada em **Array de Objetos**.

A aplicação permite cadastrar alunos, calcular automaticamente suas médias e resultados, visualizar os alunos cadastrados e gerar relatórios utilizando diferentes algoritmos de ordenação.

---

## 📚 Sobre o projeto

O sistema foi desenvolvido com o objetivo de aplicar, na prática, conceitos de **Estrutura de Dados e Algoritmos de Ordenação**.

Cada aluno possui os seguintes dados:

- Nome
- RA
- Idade
- Sexo
- Nota 1
- Nota 2
- Média
- Resultado

A média é calculada automaticamente pelo sistema:

```text
Média = (Nota 1 + Nota 2) / 2

# 🚀 Como rodar o projeto

O projeto é dividido em duas aplicações independentes:

- `backend`: responsável pela API e manipulação dos dados dos alunos.
- `frontend`: responsável pela interface gráfica da aplicação.

É necessário executar os dois servidores simultaneamente.

---

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

- [Node.js](https://nodejs.org/)
- npm, que é instalado junto com o Node.js

Para verificar se estão instalados:

```bash
node -v
npm -v