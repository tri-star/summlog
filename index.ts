import {createRequire} from 'module';
import meow from 'meow';

const cli = meow(`
    Usage
      $ summlog <input>

    Options
      --config, -c  Config file

    Examples
      $ summlog -c summlog.yml
`, {
    flags: {
        config: {
            type: 'string',
            alias: 'c',
            default: ''
        }
    }
});

console.log(cli.input, cli.flags);
