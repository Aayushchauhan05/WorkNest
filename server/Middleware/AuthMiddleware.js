export const AuthMiddleware=(req)=>{
    const currentUser=req.cookies.get('currentUser')?.value;
    if (currentUser && !req.nextUrl.pathname.startWith('/api/profile')){
        return Response.redirect(URL('/api/dashboard'), req.url);
    }
    if (!currentUser && !req.nextUrl.pathname.startWith('/api/login')){
        return Response.redirect(URL('/api/login'), req.url);
    }
}