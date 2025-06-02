from typing import Optional, List

from app_instance import app
from schemas import *
from models import *

@app.post("/aircrafts/")
def add_aircraft_route(aircraft: AircraftIn):
    return add_aircraft(aircraft.model, aircraft.registration)

@app.get("/aircrafts/", response_model=List[Aircraft])
def list_aircrafts():
    return get_aircrafts()

@app.put("/aircrafts/{id}")
def update_aircraft_route(id: int, aircraft: AircraftIn):
    update_aircraft(id, aircraft.model, aircraft.registration)
    return {"message": "Updated"}

@app.delete("/aircrafts/{id}")
def delete_aircraft_route(id: int):
    delete_aircraft(id)
    return {"message": "Deleted"}
