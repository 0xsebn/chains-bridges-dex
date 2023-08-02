const axios = require("axios");
const fs = require("fs");

async function createTable() {
  // Fetch the data
  const response = await axios.get("https://li.quest/v1/chains");
  const data = response.data;

  // Start the table
  let table =
    "| Number | State | Name | Key | ID |\n| ------ | ----- | ---- | --- | -- |\n";

  // Loop through the chains and add each one to the table
  data.chains.forEach((chain, index) => {
    table += `| ${index + 1} | | ${chain.name} | ${chain.key} | ${
      chain.id
    } |\n`;
  });

  // Write the table to a file
  fs.writeFileSync("chains.md", table);
}

createTable();
