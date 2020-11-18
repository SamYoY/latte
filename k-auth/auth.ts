import TokenAuth from './tokenAuth';
import JwtAuth from './jwtAuth';

class Auth {
  tokenAuth: TokenAuth;
  jwtAuth: JwtAuth;
  constructor() {
    this.tokenAuth = new TokenAuth();
    this.jwtAuth = new JwtAuth();
  }
  auth() {
    const token = '';
    
  }
}

export default Auth;