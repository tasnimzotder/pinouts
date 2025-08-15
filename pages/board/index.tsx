import BoardList from "@components/common/boardList/BoardList";
import { NextPage } from "next";
import Head from "next/head";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { CircuitBoard, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

const BoardPage: NextPage = () => {
  const meta = {
    title: "Boards | Pinouts",
    description: "Interactive pinouts for various boards",
    url: "https://pinouts.vercel.app/board",
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
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-4">
          {/* Back Navigation */}
          <div className="mb-4">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Page Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-sm flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Hardware Collection
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Development Boards
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              Explore interactive pinout diagrams for popular development
              boards.
              <span className="text-foreground font-medium">
                {" "}
                Click any board to dive into its details.
              </span>
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CircuitBoard className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  4 Boards Available
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-muted-foreground">
                  Interactive Diagrams
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-muted-foreground">Protocol Details</span>
              </div>
            </div>
          </div>

          {/* Boards Grid */}
          <Card className="max-w-6xl mx-auto">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <CircuitBoard className="w-5 h-5" />
                Available Boards
              </CardTitle>
              <CardDescription>
                Click on any board to explore its interactive pinout diagram
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <BoardList />
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <Card className="max-w-2xl mx-auto border-dashed">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Missing a Board?</h3>
                <p className="text-muted-foreground mb-3">
                  Help expand our collection by contributing new board
                  definitions
                </p>
                <Button asChild>
                  <Link
                    href="https://github.com/tasnimzotder/pinouts"
                    target="_blank"
                  >
                    Contribute on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BoardPage;
