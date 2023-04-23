import apiPing from '~/application/utils/api-ping';

describe('> Test of ping route', () => {
    it('Connetion to the api', async () => {
        const response = await apiPing();
        expect(response).toBe(true);
    });
});
