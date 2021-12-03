import { Component } from 'react';
import AppButton from '../app-button/app-button';
import './app-search.css';

class AppSearch extends Component {
    render() {
        const data = {
            buttons: [
                {
                    id: 0,
                    buttonName: 'All employees',
                    dataFilter: 'all',
                },
                {
                    id: 1,
                    buttonName: 'Employee promotion',
                    dataFilter: 'promotion',
                },
                {
                    id: 2,
                    buttonName: 'Salary above 1000$',
                    dataFilter: 'above1000',
                },
            ],
        };

        const { updateSearchValue, updateFilter, searchValue, filter } = this.props;
        const btns = data.buttons.map(({ id, buttonName, dataFilter }) => (
            <AppButton key={id} name={buttonName} dataFilter={dataFilter} updateFilter={updateFilter} filter={filter} />
        ));

        return (
            <div className="app__search">
                <input
                    type="text"
                    className="app__input"
                    placeholder="Search employee"
                    onInput={updateSearchValue}
                    value={searchValue}
                />
                <div className="app__filters">{btns}</div>
            </div>
        );
    }
}

export default AppSearch;
