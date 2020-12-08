import React from 'react'
export default {
    config: [
        {
            path: "/Home",
            component: React.lazy(() => import('../components/Home')),
            exact: false
        },
        {
            path: "/posts/:id",
            component: React.lazy(() => import('../components/PostShow')),
            exact: false
        },
        {
            path: "/",
            component: React.lazy(() => import('../components/TestHome')),
            exact: false
        },
        {
            path: "/CreatNewPost",
            component: React.lazy(() => import('../components/CreatNewPost')),
            exact: false
        },
        {
            path: "/RegisterPage",
            component: React.lazy(() => import('../components/RegisterPage')),
            exact: false
        },
        {
            path: "/LoginPage",
            component: React.lazy(() => import('../components/LoginPage')),
            exact: false
        },
        {
            path: "/HospitalSearch",
            component: React.lazy(() => import('../components/HotpitalSearch')),
            exact: false
        },
        {
            path: "/UserProfile",
            component: React.lazy(() => import('../components/UserProfile')),
            exact: false
        },
        {
            path: "/UserProfileForm",
            component: React.lazy(() => import('../components/UserProfileForm')),
            exact: false
        },
        {
            path: "/Surgery",
            component: React.lazy(() => import('../view/Surgery/index')),
            exact: false
        }
    ]
}