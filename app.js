let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async ()=>{
  let imgLink = await getImg();

  let img = document.querySelector("#dogImg"); 

  img.setAttribute("src", imgLink);
});

async function getImg(){
  try{
    let res = await axios.get(url);
    return res.data.message;  
  } catch(err) {
    console.log("ERROR -", err);
    return "/";
  };
};


  