import ScrollSuave from './modules/scrollsuave.js';
import initTab from './modules/tabmenu.js';
import animaScroll from './modules/scrollmouse.js';
import initAccordion from './modules/accordion.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdown from './modules/dropdownmenus.js';
import initMobileMenu from './modules/mobilemenu.js';
import initDateObject from './modules/dateobject.js';
import initFetch from './modules/fetchanimais.js';
import initFetchBitcoin from './modules/fetchbitcoin.js';

const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();

initTab();
initAccordion();
animaScroll();
initModal();
initTooltip();
initDropdown();
initMobileMenu();
initDateObject();
initFetch();
initFetchBitcoin();