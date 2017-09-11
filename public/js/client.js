/*
 *  (Eat-Da-Burger):
 *      client.js - in-browser methods for data retrieval and display
 *
 *-------------------------------------->8------------------------------------*/

 function listBurger(id, name, devoured) {
     var newBurger = $("<li id='burger" + id + "'>").addClass('list-group-item').html(id + ". " + name).append((devoured ? "" : $("<button id=devour" + id + ">").addClass('btn btn-sm align-middle btn-outline-secondary float-right devour').text("Devour")) );
     newBurger.appendTo($(devoured ? "#list2" : "#list1"));
     if (! devoured) {
         $("#devour" + id).click((event) => {
             $.ajax({
                 url: "/devour",
                 method: "PUT",
                 data: { "id": id }
             }).done(function (data) {
                 if (data) {
                     devour(id);
                 }
             });
         });
     }
 }
function addBurger(name) {
    if (name.length > 0) {
        $.post('/burgers', { "name": name }, (id) => {
            if (id) {
                listBurger(id, name, false);
            }
        });
    }
}
function devour(id) {
    var e = $("#burger" + id);
    e.slideUp();
    window.setTimeout(function () {
        $("#devour" + id).detach();
        e.appendTo($("#list2"));
        e.slideDown();
    }, 500);
}

 $(document).ready(function() {
    $("#regurgitateBtn").click((event) => {
        event.preventDefault();
        $.post('/regurgitate', (affectedRows) => {
            if (affectedRows) {
                window.location.reload();
            }
        });
    });
    $("#bgr_add").click((event) => {
        event.preventDefault();
        var name = $("#bgr_name").val();
        $("#bgr_name").val("");
        addBurger(name);
    });
    $("#nav_add").click((event) => {
        event.preventDefault();
        var name = $("#nav_name").val();
        $("#nav_name").val("");
        addBurger(name);
    });
    $.getJSON('/burgers', (data) => {
        if (data.length) {
            for (var i = 0; i < data.length; i++) {
                listBurger(data[i].id, data[i].burger_name, data[i].is_devoured);
            }
        }
    });
 });
