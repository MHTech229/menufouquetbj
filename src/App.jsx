import './App.css'
import { MenuImgs } from './Data/Data';
function App() {

  return (
    <>
    
     <div className="menu-container">
        {
          MenuImgs.map((img,j)=>{
            return <img src={img} alt="" key={j}/>
          })
        }
     </div>
    
      <a href='/Menu.pdf' target='_blank' className="dowload-btn">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z"/></svg>
      </a>
    </>
  )
}

export default App
