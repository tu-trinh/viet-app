module.exports = function(app, dbs) {
 
    // app.get('/production', (req, res) => {
    //   dbs.production.collection('test').find({}).toArray((err, docs) => {
    //     if (err) {
    //       console.log(err)
    //       res.error(err)
    //     } else {
    //       res.json(docs)
    //     }
    //   })
    // })
   
    app.get('/testbooks', (req, res) => {
      dbs.marketing.collection('Books').find({}).toArray((err, docs) => {
        if (err) {
          console.log(err)
          res.error(err)
        } else {
          res.json(docs)
        }
      })
    })

    app.get('/test', (req,res) => {
        res.send('good');
      })
   
    return app
  }