const { Client, Collection } = require('discord.js');

class Tempeh extends Client {
  constructor (opt) {
    super (opt);
    
    this.config = require('../config.json')
    this.queue = new Collection();
    this.util = new (require('./util.js'));
  }
}

module.exports = Tempeh;
