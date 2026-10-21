import { navItems } from "../data/data.js";

function Sidebar()
{
    return(
        <nav className="sidebar">
            <div className="logo">Tweetly</div>

            <ul classname="nav-list">
                {navItems.map((item, index) => (
                    <li
                        key="item"
                        className={
                            item === 'Home' ?'nav-item-active' : 'nav-item'
                        }
                        >
                            {item}
                    </li>
                ))}
            </ul>

            <button className="tweet-btn">Tweet</button>
        </nav>
    );
}

export default Sidebar