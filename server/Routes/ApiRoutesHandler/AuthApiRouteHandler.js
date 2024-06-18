import { getSession } from 'next-auth/client';
import { AuthMiddleware } from '../../Middleware/AuthMiddleware.js';

export default handler=async(req, res)=>{
    const authResult=AuthMiddleware(req);
    if (authResult.redirected){
        return res.redirect(authResult.redirect);
    }
    const session=await getSession({req});
    if (!session){
        return res.status(401).json({ message: 'User is not authenticated' });
    }
    res.status(200).json({ message: 'Authorized access to the API Route' });
}