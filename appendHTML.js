var log = document.querySelector('#errores');

['log','warn', 'debug', 'info', 'error'].forEach(function (errType) {
    console[errType] = (function (method, errType, log) {
        return function (text) {
            method(text);
            // handle distinguishing between types
            var msg = document.createElement('code');
            msg.classList.add(errType);
            msg.textContent = errType + ': ' + text;
            log.appendChild(msg);
            log.appendChild(document.createElement('br'))

        };
    })(console[errType].bind(console), errType, log);
});

console.log('hola mundo');
console.error('hello')
// console.error('hello world')
try {
  var myCode = require('./theirCode')
} catch (e) {
  console.error(e)
}
