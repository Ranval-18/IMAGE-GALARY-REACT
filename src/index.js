
import ReactDOM from 'react-dom/client';
import './index.css';
import bike1 from "./assets/New folder/bike1.jpg"
import bike2 from "./assets/New folder/bike 2.jpg"
import bike3 from "./assets/New folder/bike 3.jpg"
import bike4 from "./assets/New folder/bike4.jpg"
import bike5 from "./assets/New folder/bike 5.webp"
import bike6 from "./assets/New folder/bike 6.jpg"
import bike7 from "./assets/New folder/bike 7.png"
import bike8 from "./assets/New folder/bike 8.png"
import bike9 from "./assets/New folder/bike9.jpg"
import bike10 from "./assets/New folder/bike10.jpg"
import bike11 from "./assets/New folder/bike11.jpg"
import bike12 from "./assets/New folder/bike12.jpg"


const root = ReactDOM.createRoot(document.getElementById('root'));
function Gallery(props)
{
    return(
    
    <div className="card">
        
        <div>
            
            <img src={props.image} alt="bike" className="" ></img>
            <h2 className="text">{props.names}</h2>
        </div>
    </div>
    )
}

var pics = [
    {
        image:bike1,
        names:"kawasaki"
    },

    {
        image:bike2,
        names:"aprila"
    },

    {
        image:bike3,
        names:"royal enfield 300"
    },

    {
        image:bike4,
        names:"kawasaki 300"
    },

    {
        image:bike5,
        names:"ktm"
    },

    {
        image:bike6,
        names:"bentle"
    },

    {
        image:bike7,
        names:"kawasaki 400"
    },

    {
        image:bike8,
        names:"kawasaji rtr"
    },

    {
        image:bike9,
        names:"dmanc"
    },

    {
        image:bike10,
        names:"Honda ptr"
    },

    {
        image:bike11,
        names:"Honda h1"
    },

    {
        image:bike12,
        names:"Honda rpx"
    }
]

root.render(

    <div id="container" className="cardcomp">

    

        {
            pics.map(function(item)
           {
            return <Gallery image ={item.image} names = {item.names}></Gallery>
           })
        }
    </div>
)
