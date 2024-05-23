let year = 2004;

if(year % 4 == 0){
    if(year % 100 == 0 && year % 400 != 0)
        {
            console.log("Not Leap Year!!");
        }
    else{
        console.log("Leap Year");
    }
}
else{
    console.log("Leap Year");
}