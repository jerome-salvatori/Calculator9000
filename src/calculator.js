import React from 'react';
import BeautifulScreen from './beautiful_screen';
import AmazingNumberButton from './amazing_number_button';
import GreatOperationButton from './great_operation_button';
import MagnificentEqualButton from './magnificent_equal_button';
import ItSOverNineThousand from './its_over_nine_thousand';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.HiddenBtn = React.createRef();
        this.clickHidnBtn = this.clickHidnBtn.bind(this);
        this.handleHdnClick = this.handleHdnClick.bind(this);
        
        this.state = {
            ops_array: Array(),
            last_int: null,
            last_entry: "",
            last_operator: "",
            operations: "",
            resultat: 0,
            //n_res: 0
            is_modal_showing: false
        };
    }
    
    writeOps() {
        var ops_str = this.state.operations;
        if (ops_str !== "") {
            this.setState({operations: ""});
            ops_str = "";
        }
        for (var chr in this.state.ops_array) {
            //console.log(chr);
            ops_str += this.state.ops_array[chr];
        }
        console.log(ops_str);
        this.setState({operations: ops_str});
    }
    
    mathFunc(x, y, op) {
        const math_obj = {
            '+': function (x, y) { return x + y },
            '-': function (x, y) { return x - y },
            '*': function (x, y) { return x * y },
            '/': function (x, y) { return x / y }
        }
        
        return math_obj[op](x, y);
    }
    
    handleClick(val) {
        //console.log(this.state);
        const operators = ["+", "-", "*", "/", "="];
        var n_res;
        var n_int;
        var new_array = this.state.ops_array;
        new_array.push(val);
        this.setState({ops_array: new_array});
        if ((Number.isInteger(parseInt(val)) && this.state.ops_array.length === 1)) {
            this.setState({resultat: parseInt(val), last_int: parseInt(val), last_entry: val});
        } else if (operators.includes(val) && this.state.ops_array.length > 3 && !operators.includes(this.state.last_entry)) {
            if (this.state.last_operator !== "") {
                /*console.log(typeof(this.state.resultat));
                console.log(typeof(this.state.last_int));*/
                n_res = this.mathFunc(this.state.resultat, this.state.last_int, this.state.last_operator);
                console.log(n_res);
                this.setState({resultat: n_res});
                new_array = [];
                new_array.push(n_res.toString());
                new_array.push(val);
                this.setState({ops_array: new_array, last_int: n_res, last_entry: val, last_operator: val});
                if (val !== "=") {
                    this.writeOps();
                } else {
                    this.setState({operations: "", ops_array: []});
                }
                //this.setState({n_res: n_res});
                if (n_res > 9000) {
                    this.setState({is_modal_showing: true});
                }
            }
        } else if (Number.isInteger(parseInt(val)) && this.state.ops_array.length > 1) {
            if (Number.isInteger(parseInt(this.state.last_entry))) {
                n_int = this.state.last_entry.toString() + val;
                //console.log(n_int);
                //console.log(this.state.ops_array);
                //new_array = new_array.splice(-2, 2, n_int);
                new_array.splice(-2, 2, n_int);
                //console.log(new_array);
                //this.setState({ops_array: new_array, last_int: parseInt(n_int), last_entry: n_int, resultat: parseInt(n_int)});
                if (new_array.length === 3) {
                    this.setState({ops_array: new_array, last_int: parseInt(n_int), last_entry: n_int});
                } else if (new_array.length === 1) {
                    this.setState({ops_array: new_array, last_int: parseInt(n_int), last_entry: n_int, resultat: parseInt(n_int)});
                }
                
            } else if (this.state.last_entry == "=") {
                this.setState({resultat: parseInt(val), ops_array: [val], last_int: parseInt(val), last_entry: val, last_operator: ""});
            } else {
                this.setState({last_int: parseInt(val), last_entry: val});
            }
            this.writeOps();
        } else if (operators.includes(val) && this.state.ops_array.length < 3 && !operators.includes(this.state.last_entry)) {
            this.setState({last_entry: val, last_operator: val});
            this.writeOps();
        } else {
            new_array.splice(-1, 1);
        }
        console.log(this.state);
        
    }
    
    renderNumberButtons() {
        return(
            <div>
                <div className="row g-0">
                    <AmazingNumberButton value="1" bst="col-4" onClick = {() => this.handleClick(1)} />
                    <AmazingNumberButton value="2" bst="col-4" onClick = {() => this.handleClick(2)} />
                    <AmazingNumberButton value="3" bst="col-4" onClick = {() => this.handleClick(3)} />
                </div>
                <div className="row g-0">
                    <AmazingNumberButton value="4" bst="col-4" onClick = {() => this.handleClick(4)} />
                    <AmazingNumberButton value="5" bst="col-4" onClick = {() => this.handleClick(5)} />
                    <AmazingNumberButton value="6" bst="col-4" onClick = {() => this.handleClick(6)} />
                </div>
                <div className="row g-0">
                    <AmazingNumberButton value="7" bst="col-4" onClick = {() => this.handleClick(7)} />
                    <AmazingNumberButton value="8" bst="col-4" onClick = {() => this.handleClick(8)} />
                    <AmazingNumberButton value="9" bst="col-4" onClick = {() => this.handleClick(9)} />
                </div>
                <div className="row g-0">
                    <AmazingNumberButton value="0" bst="col-4 offset-4" onClick = {() => this.handleClick(0)} />
                    <MagnificentEqualButton onClick = {() => this.handleClick("=")} />
                </div>
            </div>
        );
    }
    
    /*closeModal() {
        if (this.state.is_modal_showing) {
            this.setState({is_modal_showing: false});
        }
        
    }*/
    
    clickHidnBtn(e) {
        this.HiddenBtn.current.click();
    }
    
    handleHdnClick() {
        if (this.state.is_modal_showing) {
            this.setState({is_modal_showing: false});
        }
    }
    
    render() {
        return(
            <div>
                <div className="calculator col-4 offset-4">
                    <BeautifulScreen operations={this.state.operations} resultat={this.state.resultat} />
                    <div className="row g-0">
                        <div className="col-9">
                            {this.renderNumberButtons()}
                        </div>
                        <div className="col-3">
                            <GreatOperationButton operator="+" onClick = {() => this.handleClick("+")} />
                            <GreatOperationButton operator="-" onClick = {() => this.handleClick("-")} />
                            <GreatOperationButton operator="*" onClick = {() => this.handleClick("*")} />
                            <GreatOperationButton operator="/" onClick = {() => this.handleClick("/")} />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="hidden" ref={this.HiddenBtn} onClick={this.handleHdnClick} ></button>
                    <ItSOverNineThousand is_showing={this.state.is_modal_showing} onClick={this.clickHidnBtn} />
                </div>
            </div>
        );
    }
}

export default Calculator;