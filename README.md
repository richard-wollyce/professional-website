# Rogeria Santos Website

Site institucional público de Rogeria Santos, desenvolvido com a stack atual do ecossistema Next.js e organizado para publicação em repositório público.

## Visão Geral

- Projeto focado em conteúdo público do site
- Sem dependência atual de variáveis de ambiente para rodar localmente
- Estruturado com App Router
- Conteúdo centralizado para facilitar manutenção textual

## Tecnologias Atuais

- Next.js 16.2.0
- React 18
- TypeScript 5
- Tailwind CSS 3
- ESLint 9 com Flat Config
- Radix UI
- Framer Motion
- Turbopack como pipeline padrão de desenvolvimento e build no Next 16

## Requisitos

- Node.js 20.9+
- npm 10+

## Estrutura do Projeto

- `src/app`: layout global, metadados e rota principal
- `src/components`: seções da página, componentes de layout e UI reutilizável
- `src/lib/site-content.ts`: textos públicos, dados de contato e conteúdo institucional
- `src/styles`: estilos globais
- `public`: imagens e arquivos estáticos públicos

## Desenvolvimento Local

```bash
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera a build de produção
- `npm run start`: executa a build em modo produção
- `npm run lint`: roda a análise estática com ESLint

## Convenções do Projeto

- O conteúdo institucional do site deve ser mantido preferencialmente em `src/lib/site-content.ts`.
- Imagens públicas do site devem ficar em `public/`.
- Componentes de interface devem permanecer desacoplados do conteúdo sempre que possível.
- Alterações de documentação devem refletir a stack real do projeto.

## Cuidados Para Repositório Público

- Versionar apenas arquivos que podem ser públicos.
- Não subir currículos, planejamentos, briefs, materiais internos ou documentos de trabalho.
- Guardar segredos apenas em arquivos locais `.env`, que já estão ignorados pelo Git.
- Revisar imagens antes do commit para evitar metadados ou conteúdo não intencional.

## Observação

Este repositório documenta o projeto e sua estrutura técnica, sem assumir uma plataforma específica de hospedagem ou deploy.
