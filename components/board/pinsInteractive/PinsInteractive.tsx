import { useSelected } from "../../../lib/contexts/selected.context";
import BoardType, {
  PinsType,
  PinType,
} from "../../../lib/interfaces/board.interface";
import { findPinsByType } from "@utils/pin.util";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PinCol from "../pinCol/PinCol";
import USBConnectorC from "@components/common/connector/usbConnector/USBConnectorC";
import USBConnector from "@components/common/connector/usbConnector/USBConnector";
import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";
import {
  Zap,
  CircuitBoard,
  Pin as PinIcon,
  Cable,
  Info,
  MousePointer,
} from "lucide-react";

const PinsInteractive = ({ boardData }: { boardData: BoardType }) => {
  const pins = boardData.pins;

  const [highlightedPins, setHighlightedPins] = useState<string[]>([]);

  const { type, selected } = useSelected();

  useEffect(() => {
    if (type === "power" || type === "ground") {
      setHighlightedPins(findPinsByType(pins, type));
    } else if (type === "protocol" || type === "pin") {
      setHighlightedPins(
        boardData.special_pins.find((pin_s) => pin_s.id === selected)?.pins ||
          []
      );
    } else {
      setHighlightedPins([]);
    }
  }, [
    type,
    selected,
    pins.left,
    pins.right,
    boardData.special_pins,
    boardData,
    pins,
  ]);

  const leftPins = pins.left;
  const rightPins = pins.right;

  let connector_flex: string = "";
  let connector_align: string = "";
  let padding: string = "";

  const side = boardData.positions?.power_connector?.side || undefined;
  const alignment = boardData.positions?.power_connector?.align || undefined;

  switch (side) {
    case "left":
      connector_flex = "flex-row";
      padding = "py-[12%]";
      padding = "py-[12%]";
      break;
    case "right":
      connector_flex = "flex-row-reverse";
      padding = "py-[12%]";
      break;
    case "top":
      connector_flex = "flex-col";
      padding = "px-[12%]";
      break;
    case "bottom":
      connector_flex = "flex-col-reverse";
      padding = "px-[12%]";
      break;

    default:
      break;
  }

  switch (alignment) {
    case "start":
      connector_align = "items-start";
      break;
    case "end":
      connector_align = "items-end";
      break;
    case "center":
      connector_align = "items-center";
      break;

    default:
      break;
  }

  const totalPins = leftPins.length + rightPins.length;
  const selectedPin = [...leftPins, ...rightPins].find(
    (pin) => pin.id === selected
  );

  return (
    <div className="space-y-3">
      {/* Board Overview Header */}
      <div className="flex items-center justify-between p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border">
        <div className="flex items-center gap-2">
          <CircuitBoard className="w-4 h-4 text-primary" />
          <div>
            <h3 className="font-semibold text-sm">{boardData.name}</h3>
            <p className="text-sm text-muted-foreground">
              Interactive Board Layout
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-center">
            <Badge variant="secondary" className="font-mono text-sm">
              {totalPins}
            </Badge>
            <p className="text-sm text-muted-foreground">Total</p>
          </div>
          <div className="text-center">
            <Badge
              variant={highlightedPins.length > 0 ? "default" : "secondary"}
              className="font-mono text-sm"
            >
              {highlightedPins.length}
            </Badge>
            <p className="text-sm text-muted-foreground">Selected</p>
          </div>
        </div>
      </div>

      {/* Pin Legend */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-muted/30 rounded-lg border text-sm">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
          <span className="font-medium">Power</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-500 rounded-sm"></div>
          <span className="font-medium">Ground</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="font-medium">Digital</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="font-medium">Analog</span>
        </div>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex items-center gap-1">
          <MousePointer className="w-3 h-3 text-muted-foreground" />
          <span className="text-muted-foreground">Click to explore</span>
        </div>
      </div>

      {/* Interactive Board Layout */}
      <div className="relative">
        {/* Board Container */}
        <div
          className={
            "flex justify-center items-center min-h-[320px] p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-lg " +
            ` ${connector_flex} ${connector_align}`
          }
        >
          {/* Power Connector */}
          <div className={padding}>
            {side && alignment && (
              <div className="relative">
                <USBConnector side={side} />
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <Badge
                    variant="outline"
                    className="text-sm bg-white dark:bg-slate-800 px-2 py-1"
                  >
                    <Cable className="w-3 h-3 mr-1" />
                    USB
                  </Badge>
                </div>
              </div>
            )}
          </div>

          {/* Board Body with Pins */}
          <div className="relative">
            {/* Board PCB Background */}
            <div className="absolute inset-0 bg-green-600 dark:bg-green-700 rounded-lg shadow-inner opacity-10"></div>

            {/* Pin Columns */}
            <div className="relative flex flex-row justify-center gap-4 p-3">
              <PinCol
                pins_c={leftPins}
                col="left"
                highlightedPins={highlightedPins}
              />

              {/* Board Center Label */}
              <div className="flex flex-col items-center justify-center min-w-[80px] px-2">
                <div className="text-center p-2 bg-white/80 dark:bg-slate-800/80 rounded-lg border backdrop-blur-sm">
                  <CircuitBoard className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-sm font-medium text-muted-foreground">
                    {boardData.name}
                  </p>
                  <p className="text-sm text-muted-foreground">Rev 1.0</p>
                </div>
              </div>

              <PinCol
                pins_c={rightPins}
                col="right"
                highlightedPins={highlightedPins}
              />
            </div>
          </div>
        </div>

        {/* Selection Indicator */}
        {selectedPin && (
          <div className="absolute top-2 right-2 p-2 bg-primary/10 border border-primary/20 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <PinIcon className="w-3 h-3 text-primary" />
              <div>
                <p className="text-sm font-medium">
                  Pin {selectedPin.board_pin}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedPin.names[0]}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interaction Hints */}
      <div className="flex flex-wrap justify-center gap-2 text-center text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Info className="w-3 h-3" />
          <span>Hover for details</span>
        </div>
        <div className="flex items-center gap-1">
          <MousePointer className="w-3 h-3" />
          <span>Click categories to highlight</span>
        </div>
        <div className="flex items-center gap-1">
          <Zap className="w-3 h-3" />
          <span>Use pin categories</span>
        </div>
      </div>
    </div>
  );
};

export default PinsInteractive;
