const ChipPageSingle = () => {
  return (
    <div>
      <h1>Chip</h1>
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
