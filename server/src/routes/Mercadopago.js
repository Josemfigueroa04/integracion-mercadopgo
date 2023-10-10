require('dotenv').config();
const {Router} = require('express');
const mercadopago=require('mercadopago');
const Mercado_Pago = Router();

const ACCESS_TOKEN= "TEST-4373077966006737-051301-ad3c3831ef310ebec2ac6ef102efbb08-247542537"

// const {ACCESS_TOKEN} = process.env;

console.log(ACCESS_TOKEN)

if (ACCESS_TOKEN) {
    mercadopago.configure({
        access_token: ACCESS_TOKEN,
    });
}

Mercado_Pago.post('/', async(req, res) => {
    try{

        const producto = req.body;
        const preference = {
             items: [
                {
                    title: "cocacola",
                    picture_url: 'https://www.cocacoladechile.cl/content/dam/GO/cocacola/brands/coca-cola/original/1.5l/1.5l-bottle.png',
                    unit_price: 200,
                    currency_id: 'ARS',
                    quantity:1,
                    description: "buena",
                },
            ],

            back_urls: {
                success: 'http://localhost:4000/success',
                failure: 'http://localhost:4000/failure',
                pending: 'http://localhost:4000/pending',
            },

            auto_return: 'approved',
        };

        const response = await mercadopago.preferences.create(preference);

        res.status(200).send({response});
        console.log(response);



    }catch(error){
        console.log(error);
        res.status(500).json(error.message);
    }
});

module.exports = Mercado_Pago;