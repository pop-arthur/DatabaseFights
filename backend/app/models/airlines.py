from db import get_connection

def get_airlines():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, nam, code FROM Airlines")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return [{"id": r[0], "nam": r[1], "code": r[2]} for r in rows]

def add_airline(nam, code):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO Airlines (nam, code) VALUES (%s, %s)", (nam, code))
    conn.commit()
    cur.close()
    conn.close()

def update_airline(id, nam, code):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("UPDATE Airlines SET nam = %s, code = %s WHERE id = %s", (nam, code, id))
    conn.commit()
    cur.close()
    conn.close()

def delete_airline(id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Airlines WHERE id = %s", (id,))
    conn.commit()
    cur.close()
    conn.close()
