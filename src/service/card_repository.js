import { getDatabase, off, onValue, ref, remove, set } from 'firebase/database';

class CardRepository {
  constructor() {
    this.db = getDatabase();
  }

  syncCards(userId, onUpdate) {
    const starCountRef = ref(this.db, `${userId}/cards`);
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off();
  }

  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`), card);
  }
}

export default CardRepository;
