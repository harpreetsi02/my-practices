import 'remixicon/fonts/remixicon.css'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRouter from './components/ProtectedRouter'
import Dashboard from './pages/Dashboard'
import UserDetails from './pages/UserDetails'

const App = () => {
  return(
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route
          path='/dashboard'
          element={
            <ProtectedRouter>
              <Dashboard/>
            </ProtectedRouter>
          }
          />

          <Route
            path='/user/:id'
            element={
              <ProtectedRouter>
                <UserDetails/>
              </ProtectedRouter>
            }
          />

          {/* <Route path='/user/:id' element={<UserDetails/>}/> */}
          <Route path='*' element={<Navigate to='/' replace/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App