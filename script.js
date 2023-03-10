
const user = ['J.S. π§π»ββοΈ', 'A.S. π§π»ββοΈ', 'M.P. π©πΌ', 'P.S. π§πΌβπ¦²'];
const statusIcon = ['β', 'π«', 'π', 'π€'];
const prio = ['wichtig', 'unwichtig', 'mittel', 'irgendwann'];
let counter = 0;

/* ΓFFNEN & SCHLIE?EN DES MODALS */

const modalOeffnen = () => {
    document.getElementById('wrapper').style.visibility = 'visible';
}

const modalSchliessen = () => {
    document.getElementById('wrapper').style.visibility = 'hidden';
}


/* COUNTER FUNKTION */


const countUp = () => {
    let newCount;

    console.log(counter.toString().length)

    if (counter.toString().length === 1) {
        newCount = `00${counter}`;
    }
    if (counter.toString().length === 2) {
        newCount =  `0${counter}`;
    }
    if (counter.toString().length === 3) {
        newCount = counter;
    }

    
    counter += 1; 
   
    return newCount
};





/* LISTEN ELEMENT ERSTELLEN */



const createHtml = () => {

    /* SAMMELN ALLER DATEN*/


    let objekt = document.getElementById('objekt-input').value;
    console.log(objekt)

    let title = document.getElementById('title-input').value;
    console.log(title)

    let link = "www.youtube.com"

    let text = document.getElementById('info-text-area').value;


    const dateNow = new Date();

    let deadline = document.getElementById('deadline').value;

    let prio = document.getElementById('prioritaet').value;
    
    let sendmail = document.getElementById('send-mail');
    

    /* SAMMELN ALLER DATEN*/
 
    
    if (sendmail.checked == true){
        document.location = 'mailto:containerkid@gmail.com?subject=Auftrag'+ objekt +'&body='+ text;
    }

    /* ZUWEISUNG*/
    let mitarbeiterAS = document.getElementById('mitarbeiter-checker-andreas');
    let mitarbeiterJS = document.getElementById('mitarbeiter-checker-jesus');
    let mitarbeiterMP = document.getElementById('mitarbeiter-checker-michaela');

    let mitarbeiter = '';
    let mitarbeiterID  = '';

    if (mitarbeiterAS.checked == true){
        mitarbeiter = 'A.S. π§π»ββοΈ'
        mitarbeiterID = 'andreas';
    };

    if (mitarbeiterJS.checked == true){
        mitarbeiter = 'J.S. π§π»ββοΈ'
        mitarbeiterID = 'jesus';
    };

    if (mitarbeiterMP.checked == true){
        mitarbeiter = 'M.P. π©πΌ'
        mitarbeiterID = 'michaela';
    };

    let newNum = countUp();

    const neueSpalte = document.createElement('div');
    neueSpalte.className = 'table-element'
    neueSpalte.innerHTML = `

    <div class="auftrags-nummer">
        <p>${newNum}</p>
    </div>

    <div class="objekt">
        <p>${objekt}</p>
    </div>

    <div class="title">
        <a href="${link}">${title}</a>
    </div>

    <div class="trelement">
        <p>π</p>
    </div>

    <div class="datum">
        <p>${dateNow.getDay()}.${dateNow.getMonth()}.${dateNow.getFullYear()}</p>
    </div>

    <div class="deadline">
        <p>${deadline}</p>
    </div>

    <div class="zugewiesen" id="${mitarbeiterID}">
        <p>${mitarbeiter}</p>
    </div>

    <div class="trelement option">

        <span class="option-btn">...</span>
        <span class="delete-btn" onclick="deleteRow(this)">x</span>  

    </div>

    <div class="trelement ${prio}">
    </div>

`;

    return neueSpalte
}

/* EINFΓGEN DES NEUEN LISTEN ELEMENTS */


const einfΓΌgen = (element) => {
   document.getElementById('table-content').append(element);
}





/* AUFTRAG ANLEGEN */

const resetModal = () => {
    document.getElementById('objekt-input').value = "";
    document.getElementById('title-input').value = "";
    document.getElementById('deadline').value = "";
    document.getElementById('prioritaet').value = "wichtig";
    document.getElementById('send-mail').checked = false;
    document.getElementById('mitarbeiter-checker-andreas').checked = true;
    document.getElementById('mitarbeiter-checker-jesus').checked = false;
    document.getElementById('mitarbeiter-checker-michaela').checked = false;
}
/* AUFTRAG ANLEGEN */

const neuerAuftrag = () => {

    const element = createHtml();
    einfΓΌgen(element);
    // neueSeite anlegen
    modalSchliessen();
    resetModal()

}

/*INSPECT*/

/*CHANGE / ADD INFO*/

/*DELETE*/

let deleteRow = (row) => {
    if (confirm("Sind Sie sicher das Sie diesen Auftrag dauerhaft lΓΆschen mΓΆchten?")) {

        row.parentElement.parentElement.remove()

        setTimeout(() => {alert("Auftrag wurde erfolgreich gelΓΆscht")}, "200");
       

    } else {
        alert("Auftrag abgebrochen")
    }
}


/*SEARCH*/

var searchInput = document.getElementById("search");

searchInput.addEventListener( "keypress", function(e) {
    if (e.key === "Enter") {
        alert(`Du suchst nach Folgenden EintrΓ€gen "${searchInput.value}"`); 
}
});


/*FILTER*/

const filter = () => {
    
}

const filterSelection = (option) => {
        
}




/*FΓLLIGKEIT UND BENACHRICHTIGUNG*/

let clearFaelligkeiten = () => {

    


}

let fetchFaelligkeit = () => {

    let content = document.getElementById("dash-heute");
    let toclear = content.querySelectorAll(".deadline");
    
    if(toclear !== null) {
   
        for(let i = 0; i < toclear.length; i++){
            toclear[i].parentElement.remove();
        }
        
    }
   
    let todos = document.querySelectorAll(".deadline");
    let date = new Date();
    
    date = (`${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDay()-2}`)
    
    for(let i = 0; i < todos.length; i++){
   
    
        if(date === todos[i].innerText){

            let element = todos[i].parentElement;
            let newElement = element.cloneNode(true);
            document.getElementById("dash-heute").append(newElement);
        }
    }
    
}

window.onload = fetchFaelligkeit();


