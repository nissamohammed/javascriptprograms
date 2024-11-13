a=[10,11,12,3,2,4]
//1) sort the given array in ascending order
searchItem=103
low=0
up=a.length-1
isPresent=false
a.sort((a,b)=>a-b)
console.log(a);
while(low<=up){
mid = Math.floor ( (low + up) / 2)
if(a[mid]==searchItem){
    
    isPresent=true
    break
}
else if(a[mid]>searchItem){
    up=mid-1
}
else{
    low=mid+1
}
}
console.log(isPresent?'present':'not present');