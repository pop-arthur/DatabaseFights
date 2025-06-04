from db import get_connection

def get_flight_status_log():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
        SELECT id, flight_id, old_status, new_status, changed_at
        FROM FlightStatusLog
        ORDER BY changed_at DESC
    """)
    rows = cur.fetchall()
    cur.close()
    conn.close()

    return [{
        "id": r[0],
        "flight_id": r[1],
        "old_status": r[2],
        "new_status": r[3],
        "changed_at": r[4]
    } for r in rows]
