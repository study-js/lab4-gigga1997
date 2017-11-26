
function min(a,b,c){
    var check=a;
    if(check>b)
    check=b;
    if(check>c)
    check=c;
    return check;
}
var latest=min(34,23,11);
alert (latest);
