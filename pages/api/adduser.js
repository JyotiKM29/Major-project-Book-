// next js router
import user from "../../models/usermodel";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    

    const { name, age, email, phone, city, state, type, password } = req.body;

    
    try {
      const existUser = await user.find({ email }).exec();
        console.log("user exist", existUser);


      if (existUser && existUser.length > 0) {
        return res.status(400).json({ msg: "User already exists, please login" });
        return;
      }

        let newUser = new user({
          name,
          age,
          email,
          phone,
          city,
          state,
          type,
          password,
        });

      await newUser.save();
      console.log("Data saved in the database");

      return res.status(200).json({ success: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving data:", error);

      // Check for specific database error (e.g., validation error)
      if (error.name === "ValidationError") {
        return res.status(400).json({ error: error.message });
      } else {
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  } else {
    return res.status(404).json({ error: "This method is not allowed here" });
  }
};

export default connectDb(handler);
