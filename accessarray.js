fruits = ['apple','mango','strawberry','kiwi','pineapple']
for(index=0;index<fruits.length;index++)
{
    console.log(fruits[index]);
}

//another method
for(let i in fruits){
    console.log(fruits[i]);
}

//another method
for(let i of fruits){
    console.log(i);
}