from db import get_connection

def get_flights():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""SELECT id, airline_id, aircraft_id, departure_airport, arrival_airport,
                   departure_time, arrival_time, status, delay, flight_number FROM Flights""")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return [{
        "id": r[0], "airline_id": r[1], "aircraft_id": r[2],
        "departure_airport": r[3], "arrival_airport": r[4],
        "departure_time": r[5], "arrival_time": r[6],
        "status": r[7], "delay": r[8], "flight_number": r[9]
    } for r in rows]

def add_flight(airline_id, aircraft_id, departure_airport, arrival_airport,
               departure_time, arrival_time, status, delay, flight_number):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""INSERT INTO Flights 
                   (airline_id, aircraft_id, departure_airport, arrival_airport,
                    departure_time, arrival_time, status, delay, flight_number)
                   VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)""",
                (airline_id, aircraft_id, departure_airport, arrival_airport,
                 departure_time, arrival_time, status, delay, flight_number))
    conn.commit()
    cur.close()
    conn.close()

def update_flight(id, airline_id, aircraft_id, departure_airport, arrival_airport,
                  departure_time, arrival_time, status, delay, flight_number):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""UPDATE Flights SET 
                   airline_id = %s, aircraft_id = %s, departure_airport = %s, arrival_airport = %s,
                   departure_time = %s, arrival_time = %s, status = %s, delay = %s, flight_number = %s
                   WHERE id = %s""",
                (airline_id, aircraft_id, departure_airport, arrival_airport,
                 departure_time, arrival_time, status, delay, flight_number, id))
    conn.commit()
    cur.close()
    conn.close()

def delete_flight(id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Flights WHERE id = %s", (id,))
    conn.commit()
    cur.close()
    conn.close()
