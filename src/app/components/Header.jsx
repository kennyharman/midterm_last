import styles from "./Header.module.css";

export default function Header({ loading, fetchData }) {
    return (
        <header className={styles.headerContainer}>
            <img src={"/images/dogheader.png"} alt="black dog" className={styles.headerPic}/>
            <div className={styles.headerInnerContainer}>
                <h1>Dogs are cute!</h1>
                <h2>MDIA-3126 Midterm API Fetching</h2>
                <p>Click on the button below to fetch some cute dogs from TheDogAPI. <br/>This will fetch dog images, as well as breeds and facts when available, and display them below. 🐕</p>
                <button className={styles.button} disabled={loading} onClick={fetchData}>
                    {loading ? "Loading..." : "Click for cute dogs"}
                </button>
            </div>
        </header>
    );
}