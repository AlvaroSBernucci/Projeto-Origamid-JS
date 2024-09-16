import ScrollSuave from './modules/scrollsuave.js';
import Accordion from './modules/accordion.js';
import TabMenu from './modules/tabmenu.js';
import animaScroll from './modules/scrollmouse.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdown from './modules/dropdownmenus.js';
import initMobileMenu from './modules/mobilemenu.js';
import initDateObject from './modules/dateobject.js';
import initFetch from './modules/fetchanimais.js';
import initFetchBitcoin from './modules/fetchbitcoin.js';

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

animaScroll();
initDropdown();
initMobileMenu();
initDateObject();
initFetch();
initFetchBitcoin();