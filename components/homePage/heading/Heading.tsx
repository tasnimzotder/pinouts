import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Zap, ArrowRight, Sparkles, Target } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  return (
    <div className="text-center py-16 px-4">
      {/* Hero Badge */}
      <div className="flex justify-center mb-6">
        <Badge
          variant="secondary"
          className="px-4 py-2 text-sm flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Free & Open Source
        </Badge>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
          Interactive Pinouts
        </span>
        <br />
        <span className="text-foreground">Made Simple</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        Discover pinout diagrams for popular development boards,
        microcontrollers, and electronic components.
        <span className="text-foreground font-medium">
          {" "}
          No more squinting at datasheets.
        </span>
      </p>

      {/* Feature Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 text-sm">
          <Target className="w-4 h-4 text-primary" />
          <span>Interactive Diagrams</span>
        </div>
        <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 text-sm">
          <Zap className="w-4 h-4 text-yellow-500" />
          <span>Hover for Details</span>
        </div>
        <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 text-sm">
          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
          <span>Protocol Guides</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild size="lg" className="px-8 group">
          <Link href="/board" className="flex items-center gap-2">
            <span>Explore Boards</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="px-8">
          <Link href="https://github.com/tasnimzotder/pinouts" target="_blank">
            View on GitHub
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="mt-12 pt-8 border-t border-border/50">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>4+ Boards Available</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>Community Driven</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>Always Free</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
