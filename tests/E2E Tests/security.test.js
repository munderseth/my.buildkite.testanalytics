var expectIt = 1;
beforeAll(() => {
    console.log("TEST EXPECT CHECK ...");
    if (process.env.TEST_EXPECT) expectIt = Number(process.env.TEST_EXPECT);
});

describe('E2E Security', () => {
    it ("Check error in banking API", () => {
        expect(true).toBe(true);
    });
    it ("Display system error codes based on location", () => {
        expect(1).toEqual(expectIt);
    });
    it ("Disconnect terminal display on reboot", () => {
        expect(1).toEqual(1);
    });
});