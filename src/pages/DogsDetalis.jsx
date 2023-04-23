import { Link, Outlet, useParams } from "react-router-dom";

const DogsDetalis = () => {
    const { dogId } = useParams();

    // useEffect(() => {
    //     "HTTP request, if need"
    // }, []);

    return (
        <>
            <h1>Dogs Detalis: {dogId}</h1>
            <ul>
                <li>
                    <Link to="subbreeds">Subbreeds</Link>
                </li>
                <li>
                    <Link to="gallery">Gallery</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
};

export default DogsDetalis;