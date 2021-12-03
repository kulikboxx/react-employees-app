import { Component } from 'react';

import './app-company.css';

class AppCompany extends Component {
    render() {
        const title = 'Accounting of employees in the company TAX';
        const totalText = 'Total number of employees';
        const bonusText = 'Cash bonus will receive';
        const { employees } = this.props;

        const allCashBonus = employees.filter((item) => item.cashBonus);

        return (
            <div className="app__company">
                <h1 className="app__title">{title}</h1>
                <p className="app__total">
                    {totalText}: {employees.length}
                </p>
                <p className="app__bonus">
                    {bonusText}: {allCashBonus.length}
                </p>
            </div>
        );
    }
}

export default AppCompany;
