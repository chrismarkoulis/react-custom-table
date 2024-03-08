import axios from 'axios';
import { FinancialInstrument } from '../redux/types';


export const fetchFinancialData = async (): Promise<FinancialInstrument[]>=> {
  return await axios.get('../../sampleData.json');
};
