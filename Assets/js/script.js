addstuff();
function addstuff(){
    var mainBox= document.getElementById("cont");
    fetch("https://jsonplaceholder.typicode.com/users")
     .then((res)=>(res.json()))
     .then((data)=>{
       
        // data.map((x)=>mainBox.insertAdjacentHTML("afterend",`<div class = "infograph"><p>${x.name}</p></div>`));

        data.map((x)=>{
        var infodata = document.createElement("div");
        infodata.className="infodata"
        var infopic = document.createElement("img");
        infopic.src = "./Assets/Images/avatar.png";
        
        var picdiv = document.createElement("div");
        picdiv.className="picdiv";
        picdiv.appendChild(infopic);
        //<img sc=
        // //<div class="infodata">
        //     <p class = namedata></p>
        //     </div>
        

        var infog = document.createElement("div");
        infog.className="infograph";

        var namep = document.createElement("p");
        namep.className="namep"
        var namedata = document.createTextNode(`${x.name}`);
        //<P class="namep"></P>         //namedata=x.name
        //<p class="">namedata</p>
        namep.appendChild(namedata);

        var emailp = document.createElement("p");
        emailp.className="emailp"
        var emaildata = document.createTextNode(`${x.email}`);
        emailp.appendChild(emaildata);

        var phonep = document.createElement("p");
        phonep.className="phonep"
        var phonedata = document.createTextNode(`${x.phone}`);
        phonep.appendChild(phonedata);
       
        //<p class="phonep">phonedata</p>

        var cityp = document.createElement("p");
        cityp.className = "cityp"
        var citydata = document.createTextNode(`${x.address.city}`);
        cityp.appendChild(citydata);
       
        infodata.appendChild(namep);
        infodata.appendChild(emailp);
        infodata.appendChild(phonep);
        infodata.appendChild(cityp);
        
        //<div class=infodata>
         //<p class=   
            
         //   </div>

        infog.appendChild(picdiv);
        infog.appendChild(infodata);
        mainBox.appendChild(infog);
        })
     })

    
    
}