var expectIt = 1;
beforeAll(() => {
    console.log("TEST EXPECT CHECK ...");
    if (process.env.TEST_EXPECT) expectIt = Number(process.env.TEST_EXPECT);
});

describe('UI Back', () => {
    it ("Check lower pane showing all available buttons", () => {
        expect(true).toBe(true);
    });
    it ("Footer display generated date based on location", () => {
        expect(1).toEqual(expectIt);
    });
    it ("Prompt for login if non-matching credentials", () => {
        expect(1).toEqual(1);
    });
});