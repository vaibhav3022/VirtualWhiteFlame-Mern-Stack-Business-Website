const express = require('express');
const router = express.Router();

// Authentication Middleware
const isAdmin = (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    return next();
  }
  res.redirect('/login');
};

// Login Routes
router.get('/login', (req, res) => {
  if (req.session.isAdmin) return res.redirect('/');
  res.render('admin/login.ejs', { error: null });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    req.session.isAdmin = true;
    return res.redirect('/');
  }
  res.render('admin/login.ejs', { error: 'Invalid username or password' });
});

// Logout Route
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// Protected Admin Routes
router.get('/', isAdmin, (req, res) => res.render('admin/index.ejs', { currentPage: 'index', title: 'Dashboard' }));
router.get('/home', isAdmin, (req, res) => res.render('admin/home.ejs', { currentPage: 'home', title: 'Home Page Settings' }));
router.get('/about', isAdmin, (req, res) => res.render('admin/about.ejs', { currentPage: 'about', title: 'About Page Settings' }));
router.get('/services', isAdmin, (req, res) => res.render('admin/services.ejs', { currentPage: 'services', title: 'Services Settings' }));
router.get('/gallery', isAdmin, (req, res) => res.render('admin/gallery.ejs', { currentPage: 'gallery', title: 'Gallery Settings' }));
router.get('/contact', isAdmin, (req, res) => res.render('admin/contact.ejs', { currentPage: 'contact', title: 'Contact Settings' }));

module.exports = router;
