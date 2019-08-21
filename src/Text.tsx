import * as React from 'react';
import * as _ from 'lodash';
import {decodeState, encodeState} from "./persistedState";
import ItemList from "./ItemList";
import {RouteComponentProps} from "react-router";
import RouterButton from "./RouterButton";

const split = (raw: string): string[] =>
    _.sortedUniq(_.sortBy(_.split(raw, '\n').map(_.trim).filter(i => !_.isEmpty(i))));

const itemsToRawText = (items: string[]) => items.join('\n');

interface Props {
    encodedState: string
}

interface State {
    rawText: string,
    items: string[]
}

class Text extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        if (this.props.encodedState) {
            let decoded = decodeState(this.props.encodedState);
            this.state = {
                rawText: itemsToRawText(decoded.items),
                items: decoded.items
            }

        } else {
            this.state = {
                rawText: '',
                items: []
            };
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            rawText: event.target.value,
            items: split(event.target.value)
        });
    };

    private handleSubmit = (r: RouteComponentProps) => {
        let encodedState = encodeState({items: this.state.items});
        r.history.push('/arpa/'+encodedState);
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
                <ItemList items={this.state.items}/>
                <RouterButton onClick={this.handleSubmit}>Valmis!</RouterButton>
            </div>
        );
    }
}

export default Text;
