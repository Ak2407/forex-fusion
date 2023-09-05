import { FilterProps } from "../types";


export async function fetchConversion(filters: FilterProps) {
    const { to, from, amount} = filters;

  
    // Set the required headers for the API request
    const headers: HeadersInit = {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
      "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
    };

  
    // Set the required headers for the API request
    const response = await fetch(
      `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from}&want=${to}&amount=${amount}`,
      {
        headers: headers,
      }
      
    );

    
  
    // Parse the response as JSON
    const result = await response.json();
      
    return result;
  }
