var watcher = require('node-watch-changes');

const onStart = (spawn) => {
  console.log('Watcher is running...');
};

const onChange = async (events, spawn) => {
  await spawn('npm run icon');
};

const onEnd = (spawn) => {
  console.log('Watcher is terminating.');
};

var config = {
  directory: 'src/assets/icons/', // The directory which will be watched for changes. If falsy, the parent directory of this module will be watched. Can be a string or an array of strings.
  ignore: [ // ignore can be a string, regex, function or an array containing any of them. Has to be anymatch compatible, see https://github.com/es128/anymatch
    /node_modules/,
    /\.git/
  ],
  delay: 400, // Delay the execution of the commands on change in ms
  verbosity: 'verbose', // Possible values are: minimal, normal, verbose
  onStart: onStart,
  onChange: onChange,
  onEnd: onEnd
};
watcher(config);
