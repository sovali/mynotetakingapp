class NoteComponent {
    constructor (noteList, query) {
        this.noteList = noteList;
        this.query = query;
    }

    filterList(noteList, query) {
    
        noteList.forEach(function(Note) {
            if (Note.name === query) {

            }
        })
    }
}

class Note {
    constructor (name, description) {
        this.name = name;
        this.description = description;
    }
}