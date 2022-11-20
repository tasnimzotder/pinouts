const HighlightText = ({ text }: { text: string | undefined }) => {
  return (
    <span className="bg-gray-200 px-1 py-0 rounded-sm font-semibold">
      {text}
    </span>
  );
};

export default HighlightText;
