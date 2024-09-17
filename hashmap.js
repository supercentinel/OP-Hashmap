class hashMap {
    buckets = [];
    capacity = 16;
    _entries = 0;
    loadFactor = 0.75;

    #hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++) {
            hashCode = primeNumber + hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        this._entries++;

        if(this._entries > (this.loadFactor * this.capacity)) {
            this.#increaseBuckets();
        }

        let index = this.#hash(key) % this.capacity;

        this.buckets[index] = [key, value];

        return this.buckets[index];
    }

    get(key) {
        let index = this.#hash(key) % this.capacity;

        return this.buckets[index][1];
    }

    #increaseBuckets() {
        this.capacity = this.capacity * 2;
    }

    has(key) {
        let index = this.#hash(key) % this.capacity;

        if(this.buckets[index] != null) {
            return true;
        }

        return false;
    }

    remove(key) {
        let index = this.#hash(key) % this.capacity;

        if(this.buckets[index] != null) {
            this.buckets[index] = null;
            return true;
        }

        return false;
    }

    length() {
        return this._entries;
    }

    clear() {
        this.buckets = [];
        this._entries = 0;
    }

    keys() {
        let keys = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i] != null) {
                keys.push(this.buckets[i][0]);
            }
        }

        return keys;
    }

    values() {
        let values = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i] != null) {
                values.push(this.buckets[i][1]);
            }
        }

        return values;
    }

    entries() {
        let entries = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i] != null) {
                entries.push(this.buckets[i]);
            }
        }

        return entries;
    }
};

const hmap = new hashMap();

//filling the HashMap
hmap.set('apple', 'red');
hmap.set('banana', 'yellow');
hmap.set('carrot', 'orange');
hmap.set('dog', 'brown');
hmap.set('elephant', 'gray');
hmap.set('frog', 'green');
hmap.set('grape', 'purple');
hmap.set('hat', 'black');
hmap.set('ice cream', 'white');
hmap.set('jacket', 'blue');
hmap.set('kite', 'pink');
hmap.set('lion', 'golden');
hmap.set('moon', 'silver');

// testing
console.log(hmap.get('apple'));
console.log(hmap.has('frog'));
console.log(hmap.remove('frog'));
console.log(hmap.length());
console.log(hmap.clear());
console.log(hmap.keys());
console.log(hmap.values());
console.log(hmap.entries());
