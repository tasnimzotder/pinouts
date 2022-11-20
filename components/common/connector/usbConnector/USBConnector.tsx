const USBConnector = ({
  side,
}: {
  side: 'top' | 'bottom' | 'left' | 'right' | undefined;
}) => {
  let rotation: string = '';

  console.log(side);

  switch (side) {
    case 'top':
      rotation = 'rotate-0';
      break;

    case 'bottom':
      rotation = 'rotate-180';
      break;

    case 'left':
      rotation = 'rotate-[-90deg]';
      break;

    case 'right':
      rotation = 'rotate-90';
      break;

    default:
  }

  return (
    <div>
      {rotation.length > 0 && (
        <div className={'w-20' + ` ${rotation}`}>
          {/* connector */}
          <div className="bg-gray-400 w-1/2 h-7 mx-auto"></div>

          {/* plate */}
          <div className="bg-gray-600 w-full h-1"></div>
        </div>
      )}
    </div>
  );
};

export default USBConnector;
