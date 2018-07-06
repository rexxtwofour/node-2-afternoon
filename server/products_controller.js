module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { name, description, price, imageurl } = req.body;
  
      dbInstance.create_product([ name, description, price, imageurl ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: "There was an issue"});
          console.log(err)
        } );
    },
  
    getOne: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req;
  
      dbInstance.read_product([ params.id ])
        .then( product => res.status(200).send( product ) )
        .catch( err => {
          res.status(500).send({errorMessage: "hey there was a problem"});
          console.log(err)
        } );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_products()
        .then( products => res.status(200).send( products ) )
        .catch( err => {
          res.status(500).send({errorMessage: "something went wrong!"});
          console.log(err)
        } );
    },
  
    update: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params, query } = req;
  
      dbInstance.update_product([ params.id, query.desc ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: "there is a problem here"});
          console.log(err)
        } );
    },
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req;
  
      dbInstance.delete_product([ params.id ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: "This is not working"});
          console.log(err)
        } );
    }
  };