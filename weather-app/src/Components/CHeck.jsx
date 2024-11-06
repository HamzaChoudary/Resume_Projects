import React, { useState } from 'react';
import axios from 'axios';

function Main() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const apiKey = 'f7f333f5a1095403573c160fd94e0a86'; // Replace with your OpenWeatherMap API Key

    const handleSearch = async () => {
        if (!city) return;
        
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            setWeather(response.data);
            setError('');
        } catch (err) {
            setError('City not found. Please try again.');
            setWeather(null);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-5">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">Weather App</h1>
            <div className="w-full max-w-md p-4 rounded-lg shadow-lg bg-white">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-md outline-none focus:ring focus:ring-blue-300"
                />
                <button
                    onClick={handleSearch}
                    className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Get Weather
                </button>
                
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                
                {weather && (
                    <div className="mt-5 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            {weather.name}, {weather.sys.country}
                        </h2>
                        <p className="text-xl text-gray-600">{weather.weather[0].description}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            alt={weather.weather[0].description}
                            className="mx-auto"
                        />
                        <p className="text-4xl font-bold text-blue-700">
                            {Math.round(weather.main.temp)}°C
                        </p>
                        <p className="text-gray-600">
                            Humidity: {weather.main.humidity}% | Wind: {weather.wind.speed} m/s
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Main;
