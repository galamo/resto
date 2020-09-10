import React, { useContext } from "react"
import { MoviesContext } from "App"

export default function ReportsPage() {
    const [state, setter] = useContext(MoviesContext);
    return <div> ReportsPage
        <button onClick={() => { setter({ ...state, movies: [...state.movies, "movieee"] }) }}> add movie </button>
    </div>
}