
import React from 'react'
export default {
    config: [
        {
            path: "/initHome",
            component: React.lazy(() => import('../components/TestHome')),
            exact: false
        },
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
            path: "/TestHome",
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
            component: React.lazy(() => import('../view/Surgery')),
            exact: false
        },
        {
            path: "/SurgeryDetail",
            component: React.lazy(() => import('../view/SurgeryDetail')),
            exact: false
        },
        {
            path: "/Hospital",
            component: React.lazy(() => import('../view/Hospital')),
            exact: false
        },
        {
            path: "/PostDetail",
            component: React.lazy(() => import('../view/PostDetail')),
            exact: false
        },
        {
            path: "/HospitalDetail",
            component: React.lazy(() => import('../view/HospitalDetail')),
            exact: false
        },
        {
            path: "/Search",
            component: React.lazy(() => import('../view/Search')),
            exact: false
        },
        {
            path: "/UserProfile",
            component: React.lazy(() => import('../components/UserProfile')),
            exact: false
        }
    ]
}