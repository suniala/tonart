import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import Text from "./Text";
import Arpa from "./Arpa";
import PickSeries from "./PickSeries";
import PickOne from "./PickOne";

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="container">
                <div className="row">
                    <Route path="/" exact component={Arpa}/>
                    <Route path="/arpa/:encodedState" render={(props: RouteComponentProps<{ encodedState: string }>) =>
                        <Arpa encodedState={props.match.params.encodedState}/>}/>
                    <Route path="/sarja/:encodedState" render={(props: RouteComponentProps<{ encodedState: string }>) =>
                        <PickSeries encodedState={props.match.params.encodedState}/>}/>
                    <Route path="/yksi/:encodedState" render={(props: RouteComponentProps<{ encodedState: string }>) =>
                        <PickOne encodedState={props.match.params.encodedState}/>}/>
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
