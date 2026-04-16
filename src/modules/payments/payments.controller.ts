import express from "express";
const router = express.Router();

router.post("/api/v1/payments/initiate", (req, res) => {
  res.send("payment initiated"); // no limit
});

router.get("/api/v1/payments/history", (req, res) => {
  res.json({ userId: req.query.userId }); // BOLA
});

router.post("/api/v1/payments/webhook", (req, res) => {
  res.send("webhook received"); // no signature validation
});

export default router;