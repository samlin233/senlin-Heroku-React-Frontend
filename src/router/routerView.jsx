import React, { Suspense } from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import Wrong from '../views/PgWrong'//404页面
function RouterView(props) {
    let routers = props.routers ? props.routers : props.routerList
    const defaultRouter = <Route path="/" component={() => {
        return <Redirect to="/home" key={22}/>
    }} key={22} exact/>
    return (
        <BrowserRouter>
            <Suspense fallback={<div></div>}>
                <Switch>
                    {
                        routers.map((item, index) => {
                            const Comp = item.component
                            return <Route path={item.path} exact={item.exact} component={(routers) => {
                                return <Comp route={item.children} {...routers}></Comp>
                            }} key={index}/>
                        }).concat(defaultRouter)
                    }

                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default RouterView