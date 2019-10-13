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
                <ul>
                    {keySignatures.map(keySignature =>
                        <li>
                            {keySignature.name}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Alternatives;
