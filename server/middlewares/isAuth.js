import jwt from "jsonwebtoken"


const isAuth = async (req,res,next) => {
    try {
        let {token} = req.cookies

        if(!token){
            return res.status(401).json({message:"unauthorized: token missing"})
        }
        const verifyToken = jwt.verify(token , process.env.JWT_SECRET)
        
        if(!verifyToken){
            return res.status(401).json({message:"unauthorized: invalid token"})
        }
        req.userId = verifyToken.userId

        next()
   

    } catch (error) {
        // Clear stale/invalid token so client can re-auth cleanly.
        res.clearCookie("token")
        return res.status(401).json({ message: "unauthorized: invalid token" })
    }
    
}

export default isAuth