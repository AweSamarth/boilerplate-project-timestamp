


// console.log(Date.parse(date))
let obj
// if (req.params.hello.includes("-")) {
    let date1 = new Date("1451001600000")
    let date2= new Date("21 October 2022") 
  if (date1.toUTCString() == "Invalid Date") {
    let anotherdate =new Date(Number(date1))
    console.log(anotherdate)
    console.log(Number(date1))
    if(anotherdate.toUTCString()=="Invalid Date"){
        obj = { error: date1.toUTCString() };
    }
    else {
        obj = {utc:date1.toUTCString(), unix:(date1)}
      }

  } 
  console.log(obj)