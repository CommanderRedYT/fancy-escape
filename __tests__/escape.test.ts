import { escapeString } from '../src';

describe('check the fancy-escape library', () => {
    test('it should properly escape a string', () => {
        const stringToEscape = 'Hello, World! This is a test: 1 + 1 = 2.';
        const expectedEscapedString = 'Hello， World！ This is a test： 1 ＋ 1 ＝ 2．';

        const escapedString = escapeString(stringToEscape);
        expect(escapedString).toBe(expectedEscapedString);
    });

    test('it should return the same string if no characters need escaping', () => {
        const stringToEscape = 'No special characters here';
        const expectedEscapedString = 'No special characters here';

        const escapedString = escapeString(stringToEscape);
        expect(escapedString).toBe(expectedEscapedString);
    });

    test('it should handle an empty string', () => {
        const stringToEscape = '';
        const expectedEscapedString = '';

        const escapedString = escapeString(stringToEscape);
        expect(escapedString).toBe(expectedEscapedString);
    });

    test('it should escape windows paths correctly', () => {
        const stringToEscape = 'C:\\Users\\Test\\Documents\\file.txt';
        const expectedEscapedString = 'C：＼Users＼Test＼Documents＼file．txt';

        const escapedString = escapeString(stringToEscape);
        expect(escapedString).toBe(expectedEscapedString);
    });

    test('it should escape unix paths correctly', () => {
        const stringToEscape = '/home/user/documents/file.txt';
        const expectedEscapedString = '／home／user／documents／file．txt';

        const escapedString = escapeString(stringToEscape);
        expect(escapedString).toBe(expectedEscapedString);
    });

    test('it should escape special characters in a sentence', () => {
        const stringToEscape = 'What is 2 + 2? Is it equal to 4?';
        const expectedEscapedString = 'What is 2 ＋ 2？ Is it equal to 4？';

        const escapedString = escapeString(stringToEscape);
        expect(escapedString).toBe(expectedEscapedString);
    });
});
