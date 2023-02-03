export class Logger {
    log(str: string) {
        console.log('This is loggs', str);
    }

    logError(err: any) {
        console.error(err);
    }

    get config() {
        return { a: 1 }
    }
}