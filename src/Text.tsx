import * as React from 'react';

interface Props {
}

interface State {
    text: string
}

class Text extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {text: ''};
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({text: event.target.value});
    };

    render() {
        return (
            <div>
                <form>
                    <label>
                        Write your options here:
                        <input type='text' value={this.state.text} onChange={this.handleChange}/>
                    </label>
                </form>
                <div>
                    {this.state.text}
                </div>
            </div>
        );
    }
}

export default Text;
