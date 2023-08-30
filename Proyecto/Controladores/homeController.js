const HomeController = {
  index: (req, res) => {
    res.render('index', { message: '¡Hola, mundo!' });
  }
};

module.exports = HomeController;

