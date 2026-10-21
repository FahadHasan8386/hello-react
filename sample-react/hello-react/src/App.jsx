import Sidebar from './components/Sidebar.jsx';
import Feed from './components/Feed.jsx';
import Trends from './components/Trends.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <>
            <div className="page">
                <Sidebar />
                <Feed />
                <Trends />
            </div>
            <Footer />
        </>
    );
}

export default App
