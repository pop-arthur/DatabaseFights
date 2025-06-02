from typing import Optional, List

from app_instance import app
from schemas import *
from models import *

@app.post("/airlines/")
def add_airline_route(airline: AirlineIn):
    return add_airline(airline.nam, airline.code)

@app.get("/airlines/", response_model=List[Airline])
def list_airlines():
    return get_airlines()

@app.put("/airlines/{id}")
def update_airline_route(id: int, airline: AirlineIn):
    update_airline(id, airline.nam, airline.code)
    return {"message": "Updated"}

@app.delete("/airlines/{id}")
def delete_airline_route(id: int):
    delete_airline(id)
    return {"message": "Deleted"}
