import BoardType from "../../../lib/interfaces/board.interface";
import { useSelected } from "../../../lib/contexts/selected.context";
import { Badge } from "@components/ui/badge";

const BoardHeading = ({ boardData }: { boardData: BoardType }) => {
  const { updateSelected } = useSelected();

  return (
    <div
      className="cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => {
        updateSelected(boardData.id, "board");
      }}
    >
      <h3 className="text-xl font-semibold mb-2">{boardData.name}</h3>
      <Badge variant="secondary" className="text-xs">
        Click to view board information
      </Badge>
    </div>
  );
};

export default BoardHeading;
