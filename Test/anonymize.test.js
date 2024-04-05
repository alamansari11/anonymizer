import { mask_name } from "../src/utils/anonymizeData";

describe("mask_name functions",()=>{
    test('should mask names correctly',()=>{
        const input_text = "FOLLOW UP Date: date of birth: 14.08.2023 Shri Debrup Majumdar Age / Sex: 37/ Male Diagnosis: EBC, IDC grade III, ER/PR -, Her2 - Chief Complaints: Doing well. No fresh complaints. not on any treatment at present."
        const expected_text = "FOLLOW UP Date: date of birth: 14.08.2023 Shri <masked> Age / Sex: 37/ Male Diagnosis: EBC, IDC grade III, ER/PR -, Her2 - Chief Complaints: Doing well. No fresh complaints. not on any treatment at present."
        expect(mask_name(input_text)).toBe(expected_text)
    });
    test('should handle missing middle and last names',()=>{
        const input_text = "FOLLOW UP Date: date of birth: 14.08.2023 Shri Debrup Age / Sex: 37/ Male Diagnosis: EBC, IDC grade III, ER/PR -, Her2 - Chief Complaints: Doing well. No fresh complaints. not on any treatment at present."
        const expected_text = "FOLLOW UP Date: date of birth: 14.08.2023 Shri <masked> Age / Sex: 37/ Male Diagnosis: EBC, IDC grade III, ER/PR -, Her2 - Chief Complaints: Doing well. No fresh complaints. not on any treatment at present."
        expect(mask_name(input_text)).toBe(expected_text)
    });
    test('should handle different end patterns',()=>{
        const input_text = "Shri Debrup Majumdar FOLLOW UP Date: date of birth: 14.08.2023 Age / Sex: 37/ Male Diagnosis: EBC, IDC grade III, ER/PR -, Her2 - Chief Complaints: Doing well. No fresh complaints. not on any treatment at present."
        const expected_text = "Shri <masked> FOLLOW UP Date: date of birth: 14.08.2023 Age / Sex: 37/ Male Diagnosis: EBC, IDC grade III, ER/PR -, Her2 - Chief Complaints: Doing well. No fresh complaints. not on any treatment at present."
        expect(mask_name(input_text,'FOLLOW')).toBe(expected_text)
    });
    test('should throw error for non-string input', () => {
        const inputText = 123; // Non-string input
        expect(() => mask_name(inputText)).toThrow('Input data must be a string');
      });
    
})