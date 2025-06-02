from pydantic import BaseModel
from datetime import datetime, timedelta

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
    departure_time: datetime
    arrival_time: datetime
    status: str
    delay: timedelta
    flight_number: str

class Flight(FlightIn):
    id: int

# FlightView
class FlightViewOut(BaseModel):
    flight_id: int
    flight_number: str
    airline_code: str
    airline_name: str
    aircraft_model: str
    aircraft_registration: str
    departure_airport_code: str
    departure_airport_name: str
    departure_city: str
    departure_country: str
    departure_time: datetime
    arrival_airport_code: str
    arrival_airport_name: str
    arrival_city: str
    arrival_country: str
    arrival_time: datetime
    status: str
    delay: timedelta
    duration_with_delay: timedelta

class FlightStatusLogOut(BaseModel):
    id: int
    flight_id: int
    old_status: str
    new_status: str
    changed_at: datetime
