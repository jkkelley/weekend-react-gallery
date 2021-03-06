const express = require("express");
const router = express.Router();
// const galleryItems = require("../modules/gallery.data");
const pool = require("../modules/pool.js");
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Routes
router.put("/like/:id", (req, res) => {
  console.log(req.params);

  // We update the likes by 1 each click.
  const queryText = `UPDATE "image_gallery" SET "likes"=likes+1 WHERE "id" = $1;`;
  // No fancy for loop here, just good ol' hand washing
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      // Send back an OK message
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`HEY, FIRE... ${error}`);
    });
}); // END PUT Route

router.put("/favorite_button/:id", (req, res) => {
  // Set the action clicked data from client to variable
  const favoriteAction = req.body.data;
  // Update DB favorite_button
  console.log(favoriteAction)
  const queryText = `
    UPDATE "image_gallery" SET "favorite_button"=$1 WHERE "id"=$2;
  `;

  pool
    .query(queryText, [favoriteAction, req.params.id])
    .then((result) => {
      // Send back OK
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Your favorite button click had an... ${error}`);
      // Send the lost in space code
      res.sendStatus(500);
    });
});

// GET Route
router.get("/", (req, res) => {
  // Need a query to the DB
  const queryText = `SELECT * FROM "image_gallery" ORDER BY "id";`;
  pool
    .query(queryText)
    .then((result) => {
      // send back the rows please
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Capt, We got an... ${error}`);
      // Better send back a lost in space code
      res.sendStatus(500);
    });
}); // END GET Route

// POST Route
router.post("/", (req, res) => {
  // De-structure keys from the body
  const { path, description } = req.body;

  // Query to insert data
  const queryText = `
      INSERT INTO "image_gallery" (path, description)
      VALUES ($1, $2);
    `;

  const values = [path, description];

  // Rumor has it, this has been SANITIZED...
  pool
    .query(queryText, values)
    .then((result) => {
      // Send back a fulfilled code
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`The post routes on FIRE... ${error}`);
      res.sendStatus(500);
    });
});

// DELETE Route
router.delete("/:id", (req, res) => {
  const imageToDelete = [req.params.id];
  const queryText = `
    DELETE FROM "image_gallery" WHERE "id" = $1;
  `;

  // Nice day for a swim, Let's check out the...
  pool
    .query(queryText, imageToDelete)
    .then((result) => {
      // Send them back a OK
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Sorry your DELETION wasn't handled... ${error}`);
      // I don't know how these keep getting lost.
      res.sendStatus(500);
    });
});

module.exports = router;
