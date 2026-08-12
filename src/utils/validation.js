export function validateMissionTitle(title) {

    if (!title) {
        return "Mission name cannot be empty.";
    }

    if (title.length < 5) {
        return "Mission name cannot be less than 5 characters.";
    }

    return null;
}

export function validateTechnology(technology) {

    if (!technology) {
        return "Technology name cannot be empty.";
    }

    return null;
}