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
  const answerIds = allAnswers();

  answerIds.forEach(function(answerId) {
    let toggleBtn = [
      '<p class="stf-trans-toggle">',
      '<label class="stf-toggle-switch nolabel" data-answer-id="' + answerId + '" onclick="">',
      '<input type="checkbox" />',
      '<span>',
      '<span>中文</span>',
      '<span>中文</span>',
      '</span>',
      '<a></a>',
      '</label>',
      '</p>'
    ].join('');
    $('#answer-' + answerId + ' .answercell').prepend(toggleBtn);
  });

  $('.stf-toggle-switch').on('click', function() {
    let toggleInput = $(this).find('input');
    let answerId = $(this).attr('data-answer-id');
    let checked = !toggleInput.prop('checked');
    toggleInput.prop('checked', checked);

    let postText = $('#answer-' + answerId + ' .answercell .post-text');
    if(checked) {
      if(!postText.find('.stf-answer').length) {
        postText.prepend('<div class="stf-answer"></div>');
      }
    } else {
      postText.find('.stf-answer').remove();
    }
  });
});
