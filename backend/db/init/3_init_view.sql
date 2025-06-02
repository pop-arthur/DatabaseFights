CREATE VIEW flight_view AS
SELECT
    f.id AS flight_id,
    f.flight_number,

    a.code AS airline_code,
    a.nam AS airline_name,

    ac.model AS aircraft_model,
    ac.registration AS aircraft_registration,

    dap.code AS departure_airport_code,
    dap.name AS departure_airport_name,
    dap.city AS departure_city,
    dap.country AS departure_country,

    f.departure_time,

    aap.code AS arrival_airport_code,
    aap.name AS arrival_airport_name,
    aap.city AS arrival_city,
    aap.country AS arrival_country,

    f.arrival_time,

    f.status,
    f.delay,

    -- вычисляем длительность с учётом задержки
    get_flight_duration(f.id) AS duration_with_delay
FROM Flights f
JOIN Airlines a ON f.airline_id = a.id
JOIN Aircrafts ac ON f.aircraft_id = ac.id
JOIN Airports dap ON f.departure_airport = dap.id
JOIN Airports aap ON f.arrival_airport = aap.id;
