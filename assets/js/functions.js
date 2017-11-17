$(document).ready(function() {
  $(document.links).filter(function() {
    return this.hostname != window.location.hostname;
  }).attr('target', '_blank');
});

$(document).ready(function(){
  $(".load-more-posts").click(function() {
    $(this).addClass("loading");

    var _this = this;
    var blogList = $("#blog-list > ul");
    var nextPage = parseInt(blogList.attr("data-currentPage")) + 1;
    var url = blogList.attr("data-url") + nextPage

    $.get(url, function (response) {
      var htmlResponse = $.parseHTML(response);
      var blogItems = $(htmlResponse).find("#blog-list a");

      blogList.attr("data-currentPage", nextPage).append(blogItems);

      if (blogList.attr("data-totalPages") == nextPage) {
        $(".load-more-posts").remove();
      }

      $(_this).removeClass("loading");
    });
  });
});
