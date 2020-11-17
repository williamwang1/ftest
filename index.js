

const UNISWAP = require('@uniswap/sdk')
let ChainId = UNISWAP.ChainId;
let Token = UNISWAP.Token;
let Pair = UNISWAP.Pair;
let Trade = UNISWAP.Trade;
let Route = UNISWAP.Route;
let TokenAmount = UNISWAP.TokenAmount;
let TradeType = UNISWAP.TradeType;


const HOT = new Token(ChainId.MAINNET, '0xc0FFee0000000000000000000000000000000000', 18, 'HOT', 'Caffeine')
const NOT = new Token(ChainId.MAINNET, '0xDeCAf00000000000000000000000000000000000', 18, 'NOT', 'Caffeine')
const HOT_NOT = new Pair(new TokenAmount(HOT, '2000000000000000000'), new TokenAmount(NOT, '1000000000000000000'))
const NOT_TO_HOT = new Route([HOT_NOT], NOT)
const trade = new Trade(NOT_TO_HOT, new TokenAmount(NOT, '1000000000000000'), TradeType.EXACT_INPUT)
console.log("convert 2000000000000000000 HOT to 1000000000000000000 NOT successfully!")