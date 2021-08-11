import JavaScriptGreeter from "../src/javascriptGreeter"

describe("JavaScriptGreeter test", ()=>{
    test("Welcome Darby", ()=>{
        let welcomeDarby = new JavaScriptGreeter("Welcome");

        expect(welcomeDarby.greet("Darby")).toBe("console.log('Welcome, Darby!')");
    });

    test("Hi, Edgar", ()=>{
        let hiEdgar = new JavaScriptGreeter("Hi");

        expect(hiEdgar.greet("Edgar")).toBe("console.log('Hi, Edgar!')")
    })
})