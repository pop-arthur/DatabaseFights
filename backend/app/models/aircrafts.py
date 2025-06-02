from db import get_connection

def get_aircrafts():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, model, registration FROM Aircrafts")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return [{"id": r[0], "model": r[1], "registration": r[2]} for r in rows]

def add_aircraft(model, registration):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO Aircrafts (model, registration) VALUES (%s, %s)", (model, registration))
    conn.commit()
    cur.close()
    conn.close()

def update_aircraft(id, model, registration):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("UPDATE Aircrafts SET model = %s, registration = %s WHERE id = %s", (model, registration, id))
    conn.commit()
    cur.close()
    conn.close()

def delete_aircraft(id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Aircrafts WHERE id = %s", (id,))
    conn.commit()
    cur.close()
    conn.close()
