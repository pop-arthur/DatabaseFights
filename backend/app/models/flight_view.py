from db import get_connection

def get_flight_view():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
        SELECT flight_id, flight_number,
               airline_code, airline_name,
               aircraft_model, aircraft_registration,
               departure_airport_code, departure_airport_name,
               departure_city, departure_country,
               departure_time,
               arrival_airport_code, arrival_airport_name,
               arrival_city, arrival_country,
               arrival_time,
               status, delay, duration_with_delay
        FROM flight_view
    """)
    rows = cur.fetchall()
    cur.close()
    conn.close()

    return [{
        "flight_id": r[0],
        "flight_number": r[1],
        "airline_code": r[2],
        "airline_name": r[3],
        "aircraft_model": r[4],
        "aircraft_registration": r[5],
        "departure_airport_code": r[6],
        "departure_airport_name": r[7],
        "departure_city": r[8],
        "departure_country": r[9],
        "departure_time": r[10],
        "arrival_airport_code": r[11],
        "arrival_airport_name": r[12],
        "arrival_city": r[13],
        "arrival_country": r[14],
        "arrival_time": r[15],
        "status": r[16],
        "delay": r[17],
        "duration_with_delay": r[18]
    } for r in rows]
