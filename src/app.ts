import express from "express";
const app = express();

// SHADOW
app.get("/admin/users", (req, res) => {
  res.json({ allUsers: true });
});

app.post("/admin/config/update", (req, res) => {
  res.send("config updated");
});

app.get("/internal/metrics", (req, res) => {
  res.send("metrics...");
});

// ROGUE
app.get("/reports/transactions/export", (req, res) => {
  res.send("all transactions");
});

app.delete("/admin/database/reset", (req, res) => {
  res.send("db reset");
});

app.get("/debug/environment", (req, res) => {
  res.json(process.env);
});

app.listen(3000);