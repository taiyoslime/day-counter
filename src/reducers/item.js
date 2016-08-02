import * as ACTION from '../constants/ActionTypes'

const initialState = [{
	id:5,
	name:"hoahoa",
	day:5
}]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ACTION.ADD_ITEM:
            return [{
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
					name: action.name,
                    day: action.day
                },
                ...state
            ]

        case ACTION.DELETE_ITEM:
            return state.filter(e =>
                e.id !== action.id
            )

        case ACTION.MODIFY_ITEM:
            return state.map(e =>
                e.id === action.id ?
                Object.assign({}, e, {
                    name: action.name,
					day: action.day
                }) : e
            )

        default:
            return state
    }
}
