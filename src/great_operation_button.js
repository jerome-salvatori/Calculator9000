import React from 'react';

class GreatOperationButton extends React.Component {
    render() {
        return(
            <div className="wrap-btn">
                <button className="great-op-button" onClick={() => this.props.onClick()} >
                    {this.props.operator}
                </button>
            </div>
        );
    }
}

export default GreatOperationButton;