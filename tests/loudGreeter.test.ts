import LoudGreeter from "../src/loudGreeter";

describe("loudGreeter tests", ()=>{
    
    
    test("'sup Darren", ()=>{
        let supDarren = new LoudGreeter("'sup");

        expect(supDarren.greet("Darren")).toBe("'sup, Darren!!");
    })

    test ("Hi Gregg", ()=>{
        let hiGregg = new LoudGreeter("Hi");

        hiGregg.addVolume();

        expect(hiGregg.greet("Gregg")).toBe("Hi, Gregg!!!");

        // let"s add more volume
        hiGregg.addVolume();

        expect(hiGregg.greet("Gregg")).toBe("Hi, Gregg!!!!");
    })
})