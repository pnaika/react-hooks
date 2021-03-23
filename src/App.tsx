import React from 'react';
import './style.scss';
import UseStateComponent from "./components/useState";
import {Grid} from "@material-ui/core";
import UseEffectComponent from "./components/useEffect";
import {UseRefComponent} from "./components/useRef";
import UseReducerComponent from "./components/useReducer";
import UseMemoComponent from "./components/useMemo";

function App() {
  return (
    <div className="App">
        <Grid container spacing={1}>
            <Grid container item xs={4}>
                <UseStateComponent />
            </Grid>
            <Grid container item xs={4}>
                <UseEffectComponent />
            </Grid>
            <Grid container item xs={4}>
                <UseRefComponent />
            </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid container item xs={4}>
                <UseReducerComponent />
            </Grid>
            <Grid container item xs={4}>
                <UseMemoComponent />
            </Grid>
            <Grid container item xs={4}>
                <UseRefComponent />
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
