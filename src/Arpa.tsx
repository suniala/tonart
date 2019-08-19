import * as React from 'react';
import {decodeState} from "./persistedState";
import ItemList from "./ItemList";
import {Link} from "react-router-dom";

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

    handleEdit = () => {
        window.location.assign('/muokkaus/' + (this.props.encodedState ? this.props.encodedState : ''));
    };

    render() {
        return (
            <div>
                <ItemList items={this.state.items}/>
                {
                    !this.props.encodedState
                        ? <button onClick={this.handleEdit}>Uusi</button>
                        : <button onClick={this.handleEdit}>Muokkaa</button>
                }
                <Link to={'/pelaa/' + this.props.encodedState}>Pelaa</Link>
            </div>
        );
    }
}

export default Arpa;
