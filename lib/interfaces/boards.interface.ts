type BoardsType = Array<{
  id: string;
  name: string;
  chip: {
    name: string;
    id: string;
  };
  manufacturer: {
    name: string;
    url: string;
  };
}>;

export default BoardsType;
