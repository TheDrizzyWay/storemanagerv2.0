'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Creating tables...');

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return pool.query('CREATE TABLE IF NOT EXISTS users(\n      id UUID PRIMARY KEY,\n      first_name VARCHAR(50) NOT NULL,\n      last_name VARCHAR(50) NOT NULL,\n      email VARCHAR(100) UNIQUE NOT NULL,\n      password VARCHAR(100) NOT NULL,\n      role VARCHAR(20) NOT NULL,\n      created_at TIMESTAMPTZ DEFAULT NOW(),\n      updated_at TIMESTAMPTZ DEFAULT NULL)');

                case 2:
                    _context.next = 4;
                    return pool.query('CREATE TABLE IF NOT EXISTS products(\n      id UUID PRIMARY KEY,\n      name VARCHAR(50) UNIQUE NOT NULL,\n      description TEXT NOT NULL,\n      price float NOT NULL,\n      quantity integer NOT NULL,\n      minimum_quantity integer NOT NULL,\n      imgUrl text NOT NULL,\n      category VARCHAR(100) DEFAULT NULL,\n      created_at TIMESTAMPTZ DEFAULT NOW(),\n      updated_at TIMESTAMPTZ DEFAULT NULL)');

                case 4:
                    _context.next = 6;
                    return pool.query('CREATE TABLE IF NOT EXISTS categories(\n      id UUID PRIMARY KEY,\n      name VARCHAR(50) UNIQUE NOT NULL,\n      created_at TIMESTAMPTZ DEFAULT NOW(),\n      updated_at TIMESTAMPTZ DEFAULT NULL)');

                case 6:
                    _context.next = 8;
                    return pool.query('CREATE TABLE IF NOT EXISTS sales(\n      sale_id UUID PRIMARY KEY,\n      product_id UUID NOT NULL,\n      name VARCHAR(50) NOT NULL,\n      price float NOT NULL,\n      quantity_sold integer NOT NULL,\n      total float NOT NULL,\n      seller_id UUID NOT NULL,\n      sold_at TIMESTAMPTZ DEFAULT NOW(),\n      FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE,\n      FOREIGN KEY (seller_id) REFERENCES users (id) ON DELETE CASCADE)');

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
}))();
//# sourceMappingURL=createtables.js.map