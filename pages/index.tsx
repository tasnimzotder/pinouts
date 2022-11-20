import BoardList from '@components/common/boardList/BoardList';
import Heading from '@components/homePage/heading/Heading';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const meta = {
    title: 'Pinouts',
    description: 'Interactive pinouts for various boards, chips, and more',
    url: 'https://pinouts.vercel.app',
    author: {
      name: 'Tasnim Zotder',
    },
  };

  return (
    <div>
      <Head>
        {/* Primary Meta Tags  */}
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author.name} />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        {/* <meta property="og:image" content="" /> */}

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        {/* <meta property="twitter:image" content="" /> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto">
        <Heading />

        <div className="max-w-3xl mx-auto">
          <Link href="/board" className="text-xl font-medium my-5">
            Boards: Interactive Pinouts
          </Link>

          <BoardList />
        </div>
      </main>
    </div>
  );
}
