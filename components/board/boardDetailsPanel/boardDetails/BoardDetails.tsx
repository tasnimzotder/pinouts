import BoardType from '@interfaces/board.interface';

const BoardDetails = ({ boardData }: { boardData: BoardType }) => {
  return (
    <div>
      <div>{boardData.description}</div>

      <div>Chip: {boardData.chip.name}</div>

      <div>Operating Voltage: {boardData?.operating_voltage}V</div>

      {boardData.supported_protocols && (
        <div>
          Supported Protocols: {boardData.supported_protocols.join(', ')}
        </div>
      )}

      {boardData.supported_frameworks && (
        <div>
          Supported Frameworks: {boardData.supported_frameworks.join(', ')}
        </div>
      )}

      <div className="px-[5%]">
        <table className="bg-blue-200 w-full text-center">
          <thead>
            <tr>
              <th>GPIO</th>
              <th>Analog</th>
              <th>I2C</th>
              <th>SPI</th>
              <th>UART</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{boardData.pins_counts?.gpio}</td>
              <td>{boardData.pins_counts?.analog}</td>
              <td>{boardData.pins_counts?.i2c}</td>
              <td>{boardData.pins_counts?.spi}</td>
              <td>{boardData.pins_counts?.uart}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoardDetails;
