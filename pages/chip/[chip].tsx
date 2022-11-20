const ChipPageSingle = () => {
  return (
    <div className="my-[10%]">
      <h1 className="text-xl text-center">
        Interactive chip pinouts are coming soon!
      </h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { chip: string };
}) => {
  let chipData = null;

  return {
    props: {
      chipData: chipData,
    },
  };
};

export default ChipPageSingle;
