class Question{
    constructor(){
        this.title = createElement();

        this.question = createElement();

        this.option1 = createElement();

        this.option2 = createElement();

        this.option3 = createElement();

        this.option4 = createElement();

        this.input1 = createInput("Name");
        this.input2 = createInput("Answer")
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,25);

        this.question.html("Question: What has two hands but cannot hold anything?")
        this.question.position(150,80);

        this.option1.html("1: Dog");
        this.option1.position(150,100);

        this.option2.html("2: Clock");
        this.option2.position(150,120);

        this.option3.html("3: Baby");
        this.option3.position(150,140);

        this.option4.html("4: Dragon");
        this.option4.position(150,160);

        this.input1.position(150,230);
        this.input2.position(350,230)
    }
}