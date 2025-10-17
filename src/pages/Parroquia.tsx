import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { TablaParroquia } from "@/components/TablaParroquia"

import { publicacionesDataParroquia } from "@/data/data_parr"


export const Parroquia = () => {
  return (
    <>
         <CustomJumbotron title="Publicaciones de Estadisticas y cartografías de las comunidades" description="En la Tabla se encuentra publicaciones de estádistica y las catorgrafía de las comunidades que pertenece a las diferentes parroquias del estado  en formato PDF,XLS,HTML, y de imágenes"/>
         
          <TablaParroquia data={publicacionesDataParroquia} />
         
         
       </>
  )
}
