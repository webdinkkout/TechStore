import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <DefaultLayout>
              <Home></Home>
            </DefaultLayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
