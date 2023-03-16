export type Level = {
    tittle: string,
    color: string,
    icon: "down" | "up",
    imc: number[],
    yourImc?: number
}

export const levels: Level[] = [
    {tittle: "Magreza", color: '#96a3ab', icon: "down", imc: [0, 18.59] },
    {tittle: "Normal", color: '#0ead69', icon: "up", imc: [18.60, 24.99] },
    {tittle: "Sobrepeso", color: '#e2b039', icon: "down", imc: [25, 30.09] },
    {tittle: "Obesidade", color: '#C3423F', icon: "down", imc: [30.1, 99] }
]


export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for (let i in levels) {
        if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelCopy: Level = { ...levels[i] };

            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;
}
