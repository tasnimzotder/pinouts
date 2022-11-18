import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-red-200 px-[5%] py-1.5 text-lg">
      <div className="text-xl">
        <Link href="/">Pinouts</Link>
      </div>
    </header>
  );
};

export default Header;
