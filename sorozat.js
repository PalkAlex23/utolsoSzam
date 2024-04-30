function utolsoSzamjegy(szam) {
    return szam % 10
}


function sorozat(lista) {
    const ujLista = [];
    for (let i = 0; i < lista.length; i++) {
        if (isNaN(lista[i])) {
            return "Nem szám a bemenet"
        }
    }
    
    if (lista.length === 0) {
        return "Nincs paraméter megadva"
    } else {
        for (let index = 0; index <= lista.length; index++) {
            if (lista[index] > 10) {
                ujLista.push(utolsoSzamjegy(lista[index]));
            } else {
                ujLista.push(lista[index])
            }
        }
        return ujLista.join(" ")
    }
    
}