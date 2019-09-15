import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Tahti from "./Tahti";

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="container">
                <div className="row">
                    <Route path="/" exact component={Tahti}/>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
