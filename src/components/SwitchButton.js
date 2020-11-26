import React from 'react';
import './SwitchButton.css'

const SwitchButton = props => (
<button onClick={props.click}>{props.active ? "stop" : "start"}</button>
)
export default SwitchButton