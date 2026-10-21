import Avatar from './Avatar.jsx';

// one tweet card — everything it shows comes in through the `tweet` prop
function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar src={tweet.avatar} />

            <div className="tweet-content">
                <p>
                    <span className="name">{tweet.name}</span>{' '}
                    <span className="handle">{tweet.handle}</span>
                </p>
                <p className="tweet-text">{tweet.text}</p>

                {tweet.image && (
                    <img
                        src={tweet.image}
                        alt="Tweet Image"
                        className="tweet-image"
                    />
                )}

                <div className="tweet-actions">
                    <span>💬 {tweet.replies}</span>
                    <span>🔁 {tweet.retweets}</span>
                    <span>❤️ {tweet.likes}</span>
                </div>
            </div>
        </div>
    );
}

export default Tweet;
