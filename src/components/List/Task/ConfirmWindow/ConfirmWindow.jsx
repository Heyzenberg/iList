import './ConfirmWindow.scss';

const ConfirmWindow = ({id, removeTask, confirm, setConfirm}) => {
    return(
        <div className={confirm === true ? 'ConfirmWindow show' : 'ConfirmWindow'}>
            <div className="sectionChoice">
                <p>Are you sure?</p>
                <div className="sectionBtn">
                    <button onClick={() => removeTask(id)}>OK</button>
                    <button onClick={() => setConfirm(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export { ConfirmWindow };