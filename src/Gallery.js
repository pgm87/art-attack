import Picture from "./Picture";

const Gallery = (props) => {
    return (
        <section className="gallery">
            <h2>gallery of pictures</h2>
            <ul>
                {
                    props.arrayOfArt.map((artObject) => {


                        return <Picture artInfo={artObject} key={artObject.id} />
                    })
                }
            </ul>
        </section>
    )
}
export default Gallery;