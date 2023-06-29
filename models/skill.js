const skills = [
    {id: 1001, skill: 'Googling MDN'},
    {id: 1002, skill: 'Note-taking'},
    {id: 1003, skill: 'Copy and Pasting'},
    {id: 1004, skill: 'Console.logging'},
    {id: 1005, skill: 'Staying hydrated, limber'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function deleteOne(id) {
    //all properties attached to req.params are strings!
    id = parseInt(id);
    //find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    //add the id
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }

  function getAll() {
    return skills ;
  }
 
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }