(function() {
    var cards;

    cards = {
        init: function() {
            this._cardsWrapper = document.querySelector('.cards-wrapper');
            this._bindEvents();
        },
        _bindEvents: function() {
            var cards;
            cards = document.querySelectorAll('.card');
            [].forEach.call(cards, this._bindEventsToCard.bind(this));
        },
        _bindEventsToCard: function(card) {
            var self;
            self = this;
            card.addEventListener('dragstart', (function(e) {
                self._handleDragStart.call(self, e, this);
            }), false);
            card.addEventListener('drag', self._handleDrag.bind(self), false);
            card.addEventListener('dragend', self._handleDragEnd.bind(self), false);
        },
        _resetCard: function(card) {
            card.removeAttribute('style');
            card.classList.remove('card--invisible');
            this._cardsWrapper.insertBefore(card, this._cardsWrapper.firstChild);
        },
        _handleDragStart: function(e, card) {
            var crt;
            this._dragStart = e.clientX;
            crt = card.cloneNode(true);
            crt.style.display = 'none';
            e.dataTransfer.setDragImage(crt, 0, 0);
        },
        _handleDrag: function(e) {
            var card, dragDirection, dragDistance, maxDistance, newOpacity;
            dragDistance = e.clientX - this._dragStart;
            card = e.target;
            dragDirection = dragDistance < 0 ? 'left' : 'right';
            maxDistance = dragDistance < 0 ? -250 : 250;
            newOpacity = maxDistance / 100 * dragDistance / 1000;
            if (dragDirection === 'right' && dragDistance < 250 || dragDirection === 'left' && dragDistance > -250) {
                card.setAttribute('style', 'opacity: ' + 1 - newOpacity + '; transform: rotate(' + dragDistance / 50 + 'deg) translateX(' + dragDistance + 'px);');
            }
        },
        _handleDragEnd: function(e) {
            var card, dragDirection, dragDistance, self;
            self = this;
            dragDistance = e.clientX - this._dragStart;
            card = e.target;
            dragDirection = dragDistance < 0 ? 'left' : 'right';
            if (dragDirection === 'right' && dragDistance > 150 || dragDirection === 'left' && dragDistance < -150) {
                card.classList.add('card--invisible');
                setTimeout((function() {
                    self._resetCard(card);
                }), 200);
            } else {
                card.setAttribute('style', 'transform: rotate(0deg) translateX(0px);');
            }
        }
    };

    cards.init();

}).call(this);