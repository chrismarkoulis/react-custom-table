import React from 'react';
import { TableRow } from '../';
import { FinancialInstrument } from 'models';

interface TableProps {
  financialData: FinancialInstrument[]
}

const Table: React.FC<TableProps> = ({ financialData }) => (
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

export default Table;
