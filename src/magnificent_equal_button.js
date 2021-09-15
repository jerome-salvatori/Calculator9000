import React from 'react';

class MagnificentEqualButton extends React.Component {
    render() {
        return (
            <div className="wrap-btn col-4">
                <button className="mgn-eq-button" onClick={() => this.props.onClick()} >
                    =
                </button>
            </div>
        );
    }
}

export default MagnificentEqualButton;