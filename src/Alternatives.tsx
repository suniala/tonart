import * as React from 'react';
import {Tone} from "./types";
import {findKeySignatures, KeySignature} from "./key-util";

interface Props {
    tones: Set<Tone>
}

class Alternatives extends React.Component<Props, {}> {
    render() {
        let keySignatures: KeySignature[] = findKeySignatures(this.props.tones);

        return (
            <div>
                <h2>Key signature alternatives</h2>
                {
                    this.props.tones.size === 0
                        ? <p>Please push some keys first!</p>
                        : (
                            keySignatures.length === 0
                                ? <p>No key signatures found.</p>
                                : <ul>
                                    {keySignatures.map(keySignature =>
                                        <li>
                                            {keySignature.name}
                                        </li>
                                    )}
                                </ul>)
                }
            </div>
        );
    }
}

export default Alternatives;
