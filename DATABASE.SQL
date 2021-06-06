-- CREATE DATABASE "react_gallery"

-- TABLE STRUCTURE
CREATE TABLE "image_gallery" (
    id SERIAL PRIMARY KEY,
    path VARCHAR(500),
    description VARCHAR(199),
    likes NUMERIC DEFAULT 0
);

INSERT INTO "image_gallery" (path, description)
VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
    ('images/pic_of_bear.png', 'Photo of a bear taken at Yellowstone National Park.'),
    ('images/sasquatch_unknown.png', 'Photo of Sasquatch, Unknown Location.'),
    ('images/yeti_unknown.jpeg', 'Photo of the mysterious Yeti. Rumor has it, Yeti''s are from Nepal.'),
    ('images/santa-stripe-gremlin.jpeg', 'Who needs the Grinch, When Santa Gremlin is here to steal all the presents?'),
    ('images/baby_yoda.jpeg', 'Don''t let the cuteness fool yah, this little creature is VERY powerful.');