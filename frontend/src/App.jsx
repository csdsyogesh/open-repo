import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'
import SearchBook from './components/SearchBook'
import UpdateBook from './components/UpdateBook'
import DeleteBook from './components/DeleteBook'
import './App.css'
const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/add">Add Book</Link>
          <Link to="/view">View Book</Link>
          <Link to="/search">Search Book</Link>
          <Link to="/update">Update Book</Link>
          <Link to="/delete">Delete Book</Link>
        </nav>
        <Routes>
          <Route path='/add' element={<AddBook/>} />
          <Route path='/view' element={<ViewBook/>} />
          <Route path='/search' element={<SearchBook/>} />
          <Route path='/update' element={<UpdateBook/>} />
          <Route path='/delete' element={<DeleteBook/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App