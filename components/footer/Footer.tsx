import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { Card, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Heart, Code, Zap, Users, Star, GitFork } from "lucide-react";

const Author = () => {
  return (
    <Button
      variant="link"
      asChild
      className="p-0 h-auto text-primary hover:text-primary/80"
    >
      <Link
        href="https://tasnimzotder.com/"
        target={"_blank"}
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        <Code className="w-3 h-3" />
        Tasnim Zotder
      </Link>
    </Button>
  );
};

const Footer = () => {
  const start_year = 2022;
  const curr_year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Zap className="h-8 w-8 text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Pinouts
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Interactive pinout diagrams for electronics enthusiasts, makers,
              and developers. Making hardware connections simple and accessible.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                Community Driven
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-red-500" />
                Open Source
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Explore
            </h4>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground"
              >
                <Link href="/board" className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  Board Pinouts
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                disabled
                className="justify-start p-0 h-auto text-muted-foreground/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
                  Chip Diagrams (Coming Soon)
                </div>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                disabled
                className="justify-start p-0 h-auto text-muted-foreground/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
                  Protocol Guides (Coming Soon)
                </div>
              </Button>
            </div>
          </div>

          {/* Contribution Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Get Involved
            </h4>
            <Card className="border-dashed">
              <CardContent className="p-4">
                <div className="text-center space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Help make pinouts better for everyone
                  </p>
                  <Button asChild className="w-full">
                    <Link
                      href={"https://github.com/tasnimzotder/pinouts"}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <SiGithub className="w-4 h-4" />
                      Contribute on GitHub
                    </Link>
                  </Button>
                  <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>Star</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      <span>Fork</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>&#169;</span>
            <Author />
            <span>|</span>
            <span>
              {start_year}
              {start_year === curr_year ? "" : ` - ${curr_year}`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>for the maker community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
