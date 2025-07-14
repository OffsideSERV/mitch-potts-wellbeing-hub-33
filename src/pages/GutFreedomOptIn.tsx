
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Star } from "lucide-react";

const GutFreedomOptIn = () => {
  return (
    <>
      <SEO 
        title="Gut Freedom | Free 15-Minute Video Guide | NXTLVL Health"
        description="Get your FREE 15-minute video guide to achieving gut freedom. Learn the 3 steps to transform your digestive health and regain energy naturally."
        canonical="/gut-freedom"
        keywords="gut freedom, digestive health guide, gut health video, free gut health resource, naturopath Brisbane"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  FREE 15-Minute Video Guide
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your 15-Min Key To <span className="text-primary">Gut Freedom</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Stop living with bloating, pain, and digestive chaos. Discover the simple steps that Brisbane's leading naturopath uses to help his patients finally fix their gut health - in just 15 minutes.
                </p>

                <div className="flex items-center space-x-2 text-primary">
                  <div className="flex">
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                  </div>
                  <span className="text-foreground font-semibold text-sm lg:text-base ml-2">Trusted by 1000+ Brisbane locals</span>
                </div>

                {/* Hero Form */}
                <div dangerouslySetInnerHTML={{
                  __html: `
                    <style>@import url(https://fonts.bunny.net/css?family=ibm-plex-sans:400,700);</style>
                    <style>
                    #_form_1_{font-size:14px;line-height:1.6;font-family:arial, helvetica, sans-serif;margin:0}#_form_1_ *{outline:0}._form_hide{display:none;visibility:hidden}._form_show{display:block;visibility:visible}#_form_1_._form-top{top:0}#_form_1_._form-bottom{bottom:0}#_form_1_._form-left{left:0}#_form_1_._form-right{right:0}#_form_1_ input[type="text"],#_form_1_ input[type="tel"],#_form_1_ input[type="date"],#_form_1_ textarea{padding:6px;height:auto;border:#979797 1px solid;border-radius:4px;color:#000 !important;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#_form_1_ textarea{resize:none}#_form_1_ ._submit{-webkit-appearance:none;cursor:pointer;font-family:arial, sans-serif;font-size:14px;text-align:center;background:#009485 !important;border:0 !important;-moz-border-radius:4px !important;-webkit-border-radius:4px !important;border-radius:4px !important;color:#FFFFFF !important;padding:10px !important}#_form_1_ ._submit:disabled{cursor:not-allowed;opacity:0.4}#_form_1_ ._submit.processing{position:relative}#_form_1_ ._submit.processing::before{content:"";width:1em;height:1em;position:absolute;z-index:1;top:50%;left:50%;border:double 3px transparent;border-radius:50%;background-image:linear-gradient(#009485, #009485), conic-gradient(#009485, #FFFFFF);background-origin:border-box;background-clip:content-box, border-box;animation:1200ms ease 0s infinite normal none running _spin}#_form_1_ ._submit.processing::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background:#009485 !important;border:0 !important;-moz-border-radius:4px !important;-webkit-border-radius:4px !important;border-radius:4px !important;color:#FFFFFF !important;padding:10px !important}@keyframes _spin{0%{transform:translate(-50%, -50%) rotate(90deg)}100%{transform:translate(-50%, -50%) rotate(450deg)}}#_form_1_ ._close-icon{cursor:pointer;background-image:url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");background-repeat:no-repeat;background-size:14.2px 14.2px;position:absolute;display:block;top:11px;right:9px;overflow:hidden;width:16.2px;height:16.2px}#_form_1_ ._close-icon:before{position:relative}#_form_1_ ._form-body{margin-bottom:30px}#_form_1_ ._form-image-left{width:150px;float:left}#_form_1_ ._form-content-right{margin-left:164px}#_form_1_ ._form-branding{color:#fff;font-size:10px;clear:both;text-align:left;margin-top:30px;font-weight:100}#_form_1_ ._form-branding ._logo{display:block;width:130px;height:14px;margin-top:6px;background-image:url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");background-size:130px auto;background-repeat:no-repeat}#_form_1_ .form-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}#_form_1_ ._form-label,#_form_1_ ._form_element ._form-label{font-weight:bold;margin-bottom:5px;display:block}#_form_1_._dark ._form-branding{color:#333}#_form_1_._dark ._form-branding ._logo{background-image:url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png")}#_form_1_ ._form_element{position:relative;margin-bottom:10px;font-size:0;max-width:100%}#_form_1_ ._form_element *{font-size:14px}#_form_1_ ._form_element._clear{clear:both;width:100%;float:none}#_form_1_ ._form_element._clear:after{clear:left}#_form_1_ ._form_element input[type="text"],#_form_1_ ._form_element input[type="date"],#_form_1_ ._form_element select,#_form_1_ ._form_element textarea:not(.g-recaptcha-response){display:block;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit}#_form_1_ ._field-wrapper{position:relative}#_form_1_ ._inline-style{float:left}#_form_1_ ._inline-style input[type="text"]{width:150px}#_form_1_ ._inline-style:not(._clear){margin-right:20px}#_form_1_ ._form_element img._form-image{max-width:100%}#_form_1_ ._form_element ._form-fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0}#_form_1_ ._clear-element{clear:left}#_form_1_ ._full_width{width:100%}#_form_1_ ._form_full_field{display:block;width:100%;margin-bottom:10px}#_form_1_ input[type="text"]._has_error,#_form_1_ textarea._has_error{border:#F37C7B 1px solid}#_form_1_ input[type="checkbox"]._has_error{outline:#F37C7B 1px solid}#_form_1_ ._show_be_error{float:left}#_form_1_ ._error{display:block;position:absolute;font-size:14px;z-index:10000001}#_form_1_ ._error._above{padding-bottom:4px;bottom:39px;right:0}#_form_1_ ._error._below{padding-top:8px;top:100%;right:0}#_form_1_ ._error._above ._error-arrow{bottom:-4px;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFDDDD}#_form_1_ ._error._below ._error-arrow{top:0;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFDDDD}#_form_1_ ._error-inner{padding:12px 12px 12px 36px;background-color:#FFDDDD;background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z' fill='%23CA0000'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;font-size:14px;font-family:arial, sans-serif;font-weight:600;line-height:16px;color:#000;text-align:center;text-decoration:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;box-shadow:0 1px 4px rgba(31, 33, 41, 0.298295)}@media only screen and (max-width:319px){#_form_1_ ._error-inner{padding:7px 7px 7px 25px;font-size:12px;line-height:12px;background-position:4px center;max-width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}#_form_1_ ._error-inner._form_error{margin-bottom:5px;text-align:left}#_form_1_ ._button-wrapper ._error-inner._form_error{position:static}#_form_1_ ._error-inner._no_arrow{margin-bottom:10px}#_form_1_ ._error-arrow{position:absolute;width:0;height:0}#_form_1_ ._error-html{margin-bottom:10px}.pika-single{z-index:10000001 !important}#_form_1_ input[type="text"].datetime_date{width:69%;display:inline}#_form_1_ select.datetime_time{width:29%;display:inline;height:32px}#_form_1_ input[type="date"].datetime_date{width:69%;display:inline-flex}#_form_1_ input[type="time"].datetime_time{width:29%;display:inline-flex}@media (min-width:320px) and (max-width:667px){::-webkit-scrollbar{display:none}#_form_1_{margin:0;width:100%;min-width:100%;max-width:100%;box-sizing:border-box}#_form_1_ *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:1em}#_form_1_ ._form-content{margin:0;width:100%}#_form_1_ ._form-inner{display:block;min-width:100%}#_form_1_ ._form-title,#_form_1_ ._inline-style{margin-top:0;margin-right:0;margin-left:0}#_form_1_ ._form-title{font-size:1.2em}#_form_1_ ._form_element{margin:0 0 20px;padding:0;width:100%}#_form_1_ ._form-element,#_form_1_ ._inline-style,#_form_1_ input[type="text"],#_form_1_ label,#_form_1_ p,#_form_1_ textarea:not(.g-recaptcha-response){float:none;display:block;width:100%}#_form_1_ ._row._checkbox-radio label{display:inline}#_form_1_ ._row,#_form_1_ p,#_form_1_ label{margin-bottom:0.7em;width:100%}#_form_1_ ._row input[type="checkbox"],#_form_1_ ._row input[type="radio"]{margin:0 !important;vertical-align:middle !important}#_form_1_ ._row input[type="checkbox"]+span label{display:inline}#_form_1_ ._row span label{margin:0 !important;width:initial !important;vertical-align:middle !important}#_form_1_ ._form-image{max-width:100%;height:auto !important}#_form_1_ input[type="text"]{padding-left:10px;padding-right:10px;font-size:16px;line-height:1.3em;-webkit-appearance:none}#_form_1_ input[type="radio"],#_form_1_ input[type="checkbox"]{display:inline-block;width:1.3em;height:1.3em;font-size:1em;margin:0 0.3em 0 0;vertical-align:baseline}#_form_1_ button[type="submit"]{padding:20px;font-size:1.5em}#_form_1_ ._inline-style{margin:20px 0 0 !important}#_form_1_ ._inline-style input[type="text"]{width:100%}}#_form_1_ .sms_consent_checkbox{position:relative;width:100%;display:flex;align-items:flex-start;padding:20px 0}#_form_1_ .sms_consent_checkbox input[type="checkbox"]{float:left;margin:5px 10px 10px 0}#_form_1_ .sms_consent_checkbox .sms_consent_message{display:inline;float:left;text-align:left;margin-bottom:10px;font-size:14px;color:#7D8799}#_form_1_ .sms_consent_checkbox .sms_consent_message.sms_consent_mini{width:90%}#_form_1_ .sms_consent_checkbox ._error._above{right:auto;bottom:0}#_form_1_ .sms_consent_checkbox ._error._above ._error-arrow{right:auto;left:5px}@media (min-width:320px) and (max-width:667px){#_form_1_ .sms_consent_checkbox ._error._above{top:-30px;left:0;bottom:auto}}#_form_1_ .field-required{color:#FF0000}#_form_1_{position:relative;text-align:left;margin:25px auto 0;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:#FFFFFF !important;border:0;max-width:750px;-moz-border-radius:1px !important;-webkit-border-radius:1px !important;border-radius:1px !important;color:#000000}#_form_1_ ._show_be_error{min-width:100%}#_form_1_._inline-form,#_form_1_._inline-form ._form-content{font-family:IBM Plex Sans;font-size:20px;font-weight:400}#_form_1_._inline-form ._row span,#_form_1_._inline-form ._row label{font-family:IBM Plex Sans;font-size:14px;font-weight:400;line-height:1.6em;color:black !important}#_form_1__inlineform input[type="text"],#_form_1__inlineform input[type="date"],#_form_1__inlineform input[type="tel"],#_form_1__inlineform select,#_form_1__inlineform textarea:not(.g-recaptcha-response){font-family:IBM Plex Sans;font-size:14px;font-weight:400;font-color:#000000;line-height:1.6em}#_form_1_._inline-form ._html-code *:not(h1, h2, h3, h4, h5, h6),#_form_1_._inline-form .sms_consent_message,#_form_1_._inline-form ._form-thank-you{font-family:IBM Plex Sans;font-size:20px;font-weight:400;color:black !important}#_form_1_._inline-form ._form-label,#_form_1_._inline-form ._form-emailidentifier,#_form_1_._inline-form ._form-checkbox-option-label{font-family:IBM Plex Sans;font-size:14px;font-weight:700;line-height:1.6em;color:black !important}#_form_1_._inline-form ._submit{margin-top:12px;font-family:IBM Plex Sans;font-size:14px;font-weight:400}#_form_1_._inline-form ._html-code h1,#_form_1_._inline-form ._html-code h2,#_form_1_._inline-form ._html-code h3,#_form_1_._inline-form ._html-code h4,#_form_1_._inline-form ._html-code h5,#_form_1_._inline-form ._html-code h6,#_form_1_._inline-form ._form-title{font-family:IBM Plex Sans;font-size:30px;line-height:normal;font-weight:700;text-decoration:underline;color:black;margin-bottom:0;display:block}#_form_1_._inline-form ._form-branding{font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:13px;font-weight:100;font-style:normal;text-decoration:none}#_form_1_:before,#_form_1_:after{content:" ";display:table}#_form_1_:after{clear:both}#_form_1_._inline-style{width:auto;display:inline-block}#_form_1_._inline-style input[type="text"],#_form_1_._inline-style input[type="date"]{padding:10px 12px}#_form_1_._inline-style button._inline-style{position:relative;top:27px}#_form_1_._inline-style p{margin:0}#_form_1_._inline-style ._button-wrapper{position:relative;margin:16px 12.5px 0 20px}#_form_1_ ._form-thank-you{position:relative;left:0;right:0;text-align:center;font-size:18px}#_form_1_ ._form-pc-confirmation ._submit{margin-top:16px}@media (min-width:320px) and (max-width:667px){#_form_1_._inline-form._inline-style ._inline-style._button-wrapper{margin-top:20px !important;margin-left:0 !important}}#_form_1_ .iti{width:100%}#_form_1_ .iti.iti--allow-dropdown.iti--separate-dial-code{width:100%}#_form_1_ .iti input{width:100%;border:#979797 1px solid;border-radius:4px}#_form_1_ .iti--separate-dial-code .iti__selected-flag{background-color:#FFFFFF;border-radius:4px}#_form_1_ .iti--separate-dial-code .iti__selected-flag:hover{background-color:rgba(0, 0, 0, 0.05)}#_form_1_ .iti__country-list{border-radius:4px;margin-top:4px;min-width:460px}#_form_1_ .iti__country-list--dropup{margin-bottom:4px}#_form_1_ .phone-error-hidden{display:none}#_form_1_ .phone-error{color:#E40E49}#_form_1_ .phone-input-error{border:1px solid #E40E49 !important}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field fieldset{margin:0;margin-bottom:1.1428571429em;border:none;padding:0}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field fieldset:last-child{margin-bottom:0}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field legend{margin-bottom:1.1428571429em}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field label{display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:0.8571428571em}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field label:last-child{margin-bottom:0}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field input{margin:0;margin-right:8px}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label{display:block;font-weight:400;margin-top:-4px}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label-with-description{display:block;font-weight:700;margin-top:-4px}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-description{margin:0;font-size:0.8571428571em}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-subscriptions-unsubscribe-all-description{line-height:normal;margin-top:-2px}
                    </style>
                    <form method="POST" action="https://nxtlvlhealth.activehosted.com/proc.php" id="_form_1_" class="_form _form_1 _inline-form  _dark" novalidate data-styles-version="5">
                      <input type="hidden" name="u" value="1" />
                      <input type="hidden" name="f" value="1" />
                      <input type="hidden" name="s" />
                      <input type="hidden" name="c" value="0" />
                      <input type="hidden" name="m" value="0" />
                      <input type="hidden" name="act" value="sub" />
                      <input type="hidden" name="v" value="2" />
                      <input type="hidden" name="or" value="3f4746aedc5b8bf103f60aa3844d4141" />
                      <div class="_form-content">
                        <div class="_form_element _x09077243 _full_width _clear" >
                          <title class="_form-title">
                            Get Answers To Your Bloating With This Easy 15-Min Gut Health Video Guide
                          </title>
                        </div>
                        <div class="_form_element _x44556073 _full_width _clear" >
                          <div class="_html-code">
                            By signing up, you agree to being apart of our email list, where we send out weekly advice on taking control of your gut health.
                          </div>
                        </div>
                        <div class="_form_element _x28172720 _full_width " >
                          <label for="fullname" class="_form-label">
                            Name<span class="field-required">
                            *
                          </span>
                        </label>
                        <div class="_field-wrapper">
                          <input type="text" id="fullname" name="fullname" placeholder="Type your name" required/>
                        </div>
                      </div>
                      <div class="_form_element _x51149711 _full_width " >
                        <label for="email" class="_form-label">
                          Email<span class="field-required">
                          *
                        </span>
                      </label>
                      <div class="_field-wrapper">
                        <input type="text" id="email" name="email" placeholder="Type your email" required/>
                      </div>
                    </div>
                    <div class="_button-wrapper _full_width">
                      <button id="_form_1_submit" class="_submit" type="submit">
                        Show Me The Guide!
                      </button>
                    </div>
                    <div class="_clear-element">
                    </div>
                    </div>
                    <div class="_form-thank-you" style="display:none;">
                    </div>
                    </form><script>
                    window.cfields = [];
                    window._show_thank_you = function(id, message, trackcmp_url, email) {
                        var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
                        form.querySelector('._form-content').style.display = 'none';
                        thank_you.innerHTML = message;
                        thank_you.style.display = 'block';
                        const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
                        var visitorObject = window[vgoAlias];
                        if (email && typeof visitorObject !== 'undefined') {
                            visitorObject('setEmail', email);
                            visitorObject('update');
                        } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                            // Site tracking URL to use after inline form submission.
                            _load_script(trackcmp_url);
                        }
                        if (typeof window._form_callback !== 'undefined') window._form_callback(id);
                    };
                    window._show_unsubscribe = function(id, message, trackcmp_url, email) {
                        var form = document.getElementById('_form_' + id + '_'), unsub = form.querySelector('._form-thank-you');
                        var branding = form.querySelector('._form-branding');
                        if (branding) {
                            branding.style.display = 'none';
                        }
                        form.querySelector('._form-content').style.display = 'none';
                        unsub.style.display = 'block';
                        form.insertAdjacentHTML('afterend', message)
                        const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
                        var visitorObject = window[vgoAlias];
                        if (email && typeof visitorObject !== 'undefined') {
                            visitorObject('setEmail', email);
                            visitorObject('update');
                        } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                            // Site tracking URL to use after inline form submission.
                            _load_script(trackcmp_url);
                        }
                        if (typeof window._form_callback !== 'undefined') window._form_callback(id);
                    };
                    window._show_error = function(id, message, html) {
                        var form = document.getElementById('_form_' + id + '_'),
                            err = document.createElement('div'),
                            button = form.querySelector('button[type="submit"]'),
                            old_error = form.querySelector('._form_error');
                        if (old_error) old_error.parentNode.removeChild(old_error);
                        err.innerHTML = message;
                        err.className = '_error-inner _form_error _no_arrow';
                        var wrapper = document.createElement('div');
                        wrapper.className = '_form-inner _show_be_error';
                        wrapper.appendChild(err);
                        button.parentNode.insertBefore(wrapper, button);
                        var submitButton = form.querySelector('[id^="_form"][id$="_submit"]');
                        submitButton.disabled = false;
                        submitButton.classList.remove('processing');
                        if (html) {
                            var div = document.createElement('div');
                            div.className = '_error-html';
                            div.innerHTML = html;
                            err.appendChild(div);
                        }
                    };
                    window._show_pc_confirmation = function(id, header, detail, show, email) {
                        var form = document.getElementById('_form_' + id + '_'), pc_confirmation = form.querySelector('._form-pc-confirmation');
                        if (pc_confirmation.style.display === 'none') {
                            form.querySelector('._form-content').style.display = 'none';
                            pc_confirmation.innerHTML = "<div class='_form-title'>" + header + "</div>" + "<p>" + detail + "</p>" +
                            "<button class='_submit' id='hideButton'>Manage preferences</button>";
                            pc_confirmation.style.display = 'block';
                            var mp = document.querySelector('input[name="mp"]');
                            mp.value = '0';
                        } else {
                            form.querySelector('._form-content').style.display = 'inline';
                            pc_confirmation.style.display = 'none';
                        }

                        var hideButton = document.getElementById('hideButton');
                        // Add event listener to the button
                        hideButton.addEventListener('click', function() {
                            var submitButton = document.querySelector('#_form_1_submit');
                            submitButton.disabled = false;
                            submitButton.classList.remove('processing');
                            var mp = document.querySelector('input[name="mp"]');
                            mp.value = '1';
                            const cacheBuster = new URL(window.location.href);
                            cacheBuster.searchParams.set('v', new Date().getTime());
                            window.location.href = cacheBuster.toString();
                        });

                        const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
                        var visitorObject = window[vgoAlias];
                        if (email && typeof visitorObject !== 'undefined') {
                            visitorObject('setEmail', email);
                            visitorObject('update');
                        } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                            // Site tracking URL to use after inline form submission.
                            _load_script(trackcmp_url);
                        }
                        if (typeof window._form_callback !== 'undefined') window._form_callback(id);
                    };
                    window._load_script = function(url, callback, isSubmit) {
                        var head = document.querySelector('head'), script = document.createElement('script'), r = false;
                        var submitButton = document.querySelector('#_form_1_submit');
                        script.charset = 'utf-8';
                        script.src = url;
                        if (callback) {
                            script.onload = script.onreadystatechange = function() {
                                if (!r && (!this.readyState || this.readyState == 'complete')) {
                                    r = true;
                                    callback();
                                }
                            };
                        }
                        script.onerror = function() {
                            if (isSubmit) {
                                if (script.src.length > 10000) {
                                    _show_error("1", "Sorry, your submission failed. Please shorten your responses and try again.");
                                } else {
                                    _show_error("1", "Sorry, your submission failed. Please try again.");
                                }
                                submitButton.disabled = false;
                                submitButton.classList.remove('processing');
                            }
                        }

                        head.appendChild(script);
                    };
                    (function() {
                        var iti;
                        if (window.location.search.search("excludeform") !== -1) return false;
                        var getCookie = function(name) {
                            var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
                            return match ? match[2] : null;
                        }
                        var setCookie = function(name, value) {
                            var now = new Date();
                            var time = now.getTime();
                            var expireTime = time + 1000 * 60 * 60 * 24 * 365;
                            now.setTime(expireTime);
                            document.cookie = name + '=' + value + '; expires=' + now + ';path=/; Secure; SameSite=Lax;';
                        }
                        var addEvent = function(element, event, func) {
                            if (element.addEventListener) {
                                element.addEventListener(event, func);
                            } else {
                                var oldFunc = element['on' + event];
                                element['on' + event] = function() {
                                    oldFunc.apply(this, arguments);
                                    func.apply(this, arguments);
                                };
                            }
                        }
                        var _removed = false;
                            var form_to_submit = document.getElementById('_form_1_');
                        var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

                        var getUrlParam = function(name) {
                            if (name.toLowerCase() !== 'email') {
                                var params = new URLSearchParams(window.location.search);
                                return params.get(name) || false;
                            }
                            // email is a special case because a plus is valid in the email address
                            var qString = window.location.search;
                            if (!qString) {
                                return false;
                            }
                            var parameters = qString.substr(1).split('&');
                            for (var i = 0; i < parameters.length; i++) {
                                var parameter = parameters[i].split('=');
                                if (parameter[0].toLowerCase() === 'email') {
                                    return parameter[1] === undefined ? true : decodeURIComponent(parameter[1]);
                                }
                            }
                            return false;
                        };

                        var acctDateFormat = "%d/%m/%Y";
                        var getNormalizedDate = function(date, acctFormat) {
                            var decodedDate = decodeURIComponent(date);
                            if (acctFormat && acctFormat.match(/(%d|%e).*%m/gi) !== null) {
                                return decodedDate.replace(/(\\\\d{2}).*(\\\\d{2}).*(\\\\d{4})/g, '$3-$2-$1');
                            } else if (Date.parse(decodedDate)) {
                                var dateObj = new Date(decodedDate);
                                var year = dateObj.getFullYear();
                                var month = dateObj.getMonth() + 1;
                                var day = dateObj.getDate();
                                return \`\${year}-\${month < 10 ? \`0\${month}\` : month}-\${day < 10 ? \`0\${day}\` : day}\`;
                            }
                            return false;
                        };

                        var getNormalizedTime = function(time) {
                            var hour, minutes;
                            var decodedTime = decodeURIComponent(time);
                            var timeParts = Array.from(decodedTime.matchAll(/(\\\\d{1,2}):(\\\\d{1,2})\\\\W*([AaPp][Mm])?/gm))[0];
                            if (timeParts[3]) { // 12 hour format
                                var isPM = timeParts[3].toLowerCase() === 'pm';
                                if (isPM) {
                                    hour = parseInt(timeParts[1]) === 12 ? '12' : \`\${parseInt(timeParts[1]) + 12}\`;
                                } else {
                                    hour = parseInt(timeParts[1]) === 12 ? '0' : timeParts[1];
                                }
                            } else { // 24 hour format
                                hour = timeParts[1];
                            }
                            var normalizedHour = parseInt(hour) < 10 ? \`0\${parseInt(hour)}\` : hour;
                            var minutes = timeParts[2];
                            return \`\${normalizedHour}:\${minutes}\`;
                        };

                        for (var i = 0; i < allInputs.length; i++) {
                            var regexStr = "field\\\\[(\\\\d+)\\\\]";
                            var results = new RegExp(regexStr).exec(allInputs[i].name);
                            if (results != undefined) {
                                allInputs[i].dataset.name = allInputs[i].name.match(/\\\\[time\\\\]$/)
                                    ? \`\${window.cfields[results[1]]}_time\`
                                    : window.cfields[results[1]];
                            } else {
                                allInputs[i].dataset.name = allInputs[i].name;
                            }
                            var fieldVal = getUrlParam(allInputs[i].dataset.name);

                            if (fieldVal) {
                                if (allInputs[i].dataset.autofill === "false") {
                                    continue;
                                }
                                if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
                                    if (allInputs[i].value == fieldVal) {
                                        allInputs[i].checked = true;
                                    }
                                } else if (allInputs[i].type == "date") {
                                    allInputs[i].value = getNormalizedDate(fieldVal, acctDateFormat);
                                } else if (allInputs[i].type == "time") {
                                    allInputs[i].value = getNormalizedTime(fieldVal);
                                } else {
                                    allInputs[i].value = fieldVal;
                                }
                            }
                        }

                        var remove_tooltips = function() {
                            for (var i = 0; i < tooltips.length; i++) {
                                tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                            }
                            tooltips = [];
                        };
                        var remove_tooltip = function(elem) {
                            for (var i = 0; i < tooltips.length; i++) {
                                if (tooltips[i].elem === elem) {
                                    tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                                    tooltips.splice(i, 1);
                                    return;
                                }
                            }
                        };
                        var create_tooltip = function(elem, text) {
                            var tooltip = document.createElement('div'),
                                arrow = document.createElement('div'),
                                inner = document.createElement('div'), new_tooltip = {};
                            if (elem.type != 'radio' && (elem.type != 'checkbox' || elem.name === 'sms_consent')) {
                                tooltip.className = '_error';
                                arrow.className = '_error-arrow';
                                inner.className = '_error-inner';
                                inner.innerHTML = text;
                                tooltip.appendChild(arrow);
                                tooltip.appendChild(inner);
                                elem.parentNode.appendChild(tooltip);
                            } else {
                                tooltip.className = '_error-inner _no_arrow';
                                tooltip.innerHTML = text;
                                elem.parentNode.insertBefore(tooltip, elem);
                                new_tooltip.no_arrow = true;
                            }
                            new_tooltip.tip = tooltip;
                            new_tooltip.elem = elem;
                            tooltips.push(new_tooltip);
                            return new_tooltip;
                        };
                        var resize_tooltip = function(tooltip) {
                            var rect = tooltip.elem.getBoundingClientRect();
                            var doc = document.documentElement,
                                scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
                            if (scrollPosition < 40) {
                                tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
                            } else {
                                tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
                            }
                        };
                        var resize_tooltips = function() {
                            if (_removed) return;
                            for (var i = 0; i < tooltips.length; i++) {
                                if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
                            }
                        };
                        var validate_field = function(elem, remove) {
                            var tooltip = null, value = elem.value, no_error = true;
                            remove ? remove_tooltip(elem) : false;
                            if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
                            if (elem.getAttribute('required') !== null) {
                                if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
                                    var elems = form_to_submit.elements[elem.name];
                                    if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
                                        no_error = elem.checked;
                                    }
                                    else {
                                        no_error = false;
                                        for (var i = 0; i < elems.length; i++) {
                                            if (elems[i].checked) no_error = true;
                                        }
                                    }
                                    if (!no_error) {
                                        tooltip = create_tooltip(elem, "Please select an option.");
                                    }
                                } else if (elem.type =='checkbox') {
                                    var elems = form_to_submit.elements[elem.name], found = false, err = [];
                                    no_error = true;
                                    for (var i = 0; i < elems.length; i++) {
                                        if (elems[i].getAttribute('required') === null) continue;
                                        if (!found && elems[i] !== elem) return true;
                                        found = true;
                                        elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
                                        if (!elems[i].checked) {
                                            no_error = false;
                                            elems[i].className = elems[i].className + ' _has_error';
                                            err.push("Checking %s is required".replace("%s", elems[i].value));
                                        }
                                    }
                                    if (!no_error) {
                                        tooltip = create_tooltip(elem, err.join('<br/>'));
                                    }
                                } else if (elem.tagName == 'SELECT') {
                                    var selected = true;
                                    if (elem.multiple) {
                                        selected = false;
                                        for (var i = 0; i < elem.options.length; i++) {
                                            if (elem.options[i].selected) {
                                                selected = true;
                                                break;
                                            }
                                        }
                                    } else {
                                        for (var i = 0; i < elem.options.length; i++) {
                                            if (elem.options[i].selected
                                                && (!elem.options[i].value
                                                || (elem.options[i].value.match(/\\n/g)))
                                            ) {
                                                selected = false;
                                            }
                                        }
                                    }
                                    if (!selected) {
                                        elem.className = elem.className + ' _has_error';
                                        no_error = false;
                                        tooltip = create_tooltip(elem, "Please select an option.");
                                    }
                                } else if (value === undefined || value === null || value === '') {
                                    elem.className = elem.className + ' _has_error';
                                    no_error = false;
                                    tooltip = create_tooltip(elem, "This field is required.");
                                }
                            }
                            if (no_error && elem.name == 'email') {
                                if (!value.match(/^[\\+_a-z0-9-'&=]+(\.[\\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
                                    elem.className = elem.className + ' _has_error';
                                    no_error = false;
                                    tooltip = create_tooltip(elem, "Enter a valid email address.");
                                }
                            }
                            if (no_error && (elem.id == 'phone')) {
                                if (elem.value.trim() && typeof iti != 'undefined' && !iti.isValidNumber()) {
                                    elem.className = elem.className + ' _has_error';
                                    no_error = false;
                                    tooltip = create_tooltip(elem, "Enter a valid phone number.");
                                }
                            }
                            if (no_error && /date_field/.test(elem.className)) {
                                if (!value.match(/^\\d\\d\\d\\d-\\d\\d-\\d\\d$/)) {
                                    elem.className = elem.className + ' _has_error';
                                    no_error = false;
                                    tooltip = create_tooltip(elem, "Enter a valid date.");
                                }
                            }

                            if (no_error && elem.name === 'sms_consent') {
                                const elemShouldBeChecked = (!!elem.attributes.required && !elem.checked);
                                if (elemShouldBeChecked) {
                                    elem.className = elem.className + ' _has_error';
                                    no_error = false;
                                    tooltip = create_tooltip(elem, "Please check this box to continue");
                                } else {
                                    elem.className = elem.className.replace(/ ?_has_error ?/g, '');
                                }
                            }
                            tooltip ? resize_tooltip(tooltip) : false;
                            return no_error;
                        };
                        var needs_validate = function(el) {
                            if(el.getAttribute('required') !== null){
                                return true;
                            }
                            if((el.name === 'email' || el.id === 'phone') && el.value !== ""){
                                return true;
                            }

                            return false;
                        };
                        var validate_form = function(e) {
                            var err = form_to_submit.querySelector('._form_error'), no_error = true;
                            if (!submitted) {
                                submitted = true;
                                for (var i = 0, len = allInputs.length; i < len; i++) {
                                    var input = allInputs[i];
                                    if (needs_validate(input)) {
                                        if (input.type == 'text' || input.type == 'number' || input.type == 'time' || input.type == 'tel') {
                                            addEvent(input, 'blur', function() {
                                                this.value = this.value.trim();
                                                validate_field(this, true);
                                            });
                                            addEvent(input, 'input', function() {
                                                validate_field(this, true);
                                            });
                                        } else if (input.type == 'radio' || input.type == 'checkbox') {
                                            (function(el) {
                                                function getElementsArray(name){
                                                    const value =  form_to_submit.elements[name];
                                                    if (Array.isArray(value)){
                                                        return value;
                                                    }
                                                    return [value];
                                                }
                                                var radios = getElementsArray(el.name);
                                                for (var i = 0; i < radios.length; i++) {
                                                    addEvent(radios[i], 'change', function() {
                                                        validate_field(el, true);
                                                    });
                                                }
                                            })(input);
                                        } else if (input.tagName == 'SELECT') {
                                            addEvent(input, 'change', function() {
                                                validate_field(this, true);
                                            });
                                        } else if (input.type == 'textarea'){
                                            addEvent(input, 'input', function() {
                                                validate_field(this, true);
                                            });
                                        }
                                    }
                                }
                            }
                            remove_tooltips();
                            for (var i = 0, len = allInputs.length; i < len; i++) {
                                var elem = allInputs[i];
                                if (needs_validate(elem)) {
                                    if (elem.tagName.toLowerCase() !== "select") {
                                        elem.value = elem.value.trim();
                                    }
                                    validate_field(elem) ? true : no_error = false;
                                }
                            }
                            if (!no_error && e) {
                                e.preventDefault();
                            }
                            resize_tooltips();
                            return no_error;
                        };
                        addEvent(window, 'resize', resize_tooltips);
                        addEvent(window, 'scroll', resize_tooltips);

                        var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].previousSibling.querySelector('div.iti__selected-dial-code').innerText)+encodeURIComponent(" ")+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};

                        const formSupportsPost = false;
                        var form_submit = function(e) {

                            e.preventDefault();
                            if (validate_form()) {
                                if(form_to_submit.querySelector('input[name="phone"]') && typeof iti != 'undefined') {
                                    form_to_submit.querySelector('input[name="phone"]').value = iti.getNumber();
                                }
                                // use this trick to get the submit button & disable it using plain javascript
                                var submitButton = e.target.querySelector('#_form_1_submit');
                                submitButton.disabled = true;
                                submitButton.classList.add('processing');
                                        var serialized = _form_serialize(document.getElementById('_form_1_')).replace(/%0A/g, '\\\\n');
                                var err = form_to_submit.querySelector('._form_error');
                                err ? err.parentNode.removeChild(err) : false;
                                async function submitForm() {
                                    var formData = new FormData();
                                    const searchParams = new URLSearchParams(serialized);
                                    searchParams.forEach((value, key) => {
                                        if (key !== 'hideButton') {
                                            formData.append(key, value);
                                        }
                                    });
                                    let request = {
                                        headers: {
                                            "Accept": "application/json"
                                        },
                                        body: formData,
                                        method: "POST"
                                    };

                                    let pageUrlParams = new URLSearchParams(window.location.search);
                                    if (pageUrlParams.has('t')) {
                                        request.headers.Authorization = 'Bearer ' + pageUrlParams.get('t');
                                    }
                                    const response = await fetch('https://nxtlvlhealth.activehosted.com/proc.php?jsonp=true', request);

                                    return response.json();
                                }
                                if (formSupportsPost) {
                                    submitForm().then((data) => {
                                        eval(data.js);
                                    }).catch(() => {
                                        _show_error("1", "Sorry, your submission failed. Please try again.");
                                    });
                                } else {
                                    _load_script('https://nxtlvlhealth.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
                                }
                            }
                            return false;
                        };
                        addEvent(form_to_submit, 'submit', form_submit);
                    })();

                    </script>
                  `
                }} />
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className="relative hidden lg:block order-1 lg:order-2">
              <img 
                alt="Mitch Potts, naturopath at NXTLVL Health helping patients with gut health" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
                src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Mitch Potts</p>
                    <p className="text-sm text-muted-foreground">Gut Health Specialist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="relative lg:hidden mb-6 -mx-4 order-1 lg:order-2">
              <img 
                alt="Mitch Potts, naturopath at NXTLVL Health helping patients with gut health" 
                className="rounded-2xl shadow-2xl w-full h-auto max-h-80 sm:max-h-96 object-cover" 
                src="/lovable-uploads/26dd53ed-236e-42a2-a95c-c505572e08b2.png" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Are You Tired of Living With...
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-12">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm lg:text-base font-medium">Constant bloating that makes you feel uncomfortable in your own body</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm lg:text-base font-medium">Unpredictable bathroom trips that control your daily schedule</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm lg:text-base font-medium">Fear of eating certain foods because you never know how you'll react</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm lg:text-base font-medium">Low energy and brain fog that keeps you from feeling like yourself</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
              If this sounds like you, you're not alone. Over <strong>1 in 5 Australians</strong> struggle with digestive issues, but most never get the real answers they need.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              In This FREE 15-Minute Video, You'll Discover...
            </h2>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base lg:text-lg mb-2">Why Chewing Your Food Properly Is Critical</h3>
                <p className="text-sm lg:text-base text-muted-foreground">How proper chewing activates your saliva's natural enzymes to reduce bloating and gas before food even hits your stomach.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base lg:text-lg mb-2">The Hidden Low Stomach Acid Problem</h3>
                <p className="text-sm lg:text-base text-muted-foreground">Why many people have low stomach acid without knowing it, causing bloating and poor nutrient absorption - plus 4 simple ways to boost it naturally.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base lg:text-lg mb-2">How to Activate "Rest and Digest" Mode</h3>
                <p className="text-sm lg:text-base text-muted-foreground">The simple technique to switch your nervous system from "fight or flight" to "rest and digest" so your body can actually process food properly.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base lg:text-lg mb-2">The Root Cause Behind SIBO, IBS, and Other Gut Issues</h3>
                <p className="text-sm lg:text-base text-muted-foreground">What common digestive problems like SIBO and IBS really are, and why they all share one fixable root cause that most people miss.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Get Instant Access to Your Free Video Guide
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8">
              Join over 1,000 Brisbane locals who've already started their journey to gut freedom.
            </p>
          </div>

          <div dangerouslySetInnerHTML={{
            __html: `
              <style>@import url(https://fonts.bunny.net/css?family=ibm-plex-sans:400,700);</style>
              <style>
              #_form_1_{font-size:14px;line-height:1.6;font-family:arial, helvetica, sans-serif;margin:0}#_form_1_ *{outline:0}._form_hide{display:none;visibility:hidden}._form_show{display:block;visibility:visible}#_form_1_._form-top{top:0}#_form_1_._form-bottom{bottom:0}#_form_1_._form-left{left:0}#_form_1_._form-right{right:0}#_form_1_ input[type="text"],#_form_1_ input[type="tel"],#_form_1_ input[type="date"],#_form_1_ textarea{padding:6px;height:auto;border:#979797 1px solid;border-radius:4px;color:#000 !important;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#_form_1_ textarea{resize:none}#_form_1_ ._submit{-webkit-appearance:none;cursor:pointer;font-family:arial, sans-serif;font-size:14px;text-align:center;background:#009485 !important;border:0 !important;-moz-border-radius:4px !important;-webkit-border-radius:4px !important;border-radius:4px !important;color:#FFFFFF !important;padding:10px !important}#_form_1_ ._submit:disabled{cursor:not-allowed;opacity:0.4}#_form_1_ ._submit.processing{position:relative}#_form_1_ ._submit.processing::before{content:"";width:1em;height:1em;position:absolute;z-index:1;top:50%;left:50%;border:double 3px transparent;border-radius:50%;background-image:linear-gradient(#009485, #009485), conic-gradient(#009485, #FFFFFF);background-origin:border-box;background-clip:content-box, border-box;animation:1200ms ease 0s infinite normal none running _spin}#_form_1_ ._submit.processing::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background:#009485 !important;border:0 !important;-moz-border-radius:4px !important;-webkit-border-radius:4px !important;border-radius:4px !important;color:#FFFFFF !important;padding:10px !important}@keyframes _spin{0%{transform:translate(-50%, -50%) rotate(90deg)}100%{transform:translate(-50%, -50%) rotate(450deg)}}#_form_1_ ._close-icon{cursor:pointer;background-image:url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");background-repeat:no-repeat;background-size:14.2px 14.2px;position:absolute;display:block;top:11px;right:9px;overflow:hidden;width:16.2px;height:16.2px}#_form_1_ ._close-icon:before{position:relative}#_form_1_ ._form-body{margin-bottom:30px}#_form_1_ ._form-image-left{width:150px;float:left}#_form_1_ ._form-content-right{margin-left:164px}#_form_1_ ._form-branding{color:#fff;font-size:10px;clear:both;text-align:left;margin-top:30px;font-weight:100}#_form_1_ ._form-branding ._logo{display:block;width:130px;height:14px;margin-top:6px;background-image:url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");background-size:130px auto;background-repeat:no-repeat}#_form_1_ .form-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}#_form_1_ ._form-label,#_form_1_ ._form_element ._form-label{font-weight:bold;margin-bottom:5px;display:block}#_form_1_._dark ._form-branding{color:#333}#_form_1_._dark ._form-branding ._logo{background-image:url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png")}#_form_1_ ._form_element{position:relative;margin-bottom:10px;font-size:0;max-width:100%}#_form_1_ ._form_element *{font-size:14px}#_form_1_ ._form_element._clear{clear:both;width:100%;float:none}#_form_1_ ._form_element._clear:after{clear:left}#_form_1_ ._form_element input[type="text"],#_form_1_ ._form_element input[type="date"],#_form_1_ ._form_element select,#_form_1_ ._form_element textarea:not(.g-recaptcha-response){display:block;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit}#_form_1_ ._field-wrapper{position:relative}#_form_1_ ._inline-style{float:left}#_form_1_ ._inline-style input[type="text"]{width:150px}#_form_1_ ._inline-style:not(._clear){margin-right:20px}#_form_1_ ._form_element img._form-image{max-width:100%}#_form_1_ ._form_element ._form-fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0}#_form_1_ ._clear-element{clear:left}#_form_1_ ._full_width{width:100%}#_form_1_ ._form_full_field{display:block;width:100%;margin-bottom:10px}#_form_1_ input[type="text"]._has_error,#_form_1_ textarea._has_error{border:#F37C7B 1px solid}#_form_1_ input[type="checkbox"]._has_error{outline:#F37C7B 1px solid}#_form_1_ ._show_be_error{float:left}#_form_1_ ._error{display:block;position:absolute;font-size:14px;z-index:10000001}#_form_1_ ._error._above{padding-bottom:4px;bottom:39px;right:0}#_form_1_ ._error._below{padding-top:8px;top:100%;right:0}#_form_1_ ._error._above ._error-arrow{bottom:-4px;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFDDDD}#_form_1_ ._error._below ._error-arrow{top:0;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFDDDD}#_form_1_ ._error-inner{padding:12px 12px 12px 36px;background-color:#FFDDDD;background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z' fill='%23CA0000'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;font-size:14px;font-family:arial, sans-serif;font-weight:600;line-height:16px;color:#000;text-align:center;text-decoration:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;box-shadow:0 1px 4px rgba(31, 33, 41, 0.298295)}@media only screen and (max-width:319px){#_form_1_ ._error-inner{padding:7px 7px 7px 25px;font-size:12px;line-height:12px;background-position:4px center;max-width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}#_form_1_ ._error-inner._form_error{margin-bottom:5px;text-align:left}#_form_1_ ._button-wrapper ._error-inner._form_error{position:static}#_form_1_ ._error-inner._no_arrow{margin-bottom:10px}#_form_1_ ._error-arrow{position:absolute;width:0;height:0}#_form_1_ ._error-html{margin-bottom:10px}.pika-single{z-index:10000001 !important}#_form_1_ input[type="text"].datetime_date{width:69%;display:inline}#_form_1_ select.datetime_time{width:29%;display:inline;height:32px}#_form_1_ input[type="date"].datetime_date{width:69%;display:inline-flex}#_form_1_ input[type="time"].datetime_time{width:29%;display:inline-flex}@media (min-width:320px) and (max-width:667px){::-webkit-scrollbar{display:none}#_form_1_{margin:0;width:100%;min-width:100%;max-width:100%;box-sizing:border-box}#_form_1_ *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:1em}#_form_1_ ._form-content{margin:0;width:100%}#_form_1_ ._form-inner{display:block;min-width:100%}#_form_1_ ._form-title,#_form_1_ ._inline-style{margin-top:0;margin-right:0;margin-left:0}#_form_1_ ._form-title{font-size:1.2em}#_form_1_ ._form_element{margin:0 0 20px;padding:0;width:100%}#_form_1_ ._form-element,#_form_1_ ._inline-style,#_form_1_ input[type="text"],#_form_1_ label,#_form_1_ p,#_form_1_ textarea:not(.g-recaptcha-response){float:none;display:block;width:100%}#_form_1_ ._row._checkbox-radio label{display:inline}#_form_1_ ._row,#_form_1_ p,#_form_1_ label{margin-bottom:0.7em;width:100%}#_form_1_ ._row input[type="checkbox"],#_form_1_ ._row input[type="radio"]{margin:0 !important;vertical-align:middle !important}#_form_1_ ._row input[type="checkbox"]+span label{display:inline}#_form_1_ ._row span label{margin:0 !important;width:initial !important;vertical-align:middle !important}#_form_1_ ._form-image{max-width:100%;height:auto !important}#_form_1_ input[type="text"]{padding-left:10px;padding-right:10px;font-size:16px;line-height:1.3em;-webkit-appearance:none}#_form_1_ input[type="radio"],#_form_1_ input[type="checkbox"]{display:inline-block;width:1.3em;height:1.3em;font-size:1em;margin:0 0.3em 0 0;vertical-align:baseline}#_form_1_ button[type="submit"]{padding:20px;font-size:1.5em}#_form_1_ ._inline-style{margin:20px 0 0 !important}#_form_1_ ._inline-style input[type="text"]{width:100%}}#_form_1_ .sms_consent_checkbox{position:relative;width:100%;display:flex;align-items:flex-start;padding:20px 0}#_form_1_ .sms_consent_checkbox input[type="checkbox"]{float:left;margin:5px 10px 10px 0}#_form_1_ .sms_consent_checkbox .sms_consent_message{display:inline;float:left;text-align:left;margin-bottom:10px;font-size:14px;color:#7D8799}#_form_1_ .sms_consent_checkbox .sms_consent_message.sms_consent_mini{width:90%}#_form_1_ .sms_consent_checkbox ._error._above{right:auto;bottom:0}#_form_1_ .sms_consent_checkbox ._error._above ._error-arrow{right:auto;left:5px}@media (min-width:320px) and (max-width:667px){#_form_1_ .sms_consent_checkbox ._error._above{top:-30px;left:0;bottom:auto}}#_form_1_ .field-required{color:#FF0000}#_form_1_{position:relative;text-align:left;margin:25px auto 0;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:#FFFFFF !important;border:0;max-width:750px;-moz-border-radius:1px !important;-webkit-border-radius:1px !important;border-radius:1px !important;color:#000000}#_form_1_ ._show_be_error{min-width:100%}#_form_1_._inline-form,#_form_1_._inline-form ._form-content{font-family:IBM Plex Sans;font-size:20px;font-weight:400}#_form_1_._inline-form ._row span,#_form_1_._inline-form ._row label{font-family:IBM Plex Sans;font-size:14px;font-weight:400;line-height:1.6em;color:black !important}#_form_1__inlineform input[type="text"],#_form_1__inlineform input[type="date"],#_form_1__inlineform input[type="tel"],#_form_1__inlineform select,#_form_1__inlineform textarea:not(.g-recaptcha-response){font-family:IBM Plex Sans;font-size:14px;font-weight:400;font-color:#000000;line-height:1.6em}#_form_1_._inline-form ._html-code *:not(h1, h2, h3, h4, h5, h6),#_form_1_._inline-form .sms_consent_message,#_form_1_._inline-form ._form-thank-you{font-family:IBM Plex Sans;font-size:20px;font-weight:400;color:black !important}#_form_1_._inline-form ._form-label,#_form_1_._inline-form ._form-emailidentifier,#_form_1_._inline-form ._form-checkbox-option-label{font-family:IBM Plex Sans;font-size:14px;font-weight:700;line-height:1.6em;color:black !important}#_form_1_._inline-form ._submit{margin-top:12px;font-family:IBM Plex Sans;font-size:14px;font-weight:400}#_form_1_._inline-form ._html-code h1,#_form_1_._inline-form ._html-code h2,#_form_1_._inline-form ._html-code h3,#_form_1_._inline-form ._html-code h4,#_form_1_._inline-form ._html-code h5,#_form_1_._inline-form ._html-code h6,#_form_1_._inline-form ._form-title{font-family:IBM Plex Sans;font-size:30px;line-height:normal;font-weight:700;text-decoration:underline;color:black;margin-bottom:0;display:block}#_form_1_._inline-form ._form-branding{font-family:"IBM Plex Sans", Helvetica, sans-serif;font-size:13px;font-weight:100;font-style:normal;text-decoration:none}#_form_1_:before,#_form_1_:after{content:" ";display:table}#_form_1_:after{clear:both}#_form_1_._inline-style{width:auto;display:inline-block}#_form_1_._inline-style input[type="text"],#_form_1_._inline-style input[type="date"]{padding:10px 12px}#_form_1_._inline-style button._inline-style{position:relative;top:27px}#_form_1_._inline-style p{margin:0}#_form_1_._inline-style ._button-wrapper{position:relative;margin:16px 12.5px 0 20px}#_form_1_ ._form-thank-you{position:relative;left:0;right:0;text-align:center;font-size:18px}#_form_1_ ._form-pc-confirmation ._submit{margin-top:16px}@media (min-width:320px) and (max-width:667px){#_form_1_._inline-form._inline-style ._inline-style._button-wrapper{margin-top:20px !important;margin-left:0 !important}}#_form_1_ .iti{width:100%}#_form_1_ .iti.iti--allow-dropdown.iti--separate-dial-code{width:100%}#_form_1_ .iti input{width:100%;border:#979797 1px solid;border-radius:4px}#_form_1_ .iti--separate-dial-code .iti__selected-flag{background-color:#FFFFFF;border-radius:4px}#_form_1_ .iti--separate-dial-code .iti__selected-flag:hover{background-color:rgba(0, 0, 0, 0.05)}#_form_1_ .iti__country-list{border-radius:4px;margin-top:4px;min-width:460px}#_form_1_ .iti__country-list--dropup{margin-bottom:4px}#_form_1_ .phone-error-hidden{display:none}#_form_1_ .phone-error{color:#E40E49}#_form_1_ .phone-input-error{border:1px solid #E40E49 !important}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field fieldset{margin:0;margin-bottom:1.1428571429em;border:none;padding:0}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field fieldset:last-child{margin-bottom:0}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field legend{margin-bottom:1.1428571429em}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field label{display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:0.8571428571em}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field label:last-child{margin-bottom:0}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field input{margin:0;margin-right:8px}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label{display:block;font-weight:400;margin-top:-4px}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-label-with-description{display:block;font-weight:700;margin-top:-4px}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-checkbox-option-description{margin:0;font-size:0.8571428571em}#_form_1_._inline-form ._form-content ._form-list-subscriptions-field ._form-subscriptions-unsubscribe-all-description{line-height:normal;margin-top:-2px}
              </style>
              <form method="POST" action="https://nxtlvlhealth.activehosted.com/proc.php" id="_form_1_" class="_form _form_1 _inline-form  _dark" novalidate data-styles-version="5">
                <input type="hidden" name="u" value="1" />
                <input type="hidden" name="f" value="1" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input type="hidden" name="or" value="3f4746aedc5b8bf103f60aa3844d4141" />
                <div class="_form-content">
                  <div class="_form_element _x09077243 _full_width _clear" >
                    <title class="_form-title">
                      Get Answers To Your Bloating With This Easy 15-Min Gut Health Video Guide
                    </title>
                  </div>
                  <div class="_form_element _x44556073 _full_width _clear" >
                    <div class="_html-code">
                      By signing up, you agree to being apart of our email list, where we send out weekly advice on taking control of your gut health.
                    </div>
                  </div>
                  <div class="_form_element _x28172720 _full_width " >
                    <label for="fullname" class="_form-label">
                      Name<span class="field-required">
                      *
                    </span>
                  </label>
                  <div class="_field-wrapper">
                    <input type="text" id="fullname" name="fullname" placeholder="Type your name" required/>
                  </div>
                </div>
                <div class="_form_element _x51149711 _full_width " >
                  <label for="email" class="_form-label">
                    Email<span class="field-required">
                    *
                  </span>
                </label>
                <div class="_field-wrapper">
                  <input type="text" id="email" name="email" placeholder="Type your email" required"/>
                </div>
              </div>
              <div class="_button-wrapper _full_width">
                <button id="_form_1_submit" class="_submit" type="submit">
                  Show Me The Guide!
                </button>
              </div>
              <div class="_clear-element">
              </div>
              </div>
              <div class="_form-thank-you" style="display:none;">
              </div>
              </form><script>
              window.cfields = [];
              window._show_thank_you = function(id, message, trackcmp_url, email) {
                  var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
                  form.querySelector('._form-content').style.display = 'none';
                  thank_you.innerHTML = message;
                  thank_you.style.display = 'block';
                  const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
                  var visitorObject = window[vgoAlias];
                  if (email && typeof visitorObject !== 'undefined') {
                      visitorObject('setEmail', email);
                      visitorObject('update');
                  } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                      // Site tracking URL to use after inline form submission.
                      _load_script(trackcmp_url);
                  }
                  if (typeof window._form_callback !== 'undefined') window._form_callback(id);
              };
              window._show_unsubscribe = function(id, message, trackcmp_url, email) {
                  var form = document.getElementById('_form_' + id + '_'), unsub = form.querySelector('._form-thank-you');
                  var branding = form.querySelector('._form-branding');
                  if (branding) {
                      branding.style.display = 'none';
                  }
                  form.querySelector('._form-content').style.display = 'none';
                  unsub.style.display = 'block';
                  form.insertAdjacentHTML('afterend', message)
                  const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
                  var visitorObject = window[vgoAlias];
                  if (email && typeof visitorObject !== 'undefined') {
                      visitorObject('setEmail', email);
                      visitorObject('update');
                  } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                      // Site tracking URL to use after inline form submission.
                      _load_script(trackcmp_url);
                  }
                  if (typeof window._form_callback !== 'undefined') window._form_callback(id);
              };
              window._show_error = function(id, message, html) {
                  var form = document.getElementById('_form_' + id + '_'),
                      err = document.createElement('div'),
                      button = form.querySelector('button[type="submit"]'),
                      old_error = form.querySelector('._form_error');
                  if (old_error) old_error.parentNode.removeChild(old_error);
                  err.innerHTML = message;
                  err.className = '_error-inner _form_error _no_arrow';
                  var wrapper = document.createElement('div');
                  wrapper.className = '_form-inner _show_be_error';
                  wrapper.appendChild(err);
                  button.parentNode.insertBefore(wrapper, button);
                  var submitButton = form.querySelector('[id^="_form"][id$="_submit"]');
                  submitButton.disabled = false;
                  submitButton.classList.remove('processing');
                  if (html) {
                      var div = document.createElement('div');
                      div.className = '_error-html';
                      div.innerHTML = html;
                      err.appendChild(div);
                  }
              };
              window._show_pc_confirmation = function(id, header, detail, show, email) {
                  var form = document.getElementById('_form_' + id + '_'), pc_confirmation = form.querySelector('._form-pc-confirmation');
                  if (pc_confirmation.style.display === 'none') {
                      form.querySelector('._form-content').style.display = 'none';
                      pc_confirmation.innerHTML = "<div class='_form-title'>" + header + "</div>" + "<p>" + detail + "</p>" +
                      "<button class='_submit' id='hideButton'>Manage preferences</button>";
                      pc_confirmation.style.display = 'block';
                      var mp = document.querySelector('input[name="mp"]');
                      mp.value = '0';
                  } else {
                      form.querySelector('._form-content').style.display = 'inline';
                      pc_confirmation.style.display = 'none';
                  }
              
                  var hideButton = document.getElementById('hideButton');
                  // Add event listener to the button
                  hideButton.addEventListener('click', function() {
                      var submitButton = document.querySelector('#_form_1_submit');
                      submitButton.disabled = false;
                      submitButton.classList.remove('processing');
                      var mp = document.querySelector('input[name="mp"]');
                      mp.value = '1';
                      const cacheBuster = new URL(window.location.href);
                      cacheBuster.searchParams.set('v', new Date().getTime());
                      window.location.href = cacheBuster.toString();
                  });
              
                  const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
                  var visitorObject = window[vgoAlias];
                  if (email && typeof visitorObject !== 'undefined') {
                      visitorObject('setEmail', email);
                      visitorObject('update');
                  } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
                      // Site tracking URL to use after inline form submission.
                      _load_script(trackcmp_url);
                  }
                  if (typeof window._form_callback !== 'undefined') window._form_callback(id);
              };
              window._load_script = function(url, callback, isSubmit) {
                  var head = document.querySelector('head'), script = document.createElement('script'), r = false;
                  var submitButton = document.querySelector('#_form_1_submit');
                  script.charset = 'utf-8';
                  script.src = url;
                  if (callback) {
                      script.onload = script.onreadystatechange = function() {
                          if (!r && (!this.readyState || this.readyState == 'complete')) {
                              r = true;
                              callback();
                          }
                      };
                  }
                  script.onerror = function() {
                      if (isSubmit) {
                          if (script.src.length > 10000) {
                              _show_error("1", "Sorry, your submission failed. Please shorten your responses and try again.");
                          } else {
                              _show_error("1", "Sorry, your submission failed. Please try again.");
                          }
                          submitButton.disabled = false;
                          submitButton.classList.remove('processing');
                      }
                  }
              
                  head.appendChild(script);
              };
              (function() {
                  var iti;
                  if (window.location.search.search("excludeform") !== -1) return false;
                  var getCookie = function(name) {
                      var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
                      return match ? match[2] : null;
                  }
                  var setCookie = function(name, value) {
                      var now = new Date();
                      var time = now.getTime();
                      var expireTime = time + 1000 * 60 * 60 * 24 * 365;
                      now.setTime(expireTime);
                      document.cookie = name + '=' + value + '; expires=' + now + ';path=/; Secure; SameSite=Lax;';
                  }
                  var addEvent = function(element, event, func) {
                      if (element.addEventListener) {
                          element.addEventListener(event, func);
                      } else {
                          var oldFunc = element['on' + event];
                          element['on' + event] = function() {
                              oldFunc.apply(this, arguments);
                              func.apply(this, arguments);
                          };
                      }
                  }
                  var _removed = false;
                      var form_to_submit = document.getElementById('_form_1_');
                  var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;
              
                  var getUrlParam = function(name) {
                      if (name.toLowerCase() !== 'email') {
                          var params = new URLSearchParams(window.location.search);
                          return params.get(name) || false;
                      }
                      // email is a special case because a plus is valid in the email address
                      var qString = window.location.search;
                      if (!qString) {
                          return false;
                      }
                      var parameters = qString.substr(1).split('&');
                      for (var i = 0; i < parameters.length; i++) {
                          var parameter = parameters[i].split('=');
                          if (parameter[0].toLowerCase() === 'email') {
                              return parameter[1] === undefined ? true : decodeURIComponent(parameter[1]);
                          }
                      }
                      return false;
                  };
              
                  var acctDateFormat = "%d/%m/%Y";
                  var getNormalizedDate = function(date, acctFormat) {
                      var decodedDate = decodeURIComponent(date);
                      if (acctFormat && acctFormat.match(/(%d|%e).*%m/gi) !== null) {
                          return decodedDate.replace(/(\\d{2}).*(\\d{2}).*(\\d{4})/g, '$3-$2-$1');
                      } else if (Date.parse(decodedDate)) {
                          var dateObj = new Date(decodedDate);
                          var year = dateObj.getFullYear();
                          var month = dateObj.getMonth() + 1;
                          var day = dateObj.getDate();
                          return \`\${year}-\${month < 10 ? \`0\${month}\` : month}-\${day < 10 ? \`0\${day}\` : day}\`;
                      }
                      return false;
                  };
              
                  var getNormalizedTime = function(time) {
                      var hour, minutes;
                      var decodedTime = decodeURIComponent(time);
                      var timeParts = Array.from(decodedTime.matchAll(/(\\d{1,2}):(\\d{1,2})\\W*([AaPp][Mm])?/gm))[0];
                      if (timeParts[3]) { // 12 hour format
                          var isPM = timeParts[3].toLowerCase() === 'pm';
                          if (isPM) {
                              hour = parseInt(timeParts[1]) === 12 ? '12' : \`\${parseInt(timeParts[1]) + 12}\`;
                          } else {
                              hour = parseInt(timeParts[1]) === 12 ? '0' : timeParts[1];
                          }
                      } else { // 24 hour format
                          hour = timeParts[1];
                      }
                      var normalizedHour = parseInt(hour) < 10 ? \`0\${parseInt(hour)}\` : hour;
                      var minutes = timeParts[2];
                      return \`\${normalizedHour}:\${minutes}\`;
                  };
              
                  for (var i = 0; i < allInputs.length; i++) {
                      var regexStr = "field\\\\[(\\\\d+)\\\\]";
                      var results = new RegExp(regexStr).exec(allInputs[i].name);
                      if (results != undefined) {
                          allInputs[i].dataset.name = allInputs[i].name.match(/\\\\[time\\\\]$/)
                              ? \`\${window.cfields[results[1]]}_time\`
                              : window.cfields[results[1]];
                      } else {
                          allInputs[i].dataset.name = allInputs[i].name;
                      }
                      var fieldVal = getUrlParam(allInputs[i].dataset.name);
              
                      if (fieldVal) {
                          if (allInputs[i].dataset.autofill === "false") {
                              continue;
                          }
                          if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
                              if (allInputs[i].value == fieldVal) {
                                  allInputs[i].checked = true;
                              }
                          } else if (allInputs[i].type == "date") {
                              allInputs[i].value = getNormalizedDate(fieldVal, acctDateFormat);
                          } else if (allInputs[i].type == "time") {
                              allInputs[i].value = getNormalizedTime(fieldVal);
                          } else {
                              allInputs[i].value = fieldVal;
                          }
                      }
                  }
              
                  var remove_tooltips = function() {
                      for (var i = 0; i < tooltips.length; i++) {
                          tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                      }
                      tooltips = [];
                  };
                  var remove_tooltip = function(elem) {
                      for (var i = 0; i < tooltips.length; i++) {
                          if (tooltips[i].elem === elem) {
                              tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                              tooltips.splice(i, 1);
                              return;
                          }
                      }
                  };
                  var create_tooltip = function(elem, text) {
                      var tooltip = document.createElement('div'),
                          arrow = document.createElement('div'),
                          inner = document.createElement('div'), new_tooltip = {};
                      if (elem.type != 'radio' && (elem.type != 'checkbox' || elem.name === 'sms_consent')) {
                          tooltip.className = '_error';
                          arrow.className = '_error-arrow';
                          inner.className = '_error-inner';
                          inner.innerHTML = text;
                          tooltip.appendChild(arrow);
                          tooltip.appendChild(inner);
                          elem.parentNode.appendChild(tooltip);
                      } else {
                          tooltip.className = '_error-inner _no_arrow';
                          tooltip.innerHTML = text;
                          elem.parentNode.insertBefore(tooltip, elem);
                          new_tooltip.no_arrow = true;
                      }
                      new_tooltip.tip = tooltip;
                      new_tooltip.elem = elem;
                      tooltips.push(new_tooltip);
                      return new_tooltip;
                  };
                  var resize_tooltip = function(tooltip) {
                      var rect = tooltip.elem.getBoundingClientRect();
                      var doc = document.documentElement,
                          scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
                      if (scrollPosition < 40) {
                          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
                      } else {
                          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
                      }
                  };
                  var resize_tooltips = function() {
                      if (_removed) return;
                      for (var i = 0; i < tooltips.length; i++) {
                          if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
                      }
                  };
                  var validate_field = function(elem, remove) {
                      var tooltip = null, value = elem.value, no_error = true;
                      remove ? remove_tooltip(elem) : false;
                      if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
                      if (elem.getAttribute('required') !== null) {
                          if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
                              var elems = form_to_submit.elements[elem.name];
                              if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
                                  no_error = elem.checked;
                              }
                              else {
                                  no_error = false;
                                  for (var i = 0; i < elems.length; i++) {
                                      if (elems[i].checked) no_error = true;
                                  }
                              }
                              if (!no_error) {
                                  tooltip = create_tooltip(elem, "Please select an option.");
                              }
                          } else if (elem.type =='checkbox') {
                              var elems = form_to_submit.elements[elem.name], found = false, err = [];
                              no_error = true;
                              for (var i = 0; i < elems.length; i++) {
                                  if (elems[i].getAttribute('required') === null) continue;
                                  if (!found && elems[i] !== elem) return true;
                                  found = true;
                                  elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
                                  if (!elems[i].checked) {
                                      no_error = false;
                                      elems[i].className = elems[i].className + ' _has_error';
                                      err.push("Checking %s is required".replace("%s", elems[i].value));
                                  }
                              }
                              if (!no_error) {
                                  tooltip = create_tooltip(elem, err.join('<br/>'));
                              }
                          } else if (elem.tagName == 'SELECT') {
                              var selected = true;
                              if (elem.multiple) {
                                  selected = false;
                                  for (var i = 0; i < elem.options.length; i++) {
                                      if (elem.options[i].selected) {
                                          selected = true;
                                          break;
                                      }
                                  }
                              } else {
                                  for (var i = 0; i < elem.options.length; i++) {
                                      if (elem.options[i].selected
                                          && (!elem.options[i].value
                                          || (elem.options[i].value.match(/\n/g)))
                                      ) {
                                          selected = false;
                                      }
                                  }
                              }
                              if (!selected) {
                                  elem.className = elem.className + ' _has_error';
                                  no_error = false;
                                  tooltip = create_tooltip(elem, "Please select an option.");
                              }
                          } else if (value === undefined || value === null || value === '') {
                              elem.className = elem.className + ' _has_error';
                              no_error = false;
                              tooltip = create_tooltip(elem, "This field is required.");
                          }
                      }
                      if (no_error && elem.name == 'email') {
                          if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
                              elem.className = elem.className + ' _has_error';
                              no_error = false;
                              tooltip = create_tooltip(elem, "Enter a valid email address.");
                          }
                      }
                      if (no_error && (elem.id == 'phone')) {
                          if (elem.value.trim() && typeof iti != 'undefined' && !iti.isValidNumber()) {
                              elem.className = elem.className + ' _has_error';
                              no_error = false;
                              tooltip = create_tooltip(elem, "Enter a valid phone number.");
                          }
                      }
                      if (no_error && /date_field/.test(elem.className)) {
                          if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
                              elem.className = elem.className + ' _has_error';
                              no_error = false;
                              tooltip = create_tooltip(elem, "Enter a valid date.");
                          }
                      }
              
                      if (no_error && elem.name === 'sms_consent') {
                          const elemShouldBeChecked = (!!elem.attributes.required && !elem.checked);
                          if (elemShouldBeChecked) {
                              elem.className = elem.className + ' _has_error';
                              no_error = false;
                              tooltip = create_tooltip(elem, "Please check this box to continue");
                          } else {
                              elem.className = elem.className.replace(/ ?_has_error ?/g, '');
                          }
                      }
                      tooltip ? resize_tooltip(tooltip) : false;
                      return no_error;
                  };
                  var needs_validate = function(el) {
                      if(el.getAttribute('required') !== null){
                          return true;
                      }
                      if((el.name === 'email' || el.id === 'phone') && el.value !== ""){
                          return true;
                      }
              
                      return false;
                  };
                  var validate_form = function(e) {
                      var err = form_to_submit.querySelector('._form_error'), no_error = true;
                      if (!submitted) {
                          submitted = true;
                          for (var i = 0, len = allInputs.length; i < len; i++) {
                              var input = allInputs[i];
                              if (needs_validate(input)) {
                                  if (input.type == 'text' || input.type == 'number' || input.type == 'time' || input.type == 'tel') {
                                      addEvent(input, 'blur', function() {
                                          this.value = this.value.trim();
                                          validate_field(this, true);
                                      });
                                      addEvent(input, 'input', function() {
                                          validate_field(this, true);
                                      });
                                  } else if (input.type == 'radio' || input.type == 'checkbox') {
                                      (function(el) {
                                          function getElementsArray(name){
                                              const value =  form_to_submit.elements[name];
                                              if (Array.isArray(value)){
                                                  return value;
                                              }
                                              return [value];
                                          }
                                          var radios = getElementsArray(el.name);
                                          for (var i = 0; i < radios.length; i++) {
                                              addEvent(radios[i], 'change', function() {
                                                  validate_field(el, true);
                                              });
                                          }
                                      })(input);
                                  } else if (input.tagName == 'SELECT') {
                                      addEvent(input, 'change', function() {
                                          validate_field(this, true);
                                      });
                                  } else if (input.type == 'textarea'){
                                      addEvent(input, 'input', function() {
                                          validate_field(this, true);
                                      });
                                  }
                              }
                          }
                      }
                      remove_tooltips();
                      for (var i = 0, len = allInputs.length; i < len; i++) {
                          var elem = allInputs[i];
                          if (needs_validate(elem)) {
                              if (elem.tagName.toLowerCase() !== "select") {
                                  elem.value = elem.value.trim();
                              }
                              validate_field(elem) ? true : no_error = false;
                          }
                      }
                      if (!no_error && e) {
                          e.preventDefault();
                      }
                      resize_tooltips();
                      return no_error;
                  };
                  addEvent(window, 'resize', resize_tooltips);
                  addEvent(window, 'scroll', resize_tooltips);
              
                  var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].previousSibling.querySelector('div.iti__selected-dial-code').innerText)+encodeURIComponent(" ")+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
              
                  const formSupportsPost = false;
                  var form_submit = function(e) {
              
                      e.preventDefault();
                      if (validate_form()) {
                          if(form_to_submit.querySelector('input[name="phone"]') && typeof iti != 'undefined') {
                              form_to_submit.querySelector('input[name="phone"]').value = iti.getNumber();
                          }
                          // use this trick to get the submit button & disable it using plain javascript
                          var submitButton = e.target.querySelector('#_form_1_submit');
                          submitButton.disabled = true;
                          submitButton.classList.add('processing');
                                  var serialized = _form_serialize(document.getElementById('_form_1_')).replace(/%0A/g, '\\\\n');
                          var err = form_to_submit.querySelector('._form_error');
                          err ? err.parentNode.removeChild(err) : false;
                          async function submitForm() {
                              var formData = new FormData();
                              const searchParams = new URLSearchParams(serialized);
                              searchParams.forEach((value, key) => {
                                  if (key !== 'hideButton') {
                                      formData.append(key, value);
                                  }
                              });
                              let request = {
                                  headers: {
                                      "Accept": "application/json"
                                  },
                                  body: formData,
                                  method: "POST"
                              };
              
                              let pageUrlParams = new URLSearchParams(window.location.search);
                              if (pageUrlParams.has('t')) {
                                  request.headers.Authorization = 'Bearer ' + pageUrlParams.get('t');
                              }
                              const response = await fetch('https://nxtlvlhealth.activehosted.com/proc.php?jsonp=true', request);
              
                              return response.json();
                          }
                          if (formSupportsPost) {
                              submitForm().then((data) => {
                                  eval(data.js);
                              }).catch(() => {
                                  _show_error("1", "Sorry, your submission failed. Please try again.");
                              });
                          } else {
                              _load_script('https://nxtlvlhealth.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
                          }
                      }
                      return false;
                  };
                  addEvent(form_to_submit, 'submit', form_submit);
              })();

              </script>
            `
          }} />

          <div className="text-center mt-6 lg:mt-8">
            <p className="text-sm text-muted-foreground">
              🔒 Your information is 100% secure and will never be shared.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              What Brisbane Locals Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="bg-muted/30">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center space-x-1 mb-4">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                </div>
                <p className="text-base lg:text-lg mb-4 italic">
                  "After years of digestive issues, Mitch finally gave me answers that actually worked. His approach is completely different from any doctor I've seen."
                </p>
                <p className="font-semibold">- Sarah M., New Farm</p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center space-x-1 mb-4">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-primary text-primary" />
                </div>
                <p className="text-base lg:text-lg mb-4 italic">
                  "I can finally eat without fear and actually enjoy my food again. The changes happened faster than I ever expected."
                </p>
                <p className="font-semibold">- James T., Clayfield</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Don't Let Another Day Pass Feeling Uncomfortable in Your Own Body
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8">
            Your gut health affects everything - your energy, mood, sleep, and overall quality of life. 
            Take the first step toward feeling like yourself again with this free 15-minute guide.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-primary mb-6 lg:mb-8">
            <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
            <span className="text-base lg:text-lg font-semibold">Just 15 minutes could change everything</span>
          </div>

          <p className="text-base lg:text-lg font-medium">
            Scroll up to get your free video guide now ⬆️
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default GutFreedomOptIn;
