import * as _ from 'lodash';
import {ALL_TONES, Tone} from "./types";

export interface KeySignature {
    name: string
    tones: Tone[]
}

interface Scale {
    name: string
    intervals: number[]
}

const scales: Scale[] = [
    {
        name: 'Diatonic Major',
        intervals: [2, 2, 1, 2, 2, 2, 1]
    },
    {
        name: 'Diatonic Minor',
        intervals: [2, 1, 2, 2, 1, 2, 2]
    }
];

// TODO: generate key signatures
// const toneLookup = ALL_TONES.concat(ALL_TONES);
//
// const selectTones = (root: Tone, scale: Scale) => {
//     return [];
// };
//
// const generate: () => KeySignature[] = () =>
//     scales.flatMap(scale =>
//             ALL_TONES.map(root => {
//                 return {
//                     name: root + ' ' + scale.name,
//                     tones: selectTones(root, scale)
//                 }
//             })
//     );
//
// const keySignatures: KeySignature[] = generate();

const keySignatures: KeySignature[] = [
    {
        name: 'C major',
        tones: [Tone.C, Tone.D, Tone.E, Tone.F, Tone.G, Tone.A, Tone.B]
    },
    {
        name: 'C minor',
        tones: [Tone.C, Tone.D, Tone.Ds, Tone.F, Tone.G, Tone.Gs, Tone.As]
    }
];

const findKeySignatures = (tones: Set<Tone>): KeySignature[] => {
    return keySignatures.filter(keySignature => {
        return _.every(Array.from(tones.values()), tone => _.indexOf(keySignature.tones, tone) >= 0);
    });
};

export {
    findKeySignatures
}
