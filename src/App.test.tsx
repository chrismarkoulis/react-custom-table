import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import App from './App';
import { RootState, rootReducer } from '@store/reducers';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';


const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<RootState>)
  );
  

describe('App component', () => {
  it('renders loading state correctly', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('renders error state correctly', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      expect(getByText('An error occurred')).toBeInTheDocument();
    });
  });

  it('renders table when not in loading or error state', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => {
      expect(getByText('Financial Instruments')).toBeInTheDocument();
      expect(getByText('ALPHA')).toBeInTheDocument();
      expect(getByText('BETA')).toBeInTheDocument();
    });
  });
});
