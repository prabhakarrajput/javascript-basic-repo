var user = {
    "name" : "Scott",
    "city" : "Boston"
}

console.log(user)

var JSONStringify = JSON.stringify(user)
console.log(JSONStringify)

var JSONParse = JSON.parse(JSONStringify)
console.log(JSONParse)