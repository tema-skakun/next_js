## About the project
In this project, I studied Next.js is an open JavaScript framework built on top of React.js for creating web applications, created by Vercel. The framework was designed to solve the React problem.The js related to server-side application rendering - SSR and SSG - also complements React.js provides convenient solutions for navigation (routing) between pages using a file-based approach (file-system based router). It works on the server and in the browser.

### Server Side Rendering
is abbreviated SSR — for each user request, the server generates an HTML page and returns it to the user.

### Static Site Generation
is abbreviated SSG — all HTML pages are created during the build of the application, after which they are reused with each client request.

**SSR** and **SSG** help to reduce the load on the device that uses the application.

### SEO optimization
In the usual approach that React uses (the SPA approach), everything is rendered on the client side (the site user's device).
The problem is that the search engine robot cannot view the original page code, which has not yet been processed by React - the robot sees an empty page.
Next.js solves this problem using SSR and/or SSG.

### I did:
- implemented two approaches SSR and SSG
- created a small API that returns a list of social network contacts
- performed typing using Typescript
- uploaded the finished application to [Vercel](https://blog-node-js-rnkc.onrender.com ).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/socials](http://localhost:3000/api/socials). This endpoint can be edited in `pages/api/socials.tsx`.

