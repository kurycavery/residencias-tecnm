export interface semestre {
    nombre: string;
    materias: materia[]
};

export interface materia {
    nombre: string,
    creditos: number,
    status: boolean,
    active: boolean,
    color: string
}