"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Cloud, CloudRain, Sun, CloudSnow, CloudDrizzle, Wind, Droplets, Eye, Thermometer } from "lucide-react"

// Mock weather data for the last 7 days
const weatherData = [
  {
    id: 0,
    date: "Today",
    fullDate: "December 6, 2024",
    day: "Friday",
    high: 72,
    low: 58,
    condition: "Sunny",
    icon: Sun,
    humidity: 45,
    windSpeed: 8,
    visibility: 10,
    uvIndex: 6,
    description: "Clear skies with plenty of sunshine",
  },
  {
    id: 1,
    date: "Yesterday",
    fullDate: "December 5, 2024",
    day: "Thursday",
    high: 68,
    low: 55,
    condition: "Partly Cloudy",
    icon: Cloud,
    humidity: 52,
    windSpeed: 12,
    visibility: 8,
    uvIndex: 4,
    description: "Mix of sun and clouds throughout the day",
  },
  {
    id: 2,
    date: "2 days ago",
    fullDate: "December 4, 2024",
    day: "Wednesday",
    high: 65,
    low: 48,
    condition: "Rainy",
    icon: CloudRain,
    humidity: 78,
    windSpeed: 15,
    visibility: 5,
    uvIndex: 2,
    description: "Light rain with overcast skies",
  },
  {
    id: 3,
    date: "3 days ago",
    fullDate: "December 3, 2024",
    day: "Tuesday",
    high: 70,
    low: 52,
    condition: "Drizzle",
    icon: CloudDrizzle,
    humidity: 68,
    windSpeed: 10,
    visibility: 6,
    uvIndex: 3,
    description: "Light drizzle in the morning, clearing up later",
  },
  {
    id: 4,
    date: "4 days ago",
    fullDate: "December 2, 2024",
    day: "Monday",
    high: 75,
    low: 61,
    condition: "Sunny",
    icon: Sun,
    humidity: 42,
    windSpeed: 6,
    visibility: 12,
    uvIndex: 7,
    description: "Beautiful sunny day with clear skies",
  },
  {
    id: 5,
    date: "5 days ago",
    fullDate: "December 1, 2024",
    day: "Sunday",
    high: 63,
    low: 45,
    condition: "Cloudy",
    icon: Cloud,
    humidity: 58,
    windSpeed: 14,
    visibility: 7,
    uvIndex: 3,
    description: "Overcast with thick cloud cover",
  },
  {
    id: 6,
    date: "6 days ago",
    fullDate: "November 30, 2024",
    day: "Saturday",
    high: 59,
    low: 41,
    condition: "Snow",
    icon: CloudSnow,
    humidity: 85,
    windSpeed: 18,
    visibility: 3,
    uvIndex: 1,
    description: "Light snow showers throughout the day",
  },
]

export default function WeatherApp() {
  const [selectedDay, setSelectedDay] = useState(0)
  const currentWeather = weatherData[selectedDay]
  const WeatherIcon = currentWeather.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Weather App</h1>
          <p className="text-blue-100">7-Day Weather History</p>
        </div>

        {/* Main Weather Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="secondary" className="text-sm">
                {currentWeather.date}
              </Badge>
            </div>
            <CardTitle className="text-2xl text-gray-800">{currentWeather.fullDate}</CardTitle>
            <CardDescription className="text-lg text-gray-600">{currentWeather.day}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Weather Display */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center">
                <WeatherIcon className="w-24 h-24 text-blue-500" />
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-800 mb-2">{currentWeather.high}°</div>
                <div className="text-xl text-gray-600 mb-1">{currentWeather.condition}</div>
                <div className="text-sm text-gray-500">Low: {currentWeather.low}°</div>
              </div>
              <p className="text-gray-600 max-w-md mx-auto">{currentWeather.description}</p>
            </div>

            {/* Weather Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
              <div className="text-center space-y-2">
                <Droplets className="w-6 h-6 text-blue-500 mx-auto" />
                <div className="text-sm text-gray-500">Humidity</div>
                <div className="font-semibold">{currentWeather.humidity}%</div>
              </div>
              <div className="text-center space-y-2">
                <Wind className="w-6 h-6 text-blue-500 mx-auto" />
                <div className="text-sm text-gray-500">Wind</div>
                <div className="font-semibold">{currentWeather.windSpeed} mph</div>
              </div>
              <div className="text-center space-y-2">
                <Eye className="w-6 h-6 text-blue-500 mx-auto" />
                <div className="text-sm text-gray-500">Visibility</div>
                <div className="font-semibold">{currentWeather.visibility} mi</div>
              </div>
              <div className="text-center space-y-2">
                <Thermometer className="w-6 h-6 text-blue-500 mx-auto" />
                <div className="text-sm text-gray-500">UV Index</div>
                <div className="font-semibold">{currentWeather.uvIndex}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 7-Day Carousel */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-gray-800">7-Day History</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {weatherData.map((day, index) => {
                  const DayIcon = day.icon
                  const isSelected = selectedDay === index
                  return (
                    <CarouselItem key={day.id} className="md:basis-1/3 lg:basis-1/4">
                      <div className="p-1">
                        <Card
                          className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                            isSelected ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setSelectedDay(index)}
                        >
                          <CardContent className="p-4 text-center space-y-2">
                            <div className="text-sm font-medium text-gray-600">{day.date}</div>
                            <div className="text-xs text-gray-500">{day.day}</div>
                            <DayIcon className={`w-8 h-8 mx-auto ${isSelected ? "text-blue-600" : "text-gray-600"}`} />
                            <div className="space-y-1">
                              <div className={`font-bold ${isSelected ? "text-blue-800" : "text-gray-800"}`}>
                                {day.high}°
                              </div>
                              <div className="text-xs text-gray-500">{day.low}°</div>
                            </div>
                            <div className="text-xs text-gray-600">{day.condition}</div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
