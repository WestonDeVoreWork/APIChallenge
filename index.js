// API CHALLENGE DUE ON THE 25th

/* 
documentaion below:
https://catfact.ninja/
*/

let baseURL = 'https://catfact.ninja/fact'
const button = document.getElementById("button")


button.addEventListener('click', fastFact)

    async function fastFact(e) {
        e.preventDefault();

        // let getfastFact = (baseURL, value) => fetch(baseURL, {mode: "cors"}) //fetch
        const response = await fetch(baseURL)
        const json = await response.json();
        // console.log(json);
        giveFact(json);  
        

        // console.log('3');
        // console.log(randomFact);
            // .then
            // .then(json => console.log(json))
            // .catch;

            // console.log(GET /facts/random);
                // const response = await fetch(baseURL)
                    // console.log(response);
                    // const json = await response.json();
                    // console.log(json);
       
       
                    // console.log(randomFact);
    };

let giveFact = data => {
            // console.log(data);
            //const randomFact = data;
            const randomFact = JSON.stringify(data.fact);
            console.log(randomFact)
            document.getElementById("factDisplay").innerHTML = randomFact;
            // console.log(randomFact);
            // console.log('2');
            
        };
// fastFact();

