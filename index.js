// const srikanth_raghavan="2";

// const { reject } = require("any-promise");
// const { resolve } = require("path");

// const { reject } = require("any-promise");
// const { resolve } = require("path");

// const { name } = require("commander");

// console.log(srikanth_raghavan);
// let a=1;
// console.log(a);
// console.log('hi how are you');
// console.log('hi how are you');
// var c=4;
// //let ar=[12,14,16,18]
// console.log(ar[2])
// let ao=["hi","hello","hey"]
// console.log(ao[1]);
// let ob={name:1};
// console.log(ob.name);
// var afh=[{abc:123},"hi",2]
// console.log(afh[0].abc);
// console.log(`hisri ${a}`)

// for(let i of ar){
//     console.log(i)
// }
//let a =[
    // 1,2,3,41,51,61,71]
// for (i=4; i<list.length; i++){
//     console.log(list[i])
// }
// for (let i of a ) {
//     console.log(i)
// }
// if(0<a.length){
//     console.log("gmgkug")
// }
// if (5<a.length){
//     console.log("hiiieee")
// }
// else {
//     console.log("jie")
// }

//
// let value ={
//     a:10,
//     b:20,
//     add: (c,d,e,f) => {
//         return value.a + value.b+c+d+e+f;
//     },
//     };
//     console.log(value.add(1,2,3,4));
// Constructor
// function Canditate (name, age, dob, std) {
//     this.name = name;
//     this.age = age;
//     this.dob = dob;
//     this.std = std;
//     this.getAll =() => {
//         return `${this.name} \n ${this.dob} ${this.age} ${this.std}\n` 
//     };
//     this.getData =() => {
//         return `${this.name} \n ${this.age} ${this.std}\n`
//     }
// }
// const c1 = new Canditate("Srikanth", 25, "02/12/1900", "11th");
// const c2 = new Canditate("Hari", 22, "01/01/2000", "10th");
// console.log(c1.getAll()+ c2.getData());
// class Student {
    
//     constructor(abc,def,ghi) {
//         this.abc = abc === undefined ?? abc ==="" ? "studentName": abc;
//         this.def = def ?? 20;
//         this.ghi = ghi ?? 25;
//     }
//     getData() {
//         return `${this.abc} ${this.def} ${this.ghi}`;
//     }
//     getabc() {
//         return this.abc;
//     }

// }
// const s1 = new Student("Srikanth");


// console.log(s1.getData());
// let a;
// a ??=10
// console.log(a);
// Try Block Catch
// try {
// const a="hello"
// a="hi"
// } catch(error) {
// console.log({success: false, message: error.message});
// }
// let a;
// let b;
// let c;
// try {
// throw Error ("hii how are you");
// } catch (error) {
//     console.log({ success: false, message: error,message});
// }
// finally {
//     console.log('Hello')
// }
// // Object methods
// console.log(object methods)
// const canditate = {
//     name: "srika",
//     role: "developer",
// };
// console.log(Object.entries(canditate));
// console.log(Object.keys(canditate));
// console.log(Object.values(canditate));

// call back
// function test (callback) {
//     callback("Hii");
// }

// test((value) => {
//     console.log (value);
// })
// function test (a,b,callme) {
//  hello=a+b;
//  callme(hello)
// }

// test(2,4, (value) => {
//     console.log(value);

// });
// const list=[2,4,6,8,10,12,14,16];

// function map(list,callback) {
//     for (let i of  list) {
// callback(i);
//     }
// }
// map(list,(e) => {
//     console.log (e);
// });
// list.map((e) => {
//     console.log (e);
// });
// class List {
//     constructor(list) {
//         this.list = list;
//     }

// map (callback) {
//     for(let i of this.list) {
// callback(i);    
// }
// }
// }

// const a= new List(list);
// a.map((i) => {
// console.log(i);
// });
// a.map((i) => {
//     console.log(i);
//     });a.map((i) => {
//         console.log(i);
//         });
// //Promise
// const test = new Promise((resolve, reject) => {
//     try {
//         const a=10;
//         resolve(a);
//     }
//     catch (error)
// {
//     reject (error);
// }
// });

// test
// .then((value) => {
//     console.log(value);
// })
// .catch((err) => {
//     console.log("error", err);
// }
// );
// const test = new Promise((resolve, reject) => {

//     resolve("Keep it up");
//     reject ("Try Again");
// });

// test
// .then((value) => {
//     console.log(value);
// })
// .catch((err) => {
//     console.log(err);
// }
// );
// function data (){
//     setTimeout(() => {
//         console.log(3)
//     }, 3000);
// }

// console.log(data());

// class MyPromise{
//     then(){
//          console.log("Hello")
//     }
// }
// const promise = new MyPromise();
// // promise.then();
// function data () {
//     try{
//         throw Error ("200");
//     } catch (err) {
//         throw Error(err.message);
//     }
// }
// function test(){
//     try{
//     }
//     catch (err){
//         console.log("test error", err);
//     }
// }
// test();
// const data = new Promise ((resolve, reject) => {
//     setInterval(() => {
//         resolve("Hii bruh");
//     }, 3000);
//     });
    
//     console.log(
//         data.then((value) => {
//             console.log(value);
//         })
//     );
    // async function data() {
    // setTimeout (() => {
    //     console.log ("HELLO");
    // },2000);    
    // }
    // await data();
    // console.log("Makkale");
    const myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve ('Hello');
        }, 2000);
    });
    async function data() {
        await myPromise.then((value) => {
            console.log(value);
            });
    }
   data
    console.log ("Makkale");