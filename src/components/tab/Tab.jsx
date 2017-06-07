// Dependencies
import React from 'react';

// Styles
import './Tab.scss';

class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className={'tab ' + (this.props.isSelected ? 'selected ' : "")}
                onClick={this.props.tabClick}>
                {this.props.tabName}
            </div>
        );
    }
}

export default Tab;