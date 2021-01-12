


export const previewText= (text)=>{

if(text.length=== 1 ){
    return text
}

text=text.split(" ")

let WordCount = 1+Math.floor(Math.random() *text.length)

let result=text.slice(0,WordCount).join(" ")

return result
}
