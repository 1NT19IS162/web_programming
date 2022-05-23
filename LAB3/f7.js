let disirium=(n)=>{ 
    let num=parseInt(n),c=0,t=0; 
    while(num>0) 
    { 
    c++; 
    num=parseInt(num/10); 
    } 
    let s=parseInt(0); 
    t=n; 
    while(n>0) 
    { 
    s=s+Math.pow(n%10,c); 
    c--; 
    n=parseInt(n/10); 
} 
if(t==s) 
return 1; 
else 
return 0; 
} 
for(let i=1;i<=100;i++) 
{ 
if(disirium(i)) 
console.log(i); 
} 