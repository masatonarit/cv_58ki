//課題5-1

const items = [
    {n:100,},
    {a:a,b:[bc],c:[{`100`:footer}]},
    

]

console.log(items[0].n)//=>100
console.log(items[1].a.b[0])//=>abc
console.log(items[1].c[`100`]) //=>footer


//課題5-2

const json =
{

}


const obj = JSON.parse(json)
console.log(obj.total) // => 2
console.log(obj.items[0].name) //=> Item 123
console.log(obj.items[0].id) //=> 123
console.log(obj.items[1].name) //=> Item 456
console.log(obj.items[1].id) //=> 456
console.log(obj.next.id) //=> 789