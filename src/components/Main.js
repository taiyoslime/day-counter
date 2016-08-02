import React, {Componet,PropTypes} from 'react'
import Header from './Header'
import Items from './Items'

import styles from './stylesheets/Main.css';
import module from 'react-css-modules';

class Main extends Componet {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { item, actions } = this.props;

		return (
			<div>
				<Header />
				<Items />
			</div>
		)
    }
}


Main.propTypes = {
    item: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

export default module(Main,styles);
