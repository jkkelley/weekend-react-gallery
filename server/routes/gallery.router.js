const express = require("express");
const router = express.Router();
// const galleryItems = require("../modules/gallery.data");
const pool = require("../modules/pool.js");
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  
  let number = 1;
  const queryText = `UPDATE "image_gallery" SET "likes"=likes+1 WHERE "id" = $1;`;

  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      // Send back an OK message
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`HEY, FIRE... ${error}`);
    });
  //   const galleryId = req.params.id;
  //   for (const galleryItem of galleryItems) {
  //     if (galleryItem.id == galleryId) {
  //       galleryItem.likes += 1;
  //     }
  //   }
  //   res.sendStatus(200);
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
  // res.send(galleryItems);
}); // END GET Route

module.exports = router;
