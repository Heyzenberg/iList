import './InputField.scss';
import { useState } from 'react';
const uuid = require('uuid');

const InputField = ({listData, setListData, saveToLocalStorage}) => {

  const [inputValue, setInputValue] = useState('');
  const uniqueId = uuid.v4();
  let data = [...listData, {
                              _id: uniqueId,
                              description: inputValue,
                              isComplited: false,
                            }
              ]
  const addTask = () => {
    if (inputValue){
      setListData(data)
      saveToLocalStorage(data)
      setInputValue('')      
    }
  }

  return (
    <div className="InputField">
        <input type="text" placeholder='Enter your task...' onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
        <div className="btnBox">
            <button onClick={addTask}>Add</button>
            <button onClick={() => setInputValue('')}>Clear</button>
        </div>
    </div>
  );
}

export { InputField };