interface Props{
    title:string,
    description:string
}


export const CustomJumbotron = ({title,description}:Props) => {
  return (
    <div className="text-center mb-8">
          <h1 className="text-3xl mt-5 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
           {title}
          </h1>
          {
            description && (
            <p className="text-gray-600 text-lg mt-3">{description}</p>
            )
          }
         
    </div>
  )
}
