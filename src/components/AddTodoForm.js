import React,{ useState } from 'react'

const AddTodoForm = () => {

return (
  <form>
    <label>Ajouter Todo </label>
    <input type="text" />                {/*creer le rectangle ou on ecrit les texte*/}
    <input type="submit" />              {/*creer un bouton envoyer*/}
  </form>
)

}
 {/*exporté ds le fichier Todo et non app*/}
export default AddTodoForm             