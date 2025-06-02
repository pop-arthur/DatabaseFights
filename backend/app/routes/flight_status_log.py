from app_instance import app
from schemas import *
from models import *

@app.get("/flights/status-log", response_model=list[FlightStatusLogOut])
def view_status_log():
    return get_flight_status_log()