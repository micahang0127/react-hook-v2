import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Form.css';
import { addTodo } from '../../actions';

class Form extends Component {
    state = {
        input: ''
    };

    //Event Handler 메서드 선언
    handleChange = (e) => {
        this.setState({
            input: e.target.value // input 의 다음 바뀔 값
        });
    };
    handleCreate = () => {
        const { input } = this.state;
        const todo = {
            text: input,
            checked: false
        }
        //action생성함수 호출
        this.props.addTodo(todo);

        this.setState({
            input: '' // input 초기화
       });
    };
    handleKeyPress = (e) => {
        // 눌려진 키가 Enter 이면 handleCreate 호출
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    };

    render() {
        const { input } = this.state;
        const { handleChange, handleCreate, handleKeyPress } = this;
        return (
            <div className="form">
                <input value={input} onChange={handleChange}
                    onKeyPress={handleKeyPress} />
                <div className="create-button" onClick={handleCreate}>
                    추가
                </div>
            </div>
        );
    }
}

export default connect(null,{addTodo})(Form);