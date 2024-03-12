import React, { useState, useCallback, useMemo } from 'react';
import { TableRow } from '../';
import { FinancialInstrument } from 'models';
import styles from './Table.module.css';

interface TableProps {
  financialData: FinancialInstrument[]
}

type SortOrder = 'asc' | 'desc';

const Table: React.FC<TableProps> = ({ financialData }) => {
  const [sortBy, setSortBy] = useState<string>('ticker');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sortedData = useMemo(() => {
    return [...financialData].sort((a, b) => {
      switch (sortBy) {
        case 'assetClass':
          const assetClassOrder: Record<string, number> = {
            Equities: 1,
            Macro: 2,
            Credit: 3,
          };
          return sortOrder === 'asc' ?
            (assetClassOrder[a.assetClass] || Infinity) - (assetClassOrder[b.assetClass] || Infinity) :
            (assetClassOrder[b.assetClass] || Infinity) - (assetClassOrder[a.assetClass] || Infinity)
        case 'price':
          return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        case 'ticker':
        default:
          return sortOrder === 'asc' ? a.ticker.localeCompare(b.ticker) : b.ticker.localeCompare(a.ticker);
      }
    });
  }, [financialData, sortBy, sortOrder]);


  const handleSort = useCallback(
    (clickedColumn: string) => {
      if (sortBy === clickedColumn) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      } else {
        setSortBy(clickedColumn);
        setSortOrder('asc');
      }
    },
    [sortBy, sortOrder]
  );

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.header}>
          <th className={styles.ticker} onClick={() => handleSort('ticker')}>
            Ticker
          </th>
          <th className={styles.price} onClick={() => handleSort('price')}>
            Price
          </th>
          <th className={styles.assetClass} onClick={() => handleSort('assetClass')}>
            Asset Class
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item: FinancialInstrument) => (
          <TableRow key={item.ticker} financialInstrument={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
