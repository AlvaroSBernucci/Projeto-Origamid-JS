export default function initFetchBitcoin(){
    try{
        async function fetchBitcoin(url) {
            const btcData = await fetch(url);
            const btcJSON = await btcData.json();
            btcValue(btcJSON.BRL.buy);
        }
        fetchBitcoin('https://blockchain.info/ticker');
    } catch(erro){
        console.log(erro);
    }
    function btcValue(valor){
        const spanTxt = document.querySelector('.bitcoin');
        const valorReais = (100/valor).toFixed(4);
        spanTxt.innerHTML = valorReais
    }
}