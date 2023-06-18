describe.skip('Description of test way', () =>{
    before(() => {
        console.log('Run once before test');
    });
    after(() => {
        console.log('Run once after test');
    });
    beforeEach(() => {
        console.log('Run once before EACH test');
    });

    afterEach(() => {
        console.log('Run once after EACh test');
    });
    it('Individual test 1', () =>{
        console.log('Execute test 1');

    });
    it('ind test 2 ', () => {
        console.log('Execute test 2');
    });
})