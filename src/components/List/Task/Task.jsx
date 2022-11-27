import './Task.scss';
import { useState } from 'react';
import { BsCheckLg, BsPencilFill, BsFillTrashFill, BsSaveFill, BsThreeDotsVertical } from 'react-icons/bs';
import { ConfirmWindow } from './ConfirmWindow/ConfirmWindow';

const Task = ({ listData, setListData, id, description, isComplited, saveToLocalStorage, deleteFromLocalStorage }) => {

    const [btnState, setBtnState] = useState(false);
    const changeState = () => {
        setBtnState(btnState => !btnState);
    }
    let toggle = (btnState ? 'active' : '');

    const complitedTask = (id) => {
        let clone = [...listData].filter(el => {
            if(el._id === id){
                el.isComplited = !el.isComplited;
            }
            return el
        }
        )
        saveToLocalStorage(clone)
        setListData(clone);
    }

    const [confirm, setConfirm] = useState(false);
    const confirmRemoveTask = () => {
        setConfirm(true)
    }

    const removeTask = (id) => {
        let clone = [...listData].filter(el => el._id !== id);
        deleteFromLocalStorage(clone);
        setListData(clone);

    }

    const [edit, setEdit] = useState(null);
    const [defValue, setDefValue] = useState('');
    const editTask = (id, description) => {
        setEdit(id)
        setDefValue(description)
    }
    const saveTask = (id) => {
        let clone = [...listData].map(item => {
            if (item._id === id){
                item.description = defValue
            }
            return item
        })
        saveToLocalStorage(clone)
        setListData(clone)
        setEdit(null)
    }

    return (
        <div className="Task">
            <div className="textField">
                {edit === id ? <div className='editField'>
                                    <input onChange={(e) => setDefValue(e.target.value)} value={defValue} />
                                </div>
                            :
                                <p className={isComplited ? 'complited' : ''}>{description}</p>}
            </div>
            {edit === id ? <div className='saveBtn' onClick={() => saveTask(id)}><BsSaveFill /></div>
                    :
                <div id="settings" onClick={changeState} className={toggle}>
                    <BsThreeDotsVertical />
                    <div className="options">
                        <div className="btn" onClick={() => complitedTask(id)}>
                            <BsCheckLg />
                        </div>
                        <div className="btn" onClick={() => editTask(id, description)}>
                            <BsPencilFill />
                        </div>
                        <div className="btn" onClick={confirmRemoveTask}>
                            <BsFillTrashFill />
                        </div>
                    </div>
                </div>            
            }
            <ConfirmWindow id={id}
                        removeTask={removeTask}
                        confirm={confirm}
                        setConfirm={setConfirm} />
        </div>
    );
}

export { Task };