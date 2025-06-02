from typing import Optional, List

from app_instance import app
from schemas import *
from models import *

@app.post("/flights/")
def add_flight_route(flight: FlightIn):
    return add_flight(**flight.dict())

@app.get("/flights/", response_model=List[Flight])
def list_flights():
    return get_flights()

@app.put("/flights/{id}")
def update_flight_route(id: int, flight: FlightIn):
    update_flight(id, **flight.dict())
    return {"message": "Updated"}

@app.delete("/flights/{id}")
def delete_flight_route(id: int):
    delete_flight(id)
    return {"message": "Deleted"}
