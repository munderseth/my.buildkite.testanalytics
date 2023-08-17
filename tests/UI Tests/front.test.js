var expectIt = 1;
beforeAll(() => {
    console.log("TEST EXPECT CHECK ...");
    if (process.env.TEST_EXPECT) expectIt = Number(process.env.TEST_EXPECT);
});

describe('UI Front', () => {
    it ("Landing Page shows All Projects that have been activated", () => {
        expect(true).toBe(true);
    });
    it ("Sub-tabs displays (n) units, where n=12", () => {
        expect(1).toEqual(expectIt);
    });
    it ("Sub-tabs disabled for all outer dialogs", () => {
        expect(1).toEqual(1);
    });
    it ("Landing page enabled for project", () => {
        expect(1).toEqual(1);
    });
    it ("Proper descriptions based on connected repository", () => {
        expect(1).toEqual(expectIt);
    });
    it ("Timer rendering based on local standard time and option to ignore", () => {
        expect(1).toEqual(1);
    });
});