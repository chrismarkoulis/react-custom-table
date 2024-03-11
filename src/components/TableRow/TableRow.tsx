import React from 'react';
import { FinancialInstrument } from 'models';
import styles from './TableRow.module.css';

interface Props {
  financialInstrument: FinancialInstrument;
}

const TableRow: React.FC<Props> = ({ financialInstrument }) => {
  const { ticker, price, assetClass } = financialInstrument;

  const assetClassColor = () => {
    switch (assetClass) {
      case 'Equities':
        return 'blue';
      case 'Macro':
        return 'white';
      case 'Credit':
        return 'green';
      default:
        return 'black';
    }
  };

  const priceColor = price >= 0 ? 'blue' : 'red';

  return (
    <tr className={`${styles.row} ${assetClassColor()}`}>
      <td>{ticker}</td>
      <td style={{ color: priceColor }}>{price}</td>
      <td>{assetClass}</td>
    </tr>
  );
};

export default TableRow;
