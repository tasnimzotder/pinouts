import { useSelected } from "@contexts/selected.context";
import Link from "next/link";
import BoardType from "../../../../lib/interfaces/board.interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import {
  Cpu,
  Zap,
  HardDrive,
  Wifi,
  Bluetooth,
  ExternalLink,
  Code,
  Pin,
  Activity,
} from "lucide-react";

const BoardDetails = ({ boardData }: { boardData: BoardType }) => {
  const { updateSelected } = useSelected();

  return (
    <div className="space-y-3">
      {/* Description */}
      {boardData.description && (
        <div className="p-3 bg-muted/30 rounded-lg border-l-4 border-l-blue-500">
          <p className="text-sm leading-relaxed">{boardData.description}</p>
        </div>
      )}

      {/* Main Chip Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Cpu className="w-4 h-4" />
            Microcontroller
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{boardData.chip.name}</p>
              <p className="text-sm text-muted-foreground">
                Main processing unit
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link
                href={`/chip/${boardData.chip.id}`}
                className="flex items-center gap-2"
              >
                <span>View Details</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Technical Specifications */}
      {boardData.specifications && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Activity className="w-4 h-4" />
              Technical Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {boardData.specifications.clock_speed && (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <div>
                    <p className="text-sm font-medium">Clock Speed</p>
                    <p className="text-xs text-muted-foreground">
                      {boardData.specifications.clock_speed}
                    </p>
                  </div>
                </div>
              )}

              {boardData.specifications.flash_memory && (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <HardDrive className="w-4 h-4 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">Flash Memory</p>
                    <p className="text-xs text-muted-foreground">
                      {boardData.specifications.flash_memory}
                    </p>
                  </div>
                </div>
              )}

              {boardData.specifications.sram && (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <HardDrive className="w-4 h-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">SRAM</p>
                    <p className="text-xs text-muted-foreground">
                      {boardData.specifications.sram}
                    </p>
                  </div>
                </div>
              )}

              {boardData.specifications.eeprom && (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <HardDrive className="w-4 h-4 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium">EEPROM</p>
                    <p className="text-xs text-muted-foreground">
                      {boardData.specifications.eeprom}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Voltage Specifications */}
            {(boardData.specifications.operation_voltage ||
              boardData.specifications.input_voltage) && (
              <div className="space-y-3">
                <Separator />
                <h4 className="font-medium text-sm">Power Requirements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {boardData.specifications.operation_voltage && (
                    <div className="flex justify-between items-center p-2 rounded bg-muted/10">
                      <span className="text-sm">Operating Voltage</span>
                      <Badge variant="secondary">
                        {boardData.specifications.operation_voltage}V
                      </Badge>
                    </div>
                  )}
                  {boardData.specifications.input_voltage && (
                    <div className="flex justify-between items-center p-2 rounded bg-muted/10">
                      <span className="text-sm">Input Voltage</span>
                      <Badge variant="secondary">
                        {boardData.specifications.input_voltage.min}V -{" "}
                        {boardData.specifications.input_voltage.max}V
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Connectivity */}
            {(boardData.specifications.wifi ||
              boardData.specifications.bluetooth) && (
              <div className="space-y-3">
                <Separator />
                <h4 className="font-medium text-sm">Connectivity</h4>
                <div className="flex flex-wrap gap-2">
                  {boardData.specifications.wifi && (
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                      <Wifi className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">
                        {boardData.specifications.wifi.protocol} (
                        {boardData.specifications.wifi.bands})
                      </span>
                    </div>
                  )}
                  {boardData.specifications.bluetooth && (
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                      <Bluetooth className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium">
                        Bluetooth {boardData.specifications.bluetooth.version}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Protocols and Frameworks */}
      {(boardData.supported_protocols || boardData.supported_frameworks) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Code className="w-4 h-4" />
              Development Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {boardData.supported_protocols && (
              <div>
                <h4 className="font-medium text-sm mb-3">
                  Supported Protocols
                </h4>
                <div className="flex flex-wrap gap-2">
                  {boardData.supported_protocols.map((protocol, key) => (
                    <Button
                      key={key}
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs"
                      onClick={() =>
                        updateSelected(protocol.toLowerCase(), "protocol")
                      }
                    >
                      {protocol}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {boardData.supported_frameworks && (
              <div>
                <h4 className="font-medium text-sm mb-3">
                  Programming Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {boardData.supported_frameworks.map((framework, key) => (
                    <Badge key={key} variant="secondary">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Pin Counts */}
      {boardData.pins_counts && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Pin className="w-4 h-4" />
              Pin Configuration
            </CardTitle>
            <CardDescription>Available pins by type</CardDescription>
          </CardHeader>
          <CardContent>
            <PinsCountView pinsCount={boardData.pins_counts} />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const PinsCountView = ({
  pinsCount,
}: {
  pinsCount: {
    [key: string]: number;
  };
}) => {
  const getPinTypeIcon = (pinType: string) => {
    const lowerType = pinType.toLowerCase();
    if (lowerType.includes("digital") || lowerType.includes("gpio")) {
      return <Activity className="w-4 h-4 text-blue-500" />;
    }
    if (lowerType.includes("analog") || lowerType.includes("adc")) {
      return <Zap className="w-4 h-4 text-green-500" />;
    }
    if (lowerType.includes("power") || lowerType.includes("vcc")) {
      return <Zap className="w-4 h-4 text-red-500" />;
    }
    if (lowerType.includes("ground") || lowerType.includes("gnd")) {
      return <Pin className="w-4 h-4 text-gray-500" />;
    }
    return <Pin className="w-4 h-4 text-purple-500" />;
  };

  const getPinTypeColor = (pinType: string) => {
    const lowerType = pinType.toLowerCase();
    if (lowerType.includes("digital") || lowerType.includes("gpio")) {
      return "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800";
    }
    if (lowerType.includes("analog") || lowerType.includes("adc")) {
      return "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800";
    }
    if (lowerType.includes("power") || lowerType.includes("vcc")) {
      return "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800";
    }
    if (lowerType.includes("ground") || lowerType.includes("gnd")) {
      return "bg-gray-50 border-gray-200 dark:bg-gray-950/20 dark:border-gray-800";
    }
    return "bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {Object.entries(pinsCount).map(([pinType, count], index) => (
        <div
          key={index}
          className={`
            ${getPinTypeColor(pinType)}
            border rounded-lg p-4 flex items-center justify-between transition-all hover:shadow-sm
          `}
        >
          <div className="flex items-center gap-3">
            {getPinTypeIcon(pinType)}
            <div>
              <p className="font-medium text-sm capitalize">
                {pinType.replace(/_/g, " ")}
              </p>
              <p className="text-xs text-muted-foreground">Available pins</p>
            </div>
          </div>
          <Badge variant="secondary" className="font-mono text-base font-bold">
            {count}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default BoardDetails;
