import {createRequire} from 'module';
import meow from 'meow';

const cli = meow(`
    Usage
      $ verlog <input>

    Options
      --config, -c  Config file

    Examples
      $ verlog -c verlog.yml
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
