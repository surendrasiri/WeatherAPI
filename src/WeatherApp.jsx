import { useState } from "react";

function WeatherApp() {

    const[cityName, setCityName]=useState('Jaipur')
    const[weather, setWeather]=useState()
    console.log(weather);


    function handleChange(e){
        setCityName(e.target.value);
    }

    function handleSearch(){
        const apiKey = '59876e62d74eb7fbf87b7f0acdef70a3'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        if (cityName){
            fetch(url)
                 .then((response) =>{
                    if(!response.ok){
                        throw new Error ('Network response was not ok')
                    }

                    return response.json()
                 })
                 .then((data)=>{
                    setWeather(data)
                 }).catch((error)=>{
                    console.log('error while fetching data', error)
                 })
        }
    }

    return ( <>

    <div className="bg-image bg-cover bg-no-repeat h-screen flex justify-center items-center">

    <div className="w-3/5 h-4/5 bg-[#ffffff66] rounded-lg flex">

    <div className="w-1/2 bg-left h-full bg-cover bg-no-repeat rounded-l-lg flex flex-col justify-between">
        <div className="flex justify-end m-4">
            <p className="font-bold text-2xl">
                {/* {weather.name && `${weather.name},`} {weather.sys && weather.sys.country} */}
                {weather.name && weather.name}, {weather.sys && weather.sys.country}
            </p>
        </div>

        <div className="flex justify-center"></div>

        <div className="flex justify-between m-4">
            <div className="font-bold text-xl text-gray-200">
                <p>{weather.coord && weather.coord.lon}</p>
                <p>{weather.coord && weather.coord.lat}</p>
            </div>
            <div className="font-bold text-2xl text-gray-200">
                <p> {weather.main && weather.main.temp}C </p>
            </div>
        </div>
    </div>

    <div className="h-full w-1/2">
        <div className="flex border border-gray-200 rounded-lg w-3/5 mx-auto">
            <input type="search" onChange={handleChange} value={cityName} placeholder="Search" className="bg-transparent outline-none text-white placeholder-white px-2 py-1"/>
            <button onClick={handleSearch} className="text-3xl cursor-pointer text-white">Search</button>
        </div>
    </div>

    </div>
        
    </div>

    </> );
}

export default WeatherApp;