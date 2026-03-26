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

// Seeding Route (Protected)
router.post('/seed-data', isAdmin, async (req, res) => {
  try {
    const Slider = require('../models/Slider');
    const About = require('../models/About');
    const Plant = require('../models/Plant');
    const Service = require('../models/Service');
    const Counting = require('../models/Counting');
    const Machine = require('../models/Machine');
    const Client = require('../models/Client');
    const Gallery = require('../models/Gallery');
    const Faq = require('../models/Faq');

    // Slider
    if ((await Slider.countDocuments()) === 0) {
      await Slider.create({
        slider_title: 'Unlocking Sustainable Energy',
        img1: '1763210945526slider1.avif', desc1: 'Innovative Biomass Energy Solutions',
        img2: '1763210945558slider2.avif', desc2: 'Powering a Greener Tomorrow',
        img3: '1763210945564slider3.webp', desc3: 'Future-Proof Fuel Technology'
      });
    }

    // About
    if ((await About.countDocuments()) === 0) {
      await About.create({
        about_img: '1763215839614aboutus.webp',
        about_heading: 'Leading the Bio-Energy Revolution',
        about_desc: 'Virtual White Flame is dedicated to providing high-quality biomass solutions. We bridge the gap between industrial needs and environmental sustainability. Our commitment to green energy drives every innovation we bring to the market.'
      });
    }

    // Plants
    if ((await Plant.countDocuments()) === 0) {
      await Plant.create([
        { plants_name: 'Solaris Bio-Plant', plants_add: 'Industrial Area A', plants_mobile: '9876543210', plants_email: 'solaris@vwf.com', plants_img: '1763016951315plants1.webp', plants_desc: 'Our flagship processing plant utilizing state-of-the-art biomass conversion technology.' },
        { plants_name: 'Eco-Fusion Center', plants_add: 'Green Zone B', plants_mobile: '9876543211', plants_email: 'echo@vwf.com', plants_img: '1763017026178plants2.webp', plants_desc: 'High-efficiency extraction unit specializing in renewable fuel derivatives.' }
      ]);
    }

    // Services
    if ((await Service.countDocuments()) === 0) {
      await Service.create([
        { heading: 'Biomass Pelletizing', desc: 'Converting raw agricultural waste into high-density fuel pellets for industrial use.', view: 'View Details', img: '1763315462780service1.webp' },
        { heading: 'Supply Chain Management', desc: 'End-to-end supply chain solutions for reliable industrial bio-fuel distribution.', view: 'View Details', img: '1763315530140service2.webp' }
      ]);
    }

    // Counting
    if ((await Counting.countDocuments()) === 0) {
      await Counting.create([
        { counting_name: 'Projects Completed', counting_count: '250', counting_desc: 'Successfully delivered across major industrial regions.' },
        { counting_name: 'Satisfied Clients', counting_count: '120', counting_desc: 'Trusted by global leaders in energy production.' },
        { counting_name: 'CO2 Reduced', counting_count: '50kT', counting_desc: 'Significant impact on carbon footprint reduction.' }
      ]);
    }

    // Machines
    if ((await Machine.countDocuments()) === 0) {
      await Machine.create([
        { machines_name: 'Industrial Crusher X-100', working_img: '1763096626572machine1.webp', machines_dec: 'High-torque biomass crushing mechanism for diverse organic materials.' },
        { machines_name: 'Heat Exchanger Pro', working_img: '1763096666222machine2.webp', machines_dec: 'Advanced thermal regulation system for optimized bio-reactor performance.' }
      ]);
    }

    // Gallery
    if ((await Gallery.countDocuments()) === 0) {
      await Gallery.create([
        { heading: 'Annual Summit 2025', desc: 'Key highlights from our international energy conference.', view: 'View Gallery', img: '1763216524151gallery1.webp' },
        { heading: 'Plant Inauguration', desc: 'Celebrating the opening of our latest Solaris Bio-Plant facility.', view: 'View Gallery', img: '1763356288545gallery.jpg' }
      ]);
    }

    // FAQs
    if ((await Faq.countDocuments()) === 0) {
      await Faq.create([
        { heading: 'What is Biomass?', desc: 'Biomass is renewable organic material from plants and animals used as a sustainable energy source.' },
        { heading: 'How do you ensure sustainability?', desc: 'We source exclusively from certified sustainable providers and utilize low-emission processing techniques.' }
      ]);
    }

    res.json({ success: true, message: 'All empty sections have been seeded with dummy data!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Protected Admin Routes
router.get('/', isAdmin, (req, res) => res.render('admin/index.ejs', { currentPage: 'index', title: 'Dashboard' }));
router.get('/home', isAdmin, (req, res) => res.render('admin/home.ejs', { currentPage: 'home', title: 'Home Page Settings' }));
router.get('/about', isAdmin, (req, res) => res.render('admin/about.ejs', { currentPage: 'about', title: 'About Page Settings' }));
router.get('/services', isAdmin, (req, res) => res.render('admin/services.ejs', { currentPage: 'services', title: 'Services Settings' }));
router.get('/gallery', isAdmin, (req, res) => res.render('admin/gallery.ejs', { currentPage: 'gallery', title: 'Gallery Settings' }));
router.get('/contact', isAdmin, (req, res) => res.render('admin/contact.ejs', { currentPage: 'contact', title: 'Contact Settings' }));

module.exports = router;
