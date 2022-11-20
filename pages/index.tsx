import BoardList from '@components/common/boardList/BoardList';
import Heading from '@components/homePage/heading/Heading';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pinouts</title>
        <meta
          name="description"
          content="Interactive pinouts for microcontrollers, chips and electronic components"
        />
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
