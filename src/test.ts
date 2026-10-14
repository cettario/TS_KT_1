import { User, SuperUser } from './User';

function assert(condition: boolean, message: string): void {
    if (!condition) {
        throw new Error(message);
    }
}

const first = new User('Первый', 'first', 'abc', 3);
const second = new User('Второй', 'second', 'def', 2);
const third = new User('Третий', 'third', 'ghi', 3);
const admin = new SuperUser('Администратор', 'admin', '1234', 'admin', 5);

assert(User.count === 3, 'Счётчик User');
assert(SuperUser.count === 1, 'Счётчик SuperUser');
assert(first.lt(second) === false, 'Метод lt');
assert(admin.gt(third) === true, 'Метод gt');
assert(first.eq(third) === true, 'Метод eq');
assert(first.password === '********', 'Пароль не скрыт');
assert(first.grade === 'Неизвестное свойство grade', 'Скрытие grade');

first.name = 'Изменено';
first.password = 'new-password';
admin.role = 'moderator';
assert(first.name === 'Изменено', 'Изменение имени');
assert(admin.role === 'moderator', 'Изменение роли');

second.login = 'other';
assert(second.login === 'second', 'Логин был изменён');
admin.grade = 15;
assert(admin.gt(first), 'Закрытый grade изменился');

let errorFound = false;
try {
    new User('Неверный', 'bad', 'pass', 0);
} catch {
    errorFound = true;
}
assert(errorFound, 'Проверка положительного целого grade');
console.log('Все проверки пройдены.');
