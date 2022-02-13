const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client'); // Not sure what this is for yet

class App extends React.Component {

    constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
	}

	render() {
		return (
			<CalculatorFace/>
		)
	}

}

class CalculatorFace extends React.Component {
    render() {
        return (
            <div className="calc_face">
                <CalculatorOptions/>
                <CalculatorKeypad/>
            </div>
        )
    }
}

class CalculatorOptions extends React.Component {
    render() {
        return (
            <div className = "options">
                <MatrixInput/>
                <MatrixInput/>
            </div>
        )
    }
}

class MatrixInput extends React.Component {

}

class MatrixOutput extends React.Component {

}