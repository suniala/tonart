import {RouteComponentProps, withRouter} from "react-router";
import * as React from "react";

interface Props extends RouteComponentProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    onClickR: (r: RouteComponentProps) => void
}

class RouterButton extends React.Component<Props, {}> {
    private handleClick = () => {
        this.props.onClickR(this.props)
    };

    render() {
        return (
            <button onClick={this.handleClick} {...this.props}>
                {this.props.children}
            </button>);
    }
}

/**
 * A convenience button that calls the given onClick callback a RouteComponentProps object for doing a
 * redirect with history.push, for example.
 */
export default withRouter(RouterButton);