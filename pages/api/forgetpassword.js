import connectDB from "@/middleware/mongoose";
import user from "../../models/usermodel";


const handler = async (req, res) => {
    

    try {
        
         const { email } = req.body;

         const dummyUser = await user.find({ email });

         if (dummyUser) {
         } else {
           res.status(404).json({
             status: "error",
             msg: "user not found, please check the credentials",
           });
         }

    } catch (error) {
        
        console.log("error at forget  password", error);
        res.status(404).json({
            msg: error.message,
            status: "internal server error"
        });

    }
   
}



export default connectDB(handler);