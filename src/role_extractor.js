'use strict';

/*
 * extractor gets minerals from the extractor
 *
 * Moves, harvest, brings to the terminal
 */

roles.extractor = {};

roles.extractor.boostActions = ['harvest', 'capacity'];

roles.extractor.settings = {
  layoutString: 'MCW',
  amount: [5, 1, 4],
  maxLayoutAmount: 5,
};

function executeExtractor(creep) {
  return creep.handleExtractor();
}

// todo-msc preMove parts from sourcer
roles.extractor.preMove = function(creep, directions) {
  creep.preMoveExtractorSourcer(directions);
};

roles.extractor.action = executeExtractor;
