import assets from "../assets/assets";

const Contact = ()=>{
    return(
        <div>
            <div className="bg-gray-800 text-white p-5 font-bold text-2xl text-center  ">
                <h1>JAGDAMB SOUND</h1>
            </div>
            <div className="flex mt-5 p-3">
                <img src={assets.contactdj} className="size-52 rounded-lg" />
                <img src={assets.owner} className="size-52 mt-10 rounded-lg z-10" />
                
            </div>
            <div className="flex flex-col items-start p-3 border-4">
                <div className="flex items-center gap-2 justify-center">
                    <i class="fa-solid fa-crown text-3xl text-yellow-500"></i>
                    <h1 className="font-bold uppercase text-cyan-950 font-serif text-3xl text-center">Pankaj Burane</h1>
                </div>
                <div className="border-2 border-b-black w-full mb-4"></div>
                <div className="flex items-center gap-2 justify-center">
                    <i className="fa-solid fa-phone text-green-500 text-3xl"></i>
                    <h1 className="font-bold  text-cyan-500  text-3xl text-center">9960264052</h1>
                </div>
                <div className="border-2 border-b-black w-full mb-4"></div>
                <div className="flex items-center gap-2 justify-center">
                    <i className="fa-solid fa-location-dot text-pink-500 "></i>
                    <h1 className="text-xl text-center">Kholapuri Gate,Daryapur-444803</h1>
                    <p>District Amravati</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;