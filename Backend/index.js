var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mysql = require("mysql2");
var util = require("util");
var upload = require("express-fileupload");
var cors=require("cors")

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "project_a2z47",
});

var exe = util.promisify(conn.query).bind(conn);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(upload());
app.use(express.static("public/"));
app.use(cors())
app.use(express.json())

// Set EJS view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// ========== ADMIN DASHBOARD ==========
app.get("/", function (req, res) {
  res.render("admin/index.ejs");
});

app.get("/home",function(req,res){
  res.render("admin/home.ejs")
})

app.get("/about",function(req,res){
  res.render("admin/about.ejs")
})

app.get("/services",function(req,res){
  res.render("admin/services.ejs")
})

app.get("/gallery",function(req,res){
  res.render("admin/gallery.ejs")
})

app.get("/contact",function(req,res){
  res.render("admin/contact.ejs")
})

// ====================================
// ========== SLIDER SECTION ==========
// ====================================

app.get("/slider", function (req, res) {
  res.render("slider/home.ejs");
});

app.get("/add_slider", function (req, res) {
  res.render("slider/add_slider.ejs");
});

app.post("/save_slider", async function (req, res) {
  try {
    if (!req.files || !req.files.img1 || !req.files.img2 || !req.files.img3) {
      return res.send("Please upload all three images!");
    }

    var filename1 = Date.now() + req.files.img1.name;
    req.files.img1.mv("public/" + filename1);

    var filename2 = Date.now() + req.files.img2.name;
    req.files.img2.mv("public/" + filename2);

    var filename3 = Date.now() + req.files.img3.name;
    req.files.img3.mv("public/" + filename3);

    var d = req.body;
    var sql = `INSERT INTO slider (slider_title, img1, img2, img3)
               VALUES ('${d.slider_title}','${filename1}','${filename2}','${filename3}')`;
    await exe(sql);
    res.redirect("/list_slider");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading slider");
  }
});

app.get("/list_slider", async function (req, res) {
  var sql = "SELECT * FROM slider";
  var result = await exe(sql);
  res.render("slider/list.ejs", { result });
});

app.get("/delete_slider/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM slider WHERE id=${id}`;
  await exe(sql);
  res.redirect("/list_slider");
});

app.get("/edit_slider/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `SELECT * FROM slider WHERE id=${id}`;
  var result = await exe(sql);
  res.render("slider/update_slider.ejs", { result });
});

app.post("/update_slider", async function (req, res) {
  var id = req.body.id;
  var d = req.body;

  if (req.files) {
    if (req.files.img1) {
      var filename1 = Date.now() + req.files.img1.name;
      req.files.img1.mv("public/" + filename1);
      await exe(`UPDATE slider SET img1='${filename1}' WHERE id=${id}`);
    }
    if (req.files.img2) {
      var filename2 = Date.now() + req.files.img2.name;
      req.files.img2.mv("public/" + filename2);
      await exe(`UPDATE slider SET img2='${filename2}' WHERE id=${id}`);
    }
    if (req.files.img3) {
      var filename3 = Date.now() + req.files.img3.name;
      req.files.img3.mv("public/" + filename3);
      await exe(`UPDATE slider SET img3='${filename3}' WHERE id=${id}`);
    }
  }

  await exe(`UPDATE slider SET slider_title='${d.slider_title}' WHERE id=${id}`);
  res.redirect("/list_slider");
});


app.get("/slider_api",async function(req,res){
   var sql = "SELECT * FROM slider";
  var result = await exe(sql);
  res.json({"da":result})
})
// ====================================
// ========== PLANTS SECTION ==========
// ====================================

app.get("/plants", function (req, res) {
  res.render("plants/home.ejs");
});

app.get("/add_plants", function (req, res) {
  res.render("plants/add_plants.ejs");
});

app.post("/save_plants", async function (req, res) {
  try {
    if (!req.files) {
      return res.send("Please upload a plant image!");
    }

    var filename1 = Date.now() + req.files.plants_img.name;
    req.files.plants_img.mv("public/" + filename1);

    var d = req.body;
    var sql = `INSERT INTO plants (plants_name, plants_add, plants_mobile, plants_email, plants_img)
               VALUES ('${d.plants_name}','${d.plants_add}','${d.plants_mobile}','${d.plants_email}','${filename1}')`;
    await exe(sql);
    res.redirect("/list_plants");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading plant data");
  }
});

app.get("/list_plants", async function (req, res) {
  var sql = "SELECT * FROM plants";
  var result = await exe(sql);
  res.render("plants/list.ejs", { result });
});

app.get("/delete_plants/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM plants WHERE id=${id}`;
  await exe(sql);
  res.redirect("/list_plants");
});

app.get("/edit_plants/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `SELECT * FROM plants WHERE id=${id}`;
  var result = await exe(sql);
  res.render("plants/update.ejs", { result });
});

app.post("/update_plants", async function (req, res) {
  var id = req.body.id;
  var d = req.body;

  if (req.files) {
    var filename1 = Date.now() + req.files.plants_img.name;
    req.files.plants_img.mv("public/" + filename1);
    await exe(`UPDATE plants SET plants_img='${filename1}' WHERE id=${id}`);
  }

  var sql = `UPDATE plants SET
             plants_name='${d.plants_name}',
             plants_add='${d.plants_add}',
             plants_mobile='${d.plants_mobile}',
             plants_email='${d.plants_email}'
             WHERE id=${id}`;
  await exe(sql);
  res.redirect("/list_plants");
});


app.get("/plants_api",async function(req,res){
  var sql = "SELECT * FROM plants";
  var result = await exe(sql);
  res.json({"da":result})
})




// ====================================
// ========== Counting SECTION ==========
// ====================================

app.get("/counting", function (req, res) {
  res.render("counting/home.ejs");
});

app.get("/add_counting", function (req, res) {
  res.render("counting/add_counting.ejs");
});


app.post("/save_counting", async function (req, res) {
  try {
   
    var d = req.body;
    var sql = `INSERT INTO counting (counting_name, counting_count)
               VALUES ('${d.counting_name}','${d.counting_count}')`;
    await exe(sql);
    res.redirect("/counting_list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading plant data");
  }
});

app.get("/counting_list", async function (req, res) {
  var sql = "SELECT * FROM counting";
  var result = await exe(sql);
  res.render("counting/counting_list.ejs", { result });
});

app.get("/delete_counting/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM counting WHERE id=${id}`;
  await exe(sql);
  res.redirect("/counting_list");
});

app.get("/edit_counting/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `SELECT * FROM counting WHERE id=${id}`;
  var result = await exe(sql);
  res.render("counting/counting_update.ejs", { result });
});

app.post("/update_counting", async function (req, res) {
  var id = req.body.id;
  var d = req.body;

  

  var sql = `UPDATE counting SET
             counting_name='${d.counting_name}',
             counting_count='${d.counting_count}'
             WHERE id=${id}`;
  await exe(sql);
  res.redirect("/counting_list");
});

app.get("/counting_api",async function(req,res){
  var sql = "SELECT * FROM counting";
  var result = await exe(sql);
  res.send({"da":result})
})



// ====================================
// ========== Working SECTION ==========
// ====================================

app.get("/working", function (req, res) {
  res.render("working/home.ejs");
});

app.get("/add_working", function (req, res) {
  res.render("working/add_working.ejs");
});

app.post("/save_working", async function (req, res) {
  try {
    var d = req.body;
    var filename = Date.now() + req.files.working_img.name;
    req.files.working_img.mv("public/" + filename);

    var sql = `INSERT INTO working (working_name, working_img)
               VALUES ('${d.working_name}', '${filename}')`;
    await exe(sql);
    res.redirect("/working_list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving working data");
  }
});

app.get("/working_list", async function (req, res) {
  var sql = "SELECT * FROM working";
  var result = await exe(sql);
  res.render("working/working_list.ejs", { result });
});

app.get("/delete_working/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM working WHERE id=${id}`;
  await exe(sql);
  res.redirect("/working_list");
});

app.get("/edit_working/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `SELECT * FROM working WHERE id=${id}`;
  var result = await exe(sql);
  res.render("working/working_update.ejs", { result });
});

app.post("/update_working", async function (req, res) {
  try {
    var id = req.body.id;
    var d = req.body;
    var filename = req.files ? Date.now() + req.files.working_img.name : null;

    if (filename) {
      req.files.working_img.mv("public/" + filename);
      var sql = `UPDATE working SET 
                  working_name='${d.working_name}', 
                  working_img='${filename}' 
                WHERE id=${id}`;
    } else {
      var sql = `UPDATE working SET 
                  working_name='${d.working_name}'
                WHERE id=${id}`;
    }
    await exe(sql);
    res.redirect("/working_list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating working data");
  }
});

// ✅ API route
app.get("/working_api", async function (req, res) {
  var sql = "SELECT * FROM working";
  var result = await exe(sql);
  res.send({ "da": result });
});



// ====================================
// ========== CLIENT SECTION ==========
// ====================================

app.get("/client", function(req, res){
  res.render("client/home.ejs");
});

app.get("/add_client", function(req, res){
  res.render("client/add_client.ejs");
});

app.post("/save_client", async function(req, res){
  try {
    var d = req.body;

    var logo = Date.now() + req.files.client_logo.name;
    req.files.client_logo.mv("public/" + logo);

    var img = Date.now() + req.files.client_img.name;
    req.files.client_img.mv("public/" + img);

    var sql = `INSERT INTO client (client_logo, client_desc, client_name, client_add, client_img)
               VALUES ('${logo}', '${d.client_desc}', '${d.client_name}', '${d.client_add}', '${img}')`;

    await exe(sql);
    res.redirect("/client_list");

  } catch(err){
    console.log(err);
    res.send("Error while saving client");
  }
});


app.get("/client_list", async function(req, res){
  var sql = "SELECT * FROM client";
  var result = await exe(sql);
  res.render("client/client_list.ejs", { result });
});


app.get("/delete_client/:id", async function(req, res){
  var id = req.params.id;
  var sql = `DELETE FROM client WHERE id=${id}`;
  await exe(sql);
  res.redirect("/client_list");
});


app.get("/edit_client/:id", async function(req, res){
  var id = req.params.id;
  var sql = `SELECT * FROM client WHERE id=${id}`;
  var result = await exe(sql);
  res.render("client/client_update.ejs", { result });
});


app.post("/update_client", async function(req, res){
  try {
    var id = req.body.id;
    var d = req.body;

    var sql = `UPDATE client SET 
               client_name='${d.client_name}',
               client_desc='${d.client_desc}',
               client_add='${d.client_add}'
               WHERE id=${id}`;

    await exe(sql);

    res.redirect("/client_list");

  } catch(err){
    console.log(err);
    res.send("Error updating client");
  }
});


app.get("/client_api", async function(req, res){
  var sql = "SELECT * FROM client";
  var result = await exe(sql);
  res.send({ da: result });
});




// ====================================
// ========== MACHINES SECTION ==========
// ====================================

// Show home
app.get("/machines", function (req, res) {
  res.render("machines/home.ejs");
});

// Show add page
app.get("/add_machines", function (req, res) {
  res.render("machines/add_machines.ejs");
});

// Save Machine
app.post("/save_machines", async function (req, res) {
  try {
    let file = req.files.working_img;
    let filename = Date.now() + file.name;
    file.mv("public/" + filename);

    let d = req.body;

    let sql = `INSERT INTO machines(machines_name, working_img, machines_dec)
               VALUES ('${d.machines_name}','${filename}','${d.machines_dec}')`;

    await exe(sql);
    res.redirect("/machines_list");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error inserting machine");
  }
});

// List Machines
app.get("/machines_list", async function (req, res) {
  let sql = "SELECT * FROM machines";
  let result = await exe(sql);
  res.render("machines/machines_list.ejs", { result });
});

// Delete Machine
app.get("/delete_machines/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `DELETE FROM machines WHERE id=${id}`;
  await exe(sql);
  res.redirect("/machines_list");
});

// Edit Page
app.get("/edit_machines/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `SELECT * FROM machines WHERE id=${id}`;
  let result = await exe(sql);
  res.render("machines/machines_update.ejs", { result });
});

// Update Machine
app.post("/update_machines", async function (req, res) {
  let id = req.body.id;
  let d = req.body;

  let filename = d.oldimg;

  if (req.files && req.files.working_img) {
    let file = req.files.working_img;
    filename = Date.now() + file.name;
    file.mv("public/" + filename);
  }

  let sql = `UPDATE machines SET 
              machines_name='${d.machines_name}',
              machines_dec='${d.machines_dec}',
              working_img='${filename}'
             WHERE id=${id}`;

  await exe(sql);
  res.redirect("/machines_list");
});

// API
app.get("/machines_api", async function (req, res) {
  const sql = "SELECT * FROM machines";
  const result = await exe(sql);
  res.send({ da: result });
});


// ====================================
// ========== ABOUT IMAGE SECTION =====
// ====================================

// Show Home Page
app.get("/about_img", function (req, res) {
  res.render("about_image/home.ejs");
});

// Add Page
app.get("/add_about_img", function (req, res) {
  res.render("about_image/add_about_img.ejs");
});

// Save Image
app.post("/save_about_img", async function (req, res) {
  try {
    let file = req.files.about_img;
    let filename = Date.now() + file.name;
    file.mv("public/" + filename);

    let sql = `INSERT INTO about_img(about_img)
               VALUES ('${filename}')`;

    await exe(sql);
    res.redirect("/about_img_list");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error inserting about image");
  }
});

// List Images
app.get("/about_img_list", async function (req, res) {
  let sql = "SELECT * FROM about_img";
  let result = await exe(sql);
  res.render("about_image/about_img_list.ejs", { result });
});

// Delete Image
app.get("/delete_about_img/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `DELETE FROM about_img WHERE id=${id}`;
  await exe(sql);
  res.redirect("/about_img_list");
});

// Edit Page
app.get("/edit_about_img/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `SELECT * FROM about_img WHERE id=${id}`;
  let result = await exe(sql);
  res.render("about_image/about_img_update.ejs", { result });
});

// Update Image
app.post("/update_about_img", async function (req, res) {
  let id = req.body.id;
  let filename = req.body.oldimg;

  if (req.files && req.files.about_img) {
    let file = req.files.about_img;
    filename = Date.now() + file.name;
    file.mv("public/" + filename);
  }

  let sql = `UPDATE about_img SET 
              about_img='${filename}'
             WHERE id=${id}`;

  await exe(sql);
  res.redirect("/about_img_list");
});

app.get("/about_img_api",async function(req,res){
   let sql = "SELECT * FROM about_img";
  let result = await exe(sql);
  res.json({"da":result})
})


// ====================================
// ========== ABOUT SECTION ============
// ====================================

// Home Page
app.get("/aboutus", function (req, res) {
  res.render("about/home.ejs");
});

// Add Page
app.get("/add_about", function (req, res) {
  res.render("about/add_about.ejs");
});

// Save About
app.post("/save_about", async function (req, res) {
  try {
    let file = req.files.about_img;
    let filename = Date.now() + file.name;
    file.mv("public/" + filename);

    let d = req.body;

    let sql = `INSERT INTO about(about_img, about_heading, about_desc)
               VALUES ('${filename}', '${d.about_heading}', '${d.about_desc}')`;

    await exe(sql);
    res.redirect("/about_list");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error inserting about");
  }
});

// List About
app.get("/about_list", async function (req, res) {
  let sql = "SELECT * FROM about";
  let result = await exe(sql);
  res.render("about/about_list.ejs", { result });
});

// Delete
app.get("/delete_about/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `DELETE FROM about WHERE id=${id}`;
  await exe(sql);
  res.redirect("/about_list");
});

// Edit Page
app.get("/edit_about/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `SELECT * FROM about WHERE id=${id}`;
  let result = await exe(sql);
  res.render("about/about_update.ejs", { result });
});

// Update
app.post("/update_about", async function (req, res) {
  let id = req.body.id;
  let d = req.body;

  let filename = d.oldimg;

  if (req.files && req.files.about_img) {
    let file = req.files.about_img;
    filename = Date.now() + file.name;
    file.mv("public/" + filename);
  }

  let sql = `UPDATE about SET 
              about_img='${filename}',
              about_heading='${d.about_heading}',
              about_desc='${d.about_desc}'
             WHERE id=${id}`;

  await exe(sql);
  res.redirect("/about_list");
});

app.get("/about_api",async function(req,res){
   let sql = "SELECT * FROM about";
  let result = await exe(sql);
  res.json({"da":result})
})



// ====================================
// ========== FAQ SECTION =============
// ====================================

// Home Page
app.get("/faq", function (req, res) {
  res.render("faq/home.ejs");
});

// Add Page
app.get("/add_faq", function (req, res) {
  res.render("faq/add_faq.ejs");
});

// Save FAQ
app.post("/save_faq", async function (req, res) {
  try {
    let d = req.body;

    let sql = `INSERT INTO faq(que, ans)
               VALUES ('${d.que}', '${d.ans}')`;

    await exe(sql);
    res.redirect("/faq_list");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error inserting FAQ");
  }
});

// List FAQ
app.get("/faq_list", async function (req, res) {
  let sql = "SELECT * FROM faq";
  let result = await exe(sql);
  res.render("faq/faq_list.ejs", { result });
});

// Delete
app.get("/delete_faq/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `DELETE FROM faq WHERE id=${id}`;
  await exe(sql);
  res.redirect("/faq_list");
});

// Edit Page
app.get("/edit_faq/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `SELECT * FROM faq WHERE id=${id}`;
  let result = await exe(sql);
  res.render("faq/faq_update.ejs", { result });
});

// Update
app.post("/update_faq", async function (req, res) {
  let id = req.body.id;
  let d = req.body;

  let sql = `UPDATE faq SET 
              que='${d.que}',
              ans='${d.ans}'
             WHERE id=${id}`;

  await exe(sql);
  res.redirect("/faq_list");
});

// API
app.get("/faq_api", async function (req, res) {
  let sql = "SELECT * FROM faq";
  let result = await exe(sql);
  res.json({ da: result });
});


// ====================================
// ========== SERVICE IMAGE SECTION =====
// ====================================

// Show Home Page
app.get("/service_img", function (req, res) {
  res.render("service_img/home.ejs");
});

// Add Page
app.get("/add_service_img", function (req, res) {
  res.render("service_img/add_service_img.ejs");
});

// Save Image
app.post("/save_service_img", async function (req, res) {
  try {
    let file = req.files.service_img;
    let filename = Date.now() + file.name;
    file.mv("public/" + filename);

    let sql = `INSERT INTO service_img(service_img)
               VALUES ('${filename}')`;

    await exe(sql);
    res.redirect("/service_img_list");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error inserting about image");
  }
});

// List Images
app.get("/service_img_list", async function (req, res) {
  let sql = "SELECT * FROM service_img";
  let result = await exe(sql);
  res.render("service_img/service_img_list.ejs", { result });
});

// Delete Image
app.get("/delete_service_img/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `DELETE FROM service_img WHERE id=${id}`;
  await exe(sql);
  res.redirect("/service_img_list");
});

// Edit Page
app.get("/edit_service_img/:id", async function (req, res) {
  let id = req.params.id;
  let sql = `SELECT * FROM service_img WHERE id=${id}`;
  let result = await exe(sql);
  res.render("service_img/service_img_update.ejs", { result });
});

// Update Image
app.post("/update_service_img", async function (req, res) {
  let id = req.body.id;
  let filename = req.body.oldimg;

  if (req.files && req.files.service_img) {
    let file = req.files.service_img;
    filename = Date.now() + file.name;
    file.mv("public/" + filename);
  }

  let sql = `UPDATE service_img SET 
              service_img='${filename}'
             WHERE id=${id}`;

  await exe(sql);
  res.redirect("/service_img_list");
});

app.get("/service_img_api",async function(req,res){
   let sql = "SELECT * FROM service_img";
  let result = await exe(sql);
  res.json({"da":result})
})


// ============================
// Services
// ============================

// Show Home Page
app.get("/service", function (req, res) {
  res.render("service/home.ejs");
});

// Add service
app.get("/add_service", (req, res) => {
  res.render("service/add_service.ejs");
});

// Save Item
app.post("/save_service", async (req, res) => {
  try {
    if (!req.files) return res.send("Please upload an image!");
    let filename = Date.now() + req.files.img.name;
    req.files.img.mv("public/" + filename);

    let d = req.body;
    let sql = `INSERT INTO services (heading, \`desc\`, view, img)
               VALUES ('${d.heading}','${d.desc}','${d.view}','${filename}')`;
    await exe(sql);
    res.redirect("/list_service");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving item");
  }
});

// List Items
app.get("/list_service", async (req, res) => {
  let sql = "SELECT * FROM services";
  let result = await exe(sql);
  res.render("service/list_Service.ejs", { result });
});

// Delete Item
app.get("/delete_service/:id", async (req, res) => {
  let id = req.params.id;
  await exe(`DELETE FROM services WHERE id=${id}`);
  res.redirect("/list_service");
});

// Edit Item
app.get("/edit_service/:id", async (req, res) => {
  let id = req.params.id;
  let result = await exe(`SELECT * FROM services WHERE id=${id}`);
  res.render("service/update_Service.ejs", { result });
});

// Update Item
app.post("/update_service", async (req, res) => {
  let id = req.body.id;
  let d = req.body;

  if (req.files) {
    let filename = Date.now() + req.files.img.name;
    req.files.img.mv("public/" + filename);
    await exe(`UPDATE services SET img='${filename}' WHERE id=${id}`);
  }

  let sql = `UPDATE services SET
             heading='${d.heading}',
             \`desc\`='${d.desc}',
             view='${d.view}'
             WHERE id=${id}`;
  await exe(sql);
  res.redirect("/list_service");
});

app.get("/service_api",async function(req,res){
  let sql = "SELECT * FROM services";
  let result = await exe(sql);
  res.json({da:result})
})




// ====================================
// ========== Gallery SECTION ==========
// ====================================

// Home Page
app.get("/gallerys", function (req, res) {
  res.render("gallery/home.ejs");
});

// Add Page
app.get("/add_gallery", function (req, res) {
  res.render("gallery/add_gallery.ejs");
});

// Save Gallery
app.post("/save_gallery", async function (req, res) {
  try {
    var d = req.body;
    var filename = Date.now() + req.files.img.name;
    req.files.img.mv("public/" + filename);

    var sql = `INSERT INTO gallery (img_name, img)
               VALUES ('${d.img_name}', '${filename}')`;
    await exe(sql);
    res.redirect("/gallery_list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving gallery data");
  }
});

// Gallery List
app.get("/gallery_list", async function (req, res) {
  var sql = "SELECT * FROM gallery";
  var result = await exe(sql);
  res.render("gallery/gallery_list.ejs", { result });
});

// Delete Gallery
app.get("/delete_gallery/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM gallery WHERE id=${id}`;
  await exe(sql);
  res.redirect("/gallery_list");
});

// Edit Gallery
app.get("/edit_gallery/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `SELECT * FROM gallery WHERE id=${id}`;
  var result = await exe(sql);
  res.render("gallery/gallery_update.ejs", { result });
});

// Update Gallery
app.post("/update_gallery", async function (req, res) {
  try {
    var id = req.body.id;
    var d = req.body;
    var filename = req.files ? Date.now() + req.files.img.name : null;

    if (filename) {
      req.files.img.mv("public/" + filename);
      var sql = `UPDATE gallery SET 
                  img_name='${d.img_name}', 
                  img='${filename}' 
                WHERE id=${id}`;
    } else {
      var sql = `UPDATE gallery SET 
                  img_name='${d.img_name}'
                WHERE id=${id}`;
    }
    await exe(sql);
    res.redirect("/gallery_list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating gallery data");
  }
});

// ✅ API route
app.get("/gallery_api", async function (req, res) {
  var sql = "SELECT * FROM gallery";
  var result = await exe(sql);
  res.send({ "da": result });
});

// ====================================
// ========== Gallery Image SECTION ==========
// ====================================

// Home Page
app.get("/gallery_img", function (req, res) {
  res.render("gallery_img/home.ejs");
});

// Add Page
app.get("/add_gallery_img", function (req, res) {
  res.render("gallery_img/add_gallery.ejs");
});

// Save Gallery Image
app.post("/save_gallery_img", async function (req, res) {
  try {
    var filename = Date.now() + req.files.gallery_img.name;
    req.files.gallery_img.mv("public/" + filename);

    var sql = `INSERT INTO gallery_img (gallery_img) VALUES ('${filename}')`;
    await exe(sql);
    res.redirect("/gallery_img_list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving gallery image");
  }
});

// Gallery List
app.get("/gallery_img_list", async function (req, res) {
  var sql = "SELECT * FROM gallery_img";
  var result = await exe(sql);
  res.render("gallery_img/gallery_list.ejs", { result });
});

// Delete Gallery Image
app.get("/delete_gallery_img/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM gallery_img WHERE id=${id}`;
  await exe(sql);
  res.redirect("/gallery_img_list");
});

// Edit Gallery Image
app.get("/edit_gallery_img/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `SELECT * FROM gallery_img WHERE id=${id}`;
  var result = await exe(sql);
  res.render("gallery_img/gallery_update.ejs", { result });
});

// Update Gallery Image
app.post("/update_gallery_img", async function (req, res) {
  try {
    var id = req.body.id;
    var filename = req.files ? Date.now() + req.files.gallery_img.name : null;

    if (filename) {
      req.files.gallery_img.mv("public/" + filename);
      var sql = `UPDATE gallery_img SET gallery_img='${filename}' WHERE id=${id}`;
    } else {
      var sql = `UPDATE gallery_img SET gallery_img=gallery_img WHERE id=${id}`;
      // No new file → keep old image
    }

    await exe(sql);
    res.redirect("/gallery_img_list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating gallery image");
  }
});

// ✅ API route
app.get("/gallery_img_api", async function (req, res) {
  var sql = "SELECT * FROM gallery_img";
  var result = await exe(sql);
  res.send({ "data": result });
});



// ====================================
// ======== Contact Image SECTION ======
// ====================================

// Home Page
app.get("/contact_img", function (req, res) {
  res.render("contact_img/home.ejs");
});

// Add Page
app.get("/add_contact_img", function (req, res) {
  res.render("contact_img/add_contact.ejs");
});

// Save Contact Image
app.post("/save_contact_img", async function (req, res) {
  try {
    var filename = Date.now() + req.files.contact_img.name;
    req.files.contact_img.mv("public/" + filename);

    var sql = `INSERT INTO contact_img (contact_img) VALUES ('${filename}')`;
    await exe(sql);
    res.redirect("/contact_img_list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving contact image");
  }
});

// Contact List
app.get("/contact_img_list", async function (req, res) {
  var sql = "SELECT * FROM contact_img";
  var result = await exe(sql);
  res.render("contact_img/contact_list.ejs", { result });
});

// Delete Contact Image
app.get("/delete_contact_img/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM contact_img WHERE id=${id}`;
  await exe(sql);
  res.redirect("/contact_img_list");
});

// Edit Contact Image
app.get("/edit_contact_img/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `SELECT * FROM contact_img WHERE id=${id}`;
  var result = await exe(sql);
  res.render("contact_img/contact_update.ejs", { result });
});

// Update Contact Image
app.post("/update_contact_img", async function (req, res) {
  try {
    var id = req.body.id;
    var filename = req.files ? Date.now() + req.files.contact_img.name : null;

    if (filename) {
      req.files.contact_img.mv("public/" + filename);
      var sql = `UPDATE contact_img SET contact_img='${filename}' WHERE id=${id}`;
    } else {
      var sql = `UPDATE contact_img SET contact_img=contact_img WHERE id=${id}`;
    }

    await exe(sql);
    res.redirect("/contact_img_list");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating contact image");
  }
});

// API route
app.get("/contact_img_api", async function (req, res) {
  var sql = "SELECT * FROM contact_img";
  var result = await exe(sql);
  res.send({ "data": result });
});

app.listen(1000, () => console.log("✅ Server running on http://localhost:1000"));
