
class Note {
    constructor (id, name, description) {
        this.name = name;
        this.description = description;
        this.id = id;
    }
}
class NoteComponent {
    constructor (noteList, query) {
        this.noteList = [noteList];
        this.query = query;
    }

    filterList(noteList, query) {
        let results = this.noteList.filter(note => {
            return (note.name.indexOf(query) != -1);
        })
    }
}
let noteList = [];
let addBtn = document.getElementById('addBtn');
let noteCount = 0;

addBtn.addEventListener('click', function(e) {
    let name = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    if (name.length !== 0 && content.length !== 0) {
        let note = new Note(noteCount, name, content);
        noteCount++;
        addNote(note);
        clear('title');
        clear('content');
    } else {
        alert("Please fill in title and content to add.")
    }
    return;
})

// add event listener to search button


function renderResults() {

}

function renderList() {
    let noteDisplay = document.getElementById('noteList');
    noteDisplay.innerHTML = "";
    if (noteList.length!=0) {
        for (let i = 0; i < noteList.length; i++) {
            let name = noteList[i].name;
            let id = noteList[i].id;

            let delButton = document.createElement('button');
            delButton.innerHTML = "Remove";
            delButton.setAttribute("id", id);
            delButton.addEventListener('click', function(e) {
                deleteNote(delButton.getAttribute("id"));
            }); 

            let noteNode = document.createElement('li');
            noteNode.innerHTML = name;
            noteNode.setAttribute("class", "item");

            noteNode.append(delButton);
            noteDisplay.append(noteNode);
        }
    }
}
// Delete note
function deleteNote(idOfDel) {
    
    for (let i = 0; i < noteList.length; i++) {
        if (noteList[i].id == idOfDel) {
            noteList.splice(i, 1);
        }
    }

    renderList();
}

// Clears value of element
function clear(id) {
    document.getElementById(id).value="";
}
// Adds note to noteList array & the page
function addNote(note) {
   noteList.push(note);
   renderList();
}


