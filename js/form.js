class form 
{
    constructor ()
    {
        this.title = createElement('h2');
        this.input = createInput ('Name');
        this.button = createButton ('Play');
        this.greeting = createElement ('h3');
        this.reset = createButton('Reset');

    } 

    hideForm ()
    {
        this.input.hide ();
        this.button.hide ();
        this.greeting.hide ();
    }

    display ()
    {
        this.title.html("Car Racing Game");
        this.title.position (width/2 - 50,0);
        
        this.input.position (width/2 - 50,160);

        this.button.position (width/2 - 5,200);
        this.button.mousePressed (()=>{
                this.input.hide ();
                this.button.hide ();
                var name = this.input.value ();
                PlayerCount = PlayerCount + 1;

                Player.index = PlayerCount;
                Player.name = name;
                Player.update ();
                Player.updateCount (PlayerCount);

                this.greeting.html ("Hello " + name);
                this.greeting.position (width/2 - 50,160);
            })
        this.reset.position (width - 100,50); 
        this.reset.mousePressed (() => 
        {
            Player.updateCount (0);
            Game.update (0);
            player.updateFinishedCars (0);
            window.location.reload ();
        })

    }
}