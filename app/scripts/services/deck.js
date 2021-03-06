'use strict';

/**
 * @ngdoc service
 * @name faeriadecks2App.Deck
 * @description
 * # Deck
 * Service in the faeriadecks2App.
 */
angular.module('faeriadecks2App')
	.service('Deck', function Deck($resource) {
		var DeckResource = $resource('/api/decks/:deckId', {
			deckId: '@id'
		}, {
			list: { method: 'GET', isArray: true }
		});

		return DeckResource;
	});