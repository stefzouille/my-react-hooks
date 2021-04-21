import React,{ useState } from 'react'


const AddTodoForm = ({addNewTodo}) => {

{/* addtodo est une valeur vide(usestate) a remplir avec le setaddtodo(methode)*/}
  const [ addTodo, setAddTodo ] = useState('')  

  const handleTodo = (e) => {
    e.preventDefault()
  }
  addNewTodo(addTodo)

   


return (
  <form className="mt-4" onSubmit={handleTodo}>
    <div className="card card-body">
      <div classname="form-group">
        <label>Ajouter Todo </label>                          {/*valeur target value(que l on tape ds le rectangle) passé a setAddTodo*/}
        <input className="form-control" value={addTodo} type="text"  onChange={(e) => setAddTodo(e.target.value)} />  {/*creer le rectangle ou on ecrit les texte*/}
        <input className="btn btn-success mt-4" type="submit" />              {/*creer un bouton envoyer*/}

      </div>
    </div>
  </form>
)

}
 {/*exporté ds le fichier Todo et non app*/}
export default AddTodoForm             