CREATE TABLE Airlines
(
    id   SERIAL PRIMARY KEY,
    nam  VARCHAR(40),
    code VARCHAR(20)
);

CREATE TABLE Aircrafts
(
    id           SERIAL PRIMARY KEY,
    model        VARCHAR(20),
    registration VARCHAR(20)
);

CREATE TABLE Airports
(
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(40),
    code    VARCHAR(20),
    city    VARCHAR(20),
    country VARCHAR(20)
);

CREATE TABLE Flights
(
    id                SERIAL PRIMARY KEY,
    airline_id        INT REFERENCES Airlines (id),
    aircraft_id       INT REFERENCES Aircrafts (id),
    departure_airport INT REFERENCES Airports (id),
    arrival_airport   INT REFERENCES Airports (id),
    departure_time    TIMESTAMP,
    status            VARCHAR(20),
    delay             INTERVAL,
    arrival_time      TIMESTAMP,
    flight_number     VARCHAR(20)
);