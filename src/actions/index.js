import * as ACTION from '../constants/ActionTypes'

export function addItem(name, day){
	return { type: ACTION.ADD_ITEM, name, day};
}

export function modifyItem(id, name, day){
	return { type: ACTION.MODIFY_ITEM, id, name, day}
}

export function deleteItem(id){
	return { type: ACTION.DELETE_ITEM, id}
}
