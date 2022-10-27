let pieces = document.querySelectorAll(".board .piece");
let players = document.querySelectorAll(".choice div")
let user_choice = "";

let user_path=[];






players.forEach((player)=>{
    player.addEventListener('click',function(){
       user_choice=="" ? user_choice = player.id : false
    })
})

const judge=()=>{

}

pieces.forEach((piece)=>{

    piece.addEventListener('click',function(){
       
        if(user_choice !=""&&piece.childElementCount==0){
            const circle = document.createElement('div')
            const span = document.createElement('span');

            circle.classList.add(`${user_choice}`)

            circle.appendChild(span);
            user_choice=='cross'?circle.appendChild(span.cloneNode(true)):false
            
            piece.appendChild(circle)

            //adding user's path!
            var temp_path = [piece.classList.value.split(" ").slice(1)]
            user_path=user_path.concat(temp_path)
            console.log(user_path)
        }
    })
})












