'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleDroppedFiles = require('./handleDroppedFiles');

var _handleDroppedFiles2 = _interopRequireDefault(_handleDroppedFiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDndFileUploadPlugin = function createDndFileUploadPlugin() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    // Handle file drops
    handleDroppedFiles: (0, _handleDroppedFiles2.default)(config)
  };
};

exports.default = createDndFileUploadPlugin;