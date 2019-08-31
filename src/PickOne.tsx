import * as React from 'react';
import {decodeState} from "./persistedState";
import * as _ from 'lodash';
import {Link} from "react-router-dom";

const pick = (items: string[]) => _.shuffle(items)[0];

interface Props {
    encodedState: string
}

interface State {
    counter: number
    current: string
    remainingItems: string[]
}

class PickOne extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        let items = decodeState(this.props.encodedState).items;
        this.state = {
            counter: 1,
            remainingItems: items,
            current: pick(items)
        }
    }

    private handlePickNew = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
            current: pick(prevState.remainingItems)
        }))
    };

    render() {
        return (
            <div>
                <h1>Arvo yksi</h1>
                <button className='button-primary' onClick={this.handlePickNew}>Arvo uudestaan</button>
                <pre>
                    <code>{this.state.current}</code>
                </pre>
                <p>
                    {`Arvottu ${this.state.counter} kertaa.`}
                </p>

                <Link to={'/arpa/' + this.props.encodedState}>Palaa</Link>
            </div>
        );
    }
}

export default PickOne;
