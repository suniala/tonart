import * as React from 'react';
import {KeySignature} from "./key-util";
import Keyboard from "./Keyboard";

interface Props {
    keySignature: KeySignature
}

class KeySignaturePanel extends React.Component<Props, {}> {
    render() {
        return (
            <div key={this.props.keySignature.name}>
                <div>
                    {this.props.keySignature.name}
                </div>
                <div>
                    <Keyboard tones={new Set(this.props.keySignature.tones)} readOnly={true}/>
                </div>
            </div>
        );
    }
}

export default KeySignaturePanel;
