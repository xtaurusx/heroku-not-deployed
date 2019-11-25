import React, { Component } from 'react';

function RecipeMaintenance () {
  const nameRef = React.createRef();
  const imageRef = React.createRef();
  const descriptionRef = React.createRef();

  // createRecipe(e) {
  //   e.preventDefault();
  //   const recipe = {
  //     name: nameRef.current.value,
  //     image: imageRef.current.value,
  //     description: descriptionRef.current.value
  //   };
  //   // this.props.addRecipe(recipe);
  //   console.log(recipe);
  // }

  return (
    <div>
      <h3>Add Recipe Form</h3>
      <form onSubmit={e => this.createRecipe(e)}>
        <input
          type='text'
          name='name'
          placeholder='Recipe name'
          ref={this.nameRef}
        />
        <input
          type='text'
          name='image'
          placeholder='Recipe image'
          ref={this.imageRef}
        />
        <textarea
          type='text'
          name='description'
          placeholder='Recipe description'
          ref={this.descriptionRef}
        />
        <button type='submit'>Add Recipe</button>
      </form>
    </div>
  );
}

export default RecipeMaintenance;