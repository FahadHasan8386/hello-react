import TrendItem from "./TrendItem.jsx";
import { trends } from "../data/data.js";

// trends section
function Trends() {
    return (
        <aside className="trends">
            <div className="trends-card">
                <h2>Trending</h2>

                {trends.map((trend, index) => (
                    <TrendItem key={trend.id} number={index + 1} trend={trend} />
                ))}

                <a className="trend-more" href="#">Show more</a>
            </div>
        </aside>
    );
}

export default Trends;
