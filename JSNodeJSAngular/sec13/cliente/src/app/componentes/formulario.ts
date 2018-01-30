import { Component, OnInit } from '@angular/core';

@Component({
  selector: "tag-formulario",
  templateUrl: "../vistas/formulario.html"
})

export class FormularioComponente {
  ngOnInit(){
    // objeto de propiedades FORMULARIO
    var pf = {
      entradas: document.querySelectorAll("input.validar"),
      valor: null,
      expresionRegular: null,
      validarPassword: false,
      validarUsuario: false,
      validarEmail: false,
      validarTerminos: false,
      intervaloVerificar: undefined
    };

    //objeto de métodos del formulario
    var mf = {
      inicioFormulario: function(){
        for (var i = 0; i < pf.entradas.length; i++) {
          pf.entradas[i].addEventListener("focus", mf.enFoco);
          pf.entradas[i].addEventListener("blur", mf.fueraFoco);
          pf.entradas[i].addEventListener("change", mf.cambioEntrada);
        }
      },

      enFoco: function(input){
        pf.valor = input.target.value;

        if(pf.valor === ""){
          document.querySelectorAll("#" + input.target.id)["0"].style.background = "rgba(255,255,0,.5)";
          document.querySelectorAll("[for=" + input.target.id + "] .obligatorio")["0"].style.opacity = 1;
        }

        document.querySelector("[for=" + input.target.id + "]").appendChild(document.createElement("DIV")).setAttribute("class", "error");
      },

      fueraFoco: function(input){
        document.querySelectorAll("#" + input.target.id)["0"].style.background = "white";
        document.querySelectorAll("[for=" + input.target.id + "] .obligatorio")["0"].style.opacity = 0;
      },

      cambioEntrada: function(input){
        pf.valor = input.target.value;

        if(pf.valor !== ""){
          switch (input.target.id) {
            case "txtNombre":
              if(pf.valor.length < 2 || pf.valor.length > 6){
                document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red;">Error al ingresar los datos' + input.target.placeholder + '</span>';

                pf.validarUsuario = false;
              }
              else{
                document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));

                pf.validarUsuario = true;
              }
              break;
            case "txtPassword":
              pf.expresionRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

              if(!pf.expresionRegular.test(pf.valor)){
                document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red;">Error al ingresar los datos' + input.target.placeholder + '</span>';
                pf.validarPassword = false;
              }
              else{
                document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
                pf.validarPassword = true;
              }
              break;
            case "txtEmail":
              pf.expresionRegular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;;

              if(!pf.expresionRegular.test(pf.valor)){
                document.querySelector("[for=" + input.target.id + "] .error").innerHTML = '<span style="color:red;">Error al ingresar los datos' + input.target.placeholder + '</span>';
                pf.validarEmail = false;
              }
              else{
                document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
                pf.validarEmail = true;
              }
              break;
            default:

          }
        }
        else{
          document.querySelector("[for=" + input.target.id + "] .error").parentNode.removeChild(document.querySelector("[for=" + input.target.id + "] .error"));
        }
      },

      validarFormulario: function(){
        try{
          pf.validarTerminos = document.querySelectorAll("#chkTerminos")["0"].checked;

          if(!pf.validarUsuario || !pf.validarPassword || !pf.validarEmail){

            document.querySelector("#labelEnviar").innerHTML = '<span style="color:red;">*tiene errores en los datos, favor revisar de nuevo</span>';

            return false;
          }
          else if(!pf.validarTerminos){

            document.querySelector("#labelEnviar").innerHTML = '<span style="color:red;">*tiene errores en los datos, favor acepte terminos y condiciones</span>';

            return false;
          }
          else{
            return true;
          }
        }
        catch(e){
          console.log(e);
          return false;
        }
      },

      iniciarPropEHTML: function() {
        let resp = false;

        if(document.querySelectorAll("input.validar")[0] !== undefined){
          pf.entradas = document.querySelectorAll("input.validar");
          return true;
        }

        return resp;
      },

      intervalVEHTML: function() {
        //funcion de intervalo para verificar las propiedades que se cargan con elementos HTML
        pf.intervaloVerificar = setInterval(()=> {
          //console.log("en intervalVEHTML", pf.intervaloVerificar);
          if(mf.iniciarPropEHTML()){
            clearInterval(pf.intervaloVerificar);
            mf.inicioFormulario();
          }
        }, 2);
      }
    };

    //mf.inicioFormulario();
    mf.intervalVEHTML();

  }
}
