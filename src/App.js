import React from 'react';
import TheTitle from './the_title';
import Calculator from './calculator';

class App extends React.Component {
    render() {
        return(
            <div>
                <TheTitle />
                <div className="row g-0">
                    <Calculator />
                </div>
            </div>
        );
    }
}
            
export default App;