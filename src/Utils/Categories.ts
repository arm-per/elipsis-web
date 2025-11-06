export enum Categories {
    LITERATURA = 13,
    CULTURA = 14,
    PERIODISMO_INDEPENDIENTE = 15,
    SALUD_Y_PSICOLOGIA = 16,
    CIENCIA_Y_TECNOLOGIA = 17,
    COLUMNAS = 18,
    NOSOTROS = 19,
    OBRAS_LITERARIAS = 20
}

export const idToCategory: {[key: number | string]: string} = {
    13: "LITERATURA",
    14: "CULTURA",
    15: "PERIODISMO_INDEPENDIENTE",
    16: "SALUD_Y_PSICOLOGIA",
    17: "CIENCIA_Y_TECNOLOGIA",
    18: "COLUMNAS",
    19: "NOSOTROS",
    20: "OBRAS_LITERARIAS"
}

export const categoryName: {[key: number | string]: string} = {
    13: "Literatura",
    14: "Cultura",
    15: "Periodismo independiente",
    16: "Salud y Psicología",
    17: "Ciencia y tecnología",
    18: "Columnas",
    19: "Nosotros",
    20: "Obras Literarias"
}