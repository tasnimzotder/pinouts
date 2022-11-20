const getBoardData = async (board: string) => {
  const data = await import(`@data/boards/${board}`).catch((err) => {
    console.error(err);
    throw new Error(`Board ${board} not found`);
  });

  return data.default;
};

export { getBoardData };
