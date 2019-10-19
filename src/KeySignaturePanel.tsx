import * as React from 'react';
import {KeySignature} from "./key-util";
import Keyboard from "./Keyboard";

interface Props {
    keySignature: KeySignature
}

interface State {
    opened: boolean
}

class KeySignaturePanel extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            opened: false
        };
    }

    private toggle = () => {
        this.setState((prev) => prev.opened ? {opened: false} : {opened: true})
    };

    render() {
        return (
            <div className='key-signature-panel'
                 key={this.props.keySignature.name}
                 onClick={this.toggle}>
                <div className='title'>
                    {this.props.keySignature.name}
                </div>
                <div className={'tones' + (this.state.opened ? ' open' : ' closed')}>
                    <Keyboard tones={new Set(this.props.keySignature.tones)} readOnly={true}/>
                </div>
            </div>
        );
    }
}

export default KeySignaturePanel;
