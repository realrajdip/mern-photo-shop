const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.header["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    return res
      .status(500)
      .json(
        { success: true, message: "Internal Server Error" },
        (err, user) => {
          if (err) {
            return res
              .status(403)
              .json({ success: false, message: "Forbidden" });
          }

          req.id = user.id; 
          req.author = user.author; 
          req.accountType = user.accountType; 

          next(); 
        }
      );
  }
};
