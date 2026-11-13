import jwt from 'jsonwebtoken';
export function auth(req,res,next){try{const h=req.headers.authorization||'';const token=h.startsWith('Bearer ')?h.slice(7):null;if(!token)return res.status(401).json({message:'Unauthorized access'});req.user=jwt.verify(token,process.env.JWT_SECRET);next()}catch(e){return res.status(401).json({message:'Invalid or expired token'})}}
export function roles(...allowed){return (req,res,next)=>allowed.includes(req.user.role)?next():res.status(403).json({message:'Forbidden'})}
