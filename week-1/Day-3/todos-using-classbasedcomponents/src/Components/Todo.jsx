import React from "react";

class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todo:[],
            query:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        // this.getTodo = this.getTodo.bind(this)
        // we can use arrow function to neglect this keyword
    }
    com
    handleAdd(){
        this.setState({
            todo:[...this.state.todo, this.state.query]
        }, () => this.props.handleGetData(this.state.todo))
    }
    handleChange(e){
            this.setState({
            query:e.target.value
        })
    }
    // getTodo(){
    //     axios.get("")
    //     .then(res =>{
    //         this.setState({
    //             todo:[...this.state.todo, res]
    //         })
    //     })
    // }
    // componentDidMount(){
    //     this.getTodo()
    // }
    render(){
        return (
            <>
            <h1>Todo List</h1>
            <h2>{this.props.title}</h2>
            <input type="text" value={this.state.query} onChange={(e) => this.handleChange(e)}/>
            <button onClick={this.handleAdd}>Add Todos</button>
            </>
        )
    }
}

export default Todo