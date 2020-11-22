const INTL_NUMBER_FORMAT = new Intl.NumberFormat( "de-CH", { minimumIntegerDigits: 2 } );
const HEADER_CLOCK_ELEMENT = document.querySelector( "#header-clock" );

function _update_header_clock() {
    let date = new Date();
    HEADER_CLOCK_ELEMENT.innerHTML = `${INTL_NUMBER_FORMAT.format( date.getHours() )}:${INTL_NUMBER_FORMAT.format( date.getMinutes())}:${INTL_NUMBER_FORMAT.format( date.getSeconds())}`;
}

setInterval( _update_header_clock, 1000 );
_update_header_clock();
