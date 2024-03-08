import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchFinancialData} from './redux/actions';
import { Table } from './components';
import {initialFinancialDataState} from './redux/reducers';


const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchFinancialData());
    console.log(initialFinancialDataState);
    
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Financial Instruments Table</h1>
      <Table />
    </div>
  );
};

export default App;
