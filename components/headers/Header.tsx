import Link from "next/link";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import { Zap, CircuitBoard, Cpu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-6 w-6 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" />
            </div>
            <span className="hidden font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent sm:inline-block">
              Pinouts
            </span>
            <Badge
              variant="secondary"
              className="hidden sm:inline-flex text-xs"
            >
              Interactive
            </Badge>
          </Link>
        </div>

        {/* Mobile logo */}
        <div className="mr-2 flex md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Pinouts</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-primary/10 transition-all duration-200"
                  >
                    <Link href="/board" className="flex items-center space-x-2">
                      <CircuitBoard className="h-4 w-4" />
                      <span>Boards</span>
                      <Badge variant="outline" className="text-xs">
                        4+
                      </Badge>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Explore interactive board pinouts</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Future chips section */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled
                    className="opacity-50"
                  >
                    <Cpu className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Chips</span>
                    <Badge variant="secondary" className="ml-2 text-xs">
                      Soon
                    </Badge>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Chip pinouts coming soon!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
