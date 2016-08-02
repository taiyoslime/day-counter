import React, {Component,PropTypes} from 'react'
//import Header from './Header'
import Item from './Item'

import styles from './stylesheets/Main.css';
import module from 'react-css-modules';

class Main extends Component {
	constructor(props, context) {
    	super(props, context)
  }

    render() {
        const { item, actions } = this.props;
		return (
			<div>
				<ul>
					{item.map(el => <Item item={el} {...actions} />)}_
				</ul>
			</div>
		)
    }
}


Main.propTypes = {
    item: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

export default module(Main,styles);
