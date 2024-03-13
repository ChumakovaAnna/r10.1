import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/actionsCreator';
import Button from 'react-bootstrap/Button';


export default function Form({ editFormVisibility, editTodo, cancelUpdate }) {
    const dispatch = useDispatch();
    const [serviceValue, setServiceValue] = useState('');
    const [editValue, setEditValue] = useState('');

    useEffect(() => {
        setEditValue(editTodo.todo);
    }, [editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let todoObj = {
            id: nanoid(),
            todo: serviceValue,
            completed: false
        };
        dispatch(addTodo(todoObj));
        setServiceValue('');
    };

    const editSubmit = (e) => {
        e.preventDefault();
        let editedObj = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        dispatch(handleEditSubmit(editedObj));
        cancelUpdate();
    }

    return (

        <div className='form'>
            {editFormVisibility === false ? (
                <form
                    className='form-group custom-form'
                    onSubmit={handleSubmit}
                >
                    <div className='input-and-btn'>
                        <input
                            className='form-control'
                            type='text'
                            required
                            value={serviceValue}
                            onChange={(e) => setServiceValue(e.target.value)}
                        />
                        <Button variant="outline-success" type='submit' size='sm'>сохранить</Button>
                    </div>
                </form>
            ) : (
                <form
                    className='form-group custom-form'
                    onSubmit={editSubmit}
                >
                    <label>Обновить</label>
                    <div className='input-and-btn'>
                        <input
                            className='form-control'
                            type='text'
                            required
                            value={editValue || ''}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                        <Button variant="outline-success" type='submit'>
                            Обновить
                        </Button>
                    </div>
                    <Button variant="outline-primary" type='submit'
                        onClick={cancelUpdate}>отменить</Button>
                </form>
            )}
        </div>
    )
};
