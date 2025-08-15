import BoardList from "@components/common/boardList/BoardList";
import Heading from "@components/homePage/heading/Heading";
import Head from "next/head";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Button } from "@components/ui/button";

export default function Home() {
  const meta = {
    title: "Pinouts",
    description: "Interactive pinouts for various boards, chips, and more",
    url: "https://pinouts.vercel.app",
    author: {
      name: "Tasnim Zotder",
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

      <main className="max-w-5xl mx-auto py-8">
        <div className="px-3 space-y-8">
          <Heading />

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Boards: Interactive Pinouts</span>
                <Button asChild variant="outline">
                  <Link href="/board">View All Boards</Link>
                </Button>
              </CardTitle>
              <CardDescription>
                Explore interactive pinout diagrams for popular development
                boards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BoardList />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
