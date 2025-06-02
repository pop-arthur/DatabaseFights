from routes import *

@app.get("/tables/")
def get_tables():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return rows