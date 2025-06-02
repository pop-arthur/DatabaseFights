from pydantic import BaseModel
from datetime import date, timedelta

# Airlines
class AirlineIn(BaseModel):
    nam: str
    code: str

class Airline(AirlineIn):
    id: int

# Aircrafts
class AircraftIn(BaseModel):
    model: str
    registration: str

class Aircraft(AircraftIn):
    id: int

# Airports
class AirportIn(BaseModel):
    name: str
    code: str
    city: str
    country: str

class Airport(AirportIn):
    id: int

# Flights
class FlightIn(BaseModel):
    airline_id: int
    aircraft_id: int
    departure_airport: int
    arrival_airport: int
    departure_time: date
    arrival_time: date
    status: str
    delay: timedelta
    flight_number: str

class Flight(FlightIn):
    id: int
