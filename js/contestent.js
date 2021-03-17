class Contestant{
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.button = createButton('Submit');
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value", (data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value", (data)=>{
        allContestants = data.val();
      })
    }

    display(){
      this.button.position(300,300);
      this.button.mousePressed(()=>{
        this.button.hide(); 
  
        contestant.name = question.input1.value();
        contestant.answer = question.input2.value();

        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update()
        contestant.updateCount(contestantCount);
        gameState = 1;
      });
    if(gameState === 1){
      
    }
    }
}