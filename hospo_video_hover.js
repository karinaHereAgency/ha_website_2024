jQuery(document).ready(function(){

    // Get All Videos
    const videos = document.querySelectorAll(" .hover_video_wrapper .video");
    const videos_boxes = jQuery(".hover_video_wrapper");
    
    //Loop over videos to add eventListeners
    for (const videos_box of videos_boxes) {
        videos_box.addEventListener('mouseover', function() { 
            console.log('mouse entered');
          videos_box.find(".video").play();
        }, false);
        
        videos_box.addEventListener('mouseout', function() { 
            console.log('mouse left');
            videos_box.find(".video").pause();
        }, false);
    }
});
