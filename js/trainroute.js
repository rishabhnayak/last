/**
 * Created by kamlesh on 1/24/2017.
 */
function trainroute(train_no) {

    return new Promise(function (resolve,reject) {


        var url = "http://api.railwayapi.com/route/train/" + train_no + "/apikey/" + key[keyno] + "/";
        //console.log("calling url :"+url);

        $.get(url, function (body, status) {
            setTimeout(function(){reject("Server is not Responding!!!")}, 8000);
            if(status=="success") {
                if(body.response_code==200) {
                    resolve(body);

                }else {
                    reject("check ur response code .it is not 200!!!! :\nthis is resopse code from railway api :" + body.response_code);
                }
            }else {
                reject("get request is not success");
            }
        });

    })
}
