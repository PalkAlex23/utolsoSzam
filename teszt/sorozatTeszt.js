QUnit.module('sorozat', function() {
    //alap kérdések, pl. létezik-E?
    QUnit.test('Létezik-E?', assert => {
      assert.ok(sorozat);
    });

    QUnit.test('Függvény-E?', assert => {
        assert.ok(typeof(sorozat) === 'function');
    });

    QUnit.test('Alap lista teszt', assert => {
        assert.equal(sorozat([17, 215, 3]), "7 5 3 ");
    });

    QUnit.test('Alap lista teszt második', assert => {
        assert.equal(sorozat([80, 1, 16287]), "0 1 7 ");
    });

    QUnit.test('Nincs paraméter', assert => {
        assert.equal(sorozat([]), "Nincs paraméter megadva");
    });
    QUnit.test('Szöveg ami nem tartalmaz számot', assert => {
        assert.equal(sorozat(["kutya"]), "Nem szám a bemenet");
    });
});