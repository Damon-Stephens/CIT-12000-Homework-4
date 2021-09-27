var wrapper=document.body.querySelector(".wrapper");

var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

for(var i=0; i<warriors.length; i++){
    if(warriors[i].damage<2){
        continue;
    }else if(warriors[i].health<10){
        continue;
    }
    var ele=document.createElement("div");
    var name_ele=document.createElement("h2");
    var damage_ele=document.createElement("h4");
    var health_ele=document.createElement("h4");
    var warrior_ele=document.createElement("h4");
    name_ele.innerHTML="Name: "+warriors[i].name;
    damage_ele.innerHTML="Damage: "+warriors[i].damage;
    health_ele.innerHTML="Health: "+warriors[i].health;
    if(warriors[i].warrior===true){
        warrior_ele.innerHTML="Warrior"
    }else if(warriors[i].warrior===false){
        warrior_ele.innerHTML="Is not a warrior"
    }
    if(warriors[i].name.includes("a")){
        name_ele.style.color = '#FF0000';
        damage_ele.style.color = '#FF0000';
        health_ele.style.color = '#FF0000';
        warrior_ele.style.color = '#FF0000';
    }
    ele.appendChild(name_ele);
    ele.appendChild(damage_ele);
    ele.appendChild(health_ele);
    ele.appendChild(warrior_ele)
    wrapper.appendChild(ele);
}
