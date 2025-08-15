import { useSelected } from "@contexts/selected.context";
import { PinType } from "@interfaces/board.interface";
import { Badge } from "@components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";

const PinCol = ({
  pins_c,
  col,
  highlightedPins,
}: {
  pins_c: PinType[];
  col: "left" | "right";
  highlightedPins: string[];
}) => {
  const rounded = col === "right" ? "rounded-l-2xl" : "rounded-r-2xl";
  const { updateSelected } = useSelected();

  const get_pin_styles = (type: string, isHighlighted: boolean) => {
    let baseStyles =
      "h-3 w-3 border border-white dark:border-slate-800 shadow-sm transition-all duration-200";
    let colorStyles = "";

    if (type === "power") {
      colorStyles = "bg-red-500 hover:bg-red-600";
    } else if (type === "ground") {
      colorStyles = "bg-gray-500 hover:bg-gray-600";
    } else if (type === "digital") {
      colorStyles = "bg-blue-500 hover:bg-blue-600 rounded-full";
    } else if (type === "analog") {
      colorStyles = "bg-yellow-500 hover:bg-yellow-600 rounded-full";
    }

    if (isHighlighted) {
      baseStyles += " ring-1 ring-primary ring-offset-1 scale-105";
    }

    return `${baseStyles} ${colorStyles}`;
  };

  const get_row_styles = (isHighlighted: boolean) => {
    let baseStyles =
      "group flex flex-row gap-2 px-3 py-1.5 my-0.5 cursor-pointer transition-all duration-200 border";

    if (isHighlighted) {
      baseStyles += " bg-primary/20 border-primary/30 text-primary shadow-md";
    } else {
      baseStyles +=
        " bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-primary/5 hover:border-primary/20 hover:shadow-sm";
    }

    return `${baseStyles} ${rounded}`;
  };

  const PinSymbol = ({
    type,
    isHighlighted,
  }: {
    type: string;
    isHighlighted: boolean;
  }) => {
    return <div className={get_pin_styles(type, isHighlighted)}></div>;
  };

  const getPinDescription = (pin: PinType) => {
    const descriptions = {
      power: "Power supply pin - provides voltage",
      ground: "Ground reference pin - 0V connection",
      digital: "Digital I/O pin - HIGH/LOW signals",
      analog: "Analog input pin - variable voltage reading",
    };
    return (
      descriptions[pin.type as keyof typeof descriptions] ||
      "General purpose pin"
    );
  };

  return (
    <div className="space-y-0.5">
      {pins_c.map((pin, idx) => {
        const isHighlighted = highlightedPins.includes(pin.id);

        return (
          <TooltipProvider key={idx}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={get_row_styles(isHighlighted)}
                  onClick={() => {
                    updateSelected(pin.id, pin.type);
                  }}
                >
                  <div
                    className={
                      "flex flex-row gap-2 items-center w-full" +
                      `${col === "left" ? " justify-end" : ""}`
                    }
                  >
                    {col === "right" && (
                      <div className="flex flex-row items-center gap-2">
                        <PinSymbol
                          type={pin.type}
                          isHighlighted={isHighlighted}
                        />
                        <Badge
                          variant="outline"
                          className="font-mono text-sm bg-slate-100 dark:bg-slate-700 min-w-[24px] justify-center py-0"
                        >
                          {pin.board_pin}
                        </Badge>
                      </div>
                    )}

                    <div className="font-medium text-sm group-hover:text-primary transition-colors min-w-[60px] text-center">
                      {pin.names[0]}
                    </div>

                    {col === "left" && (
                      <div className="flex flex-row items-center gap-2">
                        <Badge
                          variant="outline"
                          className="font-mono text-sm bg-slate-100 dark:bg-slate-700 min-w-[24px] justify-center py-0"
                        >
                          {pin.board_pin}
                        </Badge>
                        <PinSymbol
                          type={pin.type}
                          isHighlighted={isHighlighted}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side={col === "left" ? "left" : "right"}
                className="max-w-sm"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Badge
                      variant="secondary"
                      className="font-mono text-sm py-0"
                    >
                      Pin {pin.board_pin}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-sm capitalize py-0"
                    >
                      {pin.type}
                    </Badge>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{pin.names[0]}</p>
                    {pin.names.length > 1 && (
                      <p className="text-sm text-muted-foreground">
                        Also: {pin.names.slice(1).join(", ")}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getPinDescription(pin)}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default PinCol;
