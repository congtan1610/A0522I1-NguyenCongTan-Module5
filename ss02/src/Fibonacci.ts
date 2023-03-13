function fibo(n: number): number {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibo(n - 2) + fibo(n - 1);
}
{
    let max = 10;
    let sum = 0;
    for (let i = 0; i <= max; i++) {
        console.log(fibo(i));
        sum += fibo(i);
    }
    console.log("Tổng của dãy trên là: " + sum);
}
