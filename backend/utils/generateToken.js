import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d' // Token will expire in 30 days
    })
res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // Ensures the cookie is not accessible via JavaScript && Prevent XSS attacks (cross-site scripting)
    sameSite: "strict", //CSFR attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development" // Ensures the cookie is only sent over HTTPS in production  
});
};

export default generateTokenAndSetCookie;
// This function generates a JWT token and sets it as an HTTP-only cookie in the response.