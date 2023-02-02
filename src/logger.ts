class Logger {
    log(str: string) {
        console.log('This is loggs', str);
    }

    logError(err: any) {
        console.error(err);
    }
}

export default Logger;