
/**
 * Returns a prompt based on the type of journal specified.
 *
 * @param {string} type - The type of journal to get a prompt for.
 * @returns {string} - The prompt for the given journal type.
 */


export const typeOfJournal = (type) => {
    switch (type) {
        case "gratitude":
        return "What are you grateful for today?"
        case "stress":
        return "What are you stressed about today?"
        case "self-compassion":
        case "self care":
        return "What was the best part of your day today?"
        case "free-write":
        return "What is on your mind today?"
    }
}



/**
 * Returns a color code based on the input type
 *
 * @param {string} type - The type of content being passed in
 * @returns {string} - The corresponding color code for the content type
 */
export const Contbg = (type) => {
    switch (type) {
        case "gratitude":
        return "#FEEBE7"
        case "stress":
        return "#FDE0E0"
        case "self-compassion":
        case "self care":
        return "#FEF2CF"
        case "free-write":
        return "#DBEFF0"
    }
}

/**
 * Returns the date in Journal format
 *
 * @param {string} GivenDate - A string representation of a date
 * @returns {string} - The date formatted as a Journal date
 *
 */
import { DateConstrctor } from '@app/helper/customFunction'
export const JournalDate = (GivenDate)=>{
    const date = DateConstrctor(new Date(GivenDate))
    return date.Date
}

