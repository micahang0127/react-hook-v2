import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchAllTodos } from '../../actions';

class TodoItemList extends Component {
    /*
      lifecycle method
      render() 호출 후에 호출되어짐
      서버와 http 통신을 하는 action 함수 호출하기
    */ 
    componentDidMount() {
        this.props.fetchAllTodos();        
    }
    
    /*
        lifecycle method
        scu 메서드가 rendering 생략할 수 있는 조건을 반환
        true이면(todos에 변동이 있음) render() 메서드가 다시 호출됨
        false이면(todos에 변동이 없음) render() 메서드가 다시 호출되지 않음
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const { todos } = this.props;
        const todo_list = todos.map(({id,text,checked}) => 
            (<TodoItem 
                id={id} text={text} checked={checked} key={id}
            />));
        return (
            <div>
                {todo_list}
            </div>
        );
    }
}

export default connect(
    (state) => ({todos: state.todos}),
    {fetchAllTodos}
    )(TodoItemList);