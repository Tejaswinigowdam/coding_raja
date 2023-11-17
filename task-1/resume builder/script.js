function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('weField');
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder','Enter here');
    

    let weOb=document.getElementById('we')
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode,weAddButtonOb)
}
function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('aqField');
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder','Enter here');
    

    let aqOb=document.getElementById('aq')
    let aqAddButtonOb=document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode,aqAddButtonOb)
}
//generating cv
function generateCV(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    //direct
    document.getElementById('nameT2').innerHTML=nameField;
    //contact
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;
   
    let wes =document.getElementsByClassName('weField');
    let add ="";
    for(let e of wes){
        add = add + '<li>'+ e.value+'</li>';
    }
    document.getElementById('weT').innerHTML=add;


    let aqs =document.getElementsByClassName('aqField');
    let add1 ="";
    for(let e of aqs){
        add1 = add1 + '<li>'+ e.value+'</li>';
    }
    document.getElementById('aqT').innerHTML=add1;

    //code for setting image
    let file = document.getElementById("imgField").files[0];
      
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set image to templete
   reader.onloadend=function(){
    document.getElementById('imgTemplate').src=reader.result;
   };



    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}

function printCV(){
    window.print();
}
