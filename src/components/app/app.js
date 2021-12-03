import { Component } from 'react';
import AppCompany from '../app-company/app-company';
import AppAddEmployee from '../app-add-employee/app-add-employee';
import AppSearch from '../app-search/app-search';
import AppList from '../app-list/app-list';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            value: '',
            filter: 'all',
        };

        this.numId = 0;
    }

    handleAddEmployee = ({ name, salary }) => {
        this.setState(({ employees }) => ({
            employees: employees.concat({ id: this.numId, name, salary, cashBonus: false, promotion: false }),
        }));

        this.numId++;
        return true;
    };

    handleDeleteEmployee = (id) => {
        this.setState(({ employees }) => ({
            employees: employees.filter((item) => item.id !== id),
        }));
    };

    handleToggleStatus = (id, key) => {
        const employees = [...this.state.employees],
            index = employees.findIndex((item) => item.id === id);

        employees[index][key] = !employees[index][key];
        this.setState({ employees });
    };

    updateSearchValue = (e) => {
        this.setState({ value: e.target.value });
    };

    searchItems = (array, value) => {
        if (array.length === 0) return array;
        return array.filter((item) => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    };

    updateFilter = (e) => {
        this.setState({ filter: e.currentTarget.getAttribute('data-filter') });
    };

    filterItems = (array, filter) => {
        switch (filter) {
            case 'promotion':
                return array.filter((item) => item.promotion);
            case 'above1000':
                return array.filter((item) => item.salary > 1000);
            default:
                return array;
        }
    };

    render() {
        const { employees, value, filter } = this.state;
        const employeesList = this.filterItems(this.searchItems(employees, value), filter);

        return (
            <div className="app">
                <div className="app__wrapper">
                    <AppCompany employees={employees} />
                    <AppAddEmployee handleAddEmployee={this.handleAddEmployee} />
                    <AppSearch
                        updateSearchValue={this.updateSearchValue}
                        updateFilter={this.updateFilter}
                        searchValue={value}
                        filter={filter}
                    />
                    <AppList
                        employees={employeesList}
                        handleToggleStatus={this.handleToggleStatus}
                        handleDeleteEmployee={this.handleDeleteEmployee}
                    />
                </div>
            </div>
        );
    }
}

export default App;
