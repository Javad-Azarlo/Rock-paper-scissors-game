const arry_list = ["سنگ" , "کاغذ" , "قیچی"];
const prm_user = prompt("لطفا یکی از موارد سنگ ، کاغذ ، قیچی را وارد کنید")

if(prm_user){
    document.querySelector(".UserResult").innerHTML = prm_user;
}
else{
    alert("لطفا یکی از موارد سنگ ، کاغذ ، قیچی را وارد کنید")
}
let rnd_system = Math.floor(Math.random()*3);
let system_result = arry_list[rnd_system];
 document.querySelector(".SystemResult").innerHTML = system_result;

if(prm_user === system_result){
    document.querySelector(".Result").innerHTML = "مساوی هستید"
}
else if(prm_user === "سنگ")
    {
        if(system_result === "قیچی")
        {
            document.querySelector(".Result").innerHTML = "شما برنده شدید"
        }
        else{
            document.querySelector(".Result").innerHTML = "سیتم برنده شد و شما باختید"
        }

    }
    else if(prm_user === "کاغذ")
    {
        if(system_result === "سنگ")
        {
            document.querySelector(".Result").innerHTML = "شما برنده شدید"
        }
        else{
            document.querySelector(".Result").innerHTML = "سیتم برنده شد و شما باختید"
        }

    }
    else if(prm_user === "قیچی")
{
    if(system_result === "کاغذ")
    {
        document.querySelector(".Result").innerHTML = "شما برنده شدید"
    }
    else{
        document.querySelector(".Result").innerHTML = "سیتم برنده شد و شما باختید"
    }
}