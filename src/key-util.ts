import * as _ from 'lodash';
import {ALL_TONES, Tone} from "./types";

export interface KeySignature {
    name: string
    tones: Tone[]
}

export interface Interval {
    semitones: number
}

const HALF: Interval = {semitones: 1};
const FULL: Interval = {semitones: 2};

interface Scale {
    name: string
    intervals: Interval[]
}

const scales: Scale[] = [
    {
        name: 'Diatonic Major',
        intervals: [FULL, FULL, HALF, FULL, FULL, FULL, HALF]
    },
    {
        name: 'Diatonic Minor',
        intervals: [FULL, HALF, FULL, FULL, HALF, FULL, FULL]
    }
];

const toneLookup = ALL_TONES.concat(ALL_TONES);

const selectTones = (root: Tone, scale: Scale) => {
    let rootIndex = toneLookup.indexOf(root);
    let toneIndices: number[] = scale.intervals.reduce(
        (acc, curr) => _.concat(acc, (_.last(acc) as number) + curr.semitones),
        [rootIndex]);
    return toneLookup.filter((tone, index) => toneIndices.includes(index));
};

const generate: () => KeySignature[] = () =>
    scales.flatMap(scale =>
        ALL_TONES.map(root => {
            return {
                name: root + ' ' + scale.name,
                tones: selectTones(root, scale)
            }
        })
    );

const keySignatures: KeySignature[] = generate();

const findKeySignatures = (tones: Set<Tone>): KeySignature[] => {
    if (tones.size > 0) {
        return keySignatures.filter(keySignature => {
            return _.every(Array.from(tones.values()), tone => _.indexOf(keySignature.tones, tone) >= 0);
        });
    } else {
        return [];
    }
};

export {
    findKeySignatures,
    HALF,
    FULL
}
