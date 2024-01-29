showNote()

let addNoteBtn = document.getElementById('addNoteBtn');
// console.log(addNoteBtn);

// ~~~~~~~~~~~~~~~~~~~ Add Note ~~~~~~~~~~~~~~~~~~~
function addNote() {
    let notes = localStorage.getItem("notes");
    let inp = document.getElementById('inp');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (inp.value == '' || inp.value == /\s+/gi) {
        alert('Notes can not be blank!');
    }
    else {
        notesObj.push(inp.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        // console.log(notesObj);
        inp.value = '';
        showNote()
    }
}

addNoteBtn.addEventListener('click', addNote);


// ~~~~~~~~~~~~~~~~~~~ Show Note ~~~~~~~~~~~~~~~~~~~

function showNote() {
    let notes = localStorage.getItem("notes");
    let cont = document.getElementById('cont');
    let notesObj;
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let iHtml = '';
    notesObj.forEach((elem, index) => {
        iHtml += `
            <div class="card">
                <p>${elem}</p>
                <button class="del" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
            </div>
        `;
    });
    cont.innerHTML = iHtml;
}


// ~~~~~~~~~~~~~~~~~~~ Delete Note ~~~~~~~~~~~~~~~~~~~

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNote()
}
