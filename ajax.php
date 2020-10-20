<?php
require_once("tools.php");

class CRatingOperations
{
	public $arB24App;
	public $arAccessParams = array();
	
	public function returnResult ($answer) {
	
		ob_start();
		ob_end_clean();
		Header('Cache-Control: no-cache');
		Header('Pragma: no-cache');
		echo json_encode($answer);
	}
	
	private function checkB24Auth($params) {
		// проверяем актуальность доступа
		$this->arAccessParams = $params;
		$isTokenRefreshed = false;
		$errorB24 = '';
		
		$this->arB24App = getBitrix24($this->arAccessParams, $isTokenRefreshed, $errorB24);
		return $errorB24;
	}
	
    public function manage($operation, $params)
    {
		global $db;
		switch ($operation){

            case 'install':
                $errorB24 = $this->checkB24Auth($params);
                if ($errorB24 == ''){
                    $currentRow = $db->select('SELECT * FROM b24_portal_reg WHERE PORTAL="'.$params['domain'].'"')[0];
                    if(!$currentRow['PORTAL']){
                        $res = $db->insert('INSERT INTO b24_portal_reg (`PORTAL`, `ACCESS_TOKEN`, `EXPIRES_IN`,`REFRESH_TOKEN`, `MEMBER_ID`) VALUES (?, ?, ?, ?, ?)'.
                            'ON DUPLICATE KEY UPDATE `ACCESS_TOKEN` = ?, `REFRESH_TOKEN` = ?, `MEMBER_ID` = ?',
                            $params['domain'], $params['access_token'], $params['expires_in'], $params['refresh_token'], $params['member_id'],
                            $params['access_token'], $params['refresh_token'],  $params['member_id']);
                        $res = $db->insert('INSERT INTO b24_action_table (`ACTION_ID`, `PORTAL`, `LAST_EXECUTION`,`IS_RUNNING`) VALUES (?, ?, ?, ?)',
                            1, $params['domain'], date('Y-m-d H:i:s'), 0);
                        $res = $db->insert('INSERT INTO b24_action_table (`ACTION_ID`, `PORTAL`, `LAST_EXECUTION`,`IS_RUNNING`) VALUES (?, ?, ?, ?)',
                            2, $params['domain'], date('Y-m-d H:i:s'), 0);
                        $res = $db->insert('INSERT INTO b24_action_table (`ACTION_ID`, `PORTAL`, `LAST_EXECUTION`,`IS_RUNNING`) VALUES (?, ?, ?, ?)',
                            3, $params['domain'], date('Y-m-d H:i:s'), 0);
                        $res = $db->insert('INSERT INTO b24_action_table (`ACTION_ID`, `PORTAL`, `LAST_EXECUTION`,`IS_RUNNING`) VALUES (?, ?, ?, ?)',
                            4, $params['domain'], date('Y-m-d H:i:s'), 0);
                        $cronString = '*/1 * * * * php /var/www/html/run.php >/dev/null 2>&1 '.$params['domain'].PHP_EOL;
                        $output = shell_exec('crontab -l');
                        file_put_contents('/var/www/html/crontab.txt', $output.$cronString, FILE_APPEND);
                        echo exec('crontab /var/www/html/crontab.txt');
                        if ($res){
                        }
                        else{
                            $this->returnResult(array('status' => 'error', 'result' => $db->error()));
                        }
                    }
                }
                else{
                    $this->returnResult(array('status' => 'error', 'result' => $errorB24));
                }
                break;


//            case 'index':
//                $errorB24 = $this->checkB24Auth($params);
//                if ($errorB24 == ''){
//                    echo 'that turns me on';
//                }
//                else{
//                    echo 'fuck u leather man';
//                }
//                break;
			
			default:
				$this->returnResult(array('status' => 'error', 'result' => 'unknown operation'));
		}		
    }
}

$manager = new CRatingOperations();

if (!empty($_REQUEST) && isset($_REQUEST['operation'])) {
	$manager->manage($_REQUEST['operation'], $_REQUEST);
}
?>