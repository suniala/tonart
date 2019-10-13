import * as React from 'react';
import * as _ from 'lodash';
import Keyboard from "./Keyboard";
import {Tone} from "./types";
import Alternatives from "./Alternatives";

interface State {
    tones: Set<Tone>
}

const toggle = (tones: Set<Tone>, tone: Tone) => {
    if (tones.has(tone)) {
        return new Set(_.without(Array.from(tones.values()), tone))
    } else {
        return new Set(Array.from(tones.values()).concat(tone));
    }
};

class Tonart extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tones: new Set([])
        }
    }

    private handleToneToggle = (tone: Tone) => {
        this.setState((prevState, props) => ({tones: toggle(prevState.tones, tone)}));
    };

    render() {
        return (
            <div>
                <h1>Tonart</h1>
                <Keyboard tones={this.state.tones} onToneToggle={this.handleToneToggle}/>
                <Alternatives tones={this.state.tones}/>
            </div>
        );
    }
}

export default Tonart;
