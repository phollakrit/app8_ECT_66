const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')   //สำหรับแบ่งเพจ

mongoose.connect('mongodb://0.0.0.0:27017/db1', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(result => console.log('Connection OK'))
.catch(err => console.log(err))

let productSchema = new mongoose.Schema({
	name: String,
	price: Number,
    detail: String,
	date_added: Date
})

productSchema.plugin(paginate)			//สำหรับแบ่งเพจ

let Product = mongoose.model('Product', productSchema)
console.log('Product model created')
module.exports = Product
