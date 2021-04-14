const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker (elem, {
    autohide: true,
    disableTouchKeyboard:true,
    format: 'mm . dd . yyyy',
    l:"ru",
    allowOneSidedRange: true,
    nextArrow: '>',
    prevArrow: '<',
    weekStart: 1,
});
const elem2 = document.getElementById('datepicker-two');
const datepicker2 = new Datepicker (elem2, {
    autohide: true,
    disableTouchKeyboard:true,
    format: 'mm . dd . yyyy',
    l:"ru",
    allowOneSidedRange: true,
    nextArrow: '>',
    prevArrow: '<',
    weekStart: 1,
});