import Nav from "../nav";
import {Routes, Route} from "react-router";
import TuiterContent from "./content";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer }});

function Tuiter() {
    return (
        <Provider store={store}>
        <div>
            <Nav/>
            <Routes>
                <Route index
                       element={<TuiterContent tab="home"/>}/>
                <Route path="explore"
                       element={<TuiterContent tab="explore"/>}/>
            </Routes>
        </div>
        </Provider>
    );
}

export default Tuiter;