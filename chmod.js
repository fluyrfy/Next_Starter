var chmod = require('chmod');
chmod('./.husky/pre-commit', 777);
console.log('husky pre-commit is set as executable');
