$(document).ready(function() {
    $('.content-container').fadeIn();

    $(".loan-app-form").submit(function() {
        if ($('.loan-term-radio').is(':checked')) {
            $(".buttons").append("<div class='row justify-content-center my-3 mx-0 term-success'><p class='alert alert-success'><strong>Thank you! </strong>We will be in touch soon to discuss further</p>");
            $('.term-success').hide();
            $('.term-success').fadeIn();
            $('.term-error').fadeOut();
            $('.buttons').css('margin-bottom', '0');
        } else {
            $(".buttons").append("<div class='row justify-content-center my-3 mx-0 term-error'><p class='alert alert-danger'><strong>Error!:</strong> Please select a <strong>Loan term</strong></p>");
            $('.term-error').hide();
            $('.buttons').css('margin-bottom', '0');
            $('.term-error').fadeIn();
        }
        return false;
    });

});