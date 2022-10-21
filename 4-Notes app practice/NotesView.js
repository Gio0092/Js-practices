export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root
        this.onNoteSelect = onNoteSelect
        this.onNoteAdd = onNoteAdd
        this.onNoteEdit = onNoteEdit
        this.onNoteDelete = onNoteDelete

        this.root.innerHTML = `
            <div class="notes__sidebar">
                <button type="button" class="notes__add">Add Note</button>
                <div class="notes__list">
                </div>
            </div>
            <div class="notes__preview">
                <input class="notes__title" type="text" placeholder="New Note">
                <textarea class="notes__body">Take note...</textarea>
            </div>
        `

        const addNote = this.root.querySelector(".notes__add")
        const inpTitle = this.root.querySelector(".notes__title")
        const inpBody = this.root.querySelector(".notes__body")

        addNote.addEventListener("click", () => {
            this.onNoteAdd();
        })

    }
}