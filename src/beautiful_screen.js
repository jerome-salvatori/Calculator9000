import React from 'react';

class BeautifulScreen extends React.Component {   
    render() {
        return(
            <div className="bscreen">
                <div className="bscreen-top">{this.props.operations}</div>
                <div className="bscreen-btm">{this.props.resultat}</div>
            </div>
        );
    }
}

export default BeautifulScreen;