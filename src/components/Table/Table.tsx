import TableProps from './Table.types';

const Table = ({ data = [] }: TableProps) => {
  const titles = Object.keys(data[0] || {});

  return (
    <table>
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.char_id}>
            {Object.values(item).map((value, idx) => (
              <td key={Number(item.char_id + idx)}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
