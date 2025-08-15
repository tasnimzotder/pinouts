import BoardDetailsPanel from "@components/board/boardDetailsPanel/BoardDetailsPanel";
import PinsInteractive from "@components/board/pinsInteractive/PinsInteractive";
import { useSelected } from "../../lib/contexts/selected.context";
import BoardType from "../../lib/interfaces/board.interface";
import { getBoardData } from "../../lib/services/board.service";
import React from "react";
import Head from "next/head";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import {
  ArrowLeft,
  Lightbulb,
  CircuitBoard,
  CheckCircle,
  Share2,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

const getBoardTypeInfo = (boardName: string) => {
  const name = boardName.toLowerCase();
  if (name.includes("arduino nano")) {
    return {
      category: "Microcontroller Board",
      level: "Beginner Friendly",
      mainUse: "Prototyping & Education",
      power: "5V/3.3V",
      features: [
        "Compact Design",
        "Breadboard Friendly",
        "USB Programming",
        "Built-in LED",
      ],
    };
  }
  if (name.includes("arduino uno")) {
    return {
      category: "Development Board",
      level: "Perfect for Beginners",
      mainUse: "Learning & Projects",
      power: "5V",
      features: [
        "Most Popular",
        "Great Documentation",
        "Shield Compatible",
        "Large Community",
      ],
    };
  }
  if (name.includes("nodemcu")) {
    return {
      category: "WiFi Development Board",
      level: "Intermediate",
      mainUse: "IoT Projects",
      power: "3.3V",
      features: [
        "Built-in WiFi",
        "ESP8266 MCU",
        "Lua/Arduino IDE",
        "Low Power",
      ],
    };
  }
  return {
    category: "Development Board",
    level: "Intermediate",
    mainUse: "General Purpose",
    power: "3.3V/5V",
    features: ["GPIO Pins", "Programmable", "Open Source"],
  };
};

const getLearningTips = (boardName: string) => {
  const name = boardName.toLowerCase();
  if (name.includes("arduino nano")) {
    return [
      "Start with the built-in LED (pin 13) for your first blink program",
      "Use the analog pins (A0-A7) to read sensors like temperature or light",
      "Digital pins can be INPUT or OUTPUT - great for buttons and LEDs",
      "The 3.3V pin provides clean power for sensors",
      "Pin D13 has a built-in resistor, perfect for LED experiments",
    ];
  }
  return [
    "Hover over pins to see their functions and capabilities",
    "Click pin categories to highlight related pins on the board",
    "Power pins (VCC, GND) are essential for any circuit",
    "Digital pins can be programmed as inputs or outputs",
    "Analog pins can read varying voltage levels from sensors",
  ];
};

const BoardPageSingle = ({ boardData }: { boardData: BoardType }) => {
  const boardInfo = getBoardTypeInfo(boardData.name);
  const learningTips = getLearningTips(boardData.name);

  const meta = {
    title: `${boardData.name} Pinout | Pinouts`,
    description: `Interactive pinout of ${boardData.name} board with educational guides`,
    url: `https://pinouts.vercel.app/board/${boardData.id}`,
    author: {
      name: "Tasnim Zotder",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
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

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
      </Head>

      <main className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/board">
                <ArrowLeft className="w-4 h-4" />
                Back to Boards
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>

          {/* Board Title and Info */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Badge
                variant="secondary"
                className="px-4 py-2 flex items-center gap-2"
              >
                <CircuitBoard className="w-4 h-4" />
                {boardInfo.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                {boardData.name}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interactive pinout diagram with educational guides and real-time
              pin exploration.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full">
          {/* Removed tabs, keeping only interactive content */}

          {/* Interactive Content */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-7xl mx-auto">
              {/* Pin Diagram */}
              <div className="space-y-3">
                <Card className="overflow-hidden">
                  <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-purple-500/5 border-b p-3">
                    <CardTitle className="flex items-center justify-center gap-2 text-lg">
                      <CircuitBoard className="w-5 h-5 text-primary" />
                      Interactive Pinout
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Explore pins with hover details and category highlighting
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-3">
                    <PinsInteractive boardData={boardData} />
                  </CardContent>
                </Card>
              </div>

              {/* Details Panel */}
              <div className="space-y-3">
                <BoardDetailsPanel boardData={boardData} />

                {/* Quick Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      Quick Tips
                    </CardTitle>
                    <CardDescription>
                      Essential tips for working with this board
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {learningTips.slice(0, 3).map((tip, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{tip}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
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
    fallback: "blocking",
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
