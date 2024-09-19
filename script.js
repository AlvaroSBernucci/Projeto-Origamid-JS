import ScrollSuave from './modules/scrollsuave.js';
import Accordion from './modules/accordion.js';
import TabMenu from './modules/tabmenu.js';
import AnimaScroll from './modules/scrollmouse.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDown from './modules/dropdownmenus.js';
import MenuMobile from './modules/mobilemenu.js';
import fetchAnimais from './modules/fetchanimais.js';
import initFetchBitcoin from './modules/fetchbitcoin.js';
import debounce from './modules/debounce.js';
import Funcionamento from './modules/dateobject.js';

const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('.faq-lista dt');
accordion.init();

const tabMenu = new TabMenu('.animais-lista img','.animais-descricao section');
tabMenu.init();

const modal = new Modal('[data-modal="modal-container"]','[data-modal="botaologin"]','[data-modal="fechar"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const animaScroll = new AnimaScroll('[data-scroll^="show-scroll"]');
animaScroll.init();

const dropdownMenu = new DropDown('[data-dropdown]');
dropdownMenu.init();

const meuMobile = new MenuMobile('.menu-btn','.menu-ul');
meuMobile.init();

const funcionamento = new Funcionamento('[data-horario]');
funcionamento.init();

fetchAnimais('./fetch.json', '.numeros-grid');

debounce();
initFetchBitcoin();




