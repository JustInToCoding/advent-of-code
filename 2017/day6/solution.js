const input = '4	1	15	12	0	9	9	5	5	8	7	3	14	5	12	3';
const inputArray = input.split('\t').map((value) => +value);

const getIndexElement = (elementArray) => (element) => elementArray.indexOf(element);
const biggestNumberInArray = (elementArray) => elementArray.reduce((a, b) => Math.max(a, b));
const doWhileLoopCircular = (elementArray, startIndex, times, callback) => {
    let index = startIndex;
    for(let timesDone = 0; timesDone < times; timesDone++) {
        if(index === elementArray.length - 1) index = 0;
        else index++;
        callback(elementArray, index);
    }
}

const calculateRedistributionCycles = (memoryBanks) => {
    let cycles = 0;
    let previousMemoryBanksAllocations = [];
    let currentMemoryBankHash = memoryBanks.join(',');
    let currentMemoryBankHashIndex;
    while((currentMemoryBankHashIndex = previousMemoryBanksAllocations.indexOf(currentMemoryBankHash)) === -1) {
        previousMemoryBanksAllocations.push(currentMemoryBankHash);
        const biggestMemoryBank = biggestNumberInArray(memoryBanks);
        const biggestMemoryBankIndex = getIndexElement(memoryBanks)(biggestMemoryBank);
        memoryBanks[biggestMemoryBankIndex] = 0;
        doWhileLoopCircular(memoryBanks, biggestMemoryBankIndex, biggestMemoryBank, (memoryBanks, index) => memoryBanks[index]++);
        currentMemoryBankHash = memoryBanks.join(',');
        cycles++;
    }
    return { cycles, seenAgainAfter: cycles - currentMemoryBankHashIndex };
};

console.log(calculateRedistributionCycles(inputArray));
