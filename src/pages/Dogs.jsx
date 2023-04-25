import { useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
// import { useEffect } from "react";

const Dogs = () => {
    const [dogs, setDogs] = useState(['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5' ]);

    const [searchParams, setSearchParams] = useSearchParams();
    const dogId = searchParams.get('dogId') ?? '';

    const location = useLocation();
    // useEffect(() => {
    //     "HTTP request, if need"
    // }, []);

    const dogsVisible = dogs.filter(dog => dog.includes(dogId));

    const updateQueryString = e => {
        const nextName = e.target.value ? {dogId: e.target.value} : {};
        setSearchParams(nextName);
    };

    return (
        <>
            <input 
                type="text" 
                value={dogId} 
                onChange={updateQueryString}
                />
            <ul>
                {dogsVisible.map((dog) => (
                    <li key={dog}>
                        <Link to={`${dog}`} state={{ from: location }}>{dog}</Link>
                    </li> ))}
            </ul>
        </>
    )
};

export default Dogs;