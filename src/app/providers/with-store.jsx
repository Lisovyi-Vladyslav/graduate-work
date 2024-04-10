import store from "app/redux/store";
import { Provider } from "react-redux";
// I don't like that we pass store here but whatever


export const withStore = (component) => () =>
  <Provider store={store}>{component()}</Provider>;
