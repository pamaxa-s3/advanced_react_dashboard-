// import { NavLink } from "react-router-dom";

// const Header = () => {
//     return (
//         <nav>
//             <NavLink to="/">Home</NavLink>
//             {" | "}
//             <NavLink to="/users">Users</NavLink>
//             {" | "}
//             <NavLink to="/users/:id">User</NavLink>
//             {" | "}
//             <NavLink to="/users/new">Create new user</NavLink>
//         </nav>
//     );
// };

// export default Header;

import { useId, useState, useTransition, use } from 'react';
import { ThemeContext } from '@contexts';
import cls from './Header.module.css';

const PERIODS = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' },
];

const Header = () => {
    const { theme, toggleTheme } = use(ThemeContext);

    const selectId = useId();
    const [period, setPeriod] = useState('week');

    const [isPending, startTransition] = useTransition();

    const handlePeriodChange = (e) => {
        const nextPeriod = e.target.value;

        startTransition(() => {
            setPeriod(nextPeriod);
            // тут пізніше підʼєднаємо оновлення даних
        });
    };

    const handleRefresh = () => {
        startTransition(() => {
            // mock refresh
            console.log('Refreshing data for period:', period);
        });
    };

    return (
        <header className={cls.header}>

            {/* LEFT */}
            <div className={cls.left}>
                <h1 className={cls.logo}>Analytics Dashboard</h1>
            </div>

            {/* CENTER */}
            <div className={cls.center}>
                <label htmlFor={selectId} className={cls.label}>
                    Period
                </label>

                <select
                    id={selectId}
                    value={period}
                    onChange={handlePeriodChange}
                    className={cls.select}
                >
                    {PERIODS.map(p => (
                        <option key={p.value} value={p.value}>
                            {p.label}
                        </option>
                    ))}
                </select>

                <button
                    className={cls.refreshBtn}
                    onClick={handleRefresh}
                >
                    Refresh
                </button>
            </div>

            {/* RIGHT */}
            <div className={cls.right}>
                <button
                    className={cls.themeToggle}
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? '🌞' : '🌙'}
                </button>

                {isPending && (
                    <span className={cls.loading}>Loading...</span>
                )}

            </div>
        </header>
    );
};

export default Header;



