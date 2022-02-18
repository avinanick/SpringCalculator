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
                <MatrixOutput/>
            </div>
        )
    }
}

class CalculatorOptions extends React.Component {
    // This is currently only being used for multiplication, so the
    // options don't actually do anything yet. Should I get the matrix
    // dimensions here or in the matrix input component
    constructor(props) {
		super(props);
		this.state = {};
	}

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

    constructor(props) {
        super(props);
        this.state = {width: 0,
                height: 0,
                inputs: []}
        this.state.inputs = new Array(this.state.width);
        for (let i = 0; i < this.state.width; i++) {
            this.state.inputs[i] = new Array(this.state.height);
        }
    }

    render() {
        const inputsDisplay = [];

        for (let i = 0; i < this.state.height; i++) {
            const row = [];
            for (let j = 0; j < this.state.width; j++) {
                row.push(<div className="matrix_item">{this.state.inputs[i][j]}</div>);
            }
            inputsDisplay.push(<div className="matrix_row">{row}</div>);
        }

        return (
            <div className = "matrix_input">
                {inputsDisplay}
            </div>
        )
    }
}

class MatrixOptions extends React.Component {

    constructor(props) {

    }

    render() {
        return (
            <div className = "matrix_options"></div>
        )
    }
}

class MatrixOutput extends React.Component {

}