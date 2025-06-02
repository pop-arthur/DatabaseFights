import pandas as pd

airlines = pd.read_csv("data/airlines.dat", header=None)
airports = pd.read_csv("data/airports.dat", header=None)
routes = pd.read_csv("data/routes.dat", header=None)

airlines_cleaned = airlines[[0, 1, 4]].dropna()
airlines_cleaned.columns = ['id', 'nam', 'code']
airlines_cleaned = airlines_cleaned[airlines_cleaned['id'].apply(lambda x: str(x).isdigit())]

airports_cleaned = airports[[0, 1, 4, 2, 3]].dropna()
airports_cleaned.columns = ['id', 'name', 'code', 'city', 'country']

aircrafts_cleaned = pd.DataFrame({
    'id': [1],
    'model': ['A320'],
    'registration': ['REG1']
})

flights_cleaned = routes[[0, 1, 3, 5]].copy()
flights_cleaned.columns = ['airline_code', 'flight_number', 'departure_airport', 'arrival_airport']
flights_cleaned = flights_cleaned.dropna()

airline_code_to_id = dict(zip(airlines_cleaned['code'], airlines_cleaned['id']))
flights_cleaned['airline_id'] = flights_cleaned['airline_code'].map(airline_code_to_id)
flights_cleaned['aircraft_id'] = 1
flights_cleaned['departure_time'] = '2025-06-01'
flights_cleaned['arrival_time'] = '2025-06-01'
flights_cleaned['status'] = 'ontime'
flights_cleaned['delay'] = '00:00:00'
flights_cleaned = flights_cleaned.dropna(subset=['airline_id'])

with open("init/0_init_tables.sql", "w", encoding="utf-8") as f:
    f.write("-- Airlines\n")
    for _, row in airlines_cleaned.iterrows():
        f.write(f"INSERT INTO Airlines (id, nam, code) VALUES ({int(row['id'])}, '{row['nam'][:10]}', '{row['code'][:10]}');\n")

    f.write("\n-- Aircrafts\n")
    for _, row in aircrafts_cleaned.iterrows():
        f.write(f"INSERT INTO Aircrafts (id, model, registration) VALUES ({row['id']}, '{row['model']}', '{row['registration']}');\n")

    f.write("\n-- Airports\n")
    for _, row in airports_cleaned.iterrows():
        f.write(f"INSERT INTO Airports (id, name, code, city, country) VALUES ({int(row['id'])}, '{row['name'][:10]}', '{row['code'][:10]}', '{row['city'][:10]}', '{row['country'][:10]}');\n")

    f.write("\n-- Flights\n")
    for _, row in flights_cleaned.iterrows():
        f.write(f"""INSERT INTO Flights (
    airline_id, aircraft_id, departure_airport, arrival_airport,
    departure_time, status, delay, arrival_time, flight_number
) VALUES (
    {int(row['airline_id'])}, {int(row['aircraft_id'])}, {int(row['departure_airport'])}, {int(row['arrival_airport'])},
    '{row['departure_time']}', '{row['status']}', '{row['delay']}', '{row['arrival_time']}', '{row['flight_number'][:10]}'
);\n""")
