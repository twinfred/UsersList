$(document).ready(function(){
    $('form button').click(function(){
        var firstName = $('#first_name').val();
        var lastName = $('#last_name').val();
        var emailAddress = $('#email_address').val();
        var phoneNumber = $('#phone_number').val();
        console.log(firstName, lastName, emailAddress, phoneNumber);
        ($('table').append('<tr>'+'<td>'+firstName+'</td>'+'<td>'+lastName+'</td>'+'<td>'+emailAddress+'</td>'+'<td>'+phoneNumber+'</td>'+'<tr>'));
        $('form').find("input, textarea").val("");
        return false;
    })
})