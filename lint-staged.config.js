//  15.2.10 => node version > 16
module.exports = {
  '*.{vue,js,jsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,less,scss,html,md}': ['prettier --write'],
  'package.json': ['prettier --write']
}
