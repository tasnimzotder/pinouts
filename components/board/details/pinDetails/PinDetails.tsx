import BoardType, {
  PinType,
  SpecialPinsType,
} from "../../../../lib/interfaces/board.interface";
import { to_capitalize } from "@utils/textMods.util";
import { check_pwm } from "@utils/pin.util";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import {
  Pin,
  Tag,
  Settings,
  Zap,
  ArrowLeftRight,
  Cable,
  AlertCircle,
  Info,
} from "lucide-react";

const PinDetails = ({
  pinData,
  specialPins,
}: {
  pinData: PinType;
  specialPins: SpecialPinsType[];
}) => {
  const supportedProtocols = specialPins.filter(
    (pins) => pins.type === "protocol" && pins.pins.includes(pinData.id)
  );

  const getPinTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "digital":
        return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300";
      case "analog":
        return "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300";
      case "power":
        return "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300";
      case "ground":
        return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300";
      default:
        return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300";
    }
  };

  const getDirectionColor = (direction: string) => {
    switch (direction.toLowerCase()) {
      case "input":
        return "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300";
      case "output":
        return "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-2">
      {/* Pin Identification & Configuration - Combined */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Pin className="w-4 h-4" />
            Pin Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {/* Pin Info Row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center justify-between p-2 rounded bg-muted/20">
              <span className="text-sm font-medium">Pin</span>
              <Badge variant="outline" className="font-mono text-sm">
                {pinData.board_pin}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-muted/20">
              <span className="text-sm font-medium">Type</span>
              <Badge className={getPinTypeColor(pinData.type)}>
                {to_capitalize(pinData.type)}
              </Badge>
            </div>
          </div>

          {/* Alternative Names */}
          {pinData.names && pinData.names.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Tag className="w-3 h-3 text-muted-foreground" />
                <span className="text-sm font-medium">Names</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {pinData.names.map((name: string, key) => (
                  <Badge
                    key={key}
                    variant="secondary"
                    className="font-mono text-sm py-0"
                  >
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Directions & PWM in one row */}
          <div className="space-y-2">
            {pinData.directions && pinData.directions.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ArrowLeftRight className="w-3 h-3 text-muted-foreground" />
                  <span className="text-sm font-medium">Directions</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {pinData.directions.map((direction: string, key) => (
                    <Badge key={key} className={getDirectionColor(direction)}>
                      {direction.toUpperCase()}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* PWM Support for Digital Pins */}
            {pinData.type === "digital" && (
              <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-muted-foreground" />
                  <span className="text-sm font-medium">PWM</span>
                </div>
                <Badge
                  variant={
                    check_pwm(specialPins, pinData.id) ? "default" : "secondary"
                  }
                >
                  {check_pwm(specialPins, pinData.id) ? "Yes" : "No"}
                </Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Protocol Support */}
      {supportedProtocols.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Cable className="w-4 h-4" />
              Protocols
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {supportedProtocols.map((protocol, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <Cable className="w-3 h-3" />
                  {protocol.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notes and Additional Information */}
      {pinData.notes && pinData.notes.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Info className="w-4 h-4" />
              Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {pinData.notes.map((note, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-2 rounded bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800"
                >
                  <AlertCircle className="w-3 h-3 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PinDetails;
