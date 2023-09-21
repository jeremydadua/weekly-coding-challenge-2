$(function(){

    $(".ratingCircle").click(function(){
        $(".ratingCircle").removeClass("selected");
        $(this).addClass("selected");
    });

    $(".submitBtn").click(function() {
        var selectedRating = $(".ratingCircle.selected");
        var ratingResult = $("#ratingResult");

        if (selectedRating.length === 0) {
            alert('You haven\'t chosen a rating');
        } else {
            $(".ratingState").hide();
            var ratingValue = selectedRating.data('rating');
            ratingResult.text(`You selected ${ratingValue} out of 5`);
            $(".submittedState").css('display', 'block');
        }
    });
    
});