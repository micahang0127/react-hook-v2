import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoItem.css';
import { removeTodo, toggleTodo } from '../../actions';

class TodoItem extends Component {
    /*
        scu 메서드가 rendering 생략할 수 있는 조건을 반환
        true이면(checked 값에 변동이 있음) render() 메서드가 다시 호출됨
        false이면(checked 값에 변동이 없음) render() 메서드가 다시 호출되지 않음
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    //event handler
    handleRemove = (id) => {
        //action 생성함수 호출
        this.props.removeTodo(id);
    };
    handleToggle = (todo) => {
        //action 생성함수 호출
        this.props.toggleTodo(todo);
    }

    render() {
        const { text, checked, id } = this.props;
        const { handleRemove, handleToggle } = this;

        return (
            <div className="todo-item" onClick={() => {
                const todo = {id, text, checked};
                todo.checked = !todo.checked;
                handleToggle(todo);
            }}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // myToggle 이 실행되지 않도록 함
                    handleRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}
export default connect(null,{removeTodo, toggleTodo})(TodoItem);