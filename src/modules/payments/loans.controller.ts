import express from "express";
const router = express.Router();

router.post("/api/v1/loans/apply", (req, res) => {
  res.send("loan applied");
});

router.get("/api/v1/loans/:id/status", (req, res) => {
  res.send("status");
});

export default router;