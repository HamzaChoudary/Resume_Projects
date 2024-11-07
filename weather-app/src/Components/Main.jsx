import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    // Access the API key from environment variables
    // const apiKey = import.meta.env.WEATHER_API_KEY;
    const apikey = '3762458149590eb2ce6cc377743ec9af';
    console.log(apikey)

    // Fetch weather data for the entered city
    const handleSearch = async () => {
        if (!city) return;

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
            );
            console.log(response)
            setWeather(response.data);
            setError('');
        } catch (err) {
            setError('City not found, Please try again.');
            setWeather(null);
        }
    };
    console.log(handleSearch);

    // Update city state when input changes
    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-blue-50 px-5'>
            <div className='text-xl font-bold text-green-500 mb-4'>
                <h2>Weather App</h2>
            </div>
            <div className='w-full max-w-md shadow-lg rounded-lg p-4 bg-white'>
                <label htmlFor="cityname" className='text-sm font-bold'>
                    Enter City Name
                </label>
                <input
                    type="text"
                    name='cityname'
                    placeholder='Type...'
                    value={city}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded-md outline-none focus:ring focus:ring-blue-300"
                />
                <button
                    onClick={handleSearch}
                    className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                    Labo Weather
                </button>

                {error && <p className='text-red-400 text-center mt-2'>{error}</p>}

                {weather &&
                    <div className='mt-2 text-center'>
                        <h2 className='text-2xl font-semibold text-gray-800'>
                            {weather.name}, {weather.sys.country}
                        </h2>
                        <p className='text-xl text-gray-400'>
                            {weather.weather[0].description}
                        </p>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            className='mx-auto'
                            alt={weather.weather[0].description}
                        />
                        <p className='text-4xl font-bold text-orange-700'>
                            {Math.round(weather.main.temp)}°C
                        </p>
                        <p className='text-xl font-bold text-orange-300'>
                            Humidity: {weather.main.humidity}% | Wind: {weather.wind.speed} m/s
                        </p>
                        <p className='text-xl font-bold text-orange-300'>
                        Visibility: {(weather.visibility /1000 ).toFixed(1)}km
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Main;
