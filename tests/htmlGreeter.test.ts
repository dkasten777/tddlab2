import HtmlGreeter from "../src/htmlGreeter";

describe("HtmlGreeter", ()=>{
    test("p tag, Bonjour Daniel", ()=>{
        let bonjourDaniel = new HtmlGreeter("Bonjour", "p");

        expect(bonjourDaniel.greet("Daniel")).toBe("<p>Bonjour, Daniel!</p>");
    })

    test("h3 tag, what up Kaela", ()=>{
        let whatUpKaela = new HtmlGreeter("What up", "h3");

        expect(whatUpKaela.greet("Kaela")).toBe("<h3>What up, Kaela!</h3>");
    })

    test("default no tag (h1) yo, Brigitta", ()=>{
        let yoBriggita = new HtmlGreeter("Yo");

        expect(yoBriggita.greet("Brigitta")).toBe("<h1>Yo, Brigitta!</h1>");
    })
});