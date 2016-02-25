'use strict';
const path = location.pathname;
const matchQuestionPage = /^\/([\w\d]+)\/(\d+)\/.+/;
const matchedUri = path.match(matchQuestionPage);
const questionId = matchedUri ? matchedUri[2] : null;

function getQuestionId() {
  let questionId = $('#question').attr('data-questionid');
  return questionId;
}

function allAnswers() {
  let answerIds = [];
  $('.answer').each(function() {
    answerIds.push($(this).attr('data-answerid'));
  });
  return answerIds;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(allAnswers());
});
