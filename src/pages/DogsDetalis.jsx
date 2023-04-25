import { Suspense, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

const DogsDetalis = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/dogs");
    const { dogId } = useParams();
    // useEffect(() => {
    //     "HTTP request, if need"
    // }, []);

    return (
        <>
            <h1>Dogs Detalis: {dogId}</h1>
            <Link to={backLinkLocationRef.current}>Back to Collection</Link>
            <ul>
                <li>
                    <Link to="subbreeds">Subbreeds</Link>
                </li>
                <li>
                    <Link to="gallery">Gallery</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading subpage....</div>}>
                <Outlet />
            </Suspense>
        </>
    )
};

export default DogsDetalis;