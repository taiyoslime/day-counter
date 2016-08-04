import React, { Component ,PropTypes} from 'react'
import styles from './stylesheets/Item.css';
import module from 'react-css-modules';

class Item extends Component{
	constructor(props, context) {
		super(props, context)
  	}
	render(){
		const { item, actions } = this.props;
		return (
			<li>{item.id}：{item.name}：{item.day}</li>
		)
	}
}

export default module(Item,styles);
