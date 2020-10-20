<?php
/**
 * @Entity @Table(name="b24_users")
 */

class User
{
    /** @Id @Column(type="integer") @GeneratedValue  **/
    protected $id;
    /** @Column(type="string") **/
    protected $portal;
    /** @Column(type="string") **/
    protected $accessToken;
    /** @Column(type="inteeger") **/
    protected $expiresIn;
    /** @Column(type="string") **/
    protected $refreshToken;
    /** @Column(type="string") **/
    protected $memberId;

    public function setPortal($portal){
    $this->portal = $portal;
    }
    public function getPortal(){
        return $this->portal;
    }

    public function setToken($accessToken){
        $this->accessToken = $accessToken;
    }
    public function getToken(){
        return $this->accessToken;
    }

    public function setexpiresIn($expiresIn){
        $this->expiresIn = $expiresIn;
    }
    public function getexpiresIn(){
        return $this->expiresIn;
    }

    public function getRefreshToken($refreshToken){
        $this->refreshToken = $refreshToken;
    }
    public function setRefreshToken(){
        return $this->refreshToken;
    }

    public function getMemberId($memberId){
        $this->memberId = $memberId;
    }
    public function setMemberId(){
        return $this->memberId;
    }
}