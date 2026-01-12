import { useContext, useId } from "react";
import { ThemeContext } from "@contexts/ThemeContext";

import styles from "./Header.module.css";

const Header = ({ loading }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const themeToggle = useId();

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <h1>Analytics Dashboard</h1>
            </div>

            <div className={styles.right}>
                <div className={styles.periods}>
                    <button>Today</button>
                    <button>Week</button>
                    <button>Month</button>
                    <button>Year</button>
                </div>

                <label htmlFor={themeToggle} className={styles.toggle}>
                    Theme
                </label>
                <input
                    id={themeToggle}
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                {loading && <span className={styles.loading}>Updating...</span>}
            </div>
        </header>
    );
};

export default Header;
