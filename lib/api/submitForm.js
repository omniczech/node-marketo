var _ = require('lodash'),
  Promise = require('bluebird'),
  util = require('../util'),
  Retry = require('../retry'),
  MarketoStream = require('../stream'),
  log = util.logger();

function SubmitForm(marketo, connection) {
    this._marketo = marketo;
    this._connection = connection;
    this._retry = new Retry({ maxRetries: 10, initialDelay: 30000, maxDelay: 60000 });
}

SubmitForm.prototype = {
    create: function (filter, options) {
        var path = util.createBulkPath('activities', 'export', 'create.json');
        options = _.extend({}, options, {
          filter: filter,
        });
        return this._connection.postJson(path, options, { _method: 'POST' });
      },
    submit: function(body){
        console.log(body)
    }
}