import Link from 'next/link';

const ButtonDownload = ({
  children,
  style,
  ...props
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  href?: string;
  as?: string;
}) => {
  const { href, as } = props;

  return (
    <Link href={`${href}`} as={as}>
      {children}
    </Link>
  );
};

export default ButtonDownload;
