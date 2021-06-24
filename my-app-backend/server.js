const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const rappers = {
  "21 savage": {
    age: 28,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 27,
    birthName: "Chancelor Jonathan Bennett",
    birthLocation: "Chicago, Illinois",
  },
  test: {
    age: 28,
    birthName: "test",
    birthLocation: "test",
  },
};
// Query Parameter: listen to any value that is inside the URL
app.get("/api/rappers/:rapperName", (request, response) => {
  const rapName = request.params.rapperName.toLowerCase();

  if (rappers[rapName]) {
    response.json(rappers[rapName]);
  } else {
    response.json(rappers["dylan"]);
  }
});

app.listen(PORT, () => {
  console.log(`yayyy Server running on ${PORT}`);
});
