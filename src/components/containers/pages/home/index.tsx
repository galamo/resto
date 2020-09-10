import React, { useContext } from "react"
import { MoviesContext } from "../../../../App"

export default function HomePage() {
    const [state, setter] = useContext(MoviesContext);
    return <div> {JSON.stringify(state)} </div>
}