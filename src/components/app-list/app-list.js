import { Component } from 'react';
import AppListItem from '../app-list-item/app-list-item';
import './app-list.css';

class AppList extends Component {
    render() {
        const emptyListItem = <li className="app__list-item">The list is empty</li>;
        const { handleToggleStatus, handleDeleteEmployee } = this.props;
        const employees = this.props.employees.map((item) => {
            const { id, ...itemProps } = item;

            return (
                <AppListItem
                    key={id}
                    id={id}
                    {...itemProps}
                    handleToggleStatus={handleToggleStatus}
                    handleDeleteEmployee={handleDeleteEmployee}
                />
            );
        });

        return <ul className="app__list">{employees.length === 0 ? emptyListItem : employees}</ul>;
    }
}

export default AppList;
