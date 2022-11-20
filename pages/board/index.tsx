import BoardList from '@components/common/boardList/BoardList';
import { NextPage } from 'next';

const BoardPage: NextPage = () => {
  return (
    <div className="max-w-4xl mx-auto my-16">
      <h1 className="my-5 text-xl">Boards: Interactive Pinouts</h1>
      <BoardList />
    </div>
  );
};

export default BoardPage;
