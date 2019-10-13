import * as React from 'react';
import {Tone} from "./types";

interface Props {
    tone: Tone
}

class Key extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <button>{this.props.tone}</button>
            </div>
        );
    }
}

export default Key;
