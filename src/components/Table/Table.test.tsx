import { render, fireEvent } from '@testing-library/react';
import Table from './Table';

describe('Table component', () => {
  const financialData = [
    { ticker: 'GAMMA', price: 2299.1, assetClass: 'Equities' },
    { ticker: 'ZETA', price: 2716.78, assetClass: 'Credit' },
    { ticker: 'ETA', price: 3089.2, assetClass: 'Macro' }
  ];

  it('renders table headers correctly', () => {
    const { getByText } = render(<Table financialData={financialData} />);
    expect(getByText('Ticker')).toBeInTheDocument();
    expect(getByText('Price')).toBeInTheDocument();
    expect(getByText('Asset Class')).toBeInTheDocument();
  });

  it('initially renders financial data sorted by Ticker in ascending order', () => {
    const { getAllByRole } = render(<Table financialData={financialData} />);
    const tickerCells = getAllByRole('cell', { name: /ticker/i });
    expect(tickerCells.map(cell => cell.textContent)).toEqual(['ETA', 'GAMMA', 'ZETA']);
  });

  it('sorts financial data by Ticker in descending order when Ticker header is clicked', () => {
    const { getByRole, getAllByRole } = render(<Table financialData={financialData} />);
    const tickerHeader = getByRole('columnheader', { name: /ticker/i });
    fireEvent.click(tickerHeader);
    const tickerCells = getAllByRole('cell', { name: /ticker/i });
    expect(tickerCells.map(cell => cell.textContent)).toEqual(['ZETA', 'GAMMA', 'ETA']);
  });

  it('sorts financial data by Price in ascending order when Price header is clicked', () => {
    const { getByRole, getAllByRole } = render(<Table financialData={financialData} />);
    const priceHeader = getByRole('columnheader', { name: /price/i });
    fireEvent.click(priceHeader);
    const priceCells = getAllByRole('cell', { name: /price/i });
    expect(priceCells.map(cell => Number(cell.textContent))).toEqual([3089.2, 2716.78, 2299.1]);
  });

  it('sorts financial data by Asset Class in ascending order when Asset Class header is clicked', () => {
    const { getByRole, getAllByRole } = render(<Table financialData={financialData} />);
    const assetClassHeader = getByRole('columnheader', { name: /asset class/i });
    fireEvent.click(assetClassHeader);
    const assetClassCells = getAllByRole('cell', { name: /asset class/i });
    expect(assetClassCells.map(cell => cell.textContent)).toEqual(['Equities', 'Macro', 'Credit']);
  });

  it('toggles sorting direction when the same header is clicked again', () => {
    const { getByRole, getAllByRole } = render(<Table financialData={financialData} />);
    const tickerHeader = getByRole('columnheader', { name: /ticker/i });
    fireEvent.click(tickerHeader);
    fireEvent.click(tickerHeader);
    const tickerCells = getAllByRole('cell', { name: /ticker/i });
    expect(tickerCells.map(cell => cell.textContent)).toEqual(['ETA', 'GAMMA', 'ZETA']);
  });
});
