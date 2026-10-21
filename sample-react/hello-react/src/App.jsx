import Sidebar from './components/Sidebar.jsx';

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
  )
}

export default App
