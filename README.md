# Next.js Authentication with NextAuth.js

This guide provides a clear step-by-step process to set up authentication in a Next.js application using NextAuth.js. The authentication flow includes email verification, GitHub OAuth, and Prisma as the database adapter.

## UI Components from Shadcn

## NextAuth.js

NextAuth.js offers a comprehensive open-source authentication solution tailored for Next.js applications.

`Providers`: (Using a built-in OAuth Provider: GitHub & Email), Google, Facebook, Twitter..

`Adapter`: (used: Prisma), Supabase, Drizzle ORM, TypeORM..

### Setting Up Providers

1- [GitHub](https://next-auth.js.org/providers/gitlab#example)

2- [Email with SMTP](https://next-auth.js.org/providers/email#smtp )

This require using **nodemailer** with `2.2 Using a configuration object` and
database **adapters** for storing the Email verification token.

The email will be send via email provider with the magic link to confirm the user and return the user the home page

### Configuring Adapters with Prisma

Using prisma as an NextAuth adapter and database see [docs](https://authjs.dev/reference/adapter/prisma)

1 - Install prisma

2 - Create a `db.ts` following [Prisma Docs](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices#problem)

3 - Import `prisma` from `db.ts` (Not from "@prisma/client") and pass it into the adapter: `adapter: PrismaAdapter(prisma)`

4- Create a schema: `npx prisma init` (This will create DATABASE_URL in the .env and the prisma directory)

5- In the `schema.prisma` pass prisma models from [Prisma Schema](https://authjs.dev/reference/adapter/prisma#create-the-prisma-schema-from-scratch)

This is the setup for Prisma to work with nextAuth

### Create a database

will use [Supabase](https://supabase.com). Once created got to `settings / database / connection string / URI`
Copy the link and pass it as a value to the `DATABASE_URL` along with your pw.

6 - When ready `npx prisma db push`

### Environment Configuration

#### GitHub OAuth

- GITHUB_ID & GITHUB_SECRET:
github.com settings / Developer Settings / OAuth Apps --> Create new

   (Temporary)

        homepage URL: `http:localhost:3000`
        Authorization callback URL: `http:localhost:3000/api/auth/callback/github`

#### Email Service

Utilize [Resend](https://resend.com/) for email service and generate an API Key.

Set environment variables as recommended in the [Resend Documentation](https://resend.com/changelog/smtp-service)

        EMAIL_SERVER_USER=resend
        EMAIL_SERVER_PASSWORD= `YOUR_API_KEY`
        EMAIL_SERVER_HOST=smtp.resend.com
        EMAIL_SERVER_PORT=465
        EMAIL_FROM=onboarding@resend.dev

Update **`EMAIL_FROM`** after verifying your website on Resend.

### User Interface Components

- app > auth > page.tsx: Utilize AuthRoute() for routing.
- Create client-side components with click handlers:
  - app > components > GithubButton.tsx
  - app > components > SignInFrom.tsx
  - app > components > LogOutButton.tsx

## Authentication Flow Recap

1- Public Pages: Users access public pages like the Homepage and /auth.

2- Email Verification: Upon login, users receive a magic link via email for account confirmation.

3- Protected Routes: Clicking the magic link redirects users to the protected route, ensuring secure access to authenticated pages.

### Deployed project

<https://next-auth-nextjs14.vercel.app/>
