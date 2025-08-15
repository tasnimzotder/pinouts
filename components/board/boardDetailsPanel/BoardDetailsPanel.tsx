import BoardType, {
  PinType,
  SpecialPinsType,
} from "../../../lib/interfaces/board.interface";
import { useSelected } from "../../../lib/contexts/selected.context";
import BoardHeading from "../boardHeading/BoardHeading";
import SpecialPinsView from "../specialPins/SpecialPins";
import BoardDetails from "../details/boardDetails/BoardDetails";
import PinDetails from "../details/pinDetails/PinDetails";
import ProtocolDetails from "../details/protocolDetails/protocolDetails";
import { findPinFromBoard } from "@utils/pin.util";
import PinFuncDetails from "../details/pinFuncDetails/PinFuncDetails";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

const BoardDetailsPanel = ({ boardData }: { boardData: BoardType }) => {
  const specialPins = boardData.special_pins;
  const { selected, type } = useSelected();

  let supportedProtocols: SpecialPinsType[] = boardData.special_pins;

  // if (
  //   type === 'analog' ||
  //   type === 'digital' ||
  //   type === 'power' ||
  //   type === 'ground'
  // ) {
  //   supportedProtocols = boardData.special_pins.filter(
  //     (pin_s) => pin_s.type === 'protocol' && pin_s.pins.includes(selected)
  //   );
  // }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <BoardHeading boardData={boardData} />
        </CardHeader>
        <CardContent>
          <SpecialPinsView special_pins={specialPins} />
        </CardContent>
      </Card>

      {type === "board" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Board Information</CardTitle>
          </CardHeader>
          <CardContent>
            <BoardDetails boardData={boardData} />
          </CardContent>
        </Card>
      )}

      {type === "protocol" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Protocol Details</CardTitle>
          </CardHeader>
          <CardContent>
            <ProtocolDetails
              protocol={selected}
              notes={
                boardData.special_pins.find((pin_s) => pin_s.id === selected)
                  ?.notes
              }
            />
          </CardContent>
        </Card>
      )}

      {type === "pin" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pin Function</CardTitle>
          </CardHeader>
          <CardContent>
            <PinFuncDetails
              pinFuncId={selected}
              notes={
                boardData.special_pins.find((pin_s) => pin_s.id === selected)
                  ?.notes
              }
            />
          </CardContent>
        </Card>
      )}

      {(type === "analog" ||
        type === "digital" ||
        type === "power" ||
        type === "ground") && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pin Details</CardTitle>
          </CardHeader>
          <CardContent>
            <PinDetails
              pinData={findPinFromBoard(boardData, selected)}
              specialPins={supportedProtocols}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BoardDetailsPanel;
