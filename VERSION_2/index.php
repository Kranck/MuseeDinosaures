<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Park - Dinosorus</title>
        <meta charset="UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto:200" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
        <link href="css/form_start.css" rel="stylesheet">
        <link href="css/quizz.css" rel="stylesheet">
    </head>
    <body>

        <img id="map" src="i/map.png" alt="Map">

        <div id="info" name="hiddenDiv" data-show="false">
            <h3>SuperDino</h3>
            <div class="separator"></div>

            <p> Sint laboris quis velit irure fugiat nisi ea Lorem quis ipsum. Sunt dolore occaecat minim commodo nostrud qui deserunt deserunt mollit et consequat. Velit consectetur ex proident amet proident incididunt commodo.
                Sint laboris quis velit irure fugiat nisi ea Lorem quis ipsum. Sunt dolore occaecat minim commodo nostrud qui deserunt deserunt mollit et consequat. Velit consectetur ex proident amet proident incididunt commodo.</p>
            <div id="icon"> <img src="ui/icon_dino.svg" alt="Dino" /> </div>
        </div>

        <div id="info_vid" name="hiddenDiv" data-show="false">

            <iframe width="800" height="555" src="https://www.youtube.com/embed/uX9COAwg51A" frameborder="0" allowfullscreen></iframe>

        </div>


        <div id="slide-container">
            <div id="slide-container-left"> <img src="ui/score.svg" alt="score"/> <p id="score"> 18524 </p> </div>
            <div id="slide-container-right"> <img src="ui/user.svg" alt="pseudo"/> <p id="pseudo"> Billy </p> </div>
        </div>


        <?php  include_once("inc/form_start.php"); ?>

        <?php  include_once("inc/quizz.php") ?>


        <button name="triggerBut" class="buttonT" id="info_but" ></button>
        <button name="triggerBut" class="buttonT" id="quizz_but" ></button>
        <button name="triggerBut" class="buttonT" id="video_but" ></button>



        <script src="js/script.js"></script>
    </body>
</html>
