import * as React from 'react';
import {decodeState} from "./persistedState";
import ItemList from "./ItemList";
import {Link, RouteComponentProps} from "react-router-dom";
import RouterButton from "./RouterButton";

interface Props {
    encodedState: string
}

interface State {
    items: string[]
}

class Arpa extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        if (this.props.encodedState) {
            this.state = {
                items: decodeState(this.props.encodedState).items
            }
        } else {
            this.state = {
                items: []
            }
        }
    }

    handleEdit = (r: RouteComponentProps) => {
        r.history.push('/muokkaus/' + (this.props.encodedState ? this.props.encodedState : ''));
    };

    render() {
        return (
            <div>
                <ItemList items={this.state.items}/>
                {
                    !this.props.encodedState
                        ? <RouterButton onClick={this.handleEdit}>Uusi</RouterButton>
                        : <RouterButton onClick={this.handleEdit}>Muokkaa</RouterButton>
                }
                <Link to={'/pelaa/' + this.props.encodedState}>Pelaa</Link>
            </div>
        );
    }
}

export default Arpa;
