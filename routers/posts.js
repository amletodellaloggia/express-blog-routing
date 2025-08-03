// Importo express e definisco router
const express = require(`express`);
const router = express.Router();

// Definisco rotte dei posts
// Index
router.get("/", (req, res) => {
  res.send("Lista dei post");
});
// Show
router.get("/:id", (req, res) => {
  res.send(`Dettaglio del post con ID: ${req.params.id}`);
});
// Create
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});
// Update
router.put("/:id", (req, res) => {
  res.send(`Modifica totale del post con ID: ${req.params.id}`);
});
// Patch
router.patch("/:id", (req, res) => {
  res.send(`Modifica parziale del post con ID: ${req.params.id}`);
});
// Delete
router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post con ID: ${req.params.id}`);
});

// Esporto il router
module.exports = router;
