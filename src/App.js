import React, { useState }  from 'react'
import { AgGridReact } from 'ag-grid-react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
  const [todo, setTodo] = useState({desc: '', selectedDate: '', priority: ''});
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addTodo = (event) => {
    setTodos([...todos, todo]);
    setTodo({desc: '', selectedDate: '', priority: ''});
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  const columns = [
    { field: 'desc', sortable: true, filter: true },
    { field: 'selectedDate', sortable: true, filter: true },
    { field: 'priority', sortable: true, filter: true },
  ]

 /* const handleDateChange = (date) => {
    setSelectedDate(date);
  }*/

  // <DatePicker value={selectedDate} onChange={date => Date.toDateString(setSelectedDate(date))} />

  return (
    <div className="App">
      <input name="desc" value={todo.desc} onChange={inputChanged}/>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker value={selectedDate} onChange={date => setSelectedDate(date)} />
      </MuiPickersUtilsProvider>
      <input name="priority" value={todo.priority} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
        <AgGridReact
          rowData={todos}
          columnDefs={columns}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
