console.log("Learning api calling");



const promisevalidation = (apiCall) => {
    apiCall
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

const GethandleApICalling = () => {
    console.log('api calling ');
    // fetch is a browser method which helps to hit the api endpoint
    // Get request
    const apiCall = fetch('https://jan-project-aa287-default-rtdb.asia-southeast1.firebasedatabase.app/rithik.json')
    promisevalidation(apiCall)
}

const Postcall = () => {
    const apiCall = fetch('https://jan-project-aa287-default-rtdb.asia-southeast1.firebasedatabase.app/rithik.json',
        {
            "method":"POST",
            "headers": {
                "Content-type": "application/json; charset=UTF-8"
            },
            "body": JSON.stringify({
                name:"Omraj"
            })
            // Json.stringify converts json to string '{name:"Omraj"}'
        }
    )
    promisevalidation(apiCall)
}


// Patch
// here even if we have other attributes like name, those keys won't get deleted
const  Patchcall = () => {
    const apiCall = fetch('https://jan-project-aa287-default-rtdb.asia-southeast1.firebasedatabase.app/rithik/-NpDg_W7yjQPobziciaG.json',
        {
            "method":"PATCH",
            "headers": {
                "Content-type": "application/json; charset=UTF-8"
            },
            "body": JSON.stringify({
                place: "Coimbatore"
            })
            // Json.stringify converts json to string '{name:"Omraj"}'
        }
    )
    promisevalidation(apiCall)
}

// Put
// when we remove one attribute say name, it will get deleted but in patch it won't get deleted
// in below eg: even if the object had name it will get delted since it is put request
const  Putcall = () => {
    const apiCall = fetch('https://jan-project-aa287-default-rtdb.asia-southeast1.firebasedatabase.app/rithik/-NpDiUZchUb4RuaJvqJD.json',
        {
            "method":"PUT",
            "headers": {
                "Content-type": "application/json; charset=UTF-8"
            },
            "body": JSON.stringify({
                place: "Karnataka"
            })
            // Json.stringify converts json to string '{name:"Omraj"}'
        }
    )
    promisevalidation(apiCall)
}

const Deletecall = () => {
    const apiCall = fetch('https://jan-project-aa287-default-rtdb.asia-southeast1.firebasedatabase.app/rithik/-NpDhDuPUkd4Hnu9jbyD.json',
        {
            "method":"DELETE",
            "headers": {
                "Content-type": "application/json; charset=UTF-8"
            }
            // Json.stringify converts json to string '{name:"Omraj"}'
        }
    )
    promisevalidation(apiCall)
}

