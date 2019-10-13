import * as React from 'react';
import {Tone} from "./types";
import Key from "./Key";

interface State {
}

class Keyboard extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div>
                <Key tone={Tone.C}/>
                <Key tone={Tone.Cs}/>
            </div>
        );
    }
}

export default Keyboard;
