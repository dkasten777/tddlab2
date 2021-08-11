import {Greeter} from "../src/greeter";
describe("Greeter class", ()=>{
    test("Hello Dan", ()=>{
        
        let helloDan = new Greeter("Hello");

        expect(helloDan.greet("Dan")).toBe("Hello, Dan!")
    });

    test("Hey Jimbo", ()=>{
        let heyJim = new Greeter("Hey");

        expect(heyJim.greet("Jimbo")).toBe("Hey, Jimbo!")
    });
});