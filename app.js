"use strict";
// const x = (str: string): number | string => {
//     return
// };
//
// const x = (str: string):void => {
//     якщо ф немає ретурну то пишемо воід(пустота)
// };
exports.__esModule = true;
// type User = {name:string, age: number, status:boolean};
// interface IUser <T> {
//     name:string,
//     age: number,
//     status:boolean,
//     data: T
// };
// const user: IUser= {name: 'Max', age: 22, status: true};
// const user: Partial<IUser> = {name: 'Max', age: 22, status: true}; /*Partial - частина юзера*/
// const user:IUser<number[]> = {name: 'Max', age: 22, status: true, data: [15,  22 ,22]} /*any = можна передати все*/
// class User{
//     id: number;
//     name: string;
//     age: number
//
//     constructor(id: number, name: string, age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }
// class User{
//     // private - означає що змінна буде доступна тільки всередині цього класу
//     // punlic - дозволить використовувати змінну всередині цього класу
//     // protected - видно в класі нащадка
//
//     constructor(private id: number, private name: string, private age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }
// імплементація методів
// interface IShapeAction {
//     area:() => number,
//     perimeter: () => number
// }
//
// interface IGreating {
//     hello: () => void
// }
//
// class Rectangle implements IShapeAction, IGreating {
//     constructor(private a:number, private b:number) {
//     }
//     hello(): void {
//         console.log('Hello');
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2;
//     }
// }
//
// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.area());
//
//
// class Triangle implements IShapeAction {
//     constructor(private a:number, private b:number, private c:number) {
//     }
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.c * 2 / this.b;
//     }
// }
//
// const shapes: IShapeAction[] = [new Rectangle(2, 5), new Triangle(1, 2, 3)];
//
// for (let share of shapes) {
//     console.log(share.area());
//     console.log(share.perimeter());
// }
// **********
// import {userService} from "./services";
// //
// userService.getAll().then(value => console.log(value.data[0].username))
var services_1 = require("./services");
services_1.userService.getById(2).then(function (_a) {
    var data = _a.data;
    return console.log(data.address.city);
});
