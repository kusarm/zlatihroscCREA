
export default class ClientApi {

    static dodajZivilo = (data) => ClientApi.sendRequest( 'zivila/shraniZivilo', 'POST', data);
    static updateZivilo = (ziviloId, data) => ClientApi.sendRequest( 'zivila/updateZivilo/' + ziviloId, 'POST', data);
    static zivilaSeznam = () =>  ClientApi.sendRequest('zivila/getZivila');
    static zavrziPorabiZivilo = (id, data) => ClientApi.sendRequest('zivila/porabiZavrziZivilo/' + id, 'POST', data);
    static zgodovinaZivil = (data) => ClientApi.sendRequest('zivila/zgodovinaZivil', 'POST', data);
    static vrsteZivil = () => ClientApi.sendRequest('zivila/getVrste');
    static podvrsteZivil = (vrstaId) => ClientApi.sendRequest('zivila/getPodvrste/' + vrstaId);
    static oblikeZivil = (podvrstaId) => ClientApi.sendRequest('zivila/getOblike/' + podvrstaId);
    static zivilaZadnjih5 = () => ClientApi.sendRequest('zivila/zadnjih5');

    // nastavitve
    static getNastavitve = () => ClientApi.sendRequest('nastavitve/get');
    static updateNastavitve = (data) => ClientApi.sendRequest('nastavitve/update', 'POST', data);


    // nakupovalni seznam
    static dodajZiviloNakupSezn = (data) => ClientApi.sendRequest('nakupSeznam/dodajNovoZivilo', 'POST', data);
    static posodobiZiviloNakupSezn = (ziviloId, data) => ClientApi.sendRequest('nakupSeznam/posodobiZivilo/'+ ziviloId, 'POST', data);
    static getZivilaNakupSezn = () => ClientApi.sendRequest('nakupSeznam/zivila');
    static exportSeznam = () => ClientApi.sendRequest('nakupSeznam/export');
    static getCountNakupSezn = () => ClientApi.sendRequest('nakupSeznam/count');


    static handleErrors = (resp) => {
        console.log(resp);
        if (resp.ok) {
            // const contentType = resp.headers.get('content-type');
            // if (contentType && contentType.includes('application/json')) {
                return resp.json();
            // } else {
            //     return resp;
            // }
        } else {
           console.log("error")
        }
    };

    static sendRequest = (path, method = 'GET', data = {}) => {
        const parameters = {method: method, headers: new Headers()};
        if (method === 'POST') {
            parameters.headers.append('Content-Type', 'application/json');
            parameters.body = JSON.stringify(data);
        }
        return fetch(path, parameters)
            .then((resp) => ClientApi.handleErrors(resp));
    };
}
