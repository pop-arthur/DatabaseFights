CREATE OR REPLACE FUNCTION get_flight_duration(flight_id INT)
RETURNS INTERVAL
STABLE
AS $$
DECLARE
    duration INTERVAL;
BEGIN
    SELECT (arrival_time - departure_time + delay)
    INTO duration
    FROM Flights
    WHERE id = flight_id;

    RETURN duration;
END;
$$ LANGUAGE plpgsql;
