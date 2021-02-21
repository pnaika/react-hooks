import React from 'react';
import './style.scss';
import UseStateComponent from "./components/useState";
import {Grid} from "@material-ui/core";

function App() {
  return (
    <div className="App">
        <Grid container spacing={1}>
            <Grid container item xs={4}>

                <UseStateComponent />
            </Grid>
            <Grid container item xs={4}>
                <UseStateComponent />
            </Grid>
            <Grid container item xs={4}>
                <UseStateComponent />
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
