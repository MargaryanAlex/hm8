let bd=document.querySelector('.cont')
let  obj={
    email:document.querySelector('.em'),
    password:document.querySelector('.ps'),
    btn:document.querySelector('.btn'),
}
obj.btn.addEventListener('click', function () {
    if(obj.email.value==''){
        alert('YOU MUST FILL EMAIL')
    }else if(obj.password.value==''){
        alert('YOU MUST FILL PASSWORD')
    }else{
    let dv=document.createElement('div')
    bd.append(dv)
    dv.setAttribute('class','st')
    dv.innerHTML='email:'+obj.email.value
    let dv2=document.createElement('div')
    bd.append(dv2)
    dv2.setAttribute('class','st')
    dv2.innerHTML='password:'+obj.password.value
}
})