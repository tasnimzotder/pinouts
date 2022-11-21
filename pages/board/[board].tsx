import BoardDetailsPanel from '@components/board/boardDetailsPanel/BoardDetailsPanel';
import PinsInteractive from '@components/board/pinsInteractive/PinsInteractive';
import { useSelected } from '../../lib/contexts/selected.context';
import BoardType from '../../lib/interfaces/board.interface';
import { getBoardData } from '../../lib/services/board.service';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const BoardPageSingle = ({ boardData }: { boardData: BoardType }) => {
  const meta = {
    title: `${boardData.name} Pinout | Pinouts`,
    description: `Interactive pinout of ${boardData.name} board`,
    url: `https://pinouts.vercel.app/board/${boardData.id}`,
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
        <div className="flex flex-row flex-wrap  justify-evenly mx-auto px-[5%] py-5">
          <PinsInteractive boardData={boardData} />
          <BoardDetailsPanel boardData={boardData} />
        </div>
      </main>
    </div>
  );
};

// const getBoardData = async (board: string) => {
//   const data = await import(`@data/boards/${board}`);
//   return data.default;
// };

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: {
    board: string;
  };
}) => {
  let boardData: BoardType = await getBoardData(params.board).catch((err) => {
    console.log(err);
  });

  return {
    props: {
      boardData: boardData,
    },
  };
};

export default BoardPageSingle;
