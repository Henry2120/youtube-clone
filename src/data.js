export const API_KEY = 'AIzaSyBkqcPMNLUHvup6vmAC0O7Nqpdi3R4AkFs';

export const value_converter = (value) =>{
    if(value >= 1000000)
    {
        return Math.floor(value / 1000000) + 'M';
    }
    else if(value >= 1000)
    {
        return Math.floor(value / 1000) + 'K';
    }
    else{
        return value;
    }
}