import "./ExpenseFilter.css";

function ExpenseFilter(props)
{
     function dropDownChangeHandler(event){
        props.onChangeFilter(event.target.value);

    }
    return(
        <div className="expenses-filter">
            <div className="expenses-filter-control">
                <label>Filter By year</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;