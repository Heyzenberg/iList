import './List.scss';
import { Task } from './Task/Task';

const List = ({ listData, setListData, saveToLocalStorage, deleteFromLocalStorage }) => {
  return (
    <div className="List">
      {
        listData.map(item => <Task key={item._id}
                                  listData={listData}
                                  setListData={setListData}
                                  id={item._id}
                                  description={item.description}
                                  isComplited={item.isComplited}
                                  saveToLocalStorage={saveToLocalStorage}
                                  deleteFromLocalStorage={deleteFromLocalStorage} />)
      }
        
    </div>
  );
}

export { List };