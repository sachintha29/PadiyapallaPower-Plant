export interface Generation {
    date: Date;
    cebmeter: string;
    machineone: string;
    machinetwo: string;
    machine1: IMachine;
    machine2: IMachine;


}

interface IMachine {
    load: string;
    daillymaxload: string;
    outages: string;
    grid: string;
    generation: string;
    powermachine: string;
    generatorwindings: string;
    debearingtemp: string;
    ndebearingtemp: string;
    transfomeroiltemp: string;
    lubricantoiltemp: string;



}
