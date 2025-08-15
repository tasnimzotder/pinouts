import { ChipsType } from "@interfaces/chip.interface";
import Link from "next/link";
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
  Cpu,
  ArrowRight,
  Construction,
  Microchip,
  Zap,
  Info,
} from "lucide-react";

const getChipIcon = (chipName: string) => {
  const name = chipName.toLowerCase();
  if (name.includes("atmega")) {
    return <Cpu className="w-5 h-5 text-blue-600" />;
  }
  if (name.includes("esp")) {
    return <Zap className="w-5 h-5 text-purple-600" />;
  }
  return <Microchip className="w-5 h-5 text-orange-600" />;
};

const getChipColor = (chipName: string) => {
  const name = chipName.toLowerCase();
  if (name.includes("atmega")) {
    return "border-blue-200 hover:border-blue-300 hover:shadow-blue-100";
  }
  if (name.includes("esp")) {
    return "border-purple-200 hover:border-purple-300 hover:shadow-purple-100";
  }
  return "border-orange-200 hover:border-orange-300 hover:shadow-orange-100";
};

const getChipDescription = (chipName: string) => {
  const name = chipName.toLowerCase();
  if (name.includes("atmega328p")) {
    return "8-bit AVR microcontroller commonly used in Arduino boards";
  }
  if (name.includes("esp8266")) {
    return "32-bit microcontroller with integrated WiFi capabilities";
  }
  return `High-performance microcontroller unit for embedded applications`;
};

const getChipSpecs = (chipName: string) => {
  const name = chipName.toLowerCase();
  if (name.includes("atmega328p")) {
    return {
      architecture: "8-bit AVR",
      frequency: "16 MHz",
      flash: "32 KB",
      category: "General Purpose",
    };
  }
  if (name.includes("esp8266")) {
    return {
      architecture: "32-bit Xtensa",
      frequency: "80 MHz",
      flash: "4 MB",
      category: "WiFi Enabled",
    };
  }
  return {
    architecture: "ARM Cortex",
    frequency: "Variable",
    flash: "Variable",
    category: "High Performance",
  };
};

const ChipCard = ({ chip }: { chip: ChipsType[0] }) => {
  const specs = getChipSpecs(chip.name);

  return (
    <Card
      className={`group transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${getChipColor(
        chip.name
      )}`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {getChipIcon(chip.name)}
            <div>
              <CardTitle className="text-base group-hover:text-primary transition-colors">
                {chip.name}
              </CardTitle>
              <CardDescription className="text-sm">
                {getChipDescription(chip.name)}
              </CardDescription>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={`/chip/${chip.id}`}
                    className="flex items-center gap-1"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View chip details (Coming Soon)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 pt-0">
        {/* Technical Specifications */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-muted/30 rounded">
            <p className="text-sm font-medium">{specs.architecture}</p>
            <p className="text-sm text-muted-foreground">Architecture</p>
          </div>
          <div className="p-2 bg-muted/30 rounded">
            <p className="text-sm font-medium">{specs.frequency}</p>
            <p className="text-sm text-muted-foreground">Max Frequency</p>
          </div>
        </div>

        {/* Category and Flash */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Category</p>
              <p className="font-medium text-sm">{specs.category}</p>
            </div>
          </div>
          <Badge variant="outline" className="text-sm">
            {specs.flash} Flash
          </Badge>
        </div>

        {/* Coming Soon Badge */}
        <div className="pt-1 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Construction className="w-4 h-4" />
              <span>Detailed pinouts coming soon</span>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Soon
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ChipList = ({ chipsData }: { chipsData: ChipsType }) => {
  if (chipsData.length === 0) {
    return (
      <div className="text-center py-12">
        <Microchip className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No chips available</h3>
        <p className="text-muted-foreground">
          Check back later for new chip additions
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {chipsData.map((chip) => (
        <ChipCard key={chip.id} chip={chip} />
      ))}
    </div>
  );
};

export default ChipList;
