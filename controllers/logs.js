const express = require("express");
const router = express.Router();

const Log = require("../models/captainLogs");

// Routes...
// Index ----------- GET -------- /things
router.get("/", (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render("Index", { logs: allLogs });
  });
});

// New ------------- GET -------- /things/new
router.get("/new", (req, res) => {
  res.render("New");
});

// DELETE ---------- Destroy ---- /things/:id
router.delete("/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/logs");
  });
});

// Update ---------- PUT -------- /things/:id
router.put("/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
    res.redirect(`/logs/${req.params.id}`); //
  });
});

// Create ---------- POST ------- /things
router.post("/", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Log.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
  });
});

// Edit------------- GET -------- /things/:id/edit
router.get("/:id/edit", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    if (!err) {
      res.render("Edit", {
        log: foundLog,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Show ------------ GET -------- /things/:id
router.get("/:id", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    res.render("Show", {
      log: foundLog,
    });
  });
});

module.exports = router;
