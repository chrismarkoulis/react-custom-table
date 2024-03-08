import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import TableRow from '../TableRow/TableRow';
import { FinancialInstrument } from 'redux/types';

const Table: React.FC = () => {
  const financialData: any = useSelector((state: RootState) => state.financialData.data);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Price</th>
          <th>Asset Class</th>
        </tr>
      </thead>
      <tbody>
        {financialData.map((item: FinancialInstrument) => (
          <TableRow key={item.ticker} financialInstrument={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
