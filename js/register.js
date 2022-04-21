var boton = document.getElementById('agregar');
// var guardar = document.getElementById('editar');
var lista = document.getElementById("lista");
var data = [];
boton.addEventListener("click", agregar);
// editar.addEventListener("click", edit);
var cant = 0;
function agregar() {
    var nombre = document.querySelector('#nombres').value;
    var apellido = document.querySelector('#apellidos').value;
    var usuario = document.querySelector('#usuario').value;
    var tusuario = document.querySelector('#tusuario').value;

    //agrega elementos al arreglo
    data.push(
        { "id": cant, "nombres": nombre, "apellidos": apellido, "usuario": usuario, "tusuario": tusuario }
    );

    //convertir el arreglo a json
    // console.log(JSON.stringify(data));
    var id_row = 'row' + cant;
    var fila = '<tr id=' + id_row + '><td>' + nombre + '</td><td>' + apellido + '</td><td>' + usuario + '</td> <td>' + tusuario + '</td> <td><a href="#" class="btn btn-danger" onclick="eliminar(' + cant + ')";>Eliminar</a>';
    //agregar fila a la tabla
    $("#lista").append(fila);
    $("#nombres").val('');
    $("#apellidos").val('');
    $("#usuario").val('');
    $("#tusuario").val('');
    $("#nombres").focus();
    cant++;

}

function eliminar(row) {
    //remueve la fila de la tabla html
    $("#row" + row).remove();
    //remover el elmento del arreglo
    //data.splice(row,1);
    //buscar el id a eliminar
    var i = 0;
    var pos = -1;
    for (x of data) {
        console.log(x.id);
        if (x.id == row) {
            pos = i;
        }
        i++;
    }
    data.splice(pos, 1);    
}

// // function save() {
// //     var json = JSON.stringify(data);
// //     $.ajax({
// //         type: "POST",
// //         url: "api.php",
// //         data: "json=" + json,
// //         success: function (respo) {
// //             location.reload();
// //         }

// //     });
// }