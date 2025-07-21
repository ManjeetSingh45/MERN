//var is globally scoped therefore introduces error whereas const and let are block scoped
//var can be updated and redeclared in the same scope
//let can be updated but not redeclared in the same scope
//const can neither be updated nor redeclared
let a="me";
{
    let a="you";
    console.log(a);
}
console.log(a);
//var will change the value in second declaration therefore output of both console will be same which is you