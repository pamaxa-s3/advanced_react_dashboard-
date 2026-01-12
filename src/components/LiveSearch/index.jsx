import { useState, useDeferredValue, useMemo } from 'react';

import styles from './LiveSearch.module.css';

const MOCK_DATA = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  name: `Product ${i}`
}));

const LiveSearch = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    if (!deferredQuery) return [];

    return MOCK_DATA.filter((item) =>
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    ).slice(0, 10);
  }, [deferredQuery]);

  const isSearching = query !== deferredQuery;

  return (
    <section className={styles.search}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isSearching && <p>Searching…</p>}

      <ul>
        {results.map((item) => (
          <li key={item.id}>
            {item.name.replace(
              new RegExp(`(${deferredQuery})`, 'gi'),
              (match) => <mark>{match}</mark>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LiveSearch;