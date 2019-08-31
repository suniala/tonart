import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import Text from "./Text";
import Arpa from "./Arpa";
import Play from "./Play";

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="container">
                <div className="row">
                    <Route path="/" exact component={Arpa}/>
                    <Route path="/arpa/:encodedState" render={(props: RouteComponentProps<{ encodedState: string }>) =>
                        <Arpa encodedState={props.match.params.encodedState}/>}/>
                    <Route path="/pelaa/:encodedState" render={(props: RouteComponentProps<{ encodedState: string }>) =>
                        <Play encodedState={props.match.params.encodedState}/>}/>
                    <Route path="/muokkaus/:encodedState" exact
                           render={(props: RouteComponentProps<{ encodedState: string }>) =>
                               <Text encodedState={props.match.params.encodedState}/>}/>
                    <Route path="/muokkaus" exact component={Text}/>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
