import React, { Component } from "react";
import Compose from "./compose";
import TodoPage from "./todoPage";
import TheItem from "./theItem";


//  var filterItems = function(item) {
//         if (item.completed === true) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     function filterItems2(item) {
//         if (item.completed === true) {
//             return true;
//         } else {
//             return false;
//         }
//     }



class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentItems: this.props.items
        }

        this.removeItem = this.removeItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.showAll = this.showAll.bind(this);
        this.showActive = this.showActive.bind(this);
        this.showCompleted = this.showCompleted.bind(this);
    }



    selectItem(item) {
        this.props.selectItem(item);
    }

    removeItem(item) {
        this.props.removeItem(item);
    }


    showAll() {
        this.setState({
            currentItems: this.props.items
        })

    }

    showActive() {
        let allItems = this.props.items;
        let active = allItems.filter((item) => !item.completed);
        this.setState({
            currentItems: active
        })

    }

    // filterItems(item){
    //     if (item.completed === true) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }


    showCompleted() {
        let allItems = this.props.items;
        
        //let completed = allItems.filter((item)=> item.completed);

        let completed = allItems.filter(function (item) {
            if (item.completed === true) {
                return true;
            } else {
                return false;
            }
        });

        //let completed = allItems.filter(this.filterItems);

        // let completed = allItems.filter((item) => {
        //     // moze da se pise jos naredbi
        //     return item.completed;
        // });

        this.setState({
            currentItems: completed
        })
    }



    render() {
        return (
            <div>
                <ul>
                    {this.state.currentItems.map((item, index) => {
                        return <li><TheItem item={item} removeItem={this.removeItem} selectItem={this.selectItem} /></li>
                    })}
                </ul>
                <div>
                    <button onClick={this.showAll}>All</button>
                    <button onClick={this.showActive}>Active</button>
                    <button onClick={this.showCompleted}>Completed</button>
                </div>
            </div>
        )
    }

}


export default TodoList;