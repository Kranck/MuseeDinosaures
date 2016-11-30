$( document ).ready(function()
{

    SetHiddeddiv();

    $(".response").on('click', function(){
        var value = $(this).data("resp");

        if(value == true)
        {
            $(this).css( {
                "background-color" : "rgba(67,160,71, 1)"
            } );
        }
    });

    $("#start_form").submit(function( event )
    {
        event.preventDefault();
        var pseudo = $("#pseudo_val").val();

        $("#pseudo").text(pseudo);
        $(".form-style-5").remove();
    });

    SetScoring();
    function SetScoring()
    {
        var value = parseInt( $("#score").text() );
        value +=  Math.floor((Math.random() * 10) + 1);

        $("#score").text(value);

        setTimeout(SetScoring, Math.floor((Math.random() * 1000) + 100) );
    }


    /**
     * EVENT INFO BULLES
     */
    $("#info_but").on('click', function(){

        var state = GetHidenValue ( $("#info") , "show" );

        if ( state == false )
        {
            $("#info").data("show", "true");
        }
        else
        {
            $("#info").data("show", "false");
        }

        SetHiddeddiv();
        SetTriggerButtons(state);
    });

     /**
     * EVENT QUIZZ BULLES
     */
    $("#quizz_but").on('click', function(){

        var state = GetHidenValue ( $("#quizz") , "show" );

        if ( state == false )
        {
            $("#quizz").data("show", "true");
        }
        else
        {
            $("#quizz").data("show", "false");
        }

        SetHiddeddiv();
        SetTriggerButtons(state);
    });

    /**
     * EVENT VIDEO
     */
    $("#video_but").on('click', function(){

        var state = GetHidenValue ( $("#info_vid") , "show" );

        if ( state == false )
        {
            $("#info_vid").data("show", "true");
        }
        else
        {
            $("#info_vid").data("show", "false");
        }

        SetHiddeddiv();
        SetTriggerButtons(state);
    });


    //Evenements lorsque l'on double click sur l'ecran
    $('html').dblclick(function(){
        $("div[name=hiddenDiv]").each(function () {
             $(this).fadeOut();
             SetTriggerButtons(true);
        });
    });


    /**
     * Verifie l'etat de visibilite (data-show) de chaque div avec le name hiddenDiv et modifie leurs visibilité en fonction
     */
    function SetHiddeddiv()
    {
        $("div[name=hiddenDiv]").each(function () {
            var state = GetHidenValue($(this), "show");

            if( state == false )
            {
                $(this).hide();
            }
            else
            {
                $(this).fadeIn();
            }

         });
    }


    //Retourne le data-[dataname] de la div [element]
    function GetHidenValue(element, dataname) {
        return $(element).data(dataname);
    }

    /*
     *  Affiche ou caches les buttons triggerBut
     */
    function SetTriggerButtons(showState) {
        $("button[name=triggerBut]").each( function(){
            if ( showState == true)
                $(this).show();
            else
                $(this).hide();
        });
    }

});
