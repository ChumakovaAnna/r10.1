import { useSelector, useDispatch } from 'react-redux';
import { TrashIcon, EditIcon } from './Icons';
import { removeTodo } from '../redux/actionsCreator';

export default function ServicesList({ handleEditClick, editFormVisibility }) {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.operationsReducer);

    return services.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                <p>{todo.todo}</p>
            </div>
            <div className='actions-box'>
                {editFormVisibility === false && (
                    <>
                        <span onClick={() => handleEditClick(todo)}><EditIcon /></span>
                        <span onClick={() => dispatch(removeTodo(todo.id))}><TrashIcon /></span>
                    </>
                )}
            </div>
        </div>
    ))
};