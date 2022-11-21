<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

//https://developers.onelogin.com/authentication/tools/jwt
   
class OneloginTokenIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    private $client_id = 'YOUR_CLIENT_ID';
    private $client_secret = 'YOUR_CLIENT_SECRET';
    private $oidc_enpoint ='https://YOUR_SUBDOMAIN.onelogin.com/oidc/2/token/introspection';


    public function handle($request, Closure $next)
    {
        try {
            $token = '';
            $authorization =  $request->header('Authorization');
            if ($authorization && explode(" ", $authorization)[0] === 'Bearer') {
                    $token = explode(" ", $authorization)[1];
            } 
           Log::channel('stderr')->info($token);
           
            $response = Http::asForm()->post($this->oidc_enpoint, [
                'token'=>  $token,
                'token_type_hint' => 'access_token',
                'client_id' => $this->client_id,
                'client_secret'=> $this->client_secret
            ]);
            if ($response->status() === 200) {
                $body = $response->json();
                Log::channel('stderr')->info($body);
                if($body['active']) {
                    $clientIdValid = $body['client_id'] === $this->client_id;
                    $currentTimestamp = time() / 1000;
                    $tokenIsNotExpired = $body['exp'] > $currentTimestamp;
                    $tokenValid = $clientIdValid && $tokenIsNotExpired;
                    if ($tokenValid) {
                        return $next($request);
                    }
                    Log::channel('stderr')->info('Token invalid :'); 
                }
            }
        }
        catch (RequestException $exception) {

        }

        return abort(401, 'You are not authenticated to this service'); 
    }
}
