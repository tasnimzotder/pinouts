const Footer = () => {
  const start_year = 2022;
  const curr_year = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 px-5 py-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-xl">Pinouts</h3>
        <p>
          &#169; Tasnim Zotder | {start_year}{' '}
          {start_year === curr_year ? '' : ` - ${curr_year}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
