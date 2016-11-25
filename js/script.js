$( document ).ready(function()
{

    SetButton( $("button[name='button']") );

    //Configure un bouton pour ouvrir une div qu'il cible avec son attribut target
    function SetButton(targetButton)
    {
      var divName = $(targetButton).data("target"); //Name de la div cible

      var TargetDiv = $( "div[name='"+divName+"']");  //Cible


      $(targetButton).on('click', function functionName() {

        if(isOpened(TargetDiv))
          CloseDiv(TargetDiv);
        else
          OpenDiv(TargetDiv);

      });
    }

    //Affiche un element target
    function OpenDiv(target)
    {
      $(target).fadeIn("slow");
    }

    //Rend invisible un element target
    function CloseDiv(target)
    {
      $(target).fadeOut("slow");
    }

    //Verifie si l'element target est visible
    function isOpened(target)
    {
      if($(target).is(':visible'))
        return true;

      return false;
    }

});
