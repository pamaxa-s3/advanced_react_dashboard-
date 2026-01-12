import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
      <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>Overview</li>
          <li>Sales</li>
          <li>Users</li>
          <li>Analystics</li>
        </ul>
      </nav>
      
      <section className={styles.filters}>
      <h4>Filters</h4>
      
      <label>
      <input type='checkbox' />
      Electronics
      </label>
      
      <label>
      <input type='checkbox' />
      Clothes
      </label>
      
      <label>
      <input type='checkbox' />
      Food
      </label>
      
      </section>
      </aside>
    )
};
export default Sidebar;
