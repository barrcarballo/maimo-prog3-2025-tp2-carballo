import MoviesGrid from "./MoviesGrid"

const HomeContainer = () => {
  return (
    //<div className="grid grid-cols-12 gap-2">
    //<div className="col-span-4 bg-sky-200 flex justify-center items-center">Hola</div>
    //<div className="col-span-4 bg-sky-200 flex justify-center items-center">Chau</div>
    //<div className="col-span-4 bg-sky-200 flex justify-center items-center">Jeje</div>
   //</div>
   <div className="HomeContainer">
    <div>
    <MoviesGrid />
    </div>
   </div>
  )
}

export default HomeContainer
