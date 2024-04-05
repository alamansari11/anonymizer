export const mask_name = (input_text, end_pattern = "Age") => {
    try {
        if (typeof input_text !== "string") {
            throw new Error("Input data must be a string");
        }

        // Basic input sanitization
        input_text = input_text.replace(/[<>]/g, "");

        const titles = [
            "Mr",
            "Ms",
            "Mrs",
            "Miss",
            "Dr",
            "Shri",
            "Sir",
            "Madam",
            "Prof",
            "Rev",
            "Capt",
            "Col",
            "Major",
            "Cmdr",
            "Lt Cmdr",
            "Lt",
            "Sgt",
            "Cpl",
            "Pvt",
            "Adm",
            "Maj Gen",
            "Brig Gen",
            "Gen",
            "Rep",
            "Sen",
            "Gov",
            "Amb",
            "Sec",
            "Pope",
            "Bishop",
            "Cardinal",
        ];

        const titles_pattern = titles.join("|");

        const name_pattern = new RegExp(
            "\\b(" +
                titles_pattern +
                "\\.?)\\s([A-Z][a-z]+)(?:\\s([A-Z][a-z]+))?(?:\\s([A-Z][a-z]+))?\\s(" +
                end_pattern +
                ")\\b",
            "g"
        );

        const masked_text = input_text.replace(
            name_pattern,
            (match, title, firstName, middleName, lastName, end) => {
                return title + " <masked> " + end;
            }
        );

        return masked_text;
    } catch (error) {
        throw new Error(error);
    }
};
