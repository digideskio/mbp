app.get('/signup', UserController.signupGet);
app.post('/signup', UserController.signupPost);
app.get('/login', UserController.loginGet);
app.post('/login', UserController.loginPost);
app.get('/forgot', UserController.forgotGet);
app.post('/forgot', UserController.forgotPost);
app.get('/reset/:token', UserController.resetGet);
app.post('/reset/:token', UserController.resetPost);
