# Out-of-Band Verification Script
### A tool for simultaneously interacting with a range or list of hosts

This tool parses command line arguments or spreadsheet files to build a list of IP address or hostnames and simultaneously executes ping or SSH requests against multiple hosts.
Currently the tool functions as a command line utility, but it will ultimately serve as the back end of a web app.

## Overview

You can run the script using Node.js from within the root directory: `node index.js`


The tool currently takes four optional arguments:
```
    -d
        Run the script in directory mode and optionally specify the directory where the script will search for spreadsheets files containing IP addresses. If no directory path is provided, the script will fall back to the default provided in the config file.

    -f
        Run the script in file mode and parse the specified file. If no filename is provided, the script will default to directory mode.

    -p
        Specify a project number. In range mode, this number will form the first part of the log filename. In file mode, any argument provided will override the parsed filename provided.

    -r
        Ping a range of IP addresses. The script can parse ranges in XXX.XXX.XXX.XXX-XXX.XXX.XXX.YYY or XXX.XXX.XXX.XXX-YYY  format.
```

If no arguments are specified, the script will parse all spreadsheets in the default directory and ping all hosts listed in them.

## Example Usage

Ping 10.10.1.20 - 10.10.1.30 inclusive and specify the project number _987654_:
```
node index.js -r 10.10.1.20-30 -p 987654
```

Ping all hosts listed in the _654321.xls_:
```
node index.js -f ./spreadsheets/654321.xls
```

Ping all hosts listed in all files in the the _./hosts_ directory:
```
node index.js -d ./hosts/
```

## Features in Development
* API
* Web Front End
