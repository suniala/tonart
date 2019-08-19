import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import Moro from "./Moi";
import Hello from "./Hello";
import Text from "./Text";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Arpa</Link>
                            </li>
                            <li>
                                <Link to="/moro">Moro</Link>
                            </li>
                            <li>
                                <Link to="/hello/Teppo">Hello</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Text}/>
                    <Route path="/moro" exact component={Moro}/>
                    <Route path="/hello/:name" render={(props: RouteComponentProps<{ name: string }>) =>
                        <Hello name={props.match.params.name}/>}/>
                </div>
            </Router>
        </div>
    );
};

export default App;
