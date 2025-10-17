import React from "react"
import { Link } from "react-router-dom"
import VanDetail from "./VanDetail.jsx"

/**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */

export default function Vans() {
    const [vansData, setVansData] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans").then(res => res.json()).then(data => {
            setVansData(data.vans)
        })
    }, [])

    const vanElements = vansData.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={`/vans/${van.id}`}
                aria-label={`View details about ${van.name} priced at $${van.price} per day`}
            >
                <img src={van.imageUrl} alt={`Image of a ${van.name}`} />
                <div className="van-info">
                    <p>{van.name}</p>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>            
        </div>

    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}