import '@testing-library/jest-dom';
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
    const { getByText } = render(<Table financialData={financialData} />);
    const tickerCells = getByText('GAMMA').closest('tr').querySelectorAll('td');
    expect(Array.from(tickerCells).map(cell => cell.textContent)).toEqual(['GAMMA', '2299.1', 'Equities']);
  });

  it('sorts financial data by Ticker in descending order when Ticker header is clicked', () => {
    const { getByRole, getByText } = render(<Table financialData={financialData} />);
    const tickerHeader = getByRole('columnheader', { name: /ticker/i });
    fireEvent.click(tickerHeader);
    const tickerCells = getByText('ZETA').closest('tr').querySelectorAll('td');
    expect(Array.from(tickerCells).map(cell => cell.textContent)).toEqual(['ZETA', '2716.78', 'Credit']);
  });

  it('sorts financial data by Price in ascending order when Price header is clicked', () => {
    const { getByRole, getByText } = render(<Table financialData={financialData} />);
    const priceHeader = getByRole('columnheader', { name: /price/i });
    fireEvent.click(priceHeader);
    const priceCells = getByText('2299.1').closest('tr').querySelectorAll('td');
    expect(Array.from(priceCells).map(cell => cell.textContent)).toEqual(['GAMMA', '2299.1', 'Equities']);
  });

  it('sorts financial data by Asset Class in ascending order when Asset Class header is clicked', () => {
    const { getByRole, getByText } = render(<Table financialData={financialData} />);
    const assetClassHeader = getByRole('columnheader', { name: /asset class/i });
    fireEvent.click(assetClassHeader);
    const assetClassCells = getByText('Equities').closest('tr').querySelectorAll('td');
    expect(Array.from(assetClassCells).map(cell => cell.textContent)).toEqual(['GAMMA', '2299.1', 'Equities']);
  });

  it('toggles sorting direction when the same header is clicked again', () => {
    const { getByRole, getByText } = render(<Table financialData={financialData} />);
    const tickerHeader = getByRole('columnheader', { name: /ticker/i });
    fireEvent.click(tickerHeader);
    fireEvent.click(tickerHeader);
    const tickerCells = getByText('GAMMA').closest('tr').querySelectorAll('td');
    expect(Array.from(tickerCells).map(cell => cell.textContent)).toEqual(['GAMMA', '2299.1', 'Equities']);
  });
});
