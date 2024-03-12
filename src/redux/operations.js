import {
    ADD_TODO,
    DELETE_ALL,
    REMOVE_TODO,
    UPDATE_TODO
} from "./actionsTypes";

const initialState = [
    { id: 1, todo: 'Купить помидоры' },
    { id: 2, todo: 'Проверить ящик' },
    { id: 3, todo: 'Позвонить мебельщику' },
    { id: 4, todo: 'купить тортик'}
];

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_ALL:
            return [];

        case REMOVE_TODO:
            return state.filter((item) => item.id !== action.payload);

            case UPDATE_TODO:
                let data = action.payload;
                const updatedArray=[];
                state.map((item)=> {
                    if(item.id===data.id){
                        item.id = data.id;
                        item.todo = data.todo;
                    }
                    updatedArray.push(item);
                })
                return updatedArray; 

        default:
            return state;
    }
};
