import React, { Component } from "react";

class Compose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleClick() {
        this.props.onAdd(this.state.input);
        this.setState({
            input: ""
        })
    }

    handlePress(event) {
        if (event.key === "Enter") {
            const valueInInput = event.target.value;
            this.props.onAdd(valueInInput);

            this.setState({
                input: ""
            })
        }

    }


    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.input} onKeyPress={this.handlePress} />
                <button type="button" onClick={this.handleClick} >add</button>
            </div>
        )
    }
}


export default Compose;