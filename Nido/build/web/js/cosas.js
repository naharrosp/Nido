
//crea un documento con los datos del formulario en local
function crear(){

  var loadFile=function(url,callback){
    JSZipUtils.getBinaryContent(url,callback);
  }
  loadFile("plantillas/informe.docx",function(err,content){
      doc=new Docxgen(content)
      doc.setData( {
          "fecha": $("#miDia").data('datepicker').getFormattedDate('yyyy-mm-dd'),
          "nino":document.getElementById("ninoInforme").innerHTML,
          "cargo":document.getElementById("cargo").value,
          "titulo":document.getElementById("titulo").value,
          "motivo":document.getElementById("motivo").value,
          "contenido":document.getElementById("contenido").value
          }
      ) //set the templateVariables
      doc.render() //apply them (replace all occurences of {first_name} by Hipp, ...)
      out=doc.getZip().generate({type:"blob"}) //Output the document using Data-URI
      saveAs(out,"output.docx")
  
  })
             
}


//Funcion que refresca el nombre del niño y la fecha en el formulario
$(function(){
  $('.list-group li').click(function(e) {
      e.preventDefault()
       
      document.getElementById("fechaInforme").innerHTML= $("#miDia").data('datepicker').getFormattedDate('yyyy-mm-dd');

      $that = $(this);

      $that.parent().find('li').removeClass('active');
      $that.addClass('active');
      document.getElementById("ninoInforme").innerHTML= $that.text();
  });
})


// Funcion que inicializa el calendario en espanol y con el formato deseado
$(document).ready(function () {

  $('.datepicker').datepicker({

  format: "dd/mm/yyyy",
  language: 'es',
  todayHighlight: true,
  
  }); 
  $("#miDia").datepicker().on('changeDate', function () {
        document.getElementById("fechaInforme").innerHTML= $("#miDia").data('datepicker').getFormattedDate('yyyy-mm-dd');
    }); 
}  
);
    

