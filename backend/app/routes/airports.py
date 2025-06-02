from typing import Optional, List

from app_instance import app
from schemas import *
from models import *

@app.post("/airports/")
def add_airport_route(airport: AirportIn):
    return add_airport(airport.name, airport.code, airport.city, airport.country)

@app.get("/airports/", response_model=List[Airport])
def list_airports():
    return get_airports()

@app.put("/airports/{id}")
def update_airport_route(id: int, airport: AirportIn):
    update_airport(id, airport.name, airport.code, airport.city, airport.country)
    return {"message": "Updated"}

@app.delete("/airports/{id}")
def delete_airport_route(id: int):
    delete_airport(id)
    return {"message": "Deleted"}
