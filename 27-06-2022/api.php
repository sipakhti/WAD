<?php
header("Content-Type:application/json");
if (isset($_GET['order_id']) && $_GET['order_id'] != '') {
    include('db.php');
    $order_id = $_GET['order_id'];
    $result = mysqli_query($con, "SELECT * FROM transactions WHERE order_id = $order_id");
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result);
        $amount = $row['amount'];
        $response_code = $row['response_code'];
        $response_desc = $row['response_desc'];
        response($order_id, $amount, $response_code, $response_desc);
        mysqli_close($con);
    }
    else{
            response(null, null, 200, 'No record found')
        }



else {
    response(null, null, 400, 'Invalid Request')
}
}
?>