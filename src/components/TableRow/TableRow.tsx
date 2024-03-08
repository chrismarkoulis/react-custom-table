import React from 'react';
import { FinancialInstrument } from '../../redux/types';

interface Props {
  financialInstrument: FinancialInstrument;
}

const TableRow: React.FC<Props> = ({ financialInstrument }) => {
  const { ticker, price, assetClass } = financialInstrument;

  return (
    <tr className={`row ${assetClass.toLowerCase()}`}>
      <td>{ticker}</td>
      <td style={{ color: price >= 0 ? 'blue' : 'red' }}>{price}</td>
      <td>{assetClass}</td>
    </tr>
  );
};

export default TableRow;
