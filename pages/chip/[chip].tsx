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
import {
  Cpu,
  ArrowLeft,
  Sparkles,
  Clock,
  Construction,
  CircuitBoard,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";

interface ChipPageProps {
  chipData: {
    id: string;
    name: string;
  } | null;
}

const ChipPageSingle: NextPage<ChipPageProps> = ({ chipData }) => {
  const chipName = chipData?.name || "Chip";
  const chipId = chipData?.id || "unknown";

  const meta = {
    title: `${chipName} | Pinouts`,
    description: `Interactive pinout diagram for ${chipName} microcontroller - Coming Soon`,
    url: `https://pinouts.vercel.app/chip/${chipId}`,
    author: {
      name: "Tasnim Zotder",
    },
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author.name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-4">
          {/* Back Navigation */}
          <div className="mb-4">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/board">
                <ArrowLeft className="w-4 h-4" />
                Back to Boards
              </Link>
            </Button>
          </div>

          {/* Page Content */}
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <Badge
                  variant="secondary"
                  className="px-3 py-1 text-sm flex items-center gap-2"
                >
                  <Cpu className="w-4 h-4" />
                  Microcontroller
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                  {chipName}
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-4">
                Detailed pinout diagrams and technical specifications
              </p>
            </div>

            {/* Coming Soon Card */}
            <Card className="mb-6">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Construction className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  Interactive Chip Pinouts Coming Soon!
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  We&apos;re working hard to bring you detailed, interactive
                  pinout diagrams for individual microcontrollers. Stay tuned
                  for comprehensive chip documentation.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                {/* Features Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30 border">
                    <CircuitBoard className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                    <h3 className="font-medium text-sm mb-1">Pin Diagrams</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed pin layouts and functions
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border">
                    <Zap className="w-6 h-6 mx-auto mb-2 text-green-500" />
                    <p className="font-medium text-sm mb-1">Specifications</p>
                    <p className="text-sm text-muted-foreground">
                      Technical details and capabilities
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                    <h3 className="font-medium text-sm mb-1">Timing Info</h3>
                    <p className="text-sm text-muted-foreground">
                      Clock speeds and timing diagrams
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    For now, explore {chipName} through the development boards
                    that use it:
                  </p>
                  <Button asChild>
                    <Link href="/board">
                      <CircuitBoard className="w-4 h-4 mr-2" />
                      View Development Boards
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ChipPageProps> = async ({
  params,
}) => {
  const chipId = params?.chip as string;

  // Import chip data
  try {
    const { Chips } = await import("@data/chips");
    const chipData = Chips.find((chip) => chip.id === chipId) || null;

    return {
      props: {
        chipData,
      },
    };
  } catch (error) {
    return {
      props: {
        chipData: null,
      },
    };
  }
};

export default ChipPageSingle;
