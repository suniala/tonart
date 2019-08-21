import React from 'react';
import {HashRouter, Link, Route} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import Moro from "./Moi";
import Hello from "./Hello";
import Text from "./Text";
import Arpa from "./Arpa";
import Play from "./Play";

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="App">
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/muokkaus">Uusi</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Arpa}/>
                    <Route path="/arpa/:encodedState" render={(props: RouteComponentProps<{ encodedState: string }>) =>
                        <Arpa encodedState={props.match.params.encodedState}/>}/>
                    <Route path="/pelaa/:encodedState" render={(props: RouteComponentProps<{ encodedState: string }>) =>
                        <Play encodedState={props.match.params.encodedState}/>}/>
                    <Route path="/muokkaus/:encodedState" exact
                           render={(props: RouteComponentProps<{ encodedState: string }>) =>
                               <Text encodedState={props.match.params.encodedState}/>}/>
                    <Route path="/muokkaus" exact component={Text}/>
                    <Route path="/moro" exact component={Moro}/>
                    <Route path="/hello/:name" render={(props: RouteComponentProps<{ name: string }>) =>
                        <Hello name={props.match.params.name}/>}/>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
