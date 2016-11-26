export default class LocalDB {
    
    constructor(dbName = 'dbName') {

        if (!window.localStorage) {
            throw new Error('Not supports localStorage');
        }

        this.localDb = dbName;

        if (localStorage[dbName]) {
            this.db = JSON.parse(localStorage[dbName]);
        } else {
            this.db = {};
        }

    }

    getDb() {
        return this.db;
    }

    set(key, value) {
        if (key) {
            this.db[key] = value;

            return this._saveToLocalStorage();
        }

        throw new Error('set参数key不能为空');
    }

    get(key) {

        if (key) {
            var value = this.db[key];
            if (typeof value === 'undefined') {
                console.warn(key + '的值不存在');
            }
            return value || [];
        }

        throw new Error('get参数key不能为空');
    }

    clean() {
        this.db = {};
        this._saveToLocalStorage();
    }

    _saveToLocalStorage() {
        localStorage[this.localDb] = JSON.stringify(this.getDb());
    }

}