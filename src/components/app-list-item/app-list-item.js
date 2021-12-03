import './app-list-item.css';

const AppListItem = (props) => {
    const { id, name, salary, promotion, cashBonus, handleToggleStatus, handleDeleteEmployee } = props;

    let mainClass = 'app__list-item';

    if (cashBonus) mainClass += ' cash-bonus';
    if (promotion) mainClass += ' promotion';

    return (
        <li className={mainClass}>
            {name}
            <div className="app__content">
                <span className="app__salary">{salary + '$'}</span>
                <div className="app__tools">
                    <button className="app__tool cash-bonus" onClick={() => handleToggleStatus(id, 'cashBonus')}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button className="app__tool promotion" onClick={() => handleToggleStatus(id, 'promotion')}>
                        <i className="fas fa-star"></i>
                    </button>
                    <button className="app__tool delete" onClick={() => handleDeleteEmployee(id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default AppListItem;
