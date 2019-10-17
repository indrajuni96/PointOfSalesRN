import React, { Component } from 'react';
import MainNavigation from './src/Navigator'
import { Provider } from "react-redux"
import store from "./src/public/redux/store"
export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <MainNavigation />
        </Provider>
      </>
    );
  }
}
