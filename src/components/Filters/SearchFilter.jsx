import { useId } from 'react';

const SearchFilter = ({ value, onChange }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Пошук</label>
      <input
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;