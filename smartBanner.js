
               var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
               var isiDevice= /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
               var json = {"title":"My Verizon Mobile","author":"Verizon Wireless","button":"view" };
               
               if(isAndroid){
                              $('#page').prepend('<div id="smartbanner"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+json.title+'</strong><span>'+json.author+'</span></div><a id="viewInStore" class="sb-button"><span>'+json.button+'</span></a></div></div>');
                              $("#viewInStore").unbind("click");
                              $("#viewInStore").bind("click",function(){
                                                            //window.open("market://details?id=com.vzw.hss.myverizon");
                                                            window.open("intent://launch/#Intent;scheme=openmvm://mobile.vzw.com;package=com.vzw.hss.myverizon;S.browser_fallback_url=market://details?id=com.vzw.hss.myverizon;end","_self");
                                             });
                              $(".sb-close").unbind("click");
                              $(".sb-close").bind("click", function(){$("#smartbanner").hide()});
               }else if(isiDevice){
                              $.getJSON( "https://itunes.apple.com/lookup?id=416023011&callback=?", function(){
                                             console.log("success get rating review from itunes");})
                                             .done(function( data ) {
                                                            var averageUserRating =  data.results[0].averageUserRatingForCurrentVersion;
                                                            $('#page').prepend('<div id="smartbanner"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+json.title+'</strong><span>'+json.author+'</span><span class="rating-static rating-' + averageUserRating.toString().replace(".", "") + '"></span></div><a id="viewInStore" class="sb-button"><span>'+json.button+'</span></a></div></div>');
                                                            $("a#viewInStore.sb-button").unbind("click");
                                                            $("a#viewInStore.sb-button").bind("click",function(e){
                                                                                          e.preventDefault();
                                                                                          window.open("itms-apps://itunes.apple.com/app/id416023011");
                                                                           });
                                                            $(".sb-close").unbind("click");
                                                            $(".sb-close").bind("click", function(){$("#smartbanner").hide()});
                                             });
               }
               

