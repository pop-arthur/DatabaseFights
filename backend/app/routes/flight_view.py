from typing import Optional, List

from app_instance import app
from schemas import *
from models import *

@app.get("/flights/view", response_model=list[FlightViewOut])
def view_flights():
    return get_flight_view()
