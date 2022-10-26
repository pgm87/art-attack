import axios from 'axios';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';

const ArtWall = () => {
    console.log('artwall is rendering')
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);
    const [art, setArt] = useState([]);

    useEffect(() => {
        console.log("side effect is running")
        axios({
            url: 'https://www.rijksmuseum.nl/api/en/collection',
            params: {
                key: 'as4A5mPg',
                imgonly: true,
                toppieces: true
            }
        }).then((art) => {
            setArt(art.data.artObjects);
        })
    }, []);

    const handleClick = () => {
        setIsGalleryVisible(!isGalleryVisible);
    }
    return (
        <section>
            <h2>
                {
                    isGalleryVisible
                        ? 'DO YOU LIKE THE ART?'
                        : 'is it art time?'
                }
            </h2>
            <button onClick={handleClick}>  {
                isGalleryVisible
                    ? 'i have seen enough art'
                    : 'click here for art'
            }</button>
            {
                isGalleryVisible
                    ? <Gallery arrayOfArt={art} />
                    : null
            }
        </section>
    )

}

export default ArtWall;