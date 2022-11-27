import './App.scss';
import React from 'react';
import { Header } from './components/Header/Header';
import { InputField } from './components/InputField/InputField';
import { List } from './components/List/List';

const App = () => {

  const [listData, setListData] = React.useState([]);

  const getLocalTasks = () => {
    if (localStorage.getItem('myTasks') === null) {
      localStorage.setItem('myTasks', JSON.stringify([]));
    } else {
      let localTasck = JSON.parse(localStorage.getItem('myTasks'));
      setListData(localTasck)
    }
  }
  React.useEffect(() => {
    getLocalTasks(listData)
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('myTasks', JSON.stringify(data));
  }

  const deleteFromLocalStorage = (data) => {
    localStorage.setItem('myTasks', JSON.stringify(data));
  }

  return (
    <div className="App">
      <Header />
      <List 
            listData={listData}
            setListData={setListData}
            saveToLocalStorage={saveToLocalStorage}
            deleteFromLocalStorage={deleteFromLocalStorage} />
      <InputField listData={listData}
                  setListData={setListData}
                  saveToLocalStorage={saveToLocalStorage} />
    </div>
  );
}

export { App };
