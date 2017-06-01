const $ = jQuery = require("./node_modules/jquery/dist/jquery.min.js");
const Hammer = require('./node_modules/hammerjs/hammer.min.js');
const xlsx = require('xlsx');

$(document).ready(function() {
    $('select').material_select();
});