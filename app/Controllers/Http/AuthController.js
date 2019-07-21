'use strict';

class AuthController {
  async login({
    response,
    request,
    view
  }) {
    return view.render('signIn');
  }

  async register({
    response,
    request,
    view
  }) {
    return view.render('signUp');
  }

   async handleLogin({
     response,
     request,
     view
   }) {
     return view.render('signUp');
   }

    async handleRegister({
      response,
      request,
      view
    }) {
      return view.render('signUp');
    }
}

module.exports = AuthController;
