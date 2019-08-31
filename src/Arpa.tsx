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

    private haveItems = () => this.state.items.length > 1;

    render() {
        return (
            <div>
                <h1>Arvonta</h1>
                {this.haveItems()
                    ? <div>
                        <ItemList items={this.state.items}/>
                        <Link className='button button-primary' to={'/pelaa/' + this.props.encodedState}>Aloita
                            arvonta</Link>
                        <span> </span>
                        <RouterButton onClickR={this.handleEdit}>Muokkaa</RouterButton>
                    </div>
                    : <p>Et ole vielä syöttänyt vaihtoehtoja. <Link to='/muokkaus'>Luo uusi arvonta.</Link></p>
                }
            </div>
        );
    }
}

export default Arpa;
