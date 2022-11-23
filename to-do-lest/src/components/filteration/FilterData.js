
const FilterData = ({ HandleSearch, wordSearch }) => {

    return (


        <div>


            <input
                className="form-control"
                type={'search'}
                placeholder="Search..."
                onChange={(e) => HandleSearch(e.target.value)}
                value={wordSearch}


            />

        </div>
    )
}

export default FilterData
