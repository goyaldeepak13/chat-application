import React, { lazy, Suspense } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProtectRoute from './components/auth/ProtectRoute'
import { LayoutLoader } from './components/layout/Loaders'
// import Home from './pages/Home'
const Home = lazy(() => import("./pages/Home")) // we are importing home dynamically because the default behaviour of react is that it load all the route that is define here but we want to load only one route at a time
const Login = lazy(() => import("./pages/Login")) 
const Chat = lazy(() => import("./pages/Chat")) 
const Groups = lazy(() => import("./pages/Groups")) 
const NotFound = lazy(() => import("./pages/NotFound")) 


let user = true; // basically below we pass home route in protectRoute so if user is true it will land to home page otherwise to the login page

const App = () => {
  return (
    <BrowserRouter>
   <Suspense fallback = {<LayoutLoader/>}>
   <Routes>
    <Route element = {<ProtectRoute user ={user}/>}>

      <Route path='/' element = {<Home/>}/> 
      <Route path='/chat/:chatId' element = {<Chat/>} />
      <Route path='/groups' element = {<Groups/>} />

      </Route>


      <Route path='/login' element = {
        <ProtectRoute user = {!user} redirect='/'>
          <Login/>
        </ProtectRoute>
      } />

<Route path="*" element={<NotFound/>} />

    </Routes>
   </Suspense>

    </BrowserRouter>
  )
}

export default App