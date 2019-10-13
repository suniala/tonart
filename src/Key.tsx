import * as React from 'react';
import {Tone} from "./types";

interface Props {
    tone: Tone
    selected: Set<Tone>
    onClick: (tone: Tone) => void
}

class Key extends React.Component<Props, {}> {
    private handleClick = () => {
        this.props.onClick(this.props.tone)
    };

    render() {
        return (
            <div>
                <button
                    className={(this.props.selected.has(this.props.tone) ? 'button-primary' : '')}
                    onClick={this.handleClick}>
                    {this.props.tone}
                    </button>
            </div>
        );
    }
}

export default Key;
