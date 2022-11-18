import BoardList from '@components/homepage/boardList/BoardList';
import { NextPage } from 'next';

const BoardPage: NextPage = () => {
  return (
    <div>
      <h1>Boards</h1>

      <BoardList />
    </div>
  );
};

export default BoardPage;
