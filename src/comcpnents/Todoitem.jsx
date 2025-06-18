import './Todoitem.css';

const TodoItem=({id, isDone, content, date, onUpdate, onDlete})=>{

    const onChangeCheckbox = ()=>{
        onUpdate(id);
    }
    const onClickButton = ()=>{
        onDlete(id);
    }
    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
            <div  className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}
            </div>
            <button onClick={onClickButton}>삭제</button>
        </div>
    );
};

export default TodoItem;