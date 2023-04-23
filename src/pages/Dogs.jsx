import { Link } from "react-router-dom";
// import { useEffect } from "react";

const Dogs = () => {
    
    // useEffect(() => {
    //     "HTTP request, if need"
    // }, []);

    return (
        <div>
            {
            ['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5' ].map((dog, idx) => (
                <Link key={idx} to={`${dog}`}>
                    <p>{dog}</p>
                </Link>
            ))
            }
        </div>
    )
};

export default Dogs;