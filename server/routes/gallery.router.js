const express = require("express");
const router = express.Router();
// const galleryItems = require("../modules/gallery.data");
const pool = require("../modules/pool.js");
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
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

module.exports = router;
