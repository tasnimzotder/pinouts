import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-red-200 px-[5%] py-1.5 text-lg flex flex-row justify-between">
      <div className="text-xl">
        <Link href="/">Pinouts</Link>
      </div>

      <div className="flex flex-row gap-5 lg:mr-[30%]">
        <Link href="/board">Boards</Link>
        <Link href="/chip">Chips</Link>
      </div>
    </header>
  );
};

export default Header;
