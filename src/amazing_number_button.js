import React from 'react';

class AmazingNumberButton extends React.Component {
    getClasses() {
        var classes = "wrap-btn " + this.props.bst;
        //console.log(classes);
        return classes;
    }
    render() {
        return(
            <div className={this.getClasses()}>
                <button className="amz-nb-button" onClick={() => this.props.onClick()}>
                    {this.props.value}
                </button>
            </div>
        );
    }
}

export default AmazingNumberButton;