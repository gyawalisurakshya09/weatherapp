// let obj={
//     name:"surakshya",
//     course: "csit",
//     semester:"first",
//     employed:true,
//     hello:function(){
//         console.log(`my name is ${this.name} . I am studying ${this.course}`)
//     }

  
// }

// obj.hello()

//  async function hello(){
//    let firstName=await
//    console.log("firstName")


// }
// hello()


const button=document.querySelector(".btn");
const cityInput=document.querySelector("#city");
const temp=document.querySelector("#temp-div");
const apiKey="74c1ecb822c96eafc4ccbddb73b71f23";


button.addEventListener("click",  async function(){
   let city=cityInput.value
   const weatherinfo=  await getWeatherInfo(city)
console.log(weatherinfo.main.temp)

let temperature=weatherinfo.main.temp 
temp.innerHTML=temperature+ "°C"
})

 async function getWeatherInfo(city){

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


const response=await fetch(apiUrl);
const data= await response.json();
return data;

 
 }
