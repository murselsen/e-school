const registerParentController =  async (req,res,next) => {

    try {
        console.log("User information from registerParentController:", req.user);
        res.status(201).json({ message: "Parent registered successfully" });
    }
    catch (error) {
        next(error);
    }

}

export default registerParentController;