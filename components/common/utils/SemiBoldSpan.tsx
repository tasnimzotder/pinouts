const SemiBoldSpan = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return <span style={{ fontWeight: '500', ...style }}>{children}</span>;
};

export default SemiBoldSpan;
