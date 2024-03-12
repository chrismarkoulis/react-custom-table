import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TableRow from './TableRow';

describe('TableRow component', () => {
  const financialInstrument = {
    ticker: 'DELTA',
    price: 3132.66,
    assetClass: 'Equities',
  };

  it('renders table row with correct data', () => {
    const { getByText } = render(<TableRow financialInstrument={financialInstrument} />);
    
    expect(getByText(financialInstrument.ticker)).toBeInTheDocument();
    expect(getByText(financialInstrument.price.toString())).toBeInTheDocument();
    expect(getByText(financialInstrument.assetClass)).toBeInTheDocument();
  });

  it('applies correct styles based on asset class', () => {
    const { container } = render(<TableRow financialInstrument={financialInstrument} />);

    const row = container.querySelector('tr');
    expect(row).toHaveClass('row');
    expect(row).toHaveClass('equities');
  });

  it('applies correct text color for price based on its value', () => {
    const { getByText } = render(<TableRow financialInstrument={financialInstrument} />);

    const priceCell = getByText(financialInstrument.price.toString());
    expect(priceCell).toHaveStyle('color: blue');
  });
});
