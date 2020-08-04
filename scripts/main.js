import {criminalList} from "./criminals/CriminalList.js"
import {convictionSelect} from "./convictions/ConvictionSelect.js"
import { officerSelect } from "./officers/OfficerSelect.js";
import { noteForm } from "./notes/NoteForm.js";
import { showNoteButton } from "./notes/ShowNoteButton.js";
import "./notes/NoteList.js";
import { WitnessButton } from "./Witnesses/WitnessButton.js";

noteForm()
criminalList()
convictionSelect()
officerSelect()
showNoteButton()
WitnessButton()

