import React from 'react';

class ItSOverNineThousand extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            is_showing: false
        }
    }
    
    getClasses() {
        //console.log('getClasses');
        var classes = "over9000-modal ";
        if (!this.state.is_showing) {
            classes += "hidden";
        } else {
            classes += "visible";
        }
        return classes;
    }
    
    /*close(stateUpdate) {
        console.log('close');
        if (this.state.is_showing) {
            /
            return new Promise(resolve => {
                this.setState(stateUpdate, () => resolve());
            });
        }
        
    }
    
    async asyncClose() {
        
        await close(state => ({is_showing: false}));
        
        console.log(this.state.is_showing);
    }*/
    
    //toggleShowing() {
        //var showing = this.state.is_showing;
        /*console.log('toggle');
        if (!this.state.is_showing) {
             this.setState({is_showing: true}, ()=>{
             console.log(this.state);
             
             })
        }*/
//        if(this.props.resultat > 9000){
//            this.setState({is_showing: showing});
            
    //}
        
    
    /*componentDidUpdate(prevProps) {
        if (this.props.resultat !== prevProps.resultat && this.props.resultat > 9000 &&  !this.state.is_showing) {
            this.toggleShowing();
        }
    }*/
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.is_showing !== prevState.is_showing) {
            //console.log('change prop');
            return ({is_showing: nextProps.is_showing});
        }
        return null;
    }
    
    render() {
        return(
            <div className={this.getClasses()}>

                <div className="modal-content">
                    <span className="close" onClick={() => this.props.onClick()}>&times;</span>
                    <p>It's over 9000!!!</p>
                </div>

            </div>
        );
    }
}

export default ItSOverNineThousand;