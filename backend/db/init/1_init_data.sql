-- Вставка авиалиний
INSERT INTO Airlines (nam, code) VALUES
('Delta', 'DL'),
('Lufthansa', 'LH'),
('Qantas', 'QF');

-- Вставка самолётов
INSERT INTO Aircrafts (model, registration) VALUES
('A320', 'N123DL'),
('B737', 'D456LH'),
('A380', 'VH789QF');

-- Вставка аэропортов
INSERT INTO Airports (name, code, city, country) VALUES
('JFK', 'JFK', 'New York', 'USA'),
('FRA', 'FRA', 'Frankfurt', 'Germany'),
('SYD', 'SYD', 'Sydney', 'Australia');

-- Вставка рейсов
INSERT INTO Flights (
    airline_id, aircraft_id, departure_airport, arrival_airport,
    departure_time, status, delay, arrival_time, flight_number
) VALUES
(1, 1, 1, 2, '2025-06-01 10:00:00', 'on time', INTERVAL '0 minutes', '2025-06-01 18:00:00', 'DL100'),
(2, 2, 2, 3, '2025-06-02 08:30:00', 'delayed', INTERVAL '30 minutes', '2025-06-02 22:00:00', 'LH456'),
(3, 3, 3, 1, '2025-06-03 16:45:00', 'on time', INTERVAL '0 minutes', '2025-06-03 23:55:00', 'QF789');
