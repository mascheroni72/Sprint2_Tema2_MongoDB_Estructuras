
var mongoose = require('mongoose');var Schema = mongoose.Schema;var Gafas = new Schema({gafa_id: {type: Schema.Types.ObjectId, required: true},marca: {type: String},graduacion: {
izquierda: {type: Number},derecha: {type: Number}},montura: [{type: String}],color_montura: {type: String},color_cristal: {
izquierdo: {type: String},derecho: {type: String}},precio: {type: Number},proveedor_id: {type: Schema.Types.ObjectId}}); 