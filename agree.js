    function openLayer(targetID, options){
        var $layer = $('#'+targetID);
        var $close = $layer.find('.close');
        var width = $layer.outerWidth();
        var ypos = options.top;
        var xpos = options.left;
        var marginLeft = 0;
        
        if(xpos==undefined){
            xpos = '50%';
            marginLeft = -(width/2);
        }

        if(!$layer.is(':visible')){
            $layer.css({'top':ypos+'px','left':xpos,'margin-left':marginLeft})
                .show();
        }

        $close.bind('click',function(){
            if($layer.is(':visible')){
                $layer.hide();
            }
            return false;
        });
    }