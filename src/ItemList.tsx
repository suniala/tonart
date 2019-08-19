import * as React from 'react';

interface Props {
    items: string[]
}

interface State {
}

class ItemList extends React.Component<Props, State> {
    render() {
        return (
            <ul>
                {
                    this.props.items.map(item => <li key={item}>{item}</li>)
                }
            </ul>
        );
    }
}

export default ItemList;
