<?php
//define('DOMAIN',"https://b24-c0752n.bitrix24.ru/rest/65/95mwktj0r219fvw7/");
//define("DOMAIN_TEST", "https://b24-ijv00v.bitrix24.ru/rest/1/1qhdy94w6qh0cdg1/");
define('HTTPS', 'https://');
class bitrix24
{
    /**
     * @param string $domain
     * @param string $method
     * @param string $query
     * @param string $accessToken
     * @return bool|mixed|string
     */
    public static function callMethod(string $domain, string $method, string $query, string $accessToken)
    {
        $queryUrl = HTTPS . $domain . '/rest/'. $method . '?auth='.$accessToken;
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_HEADER => 0,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => $queryUrl,
            CURLOPT_POST => 1,
            CURLOPT_POSTFIELDS => $query,
        ));

        $result = curl_exec($curl);
        curl_close($curl);
        file_put_contents('/var/www/html/logs/'.$domain.'_log.txt', $queryUrl.PHP_EOL,FILE_APPEND);
        $result = json_decode($result, 1);
        return $result;
    }
}

?>