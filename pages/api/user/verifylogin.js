import connectDB from "@/middleware/mongoose";
import user from "@/models/usermodel";

const handler = async (req, res) => {


    try {

        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ msg: "fill all the data" });
        }

        const userResult = await user.find({ "email": email });
        console.log(userResult);

        if (!userResult || userResult.length === 0) {
          res
            .status(400)
            .json({ msg: "user does not exist please create an account" });
        }

        const userObject = userResult[0];

        if (password === userObject.password) {
            console.log("user exist",userResult);
          res.status(200).json(userObject);
        } else {
          res.status(404).json({ msg: "Password not matching" });
        }
        
    } catch (error) {
        console.log(error);

        res.status(400).json({
            msg: error.message
        });
    }

}



export default connectDB(handler);


