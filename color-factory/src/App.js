import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import { v4 as uuid } from 'uuid';

function App() {
  const [colors, setColors] = useState([]);
  const addColor = color => {
    let newColor = {...color, id: uuid()};
    console.log(newColor)
    setColors(colors => ([
      ...colors,
      newColor
    ]))
    console.log(colors)
  }
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors}/>
      </Route>
      <Route exact path="/colors/new">
        <NewColorForm addColor={addColor} colors={colors} setColors={setColors}/>
      </Route>
      <Redirect to="/colors" />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
