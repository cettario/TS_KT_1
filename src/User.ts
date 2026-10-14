export class User {
    static count = 0;

    private _name: string;
    private readonly _login: string;
    private _password: string;
    private _grade: number;

    constructor(name: string, login: string, password: string, grade: number) {
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

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        console.log('Невозможно изменить логин!');
    }

    get password(): string {
        return '********';
    }

    set password(value: string) {
        this._password = value;
    }

    get grade(): string {
        return 'Неизвестное свойство grade';
    }

    set grade(value: number | string) {
        console.log('Неизвестное свойство grade');
    }

    showInfo(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}`);
    }

    eq(other: User): boolean {
        return this._grade === other._grade;
    }

    lt(other: User): boolean {
        return this._grade < other._grade;
    }

    gt(other: User): boolean {
        return this._grade > other._grade;
    }
}

export class SuperUser extends User {
    static count = 0;

    private _role: string;

    constructor(name: string, login: string, password: string, role: string, grade = 1) {
        super(name, login, password, grade);
        this._role = role;
        SuperUser.count++;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    override showInfo(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
    }
}
