if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registation => {
        console.log("SW Registered!");
        console.log(registation);
    })
} else{
    console.log("Applicaiton not suppoerted");
}