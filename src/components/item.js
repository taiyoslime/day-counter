import React, { PropTypes } from 'react'

const Item = ({ add_onClick, delete_onClick, name, day }) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item
