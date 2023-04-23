import { useParams } from "react-router-dom";

const Gallery = () => {
    const { dogId } = useParams();
    
    // useEffect(() => {
    //     "HTTP request, if need"
    // }, []);

    return (
        <div>Images gallery: {dogId}</div>
    )
};

export default Gallery;