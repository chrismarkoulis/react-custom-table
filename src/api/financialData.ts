import axios from 'axios';
import { FinancialInstrument } from 'models';

export const fetchFinancialData = async (): Promise<FinancialInstrument[]>=> {
  const response = await axios.get('../../sampleData.json');
  return response.data;
};