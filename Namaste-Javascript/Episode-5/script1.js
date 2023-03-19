var a = 10; // This is the global space
// Function b is in the global space but whatever is inside the function b() is not in the global space
function b(){
    var y = 5; // Variable Y is not inside the global space.
}
console.log(window.a);
console.log(a);
console.log(this.a);
console.log(y); // This will give an error as y is not present in the global space and hence it it not attach to the global window object. so when javascript tries to find out y inside the global object it fails to do that and give an error.