# **Professional Website**

Public institutional website for Rogeria Santos, built with Next.js and the App Router.

## **Tech Stack**

- Next.js 16.2.0 (Turbopack)
- React 18 / TypeScript 5
- Tailwind CSS 3 / Radix UI / Framer Motion

## **Getting Started**

Make sure you have **Node.js 20.19+** and **npm 10+** installed, then:

```
bash
```

`npm install`  
`npm run dev`  


Open **[http://localhost:3000](http://localhost:3000)** in your browser. No environment variables required.

## **Scripts**


| **Command**     | **Description**               |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the development server  |
| `npm run build` | Generate the production build |
| `npm run start` | Run the production build      |
| `npm run lint`  | Run ESLint static analysis    |


## **Project Structure**

```
text
```

`src/`  
`├── app/              # Global layout, metadata, and main route`  
`├── components/       # Page sections and reusable UI`  
`├── lib/site-content.ts  # All public texts and institutional content`  
`└── styles/           # Global styles`  
`public/               # Images and static assets`  


## **Contributing**

- Keep site content centralized in `src/lib/site-content.ts`
- Keep UI components decoupled from content
- Documentation changes must reflect the actual stack

