import Link from "next/link";
import BoardsType from "@interfaces/boards.interface";
import { useEffect, useState } from "react";
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import {
  CircuitBoard,
  Cpu,
  ExternalLink,
  ArrowRight,
  Zap,
  Wifi,
  Settings,
  Microchip,
} from "lucide-react";

const getBoardIcon = (boardName: string) => {
  const name = boardName.toLowerCase();
  if (name.includes("arduino")) {
    return <CircuitBoard className="w-5 h-5 text-blue-600" />;
  }
  if (name.includes("raspberry") || name.includes("pi")) {
    return <Cpu className="w-5 h-5 text-green-600" />;
  }
  if (name.includes("esp") || name.includes("nodemcu")) {
    return <Wifi className="w-5 h-5 text-purple-600" />;
  }
  return <Microchip className="w-5 h-5 text-orange-600" />;
};

const getBoardColor = (boardName: string) => {
  const name = boardName.toLowerCase();
  if (name.includes("arduino")) {
    return "border-blue-200 hover:border-blue-300 hover:shadow-blue-100";
  }
  if (name.includes("raspberry") || name.includes("pi")) {
    return "border-green-200 hover:border-green-300 hover:shadow-green-100";
  }
  if (name.includes("esp") || name.includes("nodemcu")) {
    return "border-purple-200 hover:border-purple-300 hover:shadow-purple-100";
  }
  return "border-orange-200 hover:border-orange-300 hover:shadow-orange-100";
};

const getBoardDescription = (board: BoardsType[0]) => {
  const name = board.name.toLowerCase();
  if (name.includes("arduino uno")) {
    return "The most popular Arduino board for beginners and prototyping";
  }
  if (name.includes("arduino nano")) {
    return "Compact Arduino board perfect for small projects and breadboard use";
  }
  if (name.includes("nodemcu")) {
    return "WiFi-enabled development board based on ESP8266 microcontroller";
  }
  if (name.includes("raspberry pi zero")) {
    return "Ultra-small, affordable computer with GPIO pins and wireless connectivity";
  }
  return `Development board featuring ${board.chip.name} microcontroller`;
};

const getChipDescription = (chipName: string) => {
  if (chipName.includes("ATmega328P")) {
    return "8-bit microcontroller with 32KB Flash";
  }
  if (chipName.includes("ESP8266")) {
    return "32-bit microcontroller with WiFi";
  }
  if (chipName.includes("ARM Cortex-A53")) {
    return "Quad-core ARM processor";
  }
  return "Microcontroller unit";
};

const BoardCard = ({ board }: { board: BoardsType[0] }) => {
  return (
    <Card
      className={`group transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${getBoardColor(
        board.name
      )}`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {getBoardIcon(board.name)}
            <div>
              <CardTitle className="text-base group-hover:text-primary transition-colors">
                {board.name}
              </CardTitle>
              <CardDescription className="text-sm">
                {getBoardDescription(board)}
              </CardDescription>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={`/board/${board.id}`}
                    className="flex items-center gap-1"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Explore interactive pinout diagram</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 pt-0">
        {/* Chip Information */}
        <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="font-medium text-sm">{board.chip.name}</p>
              <p className="text-sm text-muted-foreground">
                {getChipDescription(board.chip.name)}
              </p>
            </div>
          </div>
          <Badge variant="outline" className="text-sm">
            Chip
          </Badge>
        </div>

        {/* Manufacturer Information */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Manufacturer</p>
              <p className="font-medium text-sm">{board.manufacturer.name}</p>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href={board.manufacturer.url}
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visit manufacturer website</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Interactive Features Badge */}
        <div className="pt-1 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4" />
              <span>Interactive pinout available</span>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Live
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BoardList = () => {
  const [boards, setBoards] = useState<BoardsType>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBoards = async () => {
      try {
        const data = await import("@data/boards");
        const sortedBoards = data.default.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        setBoards(sortedBoards);
      } catch (error) {
        console.error("Failed to load boards:", error);
      } finally {
        setLoading(false);
      }
    };

    getBoards();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-muted rounded" />
                <div className="space-y-1">
                  <div className="w-32 h-4 bg-muted rounded" />
                  <div className="w-48 h-3 bg-muted rounded" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <div className="w-full h-12 bg-muted rounded" />
              <div className="w-full h-8 bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (boards.length === 0) {
    return (
      <div className="text-center py-12">
        <CircuitBoard className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No boards available</h3>
        <p className="text-muted-foreground">
          Check back later for new board additions
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {boards.map((board, idx) => (
        <BoardCard key={board.id || idx} board={board} />
      ))}
    </div>
  );
};

export default BoardList;
