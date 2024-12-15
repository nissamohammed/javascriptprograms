//w.a.p to print common numbers from a given arrays
p=[10,11,12,20,30]
q=[11,20,25,30,33]//output: 11,20,30

/*
isP=false
for(let i of p){
    for(let j of q){
        if(i==j){
            isP=true
            console.log(j);
        }
    }
}
!isP && console.log('no common numbers');
*/


/*using binary search method*/
a=0
b=0
isp=false
while (a<p.length && b<q.length) {
    if(p[a]==q[b]){
        console.log(p[a]);
        isp=true
        a++
        b++
    }
    else if(p[a]>q[b]){
        b++
    }
    else{
        a++
    }
    
}
!isp && console.log('no common numbers');