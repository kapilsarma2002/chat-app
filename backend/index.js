const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const axios = require("axios");

  app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // Get or create user on Chat Engine!
    try {
      // @ts-ignore
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "068a2e46-637d-4ddc-9142-7be478f272f8" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  });
});

app.listen(3001);