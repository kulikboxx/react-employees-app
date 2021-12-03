import { Component } from 'react';

import './app-add-employee.css';

class AppAddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }

    onInputUpdateState = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name && this.state.salary) {
            if (this.props.handleAddEmployee(this.state)) {
                this.setState({ name: '', salary: '' });
            }
        }
    };

    render() {
        const { name, salary } = this.state;
        const title = 'Add new employee';
        const btnName = 'Add';

        return (
            <form className="app__add-employee" onSubmit={this.onSubmit}>
                <h2 className="app__title">{title}</h2>
                <input
                    type="text"
                    className="app__input"
                    name="name"
                    placeholder="Enter employee name"
                    onInput={this.onInputUpdateState}
                    value={name}
                />
                <input
                    type="number"
                    className="app__input"
                    name="salary"
                    placeholder="Enter employee salary"
                    min="0"
                    onInput={this.onInputUpdateState}
                    value={salary}
                />
                <button className="app__button">{btnName}</button>
            </form>
        );
    }
}

export default AppAddEmployee;
