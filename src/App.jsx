import styles from "./App.module.scss";
import Header from "./containers/Header/Header";

function App() {
    return (
        <div className={styles.App}>
            <Header />
        </div>
    );
}

export default App;
