import React, { Component } from "react";

class TheItem extends Component {
    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
        this.selectItem = this.selectItem.bind(this);

    }

    selectItem() {
        this.props.selectItem(this.props.item)
    }

    removeItem() {
        this.props.removeItem(this.props.item);
    }


    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.item.completed} onClick={this.selectItem}

                // this.props.item.completed = !this.props.item.completed;
                // console.log(this.props.item.completed)
                />
                {this.props.item.completed ? "done" : "not done"}
                <p>{this.props.item.value}</p>
                <button type="button" onClick={this.removeItem}>x</button>
            </div>
        )
    }


}

export default TheItem;