import './App.css';
import {useState} from "react";
import {createRandomArray} from "./fillArrayWithNumbers";
import {sortMatrix} from "./sortMatrix";

function App() {
    const [matrix, setMatrix] = useState([])
    const [sortingTime, setSortingTime] = useState(0)
    const [swapsCount, setSwapsCount] = useState(0)
    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');

    const onBlur = () => {
        if (rows !== '' && columns !== '') setMatrix(createRandomArray(rows, columns))
    }

    const onRowsChange = (event) => {
        setRows(event.target.value)
    }

    const onColumnsChange = (event) => {
        setColumns(event.target.value)
        if (rows !== '') setMatrix(createRandomArray(rows, columns))
    }

  return (
    <div className="App">
        <div className="app__container">
            <h1 className="app__title">The Matrix</h1>
            <div className="app__form">
                        <div className="app__form-fields-container">
                            <div className="app__field">
                                <input type="number" value={rows} placeholder="Rows" onChange={onRowsChange} onBlur={onBlur} min="0" name="rows"/>
                            </div>
                            <div className="app__field">
                                    <input type="number" value={columns} placeholder="Columns" onChange={onColumnsChange} onBlur={onBlur} min="0" name="columns"/>
                            </div>
                        </div>
                        <button className="app-submit" type="button" onClick={() => {
                            const sorting = sortMatrix(matrix)
                            setMatrix([...sorting.result])
                            setSortingTime(sorting.sortingTime)
                            setSwapsCount(sorting.swapsCount)
                        }}>Sort my matrix</button>
            </div>
            <div className="app__matrix">
                {
                    !matrix.length
                        ?
                        <p className="app__matrix-message">Please, generate your matrix</p>
                        :
                    matrix.map((row, i) => (
                    <div className="app__matrix-row" key={i}>
                        {row.map((col, j) => (
                            <span className="app__matrix-element" key={j}> {col} </span>
                        ))}
                    </div>
                ))}
            </div>
            <div className="app__performance-info">
                <p>Sorting the matrix took: {sortingTime} ms</p>
                <p>Swaps count: {swapsCount}</p>
            </div>
        </div>
    </div>
  );
}

export default App;
