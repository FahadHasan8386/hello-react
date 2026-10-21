import Avatar from './Avatar.jsx';
import { currentUser } from '../data/data.js';

function NewTweet() {
    return (
        <>
            <div className="new-tweet">
                <Avatar src={currentUser.avatar} />
                <textarea placeholder="What's happening?"></textarea>
            </div>
            <button className="tweet-btn small">Tweet</button>
        </>
    );
}

export default NewTweet;
