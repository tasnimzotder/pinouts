import BoardList from '@components/common/boardList/BoardList';
import { NextPage } from 'next';
import Head from 'next/head';

const BoardPage: NextPage = () => {
  const meta = {
    title: 'Boards | Pinouts',
    description: 'Interactive pinouts for various boards',
    url: 'https://pinouts.vercel.app/board',
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
      </Head>
      <main>
        <div className="max-w-4xl mx-auto my-16">
          <h1 className="my-5 text-xl">Boards: Interactive Pinouts</h1>
          <BoardList />
        </div>
      </main>
    </div>
  );
};

export default BoardPage;
