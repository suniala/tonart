import * as _ from 'lodash';
import {ALL_TONES, Tone} from "./types";

export interface KeySignature {
    name: string
    tones: Tone[]
}

export interface Interval {
    semitones: number
}

const SEMITONE: Interval = {semitones: 1};
const TONE: Interval = {semitones: 2};
const MINOR_THIRD: Interval = {semitones: 3};
const MAJOR_THIRD: Interval = {semitones: 4};

interface Scale {
    name: string
    intervals: Interval[]
}

const scales: Scale[] = [
    {
        name: 'Diatonic Major',
        intervals: [TONE, TONE, SEMITONE, TONE, TONE, TONE, SEMITONE]
    },
    {
        name: 'Diatonic Minor',
        intervals: [TONE, SEMITONE, TONE, TONE, SEMITONE, TONE, TONE]
    },
    {
        name: 'Natural Minor',
        intervals: [TONE, SEMITONE, TONE, TONE, SEMITONE, MINOR_THIRD, SEMITONE]
    },
    {
        name: 'Melodic Minor Ascending',
        intervals: [TONE, SEMITONE, TONE, TONE, TONE, TONE, SEMITONE]
    },
    {
        name: 'Melodic Minor Descending',
        intervals: [TONE, TONE, SEMITONE, TONE, TONE, SEMITONE, TONE]
    },
    {
        name: 'Harmonic Minor',
        intervals: [TONE, SEMITONE, TONE, TONE, SEMITONE, MINOR_THIRD, SEMITONE]
    },
    {
        name: 'Whole Tone',
        intervals: [TONE, TONE, TONE, TONE, TONE, TONE]
    },
    {
        name: 'Pentatonic Major',
        intervals: [TONE, TONE, MINOR_THIRD, TONE, TONE]
    },
    {
        name: 'Pentatonic Minor',
        intervals: [MINOR_THIRD, TONE, TONE, SEMITONE, MAJOR_THIRD]
    },
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
}
