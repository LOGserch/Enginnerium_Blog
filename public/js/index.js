'use strict'
window.addEventListener('load',() =>{
    
    setTimeout(function(){
        const download = document.getElementById("onload");
        var body = document.body;
        body.classList.add("hidden");

        setTimeout(function(){
        
            download.style.display="none";
            body.classList.remove("hidden");
        },550);
    
    },'load');
    
    

    
    
 

    const date = new Date();
    const formatoFecha = DateFormat(date, 'dd/mm/yy');
    const fecha = `
        <a><strong> ${formatoFecha}</strong></a>
    `;


    function DateFormat(fecha, formato){
        //se da un formato de fecha a traves de la clase Date
        //se mapea el objeto finalmente con el formato especifico y requerido
        const map = {
            dd: fecha.getDate(),
            mm: fecha.getMonth(),
            yy: fecha.getFullYear().toString().slice(-2),
            yyyy: fecha.getFullYear()
        };

        return formato.replace(/mm|dd|yy|yyyy/gi, matched => map[matched]);
    }


    function aplicarFecha(){
        //se aplica un nuevo elemento para todos los selectores div.fecha,conteniendo la fecha
        const date3 = document.querySelectorAll(".fecha");

        date3.forEach(function(userItem){
            const item = document.createElement('p');
            item.innerHTML = fecha;
            userItem.appendChild(item);
        });
    }


    function movIcono(){
        const selectNav = document.querySelectorAll(".topic");
        /*
          funcion que cambia dinamicamente el icono flecha f-angle-up por
          fa-angle-down mediante eventos del tipo mouseover y mouseout

          se utiliza un foreach para poder recorrer la Noode-list de manera dinamica
          creada a partir de un queryselectorAll
        **/
      
       selectNav.forEach((index)=>{

            index.addEventListener('mouseover',function(){

                const selectIcon = index.querySelector('.select');
        
                if(selectIcon.classList.contains('fa-angle-down') == true){
                    selectIcon.classList.remove('fa-angle-down');
                    selectIcon.classList.add('fa-angle-up');
                }
            
            });
        
            index.addEventListener('mouseout',function(){
        
                const selectIcon = index.querySelector('.select');
        
                if(selectIcon.classList.contains('fa-angle-up') == true){
                    selectIcon.classList.remove('fa-angle-up');
                    selectIcon.classList.add('fa-angle-down');
                }
            });
       });
    }

    aplicarFecha();
    movIcono();


});


