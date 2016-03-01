function generarDocumento(nombrePlantilla, nombreDocumento)
{
    
	loadFile(nombrePlantilla,function(err,content){
                doc=new DocxGen(content)
                doc.setData(getData()) //set the templateVariables
                doc.render() //apply them (replace all occurences of {first_name} by Hipp, ...)
                out=doc.getZip().generate({type:"blob"}) //Output the document using Data-URI
                saveAs(out,nombreDocumento)
            })
}

function getData()
{
    //Crear un getData que distinga que información coger
    return {"informes":
            [
                {
                "fecha":"10/02/2016",
                "nombre": "Luis Rodriguez",
                "info": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                "fecha":"11/02/2016",
                "nombre": "Pablo Sanchez",
                "info": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }

            ]
            }
}
