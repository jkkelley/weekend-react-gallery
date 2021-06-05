-- CREATE DATABASE "react_gallery"

-- TABLE STRUCTURE
CREATE TABLE "image_gallery" (
    id SERIAL PRIMARY KEY,
    path VARCHAR(500),
    description VARCHAR(500),
    likes INT
);

INSERT INTO "image_gallery" (path, description, likes)
VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
    ('images/pic_of_bear.png', 'Photo of a bear taken at Yellowstone National Park.', 0),
    ('images/sasquatch_unknown.png', 'Photo of Sasquatch, Unknown Location.', 0),
    ('images/yeti_unknown.jpeg', 'Photo of the mysterious Yeti. Rumor has it, Yeti''s are from Nepal.', 0),
    ('images/santa-stripe-gremlin.jpeg', 'Who needs the Grinch, When Santa Gremlin is here to steal all the presents?', 0),
    ('images/baby_yoda.jpeg', 'Don''t let the cuteness fool yah, this little creature is VERY powerful.', 0);