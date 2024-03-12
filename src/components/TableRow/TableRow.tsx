import React from 'react';
import { FinancialInstrument } from 'models';
import styles from './TableRow.module.css';

interface TableRowProps {
  financialInstrument: FinancialInstrument;
}

const TableRow: React.FC<TableRowProps> = ({ financialInstrument }) => {
  const { ticker, price, assetClass } = financialInstrument;
  const priceColor = price >= 0 ? 'blue' : 'red';

  const assetClassColor = () => {
    switch (assetClass) {
      case 'Equities':
        return styles.equities;
      case 'Macro':
        return styles.macro;
      case 'Credit':
        return styles.credit;
      default:
        return styles.black;
    }
  };

  return (
    <tr className={`${styles.row} ${assetClassColor()}`}>
      <td>{ticker}</td>
      <td style={{ color: priceColor }}>{price}</td>
      <td>{assetClass}</td>
    </tr>
  );
};

export default TableRow;
