const box = document.getElementById('box')
function quotegen(){
    box.textContent = ""
    fetch("https://dummyjson.com/quotes/random")
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            const heading =document.createElement("h2")
            heading.textContent =data.quote
            const para = document.createElement('p')
            para.textContent = `Author:${data.author}`
            box.append(heading,para)

        })
        .catch((err) =>console.log(err))

}
setInterval(quotegen,5000)
