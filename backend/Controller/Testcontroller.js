const User = require("../models/usersignupSchema");

const schemafunction = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userDetails = await User.create({
      Name: name,
      Email: email,
      Password: password,
    });

    console.log("Data added:", userDetails);

    res.json(userDetails);
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error: "Failed to add data" });
  }
};

module.exports = schemafunction;
