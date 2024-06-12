// This a utility function to fetch data from the API
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