/*
Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
*/

const team= [
    {
        name:"Wayne Barnett",
        role:"Founder & CEO",
        pic:"wayne-barnett-founder-ceo.jpg",
    },
    {
        name:"Angela Caroll",
        role:"Chief Editor",
        pic:"angela-caroll-chief-editor.jpg",
    },
    {
        name:"Walter Gordon",
        role:"Office Manager",
        pic:"walter-gordon-office-manager.jpg",
    },
    {
        name:"Angela Lopez",
        role:"Social Media Manager",
        pic:"angela-lopez-social-media-manager.jpg",
    },
    {
        name:"Scott Estrada",
        role:"Developer",
        pic:"scott-estrada-developer.jpg",
    },
    {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        pic:"barbara-ramos-graphic-designer.jpg",
    }
];

const display= document.querySelector(".team-container");

printMember();

function printMember(){
    display.innerHTML=" ";
    for (let member in team) {
        display.innerHTML+=`
        <div class="team-card">
            <div class="card-image">
                <img
                src="img/${team[member].pic}"
                alt="${team[member].name}"
                />
            </div>
            <div class="card-text">
                <h3>${team[member].name}</h3>
                <p>${team[member].role}</p>
            </div>
        </div>`
        //console.log(team[member].name);
    }
}


document.getElementById("addMemberButton").addEventListener("click", readMember);

function readMember(){
    /*
    1. leggo i value degli input
    2. creo un object con i valori
    3. invio l'oggetto a drawTeamMember che lo stampa
    4. aggiungo l'oggetto alla base dati
    5. resetto il form
    */

    const name= document.getElementById("name").value;
    const role= document.getElementById("role").value;
    const pic= document.getElementById("image").value;

    const newMember= {
        name:name,
        role:role,
        pic:pic,
    };
    team.push("newMember");
    display.innerHTML+=`
        <div class="team-card">
            <div class="card-image">
                <img
                src="img/${newMember.pic}"
                alt="${newMember.name}"
                />
            </div>
            <div class="card-text">
                <h3>${newMember.name}</h3>
                <p>${newMember.role}</p>
            </div>
        </div>`
}
console.log(team);