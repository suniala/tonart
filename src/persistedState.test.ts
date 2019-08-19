import {decodeState, encodeState} from "./persistedState";

it('encodeState produces output different from the input', () => {
    expect(encodeState({items: ['asdf', '1234']})).toEqual('WVhOa1pnPT0sTVRJek5BPT0%3D');
});

it('data is intact after piping state through encoding and decoding', () => {
    const pipeAndAssert = (items: string[]) => expect(decodeState(encodeState({items})).items).toEqual(items);
    pipeAndAssert(['asdf']);
    pipeAndAssert(['asDf', 'Qwer']);
    pipeAndAssert(['543', 'Qw er', '%243']);
    pipeAndAssert(['yksi, kaksi', 'kolme', 'neljä; viisi'])
});