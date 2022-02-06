const React = require('react');
const ReactDOM = require('react-dom');
// const client = require('./client'); // Not sure what this is for yet

class App extends React.Component {

    constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<EmployeeList employees={this.state.employees}/>
		)
	}

}