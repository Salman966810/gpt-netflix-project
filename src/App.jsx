import BodyContainer from "./components/BodyContainer";
import "./style/style.css"
import { Provider } from "react-redux";
import store from "./utils/store"
const App = () => {
  return (
    <Provider store={store}>
      <BodyContainer />
    </Provider>
  );
};

export default App;
