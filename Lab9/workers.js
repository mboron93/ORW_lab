var interval;
n = 1;
p = 2;
run = function() {
    if(isPrime(p)) {
        postMessage(p);
    }
    p++;
}

isPrime = function(n){
    if (n < 2) return false;
    
    for(var i = 2; i * i <= n; i++) {
        if(n % i == 0) return false;
    }  
    return true;
}
interval = setInterval(run,500);