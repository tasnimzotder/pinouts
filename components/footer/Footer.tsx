import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

const Author = () => {
  return (
    <Link
      href="https://tasnimzotder.com/"
      target={'_blank'}
      rel="noopener noreferrer"
    >
      Tasnim Zotder
    </Link>
  );
};

const Footer = () => {
  const start_year = 2022;
  const curr_year = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 px-5 py-8 text-center text-gray-800">
      <h3 className="text-xl my-5">Pinouts</h3>

      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex flex-row gap-2 items-center">
          <span>Contribute to this project on</span>
          <Link
            href={'https://github.com/tasnimzotder/pinouts'}
            target="_blank"
          >
            <SiGithub className="text-xl" />
          </Link>
        </div>

        <p className="text-gray-700">
          &#169; <Author /> | {start_year}{' '}
          {start_year === curr_year ? '' : ` - ${curr_year}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
