import assets from "../assets/assets";
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <div>
            {/* header */}
            <div className="bg-gray-800 text-white p-5 font-bold text-2xl text-center  ">
                <h1>JAGDAMB SOUND</h1>
            </div>
            <div className="p-3">
               <img src={assets.home1}  />
               <p className="bg-gray-400 mt-3 p-3 text-white font-medium  font-sans text-center rounded-lg">
                <strong className="text-black">आम्ही सर्वोत्तम DJ सेवा देतो.</strong>
                <br />
                <br />
                आम्ही वाढदिवस, लग्नसमारंभ, रिसेप्शन, बारात, पार्टी, आणि इतर सर्व खास कार्यक्रमांसाठी DJ ऑर्डर घेतो. आमचा आवाज स्वच्छ आणि स्पष्ट आहे, तुमच्या कार्यक्रमाला उत्तम संगीताची साथ देण्यासाठी आम्ही नेहमीच तयार आहोत. 🙌🎶
               </p>
            </div>
            <div className="p-3 flex flex-col items-center  ">
                <div className="border-2 border-b-black w-full mb-4"></div>
                <Link className="w-1/2 p-3 bg-green-600 font-semibold text-xl rounded-full text-white mb-3" to="/contact" ><i className="fa-solid fa-phone"></i>    Contact</Link>
                <Link className=" w-1/2 p-3 bg-yellow-600 font-semibold text-xl rounded-full text-white mb-3" to="/sample" ><i class="fa-solid fa-video"></i>   DJ Sample</Link>
                <a className=" w-1/2 p-3 bg-blue-600 font-semibold text-xl rounded-full text-white mb-3" to="/contac" href="https://www.instagram.com/jagdamb_dj1?igsh=ZjBud2h2eDFsaDNn "><i class="fa-brands fa-instagram"></i>  Instagram</a>
                
            </div>
        </div>
        
    )
}
export default Home;