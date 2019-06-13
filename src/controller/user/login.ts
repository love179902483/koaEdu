import jwt from 'jsonwebtoken';
import { haha } from '../../common/global';


function login(){
    const token = jwt.sign({foo:'bar'},'shhh');

    const olderTokern = jwt.sign({foot:'bar',iat:Math.floor(Date.now()/1000) - 30},'shhh');
    // const cert = 
    console.log(haha.memeda)
} 

export {login} 