import React from "react"
import HomePage from "../pages/home"

interface IRoute {
    component: any,
    path: string,
    name?: string,
    exact?: boolean,
    isVisible: boolean,
    order: number
}

const routesConfiguration: Array<IRoute> = [
    { order: 0, component: HomePage, path: "/", name: "Home", exact: true, isVisible: true }
]
// const Routes: Array<IRoute> = [{ order: 0, component: MoviesPage, path: "/", name: "Movies", exact: true, isVisible: true },
// { order: 1, component: ConfigurationPage, path: "/configuration", name: "configuration", isVisible: true },
// { order: 2, component: AboutPage, path: "/about", name: "about", isVisible: true },
// { order: 3, component: FavoritePage, path: "/favorites", name: "favorites", isVisible: true },
// { order: 4, component: SearchResultPage, path: "/search-result", name: "Search Result", isVisible: true },
// { order: 5, component: MoviePage, path: "/movie/:movieId", name: "Movie page? do i need it?", isVisible: false },
// { order: 6, component: () => { return <div> Not Found</div> }, isVisible: false, path: "*" }
// ];


export default function AppRouter() {
    return <div> About </div>
}