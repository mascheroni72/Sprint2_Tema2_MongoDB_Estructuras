
var mongoose = require('mongoose');var Schema = mongoose.Schema;var Proveedores = new Schema({proveedor_id: {type: Schema.Types.ObjectId, required: true},nombre: {type: String},Direccion: {
calle: {type: String},numero: {type: Number},piso: {type: String},ciudad: {type: String},cp: {type: Number},pais: {type: String}},telefono: {type: String},fax: {type: String},nif: {type: String}}); 