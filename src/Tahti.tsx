import * as React from 'react';
import * as _ from 'lodash';
import Bpm from "./Bpm";

interface Beat {
    count: number
    ts: Date
}

interface BeatCountBpms {
    one?: number
    two?: number
    four?: number
    eight?: number
    sixteen?: number
}

interface State {
    beatQueue: Beat[]
    beatCountBpms: BeatCountBpms
}

const countBpm = (beatQueue: Beat[], beats: number): number | undefined => {
    if (beatQueue.length > beats) {
        const endTs = beatQueue[0].ts;
        const startTs = beatQueue[beats].ts;
        return 1000 * 60 * (beats / (endTs.getTime() - startTs.getTime()));
    } else {
        return undefined;
    }
};

class Tahti extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            beatQueue: [],
            beatCountBpms: {}
        };
    }

    private handleTap = () => {
        this.setState((prev) => {
            const count = _.isEmpty(prev.beatQueue) ? 1 : (_.head(prev.beatQueue) as Beat).count + 1;
            let beatQueue = _.concat([{count: count, ts: new Date()}], prev.beatQueue);
            return {
                beatQueue: beatQueue,
                beatCountBpms: {
                    one: countBpm(beatQueue, 1),
                    two: countBpm(beatQueue, 2),
                    four: countBpm(beatQueue, 4),
                    eight: countBpm(beatQueue, 8),
                    sixteen: countBpm(beatQueue, 16)
                }
            };
        });
    };

    // noinspection JSUnusedLocalSymbols
    private handleReset = () => this.setState((prev) => ({beatQueue: [], beatCountBpms: {}}));

    render() {
        return (
            <div>
                <h1>Tahti</h1>
                <table className="u-full-width">
                    <thead>
                    <tr>
                        <th>Number of beats</th>
                        <th>Average bpm</th>
                    </tr>
                    </thead>
                    <tbody>
                    <Bpm count={1} bpm={this.state.beatCountBpms.one}/>
                    <Bpm count={2} bpm={this.state.beatCountBpms.two}/>
                    <Bpm count={4} bpm={this.state.beatCountBpms.four}/>
                    <Bpm count={8} bpm={this.state.beatCountBpms.eight}/>
                    <Bpm count={16} bpm={this.state.beatCountBpms.sixteen}/>
                    </tbody>
                </table>
                <div>
                    <div className='u-pull-right'>
                        <button onClick={this.handleReset}>Reset</button>
                    </div>
                    <div className='beat-count'>
                        {_.isEmpty(this.state.beatQueue)
                            ? <p>No beats yet.</p>
                            : <p>{`Now at beat ${(_.head(this.state.beatQueue) as Beat).count}.`}</p>
                        }
                    </div>
                </div>
                <div>
                    <button className="button-primary tap" onClick={this.handleTap}>Tap</button>
                </div>
            </div>
        );
    }
}

export default Tahti;
