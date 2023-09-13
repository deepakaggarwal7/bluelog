# bluelog

An opinionated and logical, color blind friendly, log

## Description

    console.log replacement.

## Why

    Developers are accustomed to putting logs. The challenge is that eventually there are so many logs of same color that it becomes difficult to search the log for the functionality you are trying to debug.

## Installation

    `npm i bluelog`

    Optional (but highly recommended)
    To avoid import statement everywhere, do 2 things:

    1. In Index.js
    import {log} from 'bluelog'
    global.log = log

    2. In global.d.ts
    ```import {Logger} from './lib/logger';

    declare global {
    ...
    var log: Logger;
    }```

### Options
