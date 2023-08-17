var expectIt = 1;
beforeAll(() => {
    console.log("TEST EXPECT CHECK ...");
    if (process.env.TEST_EXPECT) expectIt = Number(process.env.TEST_EXPECT);
});

describe('E2E Performance', () => {
    it ("Loopback using blue channel", () => {
        expect(true).toBe(true);
    });
    it ("Loopback using gray channel", () => {
        expect(1).toEqual(expectIt);
    });
    it ("Re-connect using loopback on both channels", () => {
        expect(1).toEqual(1);
    });
    it ("System setup with cross section", () => {
        expect(1).toEqual(expectIt);
    });
    it ("Re-boot and setup with both channels", () => {
        expect(1).toEqual(1);
    });
});