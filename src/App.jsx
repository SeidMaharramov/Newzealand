
import './App.css';
import Header from "./components/header/header";
import Section  from './components/section/section';
import Bottom from './components/bottom/bottom';
function App() {

  return (
    <>
      <div className="flex">
         <Header/>
         <Section/>
         <Bottom/>
      </div>
    </>
  )
}

export default App
