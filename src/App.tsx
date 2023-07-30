import MainUIWrapper from "./common";
import MainRouter from "./common/router";

const App = (): React.ReactElement => {
  return (
    <MainUIWrapper>
      <MainRouter />
    </MainUIWrapper>
  );
};

export default App;
