const N = 45;
function fibo(n) {
	if(n <= 1) return n;
	return fibo(n-1) + fibo(n-2);
}
var mem = Array(N).fill(undefined);
function fibo2(n) {
	if(n <= 1) return mem[n] = n;
	if(mem[n]==undefined) {
		return mem[n] = fibo2(n-1) + fibo2(n-2);
	} else {
		return mem[n];
	}
}

var dp = Array(N);
function fibo3(n) {
	dp[0] = 0; dp[1] = 1;
	for(var i=2; i<=n; i++) {
		dp[i] = dp[i-1] + dp[i-2];
	}
	return dp[n];
}