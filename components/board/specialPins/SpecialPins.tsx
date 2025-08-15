import { SpecialPinsType } from "../../../lib/interfaces/board.interface";
import { useSelected } from "../../../lib/contexts/selected.context";
import { Badge } from "@components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import {
  Zap,
  Wifi,
  Cable,
  Pin,
  Signal,
  Activity,
  Power,
  Settings,
} from "lucide-react";

const SpecialPinsView = ({
  special_pins,
}: {
  special_pins: SpecialPinsType[];
}) => {
  const { updateSelected, selected, type } = useSelected();

  const getIconForPinType = (pinType: string, name: string) => {
    const lowerName = name.toLowerCase();
    const lowerType = pinType.toLowerCase();

    if (
      lowerName.includes("spi") ||
      lowerName.includes("i2c") ||
      lowerName.includes("uart")
    ) {
      return <Cable className="w-3 h-3" />;
    }
    if (lowerName.includes("wifi") || lowerName.includes("bluetooth")) {
      return <Wifi className="w-3 h-3" />;
    }
    if (
      lowerName.includes("power") ||
      lowerName.includes("vcc") ||
      lowerName.includes("3v3")
    ) {
      return <Power className="w-3 h-3" />;
    }
    if (lowerName.includes("gpio") || lowerName.includes("digital")) {
      return <Signal className="w-3 h-3" />;
    }
    if (lowerName.includes("analog") || lowerName.includes("adc")) {
      return <Activity className="w-3 h-3" />;
    }
    if (lowerType === "protocol") {
      return <Cable className="w-3 h-3" />;
    }
    if (lowerType === "pin") {
      return <Pin className="w-3 h-3" />;
    }

    return <Zap className="w-3 h-3" />;
  };

  const getColorForPinType = (_pinType: string, name: string) => {
    const lowerName = name.toLowerCase();

    if (
      lowerName.includes("power") ||
      lowerName.includes("vcc") ||
      lowerName.includes("3v3")
    ) {
      return "bg-red-100 hover:bg-red-200 text-red-700 border-red-200 dark:bg-red-950 dark:hover:bg-red-900 dark:text-red-300";
    }
    if (lowerName.includes("ground") || lowerName.includes("gnd")) {
      return "bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200 dark:bg-gray-950 dark:hover:bg-gray-900 dark:text-gray-300";
    }
    if (lowerName.includes("gpio") || lowerName.includes("digital")) {
      return "bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-200 dark:bg-blue-950 dark:hover:bg-blue-900 dark:text-blue-300";
    }
    if (lowerName.includes("analog") || lowerName.includes("adc")) {
      return "bg-green-100 hover:bg-green-200 text-green-700 border-green-200 dark:bg-green-950 dark:hover:bg-green-900 dark:text-green-300";
    }
    if (
      lowerName.includes("spi") ||
      lowerName.includes("i2c") ||
      lowerName.includes("uart")
    ) {
      return "bg-purple-100 hover:bg-purple-200 text-purple-700 border-purple-200 dark:bg-purple-950 dark:hover:bg-purple-900 dark:text-purple-300";
    }
    if (lowerName.includes("wifi") || lowerName.includes("bluetooth")) {
      return "bg-cyan-100 hover:bg-cyan-200 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:hover:bg-cyan-900 dark:text-cyan-300";
    }

    return "bg-yellow-100 hover:bg-yellow-200 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:hover:bg-yellow-900 dark:text-yellow-300";
  };

  const getPinDescription = (cat: SpecialPinsType) => {
    if (cat.notes) return cat.notes;

    const lowerName = cat.name.toLowerCase();
    if (lowerName.includes("spi"))
      return "Serial Peripheral Interface - High-speed communication protocol";
    if (lowerName.includes("i2c"))
      return "Inter-Integrated Circuit - Two-wire communication bus";
    if (lowerName.includes("uart"))
      return "Universal Asynchronous Receiver-Transmitter";
    if (lowerName.includes("gpio")) return "General Purpose Input/Output pins";
    if (lowerName.includes("analog"))
      return "Analog to Digital Converter inputs";
    if (lowerName.includes("power")) return "Power supply pins for the board";
    if (lowerName.includes("ground")) return "Ground reference pins";

    return `${cat.type} functionality - Click to explore details`;
  };

  if (special_pins.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <Settings className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p>No special pins configured for this board</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-sm text-muted-foreground">
          PIN CATEGORIES
        </h4>
        <Badge variant="outline" className="text-xs">
          {special_pins.length}
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {special_pins.map((cat, idx) => {
          const isSelected = selected === cat.id && type === cat.type;

          return (
            <TooltipProvider key={idx}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`
                      ${getColorForPinType(cat.type, cat.name)}
                      ${isSelected ? "ring-2 ring-primary ring-offset-1" : ""}
                      cursor-pointer border rounded-lg p-3 transition-all duration-200 hover:shadow-sm
                      flex items-center justify-between
                    `}
                    onClick={() => {
                      updateSelected(cat.id, cat.type);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {getIconForPinType(cat.type, cat.name)}
                      <span className="font-medium text-sm">{cat.name}</span>
                    </div>
                    {cat.pins && (
                      <Badge variant="secondary" className="text-xs">
                        {Array.isArray(cat.pins) ? cat.pins.length : cat.pins}
                      </Badge>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs">
                  <div className="space-y-1">
                    <p className="font-medium">{cat.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {getPinDescription(cat)}
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>

      {selected && (
        <div className="p-3 bg-muted/30 rounded-lg border-l-4 border-l-primary">
          <p className="text-sm">
            <span className="font-medium">Selected:</span>{" "}
            {special_pins.find((p) => p.id === selected)?.name || "Unknown"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SpecialPinsView;
