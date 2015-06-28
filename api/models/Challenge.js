/**
* Challenge.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    from: {
      model:'User'
    },
    to: {
      model:'User'
    },
    photoThermal: {
      model:'Photo'
    },
    photoVisual: {
      model:'Photo'
    },
    status: {
      type: 'string',
      defaultsTo: 'Unknown'
    },
    temperature: {
      type: 'integer',
      required: true
    },
    result: {
      type: 'integer',
      defaultsTo: 0
    }
  }
};
