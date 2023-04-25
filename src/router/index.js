import React from "react"
import { Navigate } from "react-router-dom"

const Discover = React.lazy(() => import("@/views/discover"))
const TopList = React.lazy(() => import("@/views/discover/cpns/toplist"))
const PlaList = React.lazy(() => import("@/views/discover/cpns/playlist"))
const DjRadio = React.lazy(() => import("@/views/discover/cpns/djradio"))
const My = React.lazy(() => import("@/views/my"))
const Friend = React.lazy(() => import("@/views/friend"))
const Album = React.lazy(() => import("@/views/discover/cpns/album"))
const Artist = React.lazy(() => import("@/views/discover/cpns/artist"))
const Recommends = React.lazy(() => import("@/views/discover/cpns/recommends"))
const routes = [
    {
        path:"/",
        element:<Navigate to="/discover"/>
    },
    {
        path:"/discover",
        element:<Discover/>,
        children:[
            {
                path:"/discover",
                element:<Navigate to="/discover/playlist"/>
            },
            {
                path:"/discover/recommends",
                element:<Recommends/>
            },            
            {
                path:"/discover/toplist",
                element:<TopList/>
            },
            {
                path:"/discover/playlist",
                element:<PlaList/>
            },
            {
                path:"/discover/djradio",
                element:<DjRadio/>
            }, 
            {
                path:"/discover/album",
                element:<Album/>
            }, 
            {
                path:"/discover/artist",
                element:<Artist/>
            }, 
        ]
    },
    {
        path:"/My",
        element:<My/>
    },
    {
        path:"/friend",
        element:<Friend/>
    }
]
export default routes