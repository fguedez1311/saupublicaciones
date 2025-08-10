

export const Home = () => {
  return (
    <>
         <section id="home-section" className="text-center mt-10">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Bienvenido al Sistema  Estadístico del INE Delta Amacuro</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Este sistema le permite acceder a información estadística detallada sobre diversos indicadores de población económicos y sociales y croquis por estado municipio y parroquia. 
                Explore nuestras secciones para encontrar los datos que necesita.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <i className="fas fa-chart-line text-blue-500 text-4xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Estadísticas del estado Delta Amacuro y sus croquis</h3>
                    <p className="text-gray-600">Datos agregados a nivel del estado Delta Amacuro.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <i className="fas fa-city text-blue-500 text-4xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Por Municipio</h3>
                    <p className="text-gray-600">Estadísticas  desagregada por municipio y sus croquis .</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <i className="fas fa-map-marked-alt text-blue-500 text-4xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Por Parroquia</h3>
                    <p className="text-gray-600">Estadísticas de parroquia y sus croquis.</p>
                </div>
            </div>
        </section>
    
    </>
  )
}
