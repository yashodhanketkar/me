import { Provider } from 'react-redux';

import MainUIWrapper from './common';
import MainRouter from './common/router';
import { store } from './context/store';

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <MainUIWrapper>
        <MainRouter />
      </MainUIWrapper>
    </Provider>
  );
};

export default App;
