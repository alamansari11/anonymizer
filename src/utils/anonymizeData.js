export const mask_name = (input_text, end_pattern = "Age") => {
    try {
        if (typeof input_text !== "string") {
            throw new Error("Input data must be a string");
        }
        const titles = ["Mr", "Ms", "Mrs", "Miss", "Dr", "Shri"];
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
// try {
//     // const input_text = "Mr John Doe Age and Ms Jane Smith Age are good friends.";
//     const input_text = "FOLLOW UP Date: date of birth: 14.08.2023  Shri Debrup Majumdar Nasd Age / Sex: 37/ Male Diagnosis: EBC, IDC grade III, ER/PR -, Her2 - Chief Complaints: Doing well. No fresh complaints. not on any treatment at present.";
//     const masked_text = mask_name(input_text);
//     console.log(masked_text);
// } catch (error) {
//     console.error(error.message);
// }
