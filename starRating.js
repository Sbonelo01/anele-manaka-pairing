//![alt text](https://media.publit.io/file/Screenshot-from-2021-01-14-14-01-19.png)

let starRating = (str)=>{
    let fullStars = Math.round(parseInt(str)) //separate the full stars
    let halfStar = 0
    let emptyStars
    let rating = []


    if(parseFloat(str) % 1 > 0.75){
        fullStars = Math.round(parseFloat(str))
    }//round of to the nearest whole number if its over 0.75
    
    if(parseFloat(str) % 1 > 0.25 && parseFloat(str) % 1 <= 0.5 || parseFloat(str) % 1 >= 0.5 && parseFloat(str) % 1 <= 0.75){
        halfStar = 1
    } //separate the half star

    emptyStars = 5 - (fullStars + halfStar) //separate empty stars

    for(let i = 0; i < fullStars; i++){
        rating.push("full")
    }//creating the array with full stars

    for(let i = 0; i < halfStar; i++){
        rating.push("half")
    }//adding on the half star

    for(let i = 0; i < emptyStars; i++){
        rating.push("empty")
    }//adding on the empty stars

    return rating.join(" ")// returning the rating as a string not array 
}

console.log(starRating("2.26"))