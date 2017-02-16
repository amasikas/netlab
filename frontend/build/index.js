/**
 * Created by saki on 2017/2/9.
 */
module.exports = require(`./webpack.config.${process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}`);