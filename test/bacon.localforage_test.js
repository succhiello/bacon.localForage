describe('bacon.localforage', function() {

    var blf = require('../src/bacon.localforage'),
        data = {
            key0: 'Alpha',
            key1: 'Bravo',
            key2: 'Charlie',
            key3: 'Delta'
        };

    blf.config({
        driver: blf.LOCALSTORAGE,
        name: 'bacon.localforage test'
    });

    it('should clear storage', function(done) {
        blf.clear()
            .flatMap(blf.length())
            .map(expect)
            .doAction('.toBe', 0)
            .assign(done);
    });

    it('should set and get item and return Bacon.js EventStream', function(done) {
        Bacon.zipAsArray(_.map(data, function(v, k) { return blf.setItem(k, v); }))
            .doAction(function(values) {
                Bacon.zipAsArray(_(data).keys().map(blf.getItem).value())
                    .map(expect)
                    .assign('.toEqual', values);
            })
            .assign(done);
    });

    it('should remove item', function(done) {
        blf.removeItem('key3')
            .flatMap(blf.getItem('key3'))
            .map(expect)
            .doAction('.toBeNull')
            .assign(done);
    });

    it('should manage key', function(done) {
        blf.length()
            .map(expect)
            .doAction('.toBe', 3)
            .flatMap(blf.keys())
            .map('.sort')
            .doAction(function(keys) {
                expect(keys).toEqual(_(data).keys().first(3).value());
                Bacon.zipAsArray(_(3).range().map(blf.key).value())
                    .map('.sort')
                    .map(expect)
                    .assign('.toEqual', keys);
            })
            .assign(done);
    });
});
