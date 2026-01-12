import {Outlet, useNavigation} from 'react-router-dom'
import {useContext, useId} from 'react'
import {ThemeContext} from '@contexts/ThemeContext'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './DashboardLayout.module.css'

const DashboardLayout = () => {
  const {state} = useNavigation()
  const {theme} = useContext(ThemeContext)
  
  const layoutId = useId()
  const isLoading = state === 'loading' || state === 'submitting'
  
  return (
    <div
    className={`${styles.layout} ${styles[theme]}`}
    aria-busy={isLoading}
    aria-describedby={layoutId}
    >
    <Header loading={isLoading} />
    <div className={styles.body}>
    <Sidebar />
    
    <main className={styles.main} id={layoutId}>
    <Outlet />
    </main>
    </div>
    </div>
    )
}

export default DashboardLayout