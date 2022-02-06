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
                <CalculatorDisplay/>
                <CalculatorKeypad/>
            </div>
        )
    }
}

class CalculatorDisplay extends React.Component {
    
}

class CalculatorKeypad extends React.Component {

}

class CalculatorButton extends React.Component {

}