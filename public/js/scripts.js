$('#form-login-change').on('click', (e) => {
    $('#form-login').fadeIn();
    $('#form-register').fadeOut();
    e.preventDefault();
});
$('#form-register-change').on('click', (e) => {
    $('#form-register').fadeIn();
    $('#form-login').fadeOut();
    e.preventDefault();
});