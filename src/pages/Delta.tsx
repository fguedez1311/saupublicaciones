import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { TablaEstado } from "@/components/TablaEstado"
import { publicacionesData } from "@/data/deltaData"


export const Delta = () => {
  return (
    <>
      <CustomJumbotron title="Publicaciones de Estadisticas de Estado Delta Amacuro" description="En la Tabla se encuentra publicaciones de estádistica del estado y por municipio además de cartografías en formato PDF,XLS,HTML, y de imágenes"/>
      <TablaEstado data={publicacionesData} />
      
      
    </>
  )
}
