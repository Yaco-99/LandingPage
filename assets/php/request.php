<html>
    <body>
    <div class="d-flex p-1">
    <div class="d-flex flex-column">
    <a class="pseudo" href="#">Pseudo :</a>
    <small class="text-muted">date</small>
    </div>
    <a class="description ml-1" href="#"><?php echo $_POST["proposition"]; ?></a>
    <div class="ml-auto d-flex align-self-center">
    <button type="button" class="btn btn-sm btn-primary description-popover" data-toggle="popover" title="description"
    data-content="<?php echo $_POST["description"]; ?>">Show description</button>
    </div></div></li>
    </body>
</html>
