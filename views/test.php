<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

            .typing-navbar {
                width: 22ch;
                /*animation: typing 2s steps(22) infinite alternate;*/
                white-space: nowrap;
                overflow: hidden;
                border-right: 3px solid;
                font-family: monospace;
                font-size: 2em;
            }

            @keyframes typing {
                from {
                    width: 0
                }
            }
            
.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
  width: 500px;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}

.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}

    </style>
</head>
<body>
    <div class="wrapper">
        <div class="typing-demo">
        <a href="">This is a typing demo.</a>
        </div>
    </div>
    <div class="wrapper">
    <a href="#demo-modal">Open Demo Modal</a>
</div>

<div id="demo-modal" class="modal">
    <div class="modal__content">
        <h1>CSS Only Modal</h1>

        <p>
            You can use the :target pseudo-class to create a modals with Zero JavaScript. Enjoy!
        </p>

        <div class="modal__footer">
            Made with <i class="fa fa-heart"></i>, by <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a>
        </div>

        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
</body>
</html>