"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperUser = exports.User = void 0;
class User {
    constructor(name, login, password, grade) {
        if (!Number.isInteger(grade) || grade <= 0) {
            throw new Error('grade должен быть положительным целым числом');
        }
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        if (new.target === User) {
            User.count++;
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get login() {
        return this._login;
    }
    set login(value) {
        console.log('Невозможно изменить логин!');
    }
    get password() {
        return '********';
    }
    set password(value) {
        this._password = value;
    }
    get grade() {
        return 'Неизвестное свойство grade';
    }
    set grade(value) {
        console.log('Неизвестное свойство grade');
    }
    showInfo() {
        console.log(`Name: ${this.name}, Login: ${this.login}`);
    }
    eq(other) {
        return this._grade === other._grade;
    }
    lt(other) {
        return this._grade < other._grade;
    }
    gt(other) {
        return this._grade > other._grade;
    }
}
exports.User = User;
User.count = 0;
class SuperUser extends User {
    constructor(name, login, password, role, grade = 1) {
        super(name, login, password, grade);
        this._role = role;
        SuperUser.count++;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    showInfo() {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
    }
}
exports.SuperUser = SuperUser;
SuperUser.count = 0;
