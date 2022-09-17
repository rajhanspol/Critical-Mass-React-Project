import { useEffect, useRef } from 'react'
import styles from './NavBar.module.css'

function NavBar({cityData, selected, markerPosition, markerWidth, onCityClick}){

    const listRef = useRef()

    useEffect(() => {
        onCityClick(listRef.current.children[0], 0)
    },[])

    let cityList = cityData.cities.map((data, idx) => {
        return (
            <li
            key={data.section}
            onClick={(e) => onCityClick(e.target, idx, data.timeZone)}
            className={selected === idx? styles.selected : styles.unSelected}
            >{data.label}</li>
        )
    })

    return (
        <nav className={styles.navigation}>
            <ul ref={listRef} className={styles.listContainer}>
                {cityList}
            </ul>
            <div 
            className={styles.marker}
            style={{marginLeft: `${markerPosition}px`, width: `${markerWidth}px`}}
            ></div>
        </nav>
    )
}

export default NavBar