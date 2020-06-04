 <form class="form-horizontal" id="forgot-pass-form">
                        <fieldset>
                          <div id="legend">
                      <h3 class="center">Login Configuration</h3>
                    
                    <label for="login_fingerprint">Fingerprint</label>
                    <div class="btn-group" data-toggle="buttons-radio">
                        <input id="login_fingerprint" type="hidden" name="login_fingerprint" class="btn-group-value" value="<?php echo $site->Website_Info('login_fingerprint')?>"/>
                         <label class="switch">
                        <input type="checkbox" id="finger" checked>
                        <span class="slider round" id="print">ON</span>
                        
                      </label>
                    </div>
                    <span class="help-block">
                        If you select <strong>Yes</strong>, every time when user is logged in, hash function will generate string
                        based on your IP Address and your browser name, and store it inside $_SESSION. This will prevent someone 
                        to steal your session. <br />
                        <strong>Note: </strong> It can cause problems if user IP address changes very often. <br />
                        Recommended: <strong>Yes</strong>
                    </span>
                    
                    <label for="max_login_attempts">Max Login Attempts</label>
                    <div class="input-prepend">
                      <span class="add-on">#</span>
                      <input type="text" class="input-small" name="login_max_login_attempts" id="max_login_attempts" value="<?php echo $site->Website_Info('max_login_attempts')?>" />
                    </div>
                    <span class="help-block">
                        Number of login attempts before IP address is blocked for current day. <br />
                        Prevent <strong>brute force</strong> attacks.  
                    </span>

                    <label for="redirect_after_login">Redirect After Login</label>
                    <div class="input-prepend">
                        <input type="text" class="input-xlarge" name="redirect_after_login" id="redirect_after_login" value="<?php echo $site->Website_Info('redirect_after_login')?>" />
                    </div>
                    <span class="help-block">
                        Default page where user will be redirected after success login.
                        Specific redirect pages based on user roles can be added later.
                    </span>
                </div>
                   <div class="form-group">
                        <!-- Button -->
                        <div class="controls col-lg-offset-10 col-lg-2">
                           <button id="loginSettings_btn" class="btn btn-success">Save</button> 
                        </div>

                        <div id="lresults"></div>
                      </div>
                        </fieldset>
                      </form>

                      <script type="text/javascript">
                          var fingerprint = $("#login_fingerprint").attr('value');
                       if (fingerprint === "no"){
                        $("#finger").prop("checked", true);
                       }else if (fingerprint === "yes"){
                       $("#finger").prop("checked", false);
                       }
                      </script>

