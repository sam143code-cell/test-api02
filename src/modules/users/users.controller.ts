import express from "express";
const router = express.Router();

// BOLA vulnerable
router.get("/api/v1/users/:userId", (req, res) => {
  res.json({ userId: req.params.userId, pan: "ABCDE1234F" });
});

// Mass assignment
router.put("/api/v1/users/:userId", (req, res) => {
  res.json(req.body);
});

// Delete without checks
router.delete("/api/v1/users/:userId", (req, res) => {
  res.send("deleted");
});

export default router;