export const ParshallTable = [
    // {
    //     "wM": 0.075,
    //     "wCm": 7.6,
    //     "A": 0.466,
    //     "B": 0.457,
    //     "C": 0.178,
    //     "D": 0.259,
    //     "E": 0.457,
    //     "F": 0.152,
    //     "G": 0.305,
    //     "K": 0.025,
    //     "N": 0.057,
    //     "X": 0.025,
    //     "Y": 0.038,
    //     "K1": 3.072,
    //     "N1": 0.646,
    //     "minVazao": 0.8,
    //     "maxVazao": 53.8
    // },
    {
        "wM": 0.152,
        "wCm": 15.2,
        "A": 0.61,
        "B": 0.61,
        "C": 0.394,
        "D": 0.403,
        "E": 0.61,
        "F": 0.305,
        "G": 0.61,
        "K": 0.076,
        "N": 0.114,
        "X": 0.051,
        "Y": 0.076,
        "K1": 1.84, // TO-DO: mudar para 1.842
        "N1": 0.633,
        "minVazao": 1.4,
        "maxVazao": 110.4
    },
];

export function findParshallContent(vazao) {
    const result = ParshallTable.find(linha => vazao >= linha.minVazao && vazao <= linha.maxVazao);

    return result || ParshallTable[0];
}