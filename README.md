# Quaser

Quaser is the ultimate PDF reader that understands and responds. Upload, ask, and get instant answers from your documents!

## Features

- **Chat with Documents**: Interact with your PDFs and get instant responses.
- **User-Friendly Interface**: Simple and intuitive design for seamless user experience.
- **GitHub Integration**: Easily access the source code on GitHub.
- **Optimized Performance**: Utilizes server components to selectively ship React libraries to the browser only when necessary.
- **Modern Tech Stack**: Built with Next.js 14, Tailwind CSS, Shadcn UI components, TypeScript, tRPC protocol, Prisma ORM, and Supabase PostgreSQL database.
- **Authentication**: Handled through the Kindle authentication provider.
- **Deployment**: Deployed on Vercel for seamless scalability and performance.

## Demo

Check out the live demo [here](https://quaser.vercel.app/).

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/quaser.git
cd quaser
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Set up your environment variables by creating a [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fsambarot%2FDeveloper%2FNextJs%2Fquasar%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/sambarot/Developer/NextJs/quasar/.env") file in the root directory and adding your configuration:

```env
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_url
```

Run the development server:

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

You can start editing the page by modifying [`src/app/page.tsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fsambarot%2FDeveloper%2FNextJs%2Fquasar%2Fsrc%2Fapp%2Fpage.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/sambarot/Developer/NextJs/quasar/src/app/page.tsx"). The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Prisma Setup

Ensure your database is set up and migrate your Prisma schema:

```bash
npx prisma migrate dev
```

Learn more about Prisma in the [Prisma documentation](https://pris.ly/d/prisma-schema).

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.
- [tRPC Documentation](https://trpc.io/docs) - learn about tRPC protocol.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM.
- [Supabase Documentation](https://supabase.io/docs) - learn about Supabase PostgreSQL database.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contact

Have a question? Feel free to reach out to me:

- **Phone**: 519-897-2840
- **Email**: sam29061994@gmail.com