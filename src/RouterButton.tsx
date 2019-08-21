import {RouteComponentProps, withRouter} from "react-router";
import * as React from "react";

interface Props extends RouteComponentProps {
    onClick: (r: RouteComponentProps) => void
}

class RouterButton extends React.Component<Props, {}> {
    private handleClick = () => {
        this.props.onClick(this.props)
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.children}
            </button>);
    }
}

/**
 * A convenience button that calls the given onClick callback a RouteComponentProps object for doing a
 * redirect with history.push, for example.
 */
export default withRouter(RouterButton);