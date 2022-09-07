import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';

function App(props) {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/dogs" >
      <DogList dogs={props.dogs}/>
    </Route>
    <Route path="/dogs/:name" >
      <DogDetails dogs={props.dogs} />
    </Route>
    <Redirect to="/dogs" />
  </Switch>
  </BrowserRouter>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}


export default App;
