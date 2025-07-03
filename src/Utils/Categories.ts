export enum Categories {
    CUENTO = 1,
    POESIA = 3,
    ARTICULOS = 4,
    CRONICAS = 5,
    RESENAS = 6,
    TECNOLOGIA = 7,
    "SALUD-Y-PSICOLOGIA" = 8
}

export const idToCategory: {[key: number | string]: string} = {
    1: "CUENTO",
    3: "POESIA",
    4: "ARTICULOS",
    5: "CRONICAS",
    6: "RESENAS",
    7: "TECNOLOGIA",
    8: "SALUD-Y-PSICOLOGIA"
}

export const categoryName: {[key: number | string]: string} = {
    1: "Cuento",
    3: "Poesía",
    4: "Artículos",
    5: "Crónicas",
    6: "Reseñas",
    7: "Tecnología",
    8: "Salud y Psicología",
}