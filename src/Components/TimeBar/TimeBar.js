import styles from './TimeBar.module.css'

function TimeBar({cityTime}){
    return (
        <div className={styles.timeContainer}>
            <p>{cityTime}</p>
        </div>
    )
}

export default TimeBar