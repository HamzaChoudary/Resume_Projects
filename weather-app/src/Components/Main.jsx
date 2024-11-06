import React, { useState } from 'react';
import axios from  'axios';


const Main = () => {

    const [City, setCity] = useState('')
    const [Weather, setWeather] = useState(null);
    const [Error, setError] = useState('');

    const apiKey = 'f7f333f5a1095403573c160fd94e0a86';

    // Functionality 
    const handleSearch = async () =>  {
        if(!City) return;
        // Add for error 
        try {
            const response = await axios.get(`
                https:api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${apiKey}`
                );
            setWeather(response.data);
            setError('');
        } catch (err) {
            setError('City not found, Please try again.');
            setWeather(null);
        }
    }

    const handleChange = (e) => {
        setCity(e.target.value);
    }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-blue-50 px-5'>
        <div className='text-xl font-bold text-green-500 mb-4'>
        <h2>Weather App</h2>
        </div>
        <div className='w-full max-w-md shadow-lg rounded-lg p-4 bg-white'>
            <label htmlFor="cityname" className='text-sm font-bold '>Enter City Name</label>
            <input 
            type="text"
            name='cityname'
            placeholder='Type...'
            value={City}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md outline-none focus:ring focus:ring-blue-300"
            />
            <button 
            onClick={handleSearch}
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
                    >
                Labo Weather
            </button>

            {Error && <p className='text-red-400 text-center mt-2'>{Error}</p> }

            {Weather && 
            <div className='mt-2 text-center'>
                <h2 className='text-2xl font-semibold text-gray-800'
                >{Weather.name}, {Weather.sys.country}
                </h2>
                <p className='text-xl text-gray-400'
                >{Weather.weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}.png`}
                className='mx-auto' alt={Weather.weather[0].description} />
                <p className='text-4xl font-bold text-orange-700'>
                    {Math.round(Weather.main.temp)}C
                </p>
                <p className='text-xl font-bold text-orange-300'>
                   Humidity  : {Weather.main.humidity}% | Wind : {Weather.wind.speed} m/s
                </p>

            </div>
            }
        </div>
        </div>
    );
}

export default Main