const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const objectID  = require('mongodb').ObjectID;
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');
app.use(bodyParser.urlencoded({ extended: true }));
var db;
const port = 3001;


app.use(express.static(path.join(__dirname + '/dist/druzja')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname));
});

let url =  'mongodb+srv://reazis:kostia@druzja-6w5ea.mongodb.net/test?retryWrites=true';
mongoClient.connect(url,{ useNewUrlParser: true }, function(err, database) {
  if (err) {
    return console.log(err)
  }
  db = database.db('druzja');

  app.listen(port, function () {
    console.log('API app start' + port)
  });
});

app.get('/employees', (req, res) => {
  db.collection('employees').find().toArray((err, docs) =>{
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    docs.map(item => {
      item.id = item._id;
      return item;
    });
    res.send(docs);
  })
  db.collection('ingredients').find().toArray((err, ingredientsData) => {
    ingredientsData.forEach(element => {
      
    });
  });
});
app.get('/employees/:id', (req, res) =>{  
  console.log(req.params.id);
  db.collection('employees').findOne({_id: objectID(req.params.id)}, (err, doc) =>{
    if (err) {
      console.log(err);
      return sendStatus(500);
    }
    doc.id = doc._id;
    res.send(doc)
  })
});
app.put('/employees/:id' , (req, res) =>{
  console.log(req.body);
  db.collection('employees').updateOne(
    {_id: objectID(req.params.id)},
    { $set: {firstName: req.body.firstName,
      secondName: req.body.secondName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      post: req.body.post,
      position: req.body.position,
      salaryRate: req.body.salaryRate,
      description: req.body.description,
      img: req.body.img,
    }}, (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send('200');
    });
});
app.delete('/employees/:id' , (req, res) =>{
  console.log(req.params.id);
  db.collection('employees').deleteOne(
    {_id: objectID(req.params.id)},
    (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send('200');
    });
});
app.post('/employees', function (req, res) {
  var employee = {
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    post: req.body.post,
    position: req.body.position,
    salaryRate: req.body.salaryRate,
    description: req.body.description,
    img: req.body.img,
    userData: {
      login: req.body.login,
      password: req.body.password,
      role: 'employee'
    }
  }
  db.collection('employees').insertOne((employee), (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  });
  db.collection('accounts').insertOne((employee.userData), (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json('200');
  });
});
app.post('/request', (req, res) => {
  var request = {
    employeeName: req.body.employeeName,
    clientName: req.body.clientName,
    email: req.body.email,
    comment: req.body.comment
  };
  console.log(request);
  db.collection('requests').insertOne((request), (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(null);
  });
});
app.get('/request', (req, res) => {
  db.collection('requests').find().toArray((err, docs) =>{
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    docs.map(item => {
      item.id = item._id;
      return item;
    });
    res.send(docs);
  })
});
app.delete('/request/:id' , (req, res) =>{
  db.collection('requests').deleteOne(
    {_id: objectID(req.params.id)},
    (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(JSON.stringify('true'));

    });

});
app.post('/login', (req, res) => {
db.collection('accounts').findOne({login: req.body.login}, (err, result) => {
  if (!result) {
    console.log('1');
    res.status(401).send('User not found');
  } else {
    if (result.password !== req.body.password) {
      res.status(401).send('Wrong password');
    } else {
      console.log('correct password');
      const payload = {
        subject: result._id,
        role: result.role
      };
      const token = jwt.sign(payload, 'loginKey');
      res.status(200).send({token});
    }
  }
})

});
app.get('/admin/:token', (req, res) => {
  const token = req.params.token;
  const payload = jwt.verify(token, 'loginKey');
  const _id = payload.subject;
  const role = payload.role;
  db.collection('accounts').findOne({
    _id: new objectID(_id)
  }, (err, result) => {
    if (result.role === 'admin') {
      console.log('its admin');
      res.send({yourRole:'admin'});
    } else {
      if (result.role === 'employee') {
        console.log(`its employee`);
        res.send({yourRole:'employee'});
      } else res.send({yourRole:'user'});
    }
  });
});

app.get('/dishes', (req, res) => {
  db.collection('dishes').find().toArray((err, docs) =>{
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    docs.map(item => {
      item.id = item._id;
      return item;
    });
    console.log(docs);
    res.send(docs);
  })
});
app.get('/dishes/:id', (req, res) =>{  
  console.log(req.params.id);
  db.collection('dishes').findOne({_id: objectID(req.params.id)}, (err, doc) =>{
    if (err) {
      console.log(err);
      return sendStatus(500);
    }
    doc.id = doc._id;
    res.send(doc)
  })
});
app.post('/dishes', (req, res) => {
  console.log(req.body);
  db.collection('dishes').insertOne((req.body), (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send('200');
  });
});
app.put('/dishes/:id' , (req, res) =>{
  db.collection('dishes').updateOne(
    {_id: objectID(req.params.id)},
    { $set: {type: req.body.type,
      dishName: req.body.dishName,
      cost: req.body.cost,
      description: req.body.description,
      img: req.body.img
    }}, (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send('200');
    });
});
app.delete('/dishes/:id' , (req, res) =>{
  console.log(req.params.id);
  db.collection('dishes').deleteOne(
    {_id: new objectID(req.params.id)},
    (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    });
  res.send('200');

});
app.get('/ingredients', (req, res) => {
  db.collection('ingredients').find().toArray((err, docs) =>{
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
});

app.post('/userOrder', (req, res) => {
  let arrayOfItems = req.body;
  /*arrayOfItems.forEach(element => {
    delete element._id;
  });*/
  const sendUserOrder = Object.assign({}, arrayOfItems);
  db.collection('usersOrders').insertOne((sendUserOrder), (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    };
  });
  res.send('200');
});
app.delete('/userOrder/:id' , (req, res) =>{
  console.log(objectID(req.params.id));
  db.collection('usersOrders').deleteOne(
    {_id: objectID(req.params.id)},
    (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    });
  res.send('200');
});
app.delete('/dishes/:id' , (req, res) =>{
  console.log(req.params.id);
  db.collection('dishes').deleteOne(
    {_id: objectID(req.params.id)},
    (err, result) => { 
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    });
  res.send('200');

});

app.get('/userOrder', (req, res) => {
  db.collection('usersOrders').find().toArray((err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    result.map(item => {
      item.id = item._id;
      return item;
    });
    res.send(result);
  });
});
