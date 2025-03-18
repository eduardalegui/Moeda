const apiKey = "37a26a6057489965c5ad1d60";

async function getRates() {
    alert("oi");
    let data = await fetch("https://v6.exchangerate-api.com/v6/37a26a6057489965c5ad1d60/latest/USD");
        if(!data.ok){
            return
        }
    console.log(data.json());

    

    
}