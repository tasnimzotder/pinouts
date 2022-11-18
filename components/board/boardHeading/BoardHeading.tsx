import BoardType from '@interfaces/board.interface';

const BoardHeading = ({ boardData }: { boardData: BoardType }) => {
  return (
    <div className="bg-red-500 text-2xl font-medium px-[5%] py-5">
      {`Board${boardData.name}`}
    </div>
  );
};

export default BoardHeading;
