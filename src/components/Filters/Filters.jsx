import SearchFilter from './SearchFilter';

const Filters = ({ search, onSearchChange }) => {
  return (
    <section>
      <SearchFilter
        value={search}
        onChange={onSearchChange}
      />
    </section>
  );
};

export default Filters;