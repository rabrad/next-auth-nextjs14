This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

### NextAuth

Adapters: Used to store data in the database. In NextAuth we used [Prisma](https://authjs.dev/reference/adapter/prisma).
See [Best practice for instantiating PrismaClient with Next.js](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices#problem)
To fix Prisma error on dev env only.

Database: Used [supabase](https://supabase.com/)

- create new database project
- from settings / database / connection string: URI .. copy the link
- Use it to replace DATABASE_URL in .env file and add the project password.

To test Run: **npx prisma db push** to populate your Database with Prisma schema

### register new dev application in GitHub

github profile / settings/ Register a new OAuth application:
For Authorization callback URL: use the NextAuth pattern
**<http://localhost:3000/api/auth/callback/(github)>** where github this time and maybe google for google callback url ..

## register email via resend

see this [link](https://youtu.be/gPQ9SD_qpuk?t=1904)
