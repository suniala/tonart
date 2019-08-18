import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Moro from "./Moi";
import Hello from "./Hello";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Moro</Link>
                            </li>
                            <li>
                                <Link to="/hello/">Hello</Link>
                            </li>
                        </ul>
                    </nav>


                    <Route path="/" exact component={Moro}/>
                    <Route path="/hello/" render={() => <Hello name={'Teppo'}/>}/>
                </div>
            </Router>
        </div>
    );
};

export default App;
