/**
 * Created by adimar.junior on 27/06/2014.
 */

app.factory('tasks', function(Restangular){
//    Restangular.extendModel('tasks', function(model) {
//        model.add = function() {
//            console.log(this);
////            this.post();
//        }
////        model.save = function() {
////            console.log(this);
//////            this.post();
////        }
//        return model;
//    })
    return Restangular.all('tasks');
});
