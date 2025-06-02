CREATE TABLE Airlines
(
    id   SERIAL PRIMARY KEY,
    nam  VARCHAR(10),
    code VARCHAR(10)
);

CREATE TABLE Aircrafts
(
    id           SERIAL PRIMARY KEY,
    model        VARCHAR(10),
    registration VARCHAR(10)
);

CREATE TABLE Airports
(
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(10),
    code    VARCHAR(10),
    city    VARCHAR(10),
    country VARCHAR(10)
);

CREATE TABLE Flights
(
    id                SERIAL PRIMARY KEY,
    airline_id        INT REFERENCES Airlines (id),
    aircraft_id       INT REFERENCES Aircrafts (id),
    departure_airport INT REFERENCES Airports (id),
    arrival_airport   INT REFERENCES Airports (id),
    departure_time    DATE,
    status            VARCHAR(10),
    delay             INTERVAL,
    arrival_time      DATE,
    flight_number     VARCHAR(10)
);