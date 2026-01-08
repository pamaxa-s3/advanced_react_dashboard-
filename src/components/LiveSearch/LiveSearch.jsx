import { useDeferredValue, useState } from "react";
import {products} from "@data";

const LiveSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const deferredSearch = useDeferredValue(searchTerm);

    const isPending = searchTerm !== deferredSearch;

    const results = products
        .filter(product =>
            product.name.toLowerCase().includes(deferredSearch.toLowerCase())
        )
        .slice(0, 10);

    return (
        <section>
            <h3>Live Search</h3>

            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />

            {isPending && <p>Завантаження результатів...</p>}

            {!isPending && deferredSearch && results.length === 0 && (
                <p>Нічого не знайдено</p>
            )}

            <ul style={{ opacity: isPending ? 0.5 : 1 }}>
                {results.map(item => (
                    <li key={item.id}>
                        {highlight(item.name, deferredSearch)}
                    </li>
                ))}
            </ul>
        </section>
    );
};

function highlight(text, query) {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
            <mark key={index}>{part}</mark>
        ) : (
            part
        )
    );
}

export default LiveSearch;
