import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next-Typescript-Tailwind-Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-xl mx-auto p-4 text-center">
        <h1 className="text-xl">
          Welcome to <span className="text-blue-600">Next-Typescript-Tailwind-Starter</span>
        </h1>
      </main>
    </div>
  );
}
