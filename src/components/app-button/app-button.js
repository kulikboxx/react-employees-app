import './app-button.css';

const AppButton = ({ name, dataFilter, updateFilter, filter }) => {
    let mainClass = 'app__button';

    if (filter === dataFilter) mainClass += ' active';

    return (
        <button className={mainClass} data-filter={dataFilter} onClick={(e) => updateFilter(e)}>
            {name}
        </button>
    );
};

export default AppButton;
