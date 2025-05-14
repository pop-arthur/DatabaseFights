import psycopg2

def get_connection():
    return psycopg2.connect(
        dbname="mydb",
        user="myuser",
        password="mypassword",
        host="db",  # это имя сервиса в docker-compose
        port="5432"
    )
