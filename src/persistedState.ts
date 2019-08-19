const separator = ',';

interface PersistedState {
    items: string[]
}

const decode = (encoded: string): string => atob(encoded);
const encode = (rawString: string): string => btoa(rawString);
const decodeURISafe = (encoded: string): string => atob(decodeURIComponent(encoded));
const encodeURISafe = (rawString: string): string => encodeURIComponent(btoa(rawString));

/**
 * @returns {string} an URI safe encoded representation
 */
const encodeState = (state: PersistedState): string => {
    // Encode each item so as avoid problems with items that contain our separator character.
    return encodeURISafe(state.items.map(encode).join(separator))
};

/**
 * @param {string} encoded state as encoded by encodeState
 * @returns {PersistedState} decoded state
 */
const decodeState = (encoded: string): PersistedState => {
    return {items: decodeURISafe(encoded).split(separator).map(decode)}
};

export {
    decodeState,
    encodeState
}