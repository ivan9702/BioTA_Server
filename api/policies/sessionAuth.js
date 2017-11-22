/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
  var params = req.allParams();
  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (req.session.user) {
        req.session.user = "good"; //每次重新補上
        return next();
  }else if( req.url.substr(0,4)=="/api" ){
        //使用API的 不要直接給SESSION
        return next();
  }else{
        //沒有SESSION的阻擋
        return res.redirect('/');
  }
};