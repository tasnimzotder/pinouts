const getBoardData = async (board: string) => {
  const data = await import(`@data/boards/${board}`);
  return data.default;
};

export { getBoardData };
