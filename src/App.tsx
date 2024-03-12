import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/reducers/';
import { fetchFinancialData } from './store/action-creators/';
import { Table } from './components';

const App: React.FC = () => {

  const dispatch = useDispatch<any>();
  const { data, error, loading } = useSelector((state: RootState) => state.financialData);

  useEffect(() => {
    dispatch(fetchFinancialData());
  }, [dispatch]);

  console.log(loading);


  return (
    <div className="app-container">
      <h1 className="app-title">Financial Instruments</h1>
      {
        loading === false ?
          <Table
            financialData={data}
          /> :
          loading === true || loading === undefined ?
            <div className="app-loading">Loading... </div> :
            <div className="app-error">{error}</div>
      }
    </div>
  );
};

export default App;
