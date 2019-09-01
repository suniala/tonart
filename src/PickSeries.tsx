import * as React from 'react';
import {decodeState} from "./persistedState";
import * as _ from 'lodash';
import {Link} from "react-router-dom";

const shuffle = (items: string[]): string[] => _.shuffle(items);

interface Props {
    encodedState: string
}

interface State {
    pastItems: string[]
    remainingItems: string[]
}

class PickSeries extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            pastItems: [],
            remainingItems: shuffle(decodeState(this.props.encodedState).items)
        }
    }

    prev = () => this.setState((prevState) => ({
        pastItems: _.dropRight(prevState.pastItems, 1),
        remainingItems: _.concat([_.last(prevState.pastItems) as string], prevState.remainingItems)
    }));

    next = () => this.setState((prevState) => ({
        pastItems: _.concat(prevState.pastItems, [_.head(prevState.remainingItems) as string]),
        remainingItems: _.drop(prevState.remainingItems, 1)
    }));

    disablePrev = (): boolean => _.isEmpty(this.state.pastItems);

    disableNext = (): boolean => this.state.remainingItems.length <= 1;

    currItemNo = (): number => this.state.pastItems.length + 1;

    totalItemCount = (): number => this.state.pastItems.length + this.state.remainingItems.length;

    render() {
        return (
            <div>
                <h1>Arvo sarja</h1>
                <div>
                    <button onClick={this.prev} disabled={this.disablePrev()}>&lt;</button>
                    <span> {`${this.currItemNo()} / ${this.totalItemCount()}`} </span>
                    <button className='button-primary' onClick={this.next}
                            disabled={this.disableNext()}>&gt;</button>
                </div>
                <div className='picked-item'>
                    {_.head(this.state.remainingItems)}
                </div>

                <Link to={'/arpa/' + this.props.encodedState}>Palaa</Link>
            </div>
        );
    }
}

export default PickSeries;
