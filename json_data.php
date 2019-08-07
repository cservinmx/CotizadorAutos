<?php
require __DIR__ . '/vendor/autoload.php';

/*
if (php_sapi_name() != 'cli') {
    throw new Exception('This application must be run on the command line.');
}
*/

/**
 * Returns an authorized API client.
 * @return Google_Client the authorized client object
 */
function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Google Sheets API PHP Quickstart');
    $client->setScopes(Google_Service_Sheets::SPREADSHEETS_READONLY);
    $client->setAuthConfig('credentials.json');
    $client->setAccessType('offline');
    $client->setPrompt('select_account consent');

    // Load previously authorized token from a file, if it exists.
    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    $tokenPath = 'token.json';
    if (file_exists($tokenPath)) {
        $accessToken = json_decode(file_get_contents($tokenPath), true);
        $client->setAccessToken($accessToken);
    }

    // If there is no previous token or it's expired.
    if ($client->isAccessTokenExpired()) {
        // Refresh the token if possible, else fetch a new one.
        if ($client->getRefreshToken()) {
            $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
        } else {
            // Request authorization from the user.
            $authUrl = $client->createAuthUrl();
            printf("Open the following link in your browser:\n%s\n", $authUrl);
            print 'Enter verification code: ';
            $authCode = trim(fgets(STDIN));

            // Exchange authorization code for an access token.
            $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
            $client->setAccessToken($accessToken);

            // Check to see if there was an error.
            if (array_key_exists('error', $accessToken)) {
                throw new Exception(join(', ', $accessToken));
            }
        }
        // Save the token to a file.
        if (!file_exists(dirname($tokenPath))) {
            mkdir(dirname($tokenPath), 0700, true);
        }
        file_put_contents($tokenPath, json_encode($client->getAccessToken()));
    }
    return $client;
}


// Get the API client and construct the service object.
$client = getClient();
$service = new Google_Service_Sheets($client);

// Prints the names and majors of students in a sample spreadsheet:
// https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
// Archivo de ejemplo original
//$spreadsheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
// Archivo copia datos archivo original de Renting
$spreadsheetId = '1J6ZHxsip78KYW76WqNtC3umKJsyfdVe1787nSKNr2_A';
// Archivo simple con datos de ejemplo
//$spreadsheetId = '1KaPdzDtoTQy5xFz26gC0J-LjstVvTnn4iaV6Ne96Mrg';
//$range = 'Class Data!A2:E';
$range_36m = 'PRECIOS NUEVOS!A8:AH20';
$response_36m = $service->spreadsheets_values->get($spreadsheetId, $range_36m);
$values_36m = $response_36m->getValues();

if (empty($values_36m)) {
    print "No data found.\n";
} else {

    $array_36m=array();

    foreach($values_36m as $col){
      $arr=array('modelo'=>$col['1'],
                'transmision'=>$col['2'],
                'p1'=>$col['18'],
                'p2'=>$col['19'],
                'p3'=>$col['20'],
                'p4'=>$col['21'],
                'p5'=>$col['22'],
                'p6'=>$col['23'],
                'p7'=>$col['24'],
                'p8'=>$col['25'],
                'p9'=>$col['26'],
                'p10'=>$col['27'],
                'p11'=>$col['28'],
                'p12'=>$col['29'],
                'p13'=>$col['30'],
                'p14'=>$col['31'],
                'p15'=>$col['32'],
                'p16'=>$col['33']
                );
        array_push($array_36m, $arr);
    }
  //  print_r($array_36m);
    //echo "*****************************************************\n";
}
/* 24 Meses*/

$range_24m = 'PRECIOS NUEVOS!A27:AH39';
$response_24m = $service->spreadsheets_values->get($spreadsheetId, $range_24m);
$values_24m = $response_24m->getValues();

if (empty($values_24m)) {
    print "No data found.\n";
} else {

    $array_24m=array();

    foreach($values_24m as $col_24m){
      $arr_24m=array('modelo'=>$col_24m['1'],
                'transmision'=>$col_24m['2'],
                'p1'=>$col_24m['18'],
                'p2'=>$col_24m['19'],
                'p3'=>$col_24m['20'],
                'p4'=>$col_24m['21'],
                'p5'=>$col_24m['22'],
                'p7'=>$col_24m['24'],
                'p6'=>$col_24m['23'],
                'p8'=>$col_24m['25'],
                'p9'=>$col_24m['26'],
                'p10'=>$col_24m['27'],
                'p11'=>$col_24m['28'],
                'p12'=>$col_24m['29'],
                'p13'=>$col_24m['30'],
                'p14'=>$col_24m['31'],
                'p15'=>$col_24m['32'],
                'p16'=>$col_24m['33']
                );
        array_push($array_24m, $arr_24m);
    }
    /*
    print_r($array_24m);
    echo "*****************************************************\n";
    */
}


$range_12m = 'PRECIOS NUEVOS!A46:AH58';
$response_12m = $service->spreadsheets_values->get($spreadsheetId, $range_12m);
$values_12m = $response_12m->getValues();

if (empty($values_12m)) {
    print "No data found.\n";
} else {

    $array_12m=array();

    foreach($values_12m as $col_12m){
      $arr_12m=array('modelo'=>$col_12m['1'],
                'transmision'=>$col_12m['2'],
                'p1'=>$col_12m['18'],
                'p2'=>$col_12m['19'],
                'p3'=>$col_12m['20'],
                'p4'=>$col_12m['21'],
                'p5'=>$col_12m['22'],
                'p7'=>$col_12m['24'],
                'p6'=>$col_12m['23'],
                'p8'=>$col_12m['25'],
                'p9'=>$col_12m['26'],
                'p10'=>$col_12m['27'],
                'p11'=>$col_12m['28'],
                'p12'=>$col_12m['29'],
                'p13'=>$col_12m['30'],
                'p14'=>$col_12m['31'],
                'p15'=>$col_12m['32'],
                'p16'=>$col_12m['33']
                );
        array_push($array_12m, $arr_12m);
    }

  /*  print_r($array_12m);
    echo "*****************************************************\n";*/
}
/*
echo "********************* Seminuevos ******************\n";
*/

$range_24m_s = 'PRECIOS SEMI NUEVOS!A8:AH15';
$response_24m_s = $service->spreadsheets_values->get($spreadsheetId, $range_24m_s);
$values_24m_s = $response_24m_s->getValues();

if (empty($values_24m_s)) {
    print "No data found.\n";
} else {

    $array_24m_s=array();

    foreach($values_24m_s as $col_24m_s){
      $arr_24m_s=array('modelo'=>$col_24m_s['1'],
                'transmision'=>$col_24m_s['2'],
                'p1'=>$col_24m_s['18'],
                'p2'=>$col_24m_s['19'],
                'p3'=>$col_24m_s['20'],
                'p4'=>$col_24m_s['21'],
                'p5'=>$col_24m_s['22'],
                'p7'=>$col_24m_s['24'],
                'p6'=>$col_24m_s['23'],
                'p8'=>$col_24m_s['25'],
                'p9'=>$col_24m_s['26'],
                'p10'=>$col_24m_s['27'],
                'p11'=>$col_24m_s['28'],
                'p12'=>$col_24m_s['29'],
                'p13'=>$col_24m_s['30'],
                'p14'=>$col_24m_s['31'],
                'p15'=>$col_24m_s['32'],
                'p16'=>$col_24m_s['33']
                );
        array_push($array_24m_s, $arr_24m_s);
    }

  /*  print_r($array_24m_s);
    echo "*****************************************************\n";*/
}


$range_12m_s = 'PRECIOS SEMI NUEVOS!A24:AH31';
$response_12m_s = $service->spreadsheets_values->get($spreadsheetId, $range_12m_s);
$values_12m_s = $response_12m_s->getValues();

if (empty($values_12m_s)) {
    print "No data found.\n";
} else {

    $array_12m_s=array();

    foreach($values_12m_s as $col_12m_s){
      $arr_12m_s=array('modelo'=>$col_12m_s['1'],
                'transmision'=>$col_12m_s['2'],
                'p1'=>$col_12m_s['18'],
                'p2'=>$col_12m_s['19'],
                'p3'=>$col_12m_s['20'],
                'p4'=>$col_12m_s['21'],
                'p5'=>$col_12m_s['22'],
                'p7'=>$col_12m_s['24'],
                'p6'=>$col_12m_s['23'],
                'p8'=>$col_12m_s['25'],
                'p9'=>$col_12m_s['26'],
                'p10'=>$col_12m_s['27'],
                'p11'=>$col_12m_s['28'],
                'p12'=>$col_12m_s['29'],
                'p13'=>$col_12m_s['30'],
                'p14'=>$col_12m_s['31'],
                'p15'=>$col_12m_s['32'],
                'p16'=>$col_12m_s['33']
                );
        array_push($array_12m_s, $arr_12m_s);
    }
/*
    print_r($array_12m_s);
    echo "*****************************************************\n";*/
}
