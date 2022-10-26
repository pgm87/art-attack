import { useState } from 'react';

const Counter = () => {
    const [numOfLikes, setLikes] = useState(0);
    const handleClick = () => {
        setLikes(numOfLikes + 1);
    }
    return (
        <section>
            <p>liked by this many people {numOfLikes} times</p>
            <button onClick={handleClick}>click for likes</button>
        </section>
    )
}

export default Counter;