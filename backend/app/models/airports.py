from db import get_connection

def get_airports():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, name, code, city, country FROM Airports")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return [{"id": r[0], "name": r[1], "code": r[2], "city": r[3], "country": r[4]} for r in rows]

def add_airport(name, code, city, country):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO Airports (name, code, city, country) VALUES (%s, %s, %s, %s)", (name, code, city, country))
    conn.commit()
    cur.close()
    conn.close()

def update_airport(id, name, code, city, country):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("UPDATE Airports SET name = %s, code = %s, city = %s, country = %s WHERE id = %s", (name, code, city, country, id))
    conn.commit()
    cur.close()
    conn.close()

def delete_airport(id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Airports WHERE id = %s", (id,))
    conn.commit()
    cur.close()
    conn.close()
