import * as React from 'react';
import * as _ from 'lodash';

interface Props {
}

interface Beat {
    count: number
    ts: number
}

interface State {
    beats: Beat[]
}

class Tahti extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            beats: []
        };
    }

    private handleNaputa = () => {
        this.setState((prev) => {
            const count = _.isEmpty(prev.beats) ? 1 : (_.last(prev.beats) as Beat).count + 1;
            return {
                beats: _.concat(prev.beats, {count: count, ts: 1})
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Tahti</h1>
                <ul>
                    <li>{this.state.beats.length}</li>
                </ul>
                <div>
                    <button onClick={this.handleNaputa}>Naputa</button>
                </div>
            </div>
        );
    }
}

export default Tahti;
