function TrendItem({ number, trend }) {
    return (
        <a className="trend-item" href="#">
            <p className="trend-number">{number}</p>
            <div className="trend-text">
                <p className="trend-category">{trend.category}</p>
                <p className="trend-name">{trend.name}</p>
                <p className="trend-count">{trend.count}</p>
            </div>
        </a>
    );
}

export default TrendItem;
