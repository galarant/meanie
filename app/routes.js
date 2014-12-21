module.exports = function(app) {
  // server routes ====================

  // NONE

  // frontend routes ==================

  //route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendFile('./public/views/index.html'); 
  });
};
