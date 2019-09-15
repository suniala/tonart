import * as React from 'react';

const format = new Intl.NumberFormat([], {maximumFractionDigits: 1, minimumFractionDigits: 1});

interface Props {
    bpm?: number
    count: number
}

class Bpm extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <span>{this.props.count}: </span>
                <span>{this.props.bpm ? format.format(this.props.bpm) : '-'}</span>
            </div>
        );
    }
}

export default Bpm;
