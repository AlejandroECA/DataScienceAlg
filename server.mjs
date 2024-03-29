import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import dotenv from 'dotenv'
import stripe from 'stripe'
import compression from 'compression'

import enforce from 'express-sslify'

if (process.env.NODE_ENV !== 'production'){
    dotenv.config()
}

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

stripe(process.env.STRIPE_SECRET_KEY)

const app = express();
const port = process.env.PORT || 5000

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader:true }))


if(process.env.NODE_ENV === 'production'){
    
    app.use(enforce.HTTPS({ trustProtoHeader: true }));

    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*',function(req,res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.get('/',function(req,res){
    console.log('you hit me?');
    res.send('Test response')
})

app.listen(port, error =>{
    if(error) throw error;
    console.log('Server runing on port ' + port);
})

app.get('/service-worker.js',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '..','build','service-worker.js'))
})

app.post('/payment', (req, res) => {

    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
            
            if(stripeErr){
                res.status(500).send({error: stripeErr});
            } else {
                res.status(200).send({success: stripeRes});
            }

        });
    }
)