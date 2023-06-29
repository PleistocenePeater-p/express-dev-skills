// controllers/skills.js
const Skill = require('../models/skill');

module.exports = {
  allSkills,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  //The model is responsible for creating data
  Skill.create(req.body);
  //Do a redirect anytime data is changed
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill'});
}

function allSkills(req, res) {
    res.render('skills/allSkills', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    });
  }
  