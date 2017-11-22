module.exports= {
function checkInput({id}){
  if (!id || Number.isNaN(id)) {
    throw new Error('Invalid ID')
  }
  return id
}

function getOne(id){
  return knex('books')
    .where('id', id)
    .first()
}

function update(book){
  return knex('books')
    .update({
      title: book.title,
      author: book.author,
      genre: book.genre,
      description: book.description,
      cover_url: book.coverUrl,
    }, '*')
    .where('id', book.id)
}

}
