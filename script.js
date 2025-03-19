const apiKey = "37a26a6057489965c5ad1d60";

async function getRates() {

    let data = await fetch("https://v6.exchangerate-api.com/v6/37a26a6057489965c5ad1d60/latest/USD");
        if(!data.ok){
            return
        }
    let jsonData = await data.json();
    console.log(jsonData);

    let keys = Object.keys(jsonData.conversion_rates);

    console.log("-----------------");
    console.log("conversion_rates.keys:", keys);
    console.log("Taxa para EUR:", jsonData.conversion_rates.EUR);
    console.log("Taxa para BRL:", jsonData.conversion_rates.BRL);


    let select1 = document.getElementById("selectFrom")
    for (key in keys){
        document.createElement("option")
        console.log(keys[key]);     
    }
    //document.getElementById('selectFrom') = jsonData.conversion_rates.BRL;
}


    
