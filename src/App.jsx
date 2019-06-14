import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'

export default class extends Component{
    render (){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login}></Route>
                    <Route path="/admin" component={Admin}></Route>
                </Switch>
            </BrowserRouter>
            
           )
    }
}