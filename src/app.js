import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// import 'semantic-ui-css/semantic.min.css';
import './styles/styles.scss'
const StatelessComp = (props) => {
    return (
        <div>
            This is a state less component : {props.name}
        </div>
    )
}

StatelessComp.defaultProps = {
    name : "State Default"
}

ReactDOM.render( <App>This is Something default</App>, document.getElementById('app'))
