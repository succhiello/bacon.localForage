describe('bacon.localforage', function() {

    localforage.config({
        driver: localforage.LOCALSTORAGE,
        name: 'bacon.localforage test'
    });

    var blc = require('../src/bacon.localforage'),
        data = {
            key0: 'Alpha',
            key1: 'Bravo',
            key2: 'Charlie',
            key3: 'Delta'
        };

    it('should set and get item and return Bacon.js EventStream', function(done) {
        Bacon.zipAsArray(_.map(data, function(v, k) { return blc.setItem(k, v); }))
            .doAction(function(values) {
                Bacon.zipAsArray(_(data).keys().map(blc.getItem).value())
                    .map(expect)
                    .assign('.toEqual', values);
            })
            .assign(done);
    });

    it('should remove item', function(done) {
        blc.removeItem('key3')
            .flatMap(blc.getItem('key3'))
            .map(expect)
            .doAction('.toBeNull')
            .assign(done);
    });

    it('should manage key', function(done) {
        blc.length()
            .map(expect)
            .doAction('.toBe', 3)
            .flatMap(blc.keys())
            .map('.sort')
            .doAction(function(keys) {
                expect(keys).toEqual(_(data).keys().first(3).value());
                Bacon.zipAsArray(_(3).range().map(blc.key).value())
                    .map('.sort')
                    .map(expect)
                    .assign('.toEqual', keys);
            })
            .assign(done);
    });

    it('should clear storage', function(done) {
        blc.clear()
            .flatMap(blc.length())
            .map(expect)
            .doAction('.toBe', 0)
            .assign(done);
    });
});
