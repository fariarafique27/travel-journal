import Header from "./components/Header.jsx"
import Journal from "./components/Journal.jsx"
import data from "./data.js"
function App() {
  const JournalElement = data.map((x)=>(
    <Journal 
    key={x.id}
    img={x.img}
     title = {x.title} 
     country={x.country}
     googleMapsLink={x.googleMapsLink}
     dates={x.dates}
     text={x.text}/>
    
  ))
  return (
    <>
      <Header/>
      <main>
        {JournalElement}
       </main>
    </>
  )
}

export default App
