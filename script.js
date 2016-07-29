function findSequence(){
    var val = document.getElementById('arr').value;
    if(val == ''){
        document.getElementById('sol').innerHTML = 'Enter Values';
    }else {
        var val_arr = JSON.parse("[" + val + "]");
        if(val_arr.length == 1){
            document.getElementById('sol').innerHTML = 'Sequence is ' + val_arr[0];
        }else {
            document.getElementById('demo').innerHTML = findSeq(val_arr);
        }
    }
}

count = 0;
arr_global = [];
function findSeq(arr){
    var count_new = 0;
    var arr_local = [];
    arr_local.push(arr[0]);
    for(var i=0; i<arr.length; i++){
        if(arr[i] < arr[i+1]){
            ++count_new;
            arr_local.push(arr[i+1]);
        }else{
            if(count < count_new){
                count = count_new;
                count_new = 0;
                arr_global = [];
                arr_global = arr_local;
                arr_local = [];
                arr_local.push(arr[i]);
            }
        }
    }
    return arr_global;
}