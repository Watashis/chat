import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter';
import Layout from './components/Layout';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return <Layout><AppRouter /></Layout>
  }
}
