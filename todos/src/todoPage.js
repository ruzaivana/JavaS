import React, { Component } from "react";
import Compose from "./compose";
import TodoList from "./todoList";

class TodoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        }
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onRemoveHandler = this.onRemoveHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
    }

    onAddHandler(value) {
        let oldItems = this.state.todoItems;
        oldItems.push({
            value: value,
            completed: false
        });
        this.setState({
            todoItems: oldItems
        });
    }



    onRemoveHandler(item) {
        let oldItems = this.state.todoItems;

        // izvadim vrednost item iz niza oldItems
        let index = oldItems.indexOf(item);
        oldItems.splice(index, 1);
        this.setState({
            todoItems: oldItems
        });
    }


    selectHandler(item) {
        let oldItems = this.state.todoItems;

        // izvadim vrednost item iz niza oldItems
        let index = oldItems.indexOf(item);
        oldItems[index].completed = !oldItems[index].completed;

        // let oldItems = this.state.todoItems;
        this.setState({
            todoItems: oldItems
        })


    }

    render() {
        return (
            <div>
                <Compose onAdd={this.onAddHandler} onPress={this.onPressHandler} />
                <TodoList items={this.state.todoItems} removeItem={this.onRemoveHandler} selectItem={this.selectHandler} />
            </div>
        )
    }
}

export default TodoPage;