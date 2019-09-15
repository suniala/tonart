import * as React from 'react';

const format = new Intl.NumberFormat([], {maximumFractionDigits: 1, minimumFractionDigits: 1});

interface Props {
    bpm?: number
    count: number
}

class Bpm extends React.Component<Props, {}> {
    render() {
        return (
            <tr>
                <td>{this.props.count}</td>
                <td>{this.props.bpm ? format.format(this.props.bpm) : '-----'}</td>
            </tr>
        );
    }
}

export default Bpm;
