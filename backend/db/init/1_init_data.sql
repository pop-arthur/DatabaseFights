INSERT INTO Airlines (nam, code) VALUES
('Delta Air Lines', 'DL'),
('Lufthansa', 'LH'),
('Qantas', 'QF'),
('American Airlines', 'AA'),
('Emirates', 'EK'),
('Air France', 'AF'),
('British Airways', 'BA'),
('Singapore Airlines', 'SQ'),
('Turkish Airlines', 'TK'),
('Cathay Pacific', 'CX'),
('KLM Royal Dutch Airlines', 'KL'),
('Japan Airlines', 'JL'),
('United Airlines', 'UA'),
('Etihad Airways', 'EY'),
('Swiss International Air Lines', 'LX');

INSERT INTO Aircrafts (model, registration) VALUES
('A320', 'N123DL'),
('B737', 'D456LH'),
('A380', 'VH789QF'),
('B777', 'AA777AA'),
('A350', 'EK350EK'),
('B787', 'AF787AF'),
('A319', 'BA319BA'),
('A330', 'SQ330SQ'),
('B737 MAX', 'TK737TK'),
('A340', 'CX340CX'),
('B747', 'KL747KL'),
('E190', 'JL190JL'),
('CRJ900', 'UA900UA'),
('A321', 'EY321EY'),
('B767', 'LX767LX');


INSERT INTO Airports (name, code, city, country) VALUES
('John F. Kennedy International Airport', 'JFK', 'New York', 'USA'),
('Frankfurt am Main Airport', 'FRA', 'Frankfurt', 'Germany'),
('Sydney Kingsford Smith Airport', 'SYD', 'Sydney', 'Australia'),
('Los Angeles International Airport', 'LAX', 'Los Angeles', 'USA'),
('Dubai International Airport', 'DXB', 'Dubai', 'UAE'),
('Paris Charles de Gaulle Airport', 'CDG', 'Paris', 'France'),
('London Heathrow Airport', 'LHR', 'London', 'UK'),
('Changi Airport', 'SIN', 'Singapore', 'Singapore'),
('Istanbul Airport', 'IST', 'Istanbul', 'Turkey'),
('Hong Kong International Airport', 'HKG', 'Hong Kong', 'China'),
('Amsterdam Schiphol Airport', 'AMS', 'Amsterdam', 'Netherlands'),
('Tokyo Haneda Airport', 'HND', 'Tokyo', 'Japan'),
('Chicago OHare International Airport', 'ORD', 'Chicago', 'USA'),
('Abu Dhabi International Airport', 'AUH', 'Abu Dhabi', 'UAE'),
('Zurich Airport', 'ZRH', 'Zurich', 'Switzerland');

INSERT INTO Flights (
    airline_id, aircraft_id, departure_airport, arrival_airport,
    departure_time, status, delay, arrival_time, flight_number
) VALUES
(1, 1, 1, 2, '2025-06-01 10:00:00', 'on time', INTERVAL '0 minutes', '2025-06-01 18:00:00', 'DL100'),
(2, 2, 2, 3, '2025-06-02 08:30:00', 'delayed', INTERVAL '30 minutes', '2025-06-02 22:00:00', 'LH456'),
(3, 3, 3, 1, '2025-06-03 16:45:00', 'on time', INTERVAL '0 minutes', '2025-06-03 23:55:00', 'QF789'),
(4, 4, 4, 5, '2025-06-04 11:00:00', 'on time', INTERVAL '0 minutes', '2025-06-04 15:30:00', 'AA101'),
(5, 5, 5, 6, '2025-06-05 14:15:00', 'on time', INTERVAL '0 minutes', '2025-06-05 18:45:00', 'EK202'),
(6, 6, 6, 7, '2025-06-06 06:20:00', 'delayed', INTERVAL '45 minutes', '2025-06-06 09:40:00', 'AF303'),
(7, 7, 7, 8, '2025-06-07 13:00:00', 'on time', INTERVAL '0 minutes', '2025-06-07 19:00:00', 'BA404'),
(8, 8, 8, 9, '2025-06-08 09:30:00', 'on time', INTERVAL '0 minutes', '2025-06-08 12:00:00', 'SQ505'),
(9, 9, 9, 10, '2025-06-09 17:50:00', 'delayed', INTERVAL '20 minutes', '2025-06-09 22:15:00', 'TK606'),
(10, 10, 10, 11, '2025-06-10 23:00:00', 'on time', INTERVAL '0 minutes', '2025-06-11 06:30:00', 'CX707'),
(11, 11, 11, 12, '2025-06-11 15:25:00', 'on time', INTERVAL '0 minutes', '2025-06-12 00:15:00', 'KL808'),
(12, 12, 12, 13, '2025-06-12 12:00:00', 'delayed', INTERVAL '15 minutes', '2025-06-12 17:45:00', 'JL909'),
(13, 13, 13, 14, '2025-06-13 05:45:00', 'on time', INTERVAL '0 minutes', '2025-06-13 09:10:00', 'UA010'),
(14, 14, 14, 15, '2025-06-14 19:00:00', 'on time', INTERVAL '0 minutes', '2025-06-15 01:30:00', 'EY111'),
(15, 15, 15, 1, '2025-06-15 07:00:00', 'delayed', INTERVAL '60 minutes', '2025-06-15 12:00:00', 'LX212');
