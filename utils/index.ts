import { CarProps } from "@/types";

// This a utility function to fetch data from the Car API
export async function fetchCars() {
    
    const headers = {
        'x-rapidapi-key': '8e1ae00056mshd90e9f3a5ea1da1p1965c0jsn77a3e64737bb',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    });

    const result = await response.json();

    return result;
}

// This a utility function to fetch data for calculating car rent prices
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

// This is a utility function to generate the car images in the Car Details component
export const generateCarImages = (car: CarProps) => {
    const { make, model, year} = car;

}
  