/**
 * Created by kamlesh on 1/25/2017.
 */
function tablemakertbts(body,today_or_tomorrow) {
    return new Promise(function (resolve,reject) {
        all_train_list=[];
        var weeklist=['M','Tu','W','Th','F','Sa','Su'];

        if(today_or_tomorrow==0 || today_or_tomorrow==-1) {
            var table = "<table class='table table-striped' > <thead> <tr><th>Train</th> <th>Dep.Time</th> <th>Arr.Time</th> <th id='delay_column'>Delay</th> </tr> </thead> <tbody>";
            body.train.forEach(function (train) {
                var weekdata = "<h7>";
                all_train_list.push({"number": train.number});
                for (var k = 0; k < 7; k++) {
                    if (train.days[k].runs == "Y") {

                        weekdata += "<day style='color:navy;margin-left: 7px' >" + weeklist[k] + "</day>";
                    } else if ((train.days[k].runs == "N")) {

                        weekdata += "<day style='color:rgba(247,27,86,0.5);margin-left:7px'>" + weeklist[k] + "</day>";
                    }
                }
                weekdata += "</h7>";
                var traindetails = {'number': train.number, 'name': train.name, 'sourcedetails': sourcedetails};
                table += "<tr class=" + train.number + "><td><k id='name'  onclick='getlivestatusonclick(" + JSON.stringify(traindetails) + ")' type=\"text\"  data-toggle=\"modal\" data-target=\"#myModal\" ><a href=\"#\"><strong>" + train.name + "</strong><br>" + train.number + "</a></k>" +

                    "<k style='padding-left: 10px' class='glyphicon glyphicon-heart-empty' id='favicon' onclick='savefav(" + JSON.stringify(traindetails) + ")' ></k><p id='weekdays' style='margin-top: 10px'>" + weekdata + "</p><p id='errormsg'></p></td><td><p id='schdep'>" + train.src_departure_time + "</p><p id='actdep'>" + "</p></td><td>" + train.dest_arrival_time + "</td><td id='delaytime' onclick='gettraindelaytime(" + train.number + ")'><button class='btn btn-default btn-md glyphicon glyphicon-time' style='border-radius: 100%;border:1px solid rgba(66,44,100,0.4)'></button> </div></td></tr>";

            });
        }else{
            console.log("kuch gdbd hai ");
            var table = "<table class='table table-striped' > <thead> <tr><th>Train</th> <th>Dep.Time</th> <th>Arr.Time</th>  </tr> </thead> <tbody>";
            body.train.forEach(function (train) {
                var weekdata = "<h7>";
                all_train_list.push({"number": train.number});
                for (var k = 0; k < 7; k++) {
                    if (train.days[k].runs == "Y") {

                        weekdata += "<day style='color:navy;margin-left: 7px' >" + weeklist[k] + "</day>";
                    } else if ((train.days[k].runs == "N")) {

                        weekdata += "<day style='color:rgba(247,27,86,0.99);margin-left:7px'>" + weeklist[k] + "</day>";
                    }
                }
                weekdata += "</h7>";
                var traindetails = {'number': train.number, 'name': train.name, 'sourcedetails': sourcedetails};
                table += "<tr class=" + train.number + "><td><k id='name'  onclick='get_train_route_onclick(" + JSON.stringify(traindetails) + ")' type=\"text\"  data-toggle=\"modal\" data-target=\"#myModal\" ><a href=\"#\"><strong>" + train.name + "</strong><br>" + train.number + "</a></k>" +

                    "<k style='padding-left: 10px' class='glyphicon glyphicon-heart-empty' id='favicon' onclick='savefav(" + JSON.stringify(traindetails) + ")' ></k><p id='weekdays' style='margin-top: 10px'>" + weekdata + "</p><p id='errormsg'></p></td><td><p id='schdep'>" + train.src_departure_time + "</p><p id='actdep'>" + "</p></td><td>" + train.dest_arrival_time + "</td></tr>";

            });
        }
        resolve(table);
    });
}
