import * as React from 'react';
import Keyboard from "./Keyboard";

interface State {
}

class Tonart extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Tonart</h1>
                <Keyboard/>
            </div>
        );
    }
}

export default Tonart;
