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

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin")) 
const Dashboard = lazy(() => import("./pages/admin/Dashboard")) 
const UserManagement = lazy(() => import("./pages/admin/UserManagement")) 
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement")) 
const MessagesMangement = lazy(() => import("./pages/admin/MessageManagement")) 


console.log("Chatmanagement", ChatManagement)
console.log("usermanagement", UserManagement)


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

      <Route path='/admin' element = {<AdminLogin/>}/>
      <Route path='/admin/dashboard' element = {<Dashboard/>} />
      <Route path='/admin/users' element = {<UserManagement/>} />
      <Route path='/admin/chats' element = {<ChatManagement/>} />

      <Route path='/admin/messages' element = {<MessagesMangement/>} />



      


<Route path="*" element={<NotFound/>} />

    </Routes>
   </Suspense>

    </BrowserRouter>
  )
}

export default App