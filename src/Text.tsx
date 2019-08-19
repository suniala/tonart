import * as React from 'react';
import * as _ from 'lodash';

const split = (raw: string): string[] =>
    _.sortedUniq(_.sortBy(_.split(raw, '\n').map(_.trim).filter(i => !_.isEmpty(i))));

interface Props {
}

interface State {
    rawText: string,
    items: string[]
}

class Text extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            rawText: '',
            items: []
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            rawText: event.target.value,
            items: split(event.target.value)
        });
    };

    render() {
        return (
            <div>
                <form>
                    <label>
                        Write your options here:
                        <textarea value={this.state.rawText} onChange={this.handleChange}/>
                    </label>
                </form>
                <ul>
                    {
                        this.state.items.map(item => <li key={item}>{item}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Text;
