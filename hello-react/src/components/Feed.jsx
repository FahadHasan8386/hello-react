import NewTweet from './NewTweet.jsx';
import Tweet from './Tweet.jsx';
import { tweets } from '../data/data.js';

// main section
function Feed() {
    return (
        <main className="feed">
            <h1 className="feed-title">Home</h1>

            <NewTweet />

            {/* list of tweets */}
            {tweets.map(
                (tweet) => tweet && <Tweet key={tweet.id} tweet={tweet} />,
            )}
        </main>
    );
}

export default Feed;
