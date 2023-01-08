import React from 'react';
import {RouterProvider} from "react-router";

import './App.css'

import { routes } from './features'

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
