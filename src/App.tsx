import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/reducers/';
import { fetchFinancialData } from './store/action-creators/';
import { Table } from './components';

const App: React.FC = () => {

  const dispatch = useDispatch<any>();
  const financialData = useSelector((state: RootState) => state.financialData.data);
  
  useEffect(() => {
    dispatch(fetchFinancialData());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Financial Instruments Table</h1>
      <Table financialData={financialData} />
    </div>
  );
};

export default App;
