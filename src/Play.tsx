import * as React from 'react';
import {decodeState} from "./persistedState";
import * as _ from 'lodash';

const shuffle = (items: string[]): string[] => _.shuffle(items);

interface Props {
    encodedState: string
}

interface State {
    pastItems: string[]
    remainingItems: string[]
}

class Play extends React.Component<Props, State> {
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

    render() {
        return (
            <div>
                <div>
                    {_.head(this.state.remainingItems)}
                </div>
                <button onClick={this.prev} disabled={this.disablePrev()}>Edellinen</button>
                <button onClick={this.next} disabled={this.disableNext()}>Seuraava</button>
            </div>
        );
    }
}

export default Play;
