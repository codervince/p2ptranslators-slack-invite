// this a mix of background plus 2 logos will need to replace this
var old_logo_url = 'data:image/png;base64,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';


var logo_url = 'data:image/png;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI';


Function.prototype.stringify = function() {
    var match = this.toString().match(/[^]*\/\*([^]*)\*\/\s*\}$/);
    return match ? match[1] : '';
}

module.exports = function(ctx, req, res) {

    // Validate webtask parameters

    var required_params = ['SLACK_ORG', 'SLACK_TOKEN'];
    for (var i = 0; i < required_params.length; i++) {
        if (typeof ctx.secrets[required_params[i]] !== 'string')
            return handle_error({
                code: 400,
                message: 'You must specify the `' + required_params[i] +
                    '` parameter when creating the webtask using `wt create --secret ' +
                    required_params[i] + '={value}` argument.'
            });
    }

    // Configure routing

    if (req.method === 'GET') {
        var hl = JSON.stringify(req.headers);
        return handle_get_invite(hl);
    } else if (req.method === 'POST') {
        if (typeof ctx.body.email !== 'string' || !ctx.body.email.trim().match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i))
            return handle_error({ code: 400, message: 'Missing or invalid e-mail address.' });
        else
            return handle_send_invite();
    } else
        return handle_error({ code: 405 });
    //how to know what language to use here? req object always display english as well


    function handle_error(error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(require('ejs').render(oops.stringify(), { logo_url: logo_url, ctx: ctx, error: error }));
    }

    function handle_get_invite(hl) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(require('ejs').render(slack_invite.stringify(), { logo_url: logo_url, ctx: ctx, hl: hl }));
    }

    function handle_send_invite() {
        require('superagent')
            .post('https://' + ctx.secrets.SLACK_ORG + '.slack.com/api/users.admin.invite')
            .type('form')
            .send({
                email: ctx.body.email.trim(),
                token: ctx.secrets.SLACK_TOKEN,
                set_active: true
            })
            .end(function(error, sres) {
                if (error)
                    return handle_error({ code: 502, message: error.toString() });
                if (sres.status !== 200)
                    return handle_error({ code: 502, message: 'Invalid response from Slack: ' + sres.status });
                if (!sres.body.ok) {
                    if (sres.body.error === 'missing_scope' && sres.body.needed === 'admin')
                        return handle_error({ code: 400, message: 'The Slack token is missing `admin` scope required to invite users via Slack API. Use a token from Slack admin account.' })
                    else if (sres.body.error === 'already_invited')
                        return handle_error({ code: 400, message: 'You have been previously invited to this Slack team. Search for email from feedback@slack.com.' });
                    else if (sres.body.error === 'already_in_team')
                        return handle_error({ code: 400, message: 'You are already a member of this Slack team.' })
                    else
                        return handle_error({ code: 502, message: 'Response from Slack: ' + sres.body.error });
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(require('ejs').render(invite_sent.stringify(), { logo_url: logo_url, ctx: ctx }));
            });
    }

}

function slack_invite() {
    /*
    <html>
    <head>
        <title><%= ctx.secrets.SLACK_ORG %> signup</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no">
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web|Ubuntu" rel="stylesheet">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
    <style>
    
        a {
            color: #000;
        }
        
        a:hover,
        a:focus {
            color: #000;
        }
        
        p {
            margin-bottom: 40px;
        }
        
        p,
        h6,
        address {
            font-family: 'Ubuntu', sans-serif;
            color: #777;
        }
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            text-transform: uppercase;
        }
        
        header {
            height: 800px;
            text-align: center;
            margin-bottom: 0;
            position: relative;
            background-image: url(../img/header.jpg);
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        section {
            padding: 50px 0;
        }
        
        section.no-padding {
            padding: 0;
        }
        
        figure {
            margin-bottom: 30px;
        }
        
        .container {
            position: relative;
        }
        
        .form-control {
            border-radius: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
            -webkit-transition: none;
            -o-transition: none;
            transition: none;
            border-color: #8a8587;
            padding: 14px;
            font-size: 13px;
            height: auto;
            margin-bottom: 25px;
        }
        
        .form-control:focus {
            border-color: #000;
            outline: 0;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        
        textarea.form-control {
            height: 195px;
        }
        
        .title {
            text-align: center;
        }
        
        .title-left {
            text-align: left;
        }
        
        .title p {
            padding: 50px;
        }
        
        .section-text {
            padding: 50px 0;
        }
        
        .navbar-header {
            height: 90px;
        }
        
        .navbar-wooster {
            background: #fff;
            height: 70px;
        }
        
        .navbar-wooster .navbar-brand {
            padding-top: 8px;
        }
        
        .navbar-wooster .navbar-brand img {
            height: 50px;
        }
        
        .navbar-wooster .primary-menu {
            margin-top: 0;
            margin-left: -15px;
            margin-right: -15px;
        }
        
        .navbar-wooster .navbar-collapse {
            background-color: #fff;
        }
        
        .navbar-wooster .navbar-header {
            height: 50px;
        }
        
        .navbar-toggle {
            display: block !important;
            margin-top: 20px;
        }
        
        .navbar-toggle .icon-bar {
            background: #000;
        }
        
        .main-head h1 {
            text-transform: uppercase;
            font-size: 45px;
            position: relative;
            line-height: 1.4em;
            margin-bottom: 40px;
        }
        
        .main-head span {
            margin-bottom: 20px;
            margin-top: 20px;
            font-size: 13px;
            display: block;
        }
        
        .main-head {
            text-transform: uppercase;
            width: 100%;
            position: absolute;
            top: 50%;
            -webkit-transform: translate(0, -50%);
            -moz-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            -o-transform: translate(0, -50%);
            transform: translate(0, -50%);
        }
        
        .divider {
            width: 80px;
            background: #000;
            height: 1px;
            display: block;
            margin: 20px auto;
        }
        
        .divider.divider-sm {
            width: 40px;
            margin: 20px 0;
        }
        
        .divider.divider-lg {
            width: 180px;
        }
        
        .btn {
            border-radius: 0;
            font-size: 13px;
            padding: 15px 40px;
            transition: all 0.3s;
        }
        
        .btn-lg {
            padding: 25px 50px;
        }
        
        .btn-lg.btn-primary {
            border-width: 2px;
        }
        
        .btn-primary {
            background: transparent;
            border: 1px solid #000;
            color: #000;
        }
        
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:active:hover,
        .btn-primary:focus {
            background: #000;
            color: #fff;
            border-color: #000;
        }
        
        .call-to-action {
            background: #000;
            color: #fff;
            padding: 50px 0;
        }
        
        .video {
            background-image: url(../img/keyboard.jpg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 500px;
            color: #fff;
            position: relative;
        }
        
        .video-wrapper {
            background-color: rgba(0, 0, 0, 0.8);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .video .fa {
            font-size: 70px;
            color: #fff;
        }
        
        .centred-container {
            position: absolute;
            width: 100%;
            text-align: center;
            top: 50%;
            -webkit-transform: translate(0, -50%);
            -moz-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            -o-transform: translate(0, -50%);
            transform: translate(0, -50%);
        }
        
        .video h3 {
            margin-bottom: 30px;
        }
        
        .video .glyphicon {
            font-size: 70px;
        }

        
        .centered-pills {
            text-align: center;
        }
        
        .centered-pills ul.nav-pills {
            display: inline-block;
            margin-bottom: 50px;
        }
        
        .centered-pills li {
            display: inline;
        }
        
        .centered-pills a {
            float: left;
        }
        
        .nav-pills>li>a {
            border-radius: 0;
            color: #000;
            border: 1px solid #000;
            margin-right: 20px;
        }
        
        .nav-pills>li>a:hover,
        .nav-pills>li>a:focus,
        .nav-pills>li>a.active {
            background: #000;
            border-color: #000;
            color: #fff;
        }
        
        #portfolio-grid .mix {
            display: none;
        }

        
        .mask {
            width: 100%;
            height: 100%;
            display: block;
            background: rgba(0, 0, 0, 0.8);
        }
        
        .single-testimonial {
            padding: 80px 0;
            text-align: center;
        }
        
        .single-testimonial .fa {
            width: 50px;
            height: 50px;
            background-color: #fff;
            color: #000;
            margin-bottom: 30px;
            line-height: 50px;
            text-align: center;
            border-radius: 100%;
        }
        
        .testimonial p {
            font-size: 17px;
            text-transform: uppercase;
            color: #fff;
        }
        
        .testimonial h6 {
            color: #fff;
        }
        
        .team-member {
            position: relative;
            margin-bottom: 70px;
        }
        
        .team-member h6 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            margin: 0;
            text-align: center;
            padding: 30px 0;
        }
        
        .subscribe-input {
            text-align: left;
            width: 100%;
            border: 0 none;
            background: transparent;
            opacity: 0.9;
            border: 1px solid #fff;
            padding: 14px;
        }
        
        .btn-cta {
            background-color: #fff;
            border: 1px solid #fff;
            color: #000;
            font-weight: 400;
            letter-spacing: 1px;
            margin: 0;
            padding: 15px 25px;
            text-transform: uppercase;
            width: 100%;
        }
        
        address {
            text-align: center;
            margin-bottom: 70px;
        }
        
        address .fa {
            display: block;
            font-size: 33px;
            margin-bottom: 20px;
        }

        
        footer {
            background: #000;
            padding: 80px 0;
        }
        
        footer,
        footer p {
            color: #fff;
        }
        
        footer a {
            color: #fff;
            font-weight: bold;
        }
        
        footer a:hover {
            color: #fff;
            text-decoration: underline;
        }
        
        .logo-footer {
            margin-bottom: 40px;
        }

        
        .button-invitation {
            background: red;
            border-radius: 25px;
            font-size: 16px;
            height: 50px;
            border: none;
            color: white;
            padding: 0 30px;
        }
        
        .user-logo {
            width: 115px;
            height: 115px;
            border-radius: 50%;
            box-shadow: 0px 2px 4px 0px #D0D2D3;
            position: absolute;
            margin-left: 90px;
        }
        
        .slack-logo {
            width: 115px;
            height: 115px;
            border-radius: 50%;
            box-shadow: 0px 2px 4px 0px #D0D2D3;
            position: absolute;
            margin-left: 70px;

        }

        @media (min-width: 768px) {
            .primary-menu {
                position: relative;
                overflow: hidden;
                margin-top: 18px;
            }
            .primary-menu .navbar-nav {
                right: -75%;
                position: absolute;
                margin-top: 12px;
                opacity: 0;
                transition: 300ms all ease-in-out;
            }
            .primary-menu:hover .navbar-nav {
                right: 50px;
                opacity: 1;
            }
        }
        
        @media (max-width: 767px) {
            .navbar-toggle {
                margin-top: -45px;
            }
            .navbar-wooster .navbar-toggle {
                margin-top: -25px;
                padding: 0;
            }
        }
    </style>

    </head>
    <body>
    <header>
        <nav class="navbar navbar-fixed-top" id="header-nav">
            <div class="container-fluid">
                <div class="navbar-header">
                
                        
                        <img class="user-logo" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNi41NjgsMTU2LjE1OEwzNzYuNjkyLDI2LjI4MWMtMy41MjQtMy41MjQtOC4xODMtNS40NDYtMTMuMTk2LTUuNDM4Yy00Ljk4NCwwLjAxNy05LjY1NywxLjk4MS0xMy4xNTgsNS41MjkgICAgbC02LjE0LDYuMjI1Yy03LjY2OSw3Ljc3NS0xNy44NDUsMTIuOTA2LTI4LjY1NSwxNC40NWwtOS40MTEsMS4zNDRjLTExLjQ1NywxLjYzNy0yMi4zOTMsNi4zMjctMzEuNTA4LDEzLjQxNmwtMjcuNTAzLTI3LjUwMSAgICBjLTYuOTQxLTYuOTQxLTE2LjE2OS0xMC43NjMtMjUuOTg2LTEwLjc2M0gxODcuMDFjLTMuNjcsMC03LjEyMS0xLjQyOS05LjcxNi00LjAyNGMtNS4zNC01LjM0LTEyLjQzOS04LjI4MS0xOS45OTEtOC4yODEgICAgcy0xNC42NTEsMi45NDEtMTkuOTkxLDguMjgxTDguNzg1LDE0OC4wNDhjLTExLjcxMywxMS43MTMtMTEuNzEzLDMwLjc3MiwwLDQyLjQ4NmMyLjA4OCwyLjA4OCwzLjQ2OCw0Ljg0OCwzLjg4NSw3Ljc3MiAgICBsNC41LDMxLjQ5OGMxLjExNyw3LjgxOSw0LjgwOCwxNS4yMDIsMTAuMzk0LDIwLjc4OWwyOC43NzUsMjguNzc1bC00LjU1Niw0LjU1NmMtMTYuNDU2LDE2LjQ1Ni0xNi40NTYsNDMuMjMsMCw1OS42ODYgICAgYzcuOTcxLDcuOTcxLDE4LjU3LDEyLjM2MiwyOS44NDMsMTIuMzYyYzIuMTg1LDAsNC4zNDUtMC4xNjUsNi40NjUtMC40ODljLTEuOTY3LDEyLjgzOSwxLjk4MywyNi40MTgsMTEuODUxLDM2LjI4NiAgICBjOS44NjgsOS44NjgsMjMuNDQ2LDEzLjgxNywzNi4yODYsMTEuODUxYy0wLjMyNCwyLjEyLTAuNDg5LDQuMjgtMC40ODksNi40NjVjMCwxMS4yNzMsNC4zOTEsMjEuODcxLDEyLjM2MiwyOS44NDIgICAgczE4LjU3LDEyLjM2MiwyOS44NDMsMTIuMzYyYzIuMTg1LDAsNC4zNDUtMC4xNjUsNi40NjUtMC40ODljLTEuOTY3LDEyLjgzOSwxLjk4MywyNi40MTgsMTEuODUxLDM2LjI4NiAgICBjOC4yMjgsOC4yMjgsMTkuMDM1LDEyLjM0MSwyOS44NDMsMTIuMzQxYzkuODAyLDAsMTkuNTk3LTMuMzk2LDI3LjQ3NC0xMC4xNjRjNy44MjgsNi45OTYsMTcuNjk1LDEwLjQ5OCwyNy41NjUsMTAuNDk4ICAgIGMxMC42MDIsMCwyMS4yMDMtNC4wMzUsMjkuMjczLTEyLjEwN2wwLjAwMS0wLjAwMWwxLjEzOC0xLjEzOWM5LjYyMS05LjYyLDEzLjUwNC0yMi44MzYsMTEuNjU3LTM1LjM2MyAgICBjMi4wMTgsMC4yOTgsNC4wNTQsMC40NSw2LjA5LDAuNDVjMTAuNjAyLDAsMjEuMjAyLTQuMDM1LDI5LjI3Mi0xMi4xMDRsMS4xNDEtMS4xNDFjOS42MjEtOS42MjEsMTMuNTA0LTIyLjgzOCwxMS42NTctMzUuMzY0ICAgIGMyLjAxOCwwLjI5OCw0LjA1NCwwLjQ1LDYuMDksMC40NWMxMC42MDIsMCwyMS4yMDItNC4wMzUsMjkuMjczLTEyLjEwNmwxLjEzOS0xLjEzOWM5LjYyLTkuNjIsMTMuNTA0LTIyLjgzNiwxMS42NTctMzUuMzYzICAgIGMyLjAxOCwwLjI5OCw0LjA1NCwwLjQ1LDYuMDg5LDAuNDVjMTAuNjAxLDAsMjEuMjAzLTQuMDM1LDI5LjI3My0xMi4xMDdsMC4wMDEtMC4wMDFsMS4xMzgtMS4xMzkgICAgYzE1LjU1Mi0xNS41NTIsMTYuMTE0LTQwLjQ5NiwxLjY5Ni01Ni43MzVsMTEuNTk1LTExLjU5NWMxMi41NjUtMTIuNTY1LDE5LjQ4Ni0yOS4yNzIsMTkuNDg2LTQ3LjA0MnYtMi4zNiAgICBjMC0xNi4xOTksNi4zMDktMzEuNDMsMTcuNzYzLTQyLjg4NEM1MTMuODA5LDE3NS4xODEsNTEzLjgwOSwxNjMuMzk5LDUwNi41NjgsMTU2LjE1OHogTTIyNi4xMDIsNDg0LjE0NSAgICBjLTYuOTE4LDAtMTMuNDI0LTIuNjk0LTE4LjMxNi03LjU4N2MtNC44OTItNC44OTMtNy41ODctMTEuMzk3LTcuNTg3LTE4LjMxN2MwLTUuOTM4LDEuOTktMTEuNTY3LDUuNjQ1LTE2LjEzOCAgICBjMS4wOTksMS40MzUsMi4yOTMsMi44MiwzLjYwNSw0LjEzMmwzMi40OTUsMzIuNDk1QzIzNy40MjcsNDgyLjIzNywyMzEuOTEzLDQ4NC4xNDUsMjI2LjEwMiw0ODQuMTQ1eiBNMzAwLjAyNCw0NzUuOTg4ICAgIGwtMS4xMzgsMS4xMzljLTkuNzg0LDkuNzg1LTI1LjcwNyw5Ljc4Ni0zNS40OTMsMGwtNDIuNDE4LTQyLjQxOGMtOS43ODUtOS43ODUtOS43ODUtMjUuNzA4LDAtMzUuNDkzbDEuMTM5LTEuMTM5ICAgIGM0Ljg5My00Ljg5MywxMS4zMi03LjMzOSwxNy43NDctNy4zMzlzMTIuODUzLDIuNDQ2LDE3Ljc0Niw3LjMzOWw0Mi40MTgsNDIuNDE4QzMwOS44MTEsNDUwLjI4MSwzMDkuODExLDQ2Ni4yMDIsMzAwLjAyNCw0NzUuOTg4ICAgIHogTTM0OC4xODYsNDI3LjgyOGwtMS4xNCwxLjEzOWMwLDAsMCwwLjAwMS0wLjAwMSwwLjAwMWMtOS43ODUsOS43ODUtMjUuNzA3LDkuNzg1LTM1LjQ5MiwwbC00Mi40MTgtNDIuNDE4ICAgIGMtOS43ODUtOS43ODUtOS43ODUtMjUuNzA4LDAtMzUuNDkzbDEuMTM5LTEuMTM5YzQuODkzLTQuODkzLDExLjMyLTcuMzM5LDE3Ljc0Ni03LjMzOWM2LjQyNiwwLDEyLjg1NCwyLjQ0NiwxNy43NDcsNy4zMzkgICAgbDQyLjQxOCw0Mi40MThDMzU3Ljk3LDQwMi4xMjIsMzU3Ljk3LDQxOC4wNDQsMzQ4LjE4Niw0MjcuODI4eiBNMzk2LjM0MywzNzkuNjcxbC0xLjEzOSwxLjEzOSAgICBjLTkuNzg1LDkuNzg1LTI1LjcwNyw5Ljc4NS0zNS40OTIsMGwtNDIuNDE4LTQyLjQxOGMtNC43NDEtNC43NC03LjM1MS0xMS4wNDMtNy4zNTEtMTcuNzQ2YzAtNi43MDMsMi42MS0xMy4wMDUsNy4zNTMtMTcuNzQ3ICAgIGwxLjEzOC0xLjEzOWM0Ljg5My00Ljg5MywxMS4zMTktNy4zMzksMTcuNzQ2LTcuMzM5YzYuNDI2LDAsMTIuODU0LDIuNDQ2LDE3Ljc0Niw3LjMzOWw0Mi40MTgsNDIuNDE5ICAgIEM0MDYuMTI4LDM1My45NjQsNDA2LjEyOCwzNjkuODg1LDM5Ni4zNDMsMzc5LjY3MXogTTQ0NC41LDMzMS41MTNsLTEuMTM4LDEuMTM5Yy05Ljc4NCw5Ljc4NC0yNS43MDcsOS43ODUtMzUuNDkzLDAgICAgbC00Mi40MTgtNDIuNDE5Yy05Ljc4NS05Ljc4NS05Ljc4NS0yNS43MDcsMC0zNS40OTJsMS4xMzktMS4xMzljNC44OTMtNC44OTMsMTEuMzItNy4zMzksMTcuNzQ3LTcuMzM5ICAgIGM2LjQyNywwLDEyLjg1MywyLjQ0NiwxNy43NDYsNy4zMzlsNDIuNDE4LDQyLjQxOEM0NTQuMjg2LDMwNS44MDUsNDU0LjI4NiwzMjEuNzI3LDQ0NC41LDMzMS41MTN6IE00OTUuMTAzLDE3MC44MzEgICAgYy0xMy42MzMsMTQuNjY2LTIyLjU5OSwzMy4wMy0yMi41OTksNTMuMDU0djMuNzgzYzAsMTMuMzIxLTUuMjkyLDI2LjA5Ni0xNC43MTEsMzUuNTE1bC0xMS41MzcsMTEuNTM3bC0zMi42NDYtMzIuNjQ2ICAgIGMtMTYuMTY3LTE2LjE2Ny00Mi4zNzktMTYuMTY3LTU4LjU0NywwbC0xLjEzOSwxLjEzOWMtOS42MjEsOS42Mi0xMy41MDQsMjIuODM2LTExLjY1NywzNS4zNjMgICAgYy0xMi41MjYtMS44NDctMjUuNzQyLDIuMDM2LTM1LjM2NSwxMS42NTdsLTAuNjM5LDAuNjM5Yy03LjM0Miw3LjM0OS0xMS45OTMsMTcuMDgtMTIuNTYxLDI3LjQ1MyAgICBjLTAuMTU3LDIuODQ3LTAuMDIzLDUuNjU5LDAuMzc5LDguNDA0Yy0xMi41MTktMS44MzgtMjUuNzIyLDIuMDQ3LTM1LjMzNiwxMS42NjFsLTEuMTM5LDEuMTM5ICAgIGMtOS42MjEsOS42MjEtMTMuNTA0LDIyLjgzNy0xMS42NTcsMzUuMzY0Yy0xMi41MjYtMS44NDgtMjUuNzQyLDIuMDM1LTM1LjM2NCwxMS42NTdsLTEuMTM5LDEuMTM5ICAgIGMtMTAuNTg4LDEwLjU4OS0xNC4yMzEsMjUuNTM0LTEwLjkyNywzOS4xMmMtMC44MTcsMC4zODktMS41ODcsMC45MTMtMi4yNjMsMS41ODljLTExLjIwNCwxMS4yMDQtMzAuMjAxLDkuOTc5LTM5LjcwMS0zLjY3NCAgICBjLTIuMDg5LTMuMDAzLTMuNTEtNi40NS00LjEyNi0xMC4wNTZjLTEuNDY1LTguNTgyLDEuMjMzLTE2LjkzOCw3LjE5Ni0yMi45bDQ0LjcxOS00NC43MTljMy4yNDItMy4yNDIsMy4xODItOC41MzYtMC4xOC0xMS43MDEgICAgYy0zLjI0OS0zLjA1OS04LjQzMy0yLjczOS0xMS41ODksMC40MTdsLTQ0LjQ3Niw0NC40NzdjLTEwLjIyOSwxMC4yMjgtMjYuOTUzLDEwLjA5Ny0zNy4wMTUtMC4zOTIgICAgYy05LjUtOS45MDQtOS4yMzMtMjUuNjYtMC4wMDItMzUuODE0bDAuMzkxLTAuNDNsNDQuNzE0LTQ0LjcxM2MzLjE4My0zLjE4MywzLjE4My04LjM0NCwwLTExLjUyNiAgICBjLTMuMTgyLTMuMTg0LTguMzQzLTMuMTgzLTExLjUyNiwwbC00NC43MjgsNDQuNzI4Yy02LjAwOSw2LjAwMS0xNC40NDQsOC42OTEtMjMuMDkyLDcuMTVjLTMuNTQyLTAuNjMxLTYuOTI4LTIuMDM3LTkuODc2LTQuMDk5ICAgIGMtNy4xODgtNS4wMy0xMS4yNC0xMi44OTItMTEuMjQtMjEuMzc3YzAtNi45MTgsMi42OTQtMTMuNDI0LDcuNTg3LTE4LjMxNmw3NC44MjMtNzQuODIzYzMuMTQzLTMuMTQzLDMuMTU0LTguMjM3LDAuMDI0LTExLjM5MiAgICBjLTAuMDM4LTAuMDM4LTAuMDc2LTAuMDc3LTAuMTE1LTAuMTE1Yy0zLjE0Ny0zLjE3Mi04LjI3Ni0zLjE4LTExLjQzNS0wLjAyMWwtNTguNzQxLDU4Ljc0MWwtMjguNzc1LTI4Ljc3NSAgICBjLTMuMTA4LTMuMTA4LTUuMTYyLTcuMjE3LTUuNzg0LTExLjU2OGwtNC41LTMxLjQ5OGMtMC45MzQtNi41MzYtNC4xMzYtMTIuNDM5LTguNzA0LTE3LjIwNiAgICBjLTUuMTQ5LTUuMzczLTUuMDgxLTEzLjkzNCwwLjIwOC0xOS4yMjFMMTQ4LjU2NywzMS4zMThjMi4xODctMi4xODcsNS4wNzctMy42MjIsOC4xNjctMy43NjVjMy4zNjctMC4xNTUsNi41NiwxLjA2Nyw4Ljk0NiwzLjQwNiAgICBjNS41ODIsNS40NzEsMTIuODQ0LDguODg1LDIwLjY2LDguODg1YzExLjMwNywwLDI1Ljc5MiwwLDM0LjgwMiwwYzUuNDIzLDAsMTAuNjE5LDIuMTU0LDE0LjQ1Myw1Ljk4OWwxMTguNDg0LDExOC40ODQgICAgYzEwLjI0NiwxMC4yNDYsMTAuNTE4LDI3LjI4NywwLjEsMzcuMzU4Yy0xMC4xMjMsOS43ODYtMjYuMzIyLDkuNjgzLTM2LjMxNy0wLjMxMWwtODAuNzczLTgwLjc3MyAgICBjLTYuMDY5LTYuMDY5LTE1LjkwNy02LjA2OS0yMS45NzYsMGwtNjEuNTIsNjEuNTJjLTMuMTUyLDMuMTUyLTMuMTUyLDguMjYxLDAsMTEuNDExbDAuMTE1LDAuMTE1ICAgIGMzLjE1MiwzLjE1Miw4LjI2MSwzLjE1MiwxMS40MTEsMGw2MC45ODEtNjAuOTgxbDc5LjY0Miw3OS42NDNjMTYuNTIsMTYuNTIsNDQuMDQ5LDE3LjAyMiw2MC40NjcsMC40MDEgICAgYzguMDQ5LTguMTQ4LDEyLjM4Ni0xOC45OTcsMTIuMTY0LTMwLjQ5NGMtMC4yMTUtMTEuMTM1LTUuMDM5LTIxLjY4OC0xMi45MTUtMjkuNTYybC03OS4xOTMtNzkuMTkzICAgIGM2LjU0MS00LjY3NywxNC4xODgtNy43ODEsMjIuMTctOC45MjFsOS40MTEtMS4zNDRjMTQuNDA1LTIuMDU4LDI3LjczOC04Ljc4MiwzNy45NTctMTkuMTQxbDYuMTM5LTYuMjI0ICAgIGMwLjU0OS0wLjU1NiwxLjE3OC0wLjY3NSwxLjYwOC0wLjY3NmMwLjQ1Ni0wLjAwMSwxLjA2MiwwLjExMywxLjYxMywwLjY2NEw0OTUuMDQsMTY3LjY4NmMwLjU0OSwwLjU1LDAuNjY1LDEuMTc3LDAuNjY1LDEuNjA1ICAgIEM0OTUuNzA3LDE2OS43MDMsNDk1LjU5OSwxNzAuMjk3LDQ5NS4xMDMsMTcwLjgzMXoiIGZpbGw9IiM0MTY5ZTEiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                        />
     
                </div>
                <div class="primary-menu">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
        </button>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li><a data-scroll href="#">Home</a></li>
                            <li><a data-scroll href="#about">About</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>

        <div class="main-head">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h4>Need a quick translation?</h4>
                        <h4>Stuck on some specialist technology?</h4>
                        <div class="divider"></div>
                        <h1>CONNECT WITH LANGUAGE PROFESSIONALS IN REAL TIME</h1>
                        <div class="emailsubmit">
                            <h2>Join <span><%= ctx.secrets.SLACK_ORG %></span> on Slack</h2>
                            <img src="https://cdn.auth0.com/website/webtask/assets/slack-webtask-logo.png" alt="Slack" class="slack-logo" width="50px" height="50px">
                            <form method="POST">
                                <div class="form-group">
                                    <input type="email" class="form-control input-email" name="email" placeholder="foo@example.com" required>
                                </div>
                                <button type="submit" class="button-invitation">Get invitation</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section id="about" class="no-padding">
        <div class="container">
            <div class="row">
                <!--<div class="col-md-6 section-text">-->
                <div class="col-md-8 col-md-offset-2">
                    <div class="title title-left">
                        <h2>The Concept</h2>
                        <h6>No more jumping hoops</h6>
                        <div class="divider divider-sm"></div>
                    </div>
                    <p>Sometimes you just need a quick answer to a translation or terminology query during your work day.
                        <a href="https://slack.com">Slack</a> brings all your communication together in one place. It's real-time messaging, archiving and search for modern teams.
                    </p>
                    <p>
                        <ul>
                            <li>Worldwide community of freelance Translators, Proofreaders && Editors.</li>
                            <li>Built around the Slack ecosystem which can be run in the browser, phone or desktop app</li>
                            <li>Get quick translations/feedback from professionals in your language directions</li>
                            <li>Make quick and easy payments via paypal and our own cryptopay app.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </section>


    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="title">
                    <h2>About us</h2>
                    <span>Let us introduce ourselves</span>
                    <div class="divider divider-lg"></div>
                    <p>The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don&#39;t 
                    play together, the channel as won&#39;t be worth a dime.</p>
                </div>
            </div>
        </div>
        <div class="row team">
            <div class="col-md-3 col-sm-6">
                <div class="team-member">
                    <img src="https://github.com/identicons/codervince.png" class="img-responsive" >
                    <h6>@deutschenglisch</h6>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="team-member">
                    <img src="https://github.com/identicons/a.png" class="img-responsive" >
                    <h6>Sign Up and You Could Be Here!</h6>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="team-member">
                    <img src="https://github.com/identicons/b.png" class="img-responsive" >
                    <h6>Sign Up and You Could Be Here!</h6>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="team-member">
                    <img src="https://github.com/identicons/d.png" class="img-responsive"  >
                    <h6>Sign Up and You Could Be Here!</h6>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <h3>About Us</h3>
                <p>Minimalism is the future. Small tasks should be done simply. Like having someone translate a few lines for a small fee, all done instantly.</p>
            </div>
            <div class="col-md-4">
                <h3>Who We Are</h3>
                <p>I have been translating for a number of years now and have often need to speak with specialists in different areas to clarify terminology. Since I could not find anything like this, I thought I would set up a channel myself.</p>
            </div>
            <div class="col-md-4">
                <h3>Why We Do This</h3>
                <p>Building a network of language professionals is just the start!</p>
            </div>
        </div>
    </div>

    </section>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <img class="logo-footer" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNi41NjgsMTU2LjE1OEwzNzYuNjkyLDI2LjI4MWMtMy41MjQtMy41MjQtOC4xODMtNS40NDYtMTMuMTk2LTUuNDM4Yy00Ljk4NCwwLjAxNy05LjY1NywxLjk4MS0xMy4xNTgsNS41MjkgICAgbC02LjE0LDYuMjI1Yy03LjY2OSw3Ljc3NS0xNy44NDUsMTIuOTA2LTI4LjY1NSwxNC40NWwtOS40MTEsMS4zNDRjLTExLjQ1NywxLjYzNy0yMi4zOTMsNi4zMjctMzEuNTA4LDEzLjQxNmwtMjcuNTAzLTI3LjUwMSAgICBjLTYuOTQxLTYuOTQxLTE2LjE2OS0xMC43NjMtMjUuOTg2LTEwLjc2M0gxODcuMDFjLTMuNjcsMC03LjEyMS0xLjQyOS05LjcxNi00LjAyNGMtNS4zNC01LjM0LTEyLjQzOS04LjI4MS0xOS45OTEtOC4yODEgICAgcy0xNC42NTEsMi45NDEtMTkuOTkxLDguMjgxTDguNzg1LDE0OC4wNDhjLTExLjcxMywxMS43MTMtMTEuNzEzLDMwLjc3MiwwLDQyLjQ4NmMyLjA4OCwyLjA4OCwzLjQ2OCw0Ljg0OCwzLjg4NSw3Ljc3MiAgICBsNC41LDMxLjQ5OGMxLjExNyw3LjgxOSw0LjgwOCwxNS4yMDIsMTAuMzk0LDIwLjc4OWwyOC43NzUsMjguNzc1bC00LjU1Niw0LjU1NmMtMTYuNDU2LDE2LjQ1Ni0xNi40NTYsNDMuMjMsMCw1OS42ODYgICAgYzcuOTcxLDcuOTcxLDE4LjU3LDEyLjM2MiwyOS44NDMsMTIuMzYyYzIuMTg1LDAsNC4zNDUtMC4xNjUsNi40NjUtMC40ODljLTEuOTY3LDEyLjgzOSwxLjk4MywyNi40MTgsMTEuODUxLDM2LjI4NiAgICBjOS44NjgsOS44NjgsMjMuNDQ2LDEzLjgxNywzNi4yODYsMTEuODUxYy0wLjMyNCwyLjEyLTAuNDg5LDQuMjgtMC40ODksNi40NjVjMCwxMS4yNzMsNC4zOTEsMjEuODcxLDEyLjM2MiwyOS44NDIgICAgczE4LjU3LDEyLjM2MiwyOS44NDMsMTIuMzYyYzIuMTg1LDAsNC4zNDUtMC4xNjUsNi40NjUtMC40ODljLTEuOTY3LDEyLjgzOSwxLjk4MywyNi40MTgsMTEuODUxLDM2LjI4NiAgICBjOC4yMjgsOC4yMjgsMTkuMDM1LDEyLjM0MSwyOS44NDMsMTIuMzQxYzkuODAyLDAsMTkuNTk3LTMuMzk2LDI3LjQ3NC0xMC4xNjRjNy44MjgsNi45OTYsMTcuNjk1LDEwLjQ5OCwyNy41NjUsMTAuNDk4ICAgIGMxMC42MDIsMCwyMS4yMDMtNC4wMzUsMjkuMjczLTEyLjEwN2wwLjAwMS0wLjAwMWwxLjEzOC0xLjEzOWM5LjYyMS05LjYyLDEzLjUwNC0yMi44MzYsMTEuNjU3LTM1LjM2MyAgICBjMi4wMTgsMC4yOTgsNC4wNTQsMC40NSw2LjA5LDAuNDVjMTAuNjAyLDAsMjEuMjAyLTQuMDM1LDI5LjI3Mi0xMi4xMDRsMS4xNDEtMS4xNDFjOS42MjEtOS42MjEsMTMuNTA0LTIyLjgzOCwxMS42NTctMzUuMzY0ICAgIGMyLjAxOCwwLjI5OCw0LjA1NCwwLjQ1LDYuMDksMC40NWMxMC42MDIsMCwyMS4yMDItNC4wMzUsMjkuMjczLTEyLjEwNmwxLjEzOS0xLjEzOWM5LjYyLTkuNjIsMTMuNTA0LTIyLjgzNiwxMS42NTctMzUuMzYzICAgIGMyLjAxOCwwLjI5OCw0LjA1NCwwLjQ1LDYuMDg5LDAuNDVjMTAuNjAxLDAsMjEuMjAzLTQuMDM1LDI5LjI3My0xMi4xMDdsMC4wMDEtMC4wMDFsMS4xMzgtMS4xMzkgICAgYzE1LjU1Mi0xNS41NTIsMTYuMTE0LTQwLjQ5NiwxLjY5Ni01Ni43MzVsMTEuNTk1LTExLjU5NWMxMi41NjUtMTIuNTY1LDE5LjQ4Ni0yOS4yNzIsMTkuNDg2LTQ3LjA0MnYtMi4zNiAgICBjMC0xNi4xOTksNi4zMDktMzEuNDMsMTcuNzYzLTQyLjg4NEM1MTMuODA5LDE3NS4xODEsNTEzLjgwOSwxNjMuMzk5LDUwNi41NjgsMTU2LjE1OHogTTIyNi4xMDIsNDg0LjE0NSAgICBjLTYuOTE4LDAtMTMuNDI0LTIuNjk0LTE4LjMxNi03LjU4N2MtNC44OTItNC44OTMtNy41ODctMTEuMzk3LTcuNTg3LTE4LjMxN2MwLTUuOTM4LDEuOTktMTEuNTY3LDUuNjQ1LTE2LjEzOCAgICBjMS4wOTksMS40MzUsMi4yOTMsMi44MiwzLjYwNSw0LjEzMmwzMi40OTUsMzIuNDk1QzIzNy40MjcsNDgyLjIzNywyMzEuOTEzLDQ4NC4xNDUsMjI2LjEwMiw0ODQuMTQ1eiBNMzAwLjAyNCw0NzUuOTg4ICAgIGwtMS4xMzgsMS4xMzljLTkuNzg0LDkuNzg1LTI1LjcwNyw5Ljc4Ni0zNS40OTMsMGwtNDIuNDE4LTQyLjQxOGMtOS43ODUtOS43ODUtOS43ODUtMjUuNzA4LDAtMzUuNDkzbDEuMTM5LTEuMTM5ICAgIGM0Ljg5My00Ljg5MywxMS4zMi03LjMzOSwxNy43NDctNy4zMzlzMTIuODUzLDIuNDQ2LDE3Ljc0Niw3LjMzOWw0Mi40MTgsNDIuNDE4QzMwOS44MTEsNDUwLjI4MSwzMDkuODExLDQ2Ni4yMDIsMzAwLjAyNCw0NzUuOTg4ICAgIHogTTM0OC4xODYsNDI3LjgyOGwtMS4xNCwxLjEzOWMwLDAsMCwwLjAwMS0wLjAwMSwwLjAwMWMtOS43ODUsOS43ODUtMjUuNzA3LDkuNzg1LTM1LjQ5MiwwbC00Mi40MTgtNDIuNDE4ICAgIGMtOS43ODUtOS43ODUtOS43ODUtMjUuNzA4LDAtMzUuNDkzbDEuMTM5LTEuMTM5YzQuODkzLTQuODkzLDExLjMyLTcuMzM5LDE3Ljc0Ni03LjMzOWM2LjQyNiwwLDEyLjg1NCwyLjQ0NiwxNy43NDcsNy4zMzkgICAgbDQyLjQxOCw0Mi40MThDMzU3Ljk3LDQwMi4xMjIsMzU3Ljk3LDQxOC4wNDQsMzQ4LjE4Niw0MjcuODI4eiBNMzk2LjM0MywzNzkuNjcxbC0xLjEzOSwxLjEzOSAgICBjLTkuNzg1LDkuNzg1LTI1LjcwNyw5Ljc4NS0zNS40OTIsMGwtNDIuNDE4LTQyLjQxOGMtNC43NDEtNC43NC03LjM1MS0xMS4wNDMtNy4zNTEtMTcuNzQ2YzAtNi43MDMsMi42MS0xMy4wMDUsNy4zNTMtMTcuNzQ3ICAgIGwxLjEzOC0xLjEzOWM0Ljg5My00Ljg5MywxMS4zMTktNy4zMzksMTcuNzQ2LTcuMzM5YzYuNDI2LDAsMTIuODU0LDIuNDQ2LDE3Ljc0Niw3LjMzOWw0Mi40MTgsNDIuNDE5ICAgIEM0MDYuMTI4LDM1My45NjQsNDA2LjEyOCwzNjkuODg1LDM5Ni4zNDMsMzc5LjY3MXogTTQ0NC41LDMzMS41MTNsLTEuMTM4LDEuMTM5Yy05Ljc4NCw5Ljc4NC0yNS43MDcsOS43ODUtMzUuNDkzLDAgICAgbC00Mi40MTgtNDIuNDE5Yy05Ljc4NS05Ljc4NS05Ljc4NS0yNS43MDcsMC0zNS40OTJsMS4xMzktMS4xMzljNC44OTMtNC44OTMsMTEuMzItNy4zMzksMTcuNzQ3LTcuMzM5ICAgIGM2LjQyNywwLDEyLjg1MywyLjQ0NiwxNy43NDYsNy4zMzlsNDIuNDE4LDQyLjQxOEM0NTQuMjg2LDMwNS44MDUsNDU0LjI4NiwzMjEuNzI3LDQ0NC41LDMzMS41MTN6IE00OTUuMTAzLDE3MC44MzEgICAgYy0xMy42MzMsMTQuNjY2LTIyLjU5OSwzMy4wMy0yMi41OTksNTMuMDU0djMuNzgzYzAsMTMuMzIxLTUuMjkyLDI2LjA5Ni0xNC43MTEsMzUuNTE1bC0xMS41MzcsMTEuNTM3bC0zMi42NDYtMzIuNjQ2ICAgIGMtMTYuMTY3LTE2LjE2Ny00Mi4zNzktMTYuMTY3LTU4LjU0NywwbC0xLjEzOSwxLjEzOWMtOS42MjEsOS42Mi0xMy41MDQsMjIuODM2LTExLjY1NywzNS4zNjMgICAgYy0xMi41MjYtMS44NDctMjUuNzQyLDIuMDM2LTM1LjM2NSwxMS42NTdsLTAuNjM5LDAuNjM5Yy03LjM0Miw3LjM0OS0xMS45OTMsMTcuMDgtMTIuNTYxLDI3LjQ1MyAgICBjLTAuMTU3LDIuODQ3LTAuMDIzLDUuNjU5LDAuMzc5LDguNDA0Yy0xMi41MTktMS44MzgtMjUuNzIyLDIuMDQ3LTM1LjMzNiwxMS42NjFsLTEuMTM5LDEuMTM5ICAgIGMtOS42MjEsOS42MjEtMTMuNTA0LDIyLjgzNy0xMS42NTcsMzUuMzY0Yy0xMi41MjYtMS44NDgtMjUuNzQyLDIuMDM1LTM1LjM2NCwxMS42NTdsLTEuMTM5LDEuMTM5ICAgIGMtMTAuNTg4LDEwLjU4OS0xNC4yMzEsMjUuNTM0LTEwLjkyNywzOS4xMmMtMC44MTcsMC4zODktMS41ODcsMC45MTMtMi4yNjMsMS41ODljLTExLjIwNCwxMS4yMDQtMzAuMjAxLDkuOTc5LTM5LjcwMS0zLjY3NCAgICBjLTIuMDg5LTMuMDAzLTMuNTEtNi40NS00LjEyNi0xMC4wNTZjLTEuNDY1LTguNTgyLDEuMjMzLTE2LjkzOCw3LjE5Ni0yMi45bDQ0LjcxOS00NC43MTljMy4yNDItMy4yNDIsMy4xODItOC41MzYtMC4xOC0xMS43MDEgICAgYy0zLjI0OS0zLjA1OS04LjQzMy0yLjczOS0xMS41ODksMC40MTdsLTQ0LjQ3Niw0NC40NzdjLTEwLjIyOSwxMC4yMjgtMjYuOTUzLDEwLjA5Ny0zNy4wMTUtMC4zOTIgICAgYy05LjUtOS45MDQtOS4yMzMtMjUuNjYtMC4wMDItMzUuODE0bDAuMzkxLTAuNDNsNDQuNzE0LTQ0LjcxM2MzLjE4My0zLjE4MywzLjE4My04LjM0NCwwLTExLjUyNiAgICBjLTMuMTgyLTMuMTg0LTguMzQzLTMuMTgzLTExLjUyNiwwbC00NC43MjgsNDQuNzI4Yy02LjAwOSw2LjAwMS0xNC40NDQsOC42OTEtMjMuMDkyLDcuMTVjLTMuNTQyLTAuNjMxLTYuOTI4LTIuMDM3LTkuODc2LTQuMDk5ICAgIGMtNy4xODgtNS4wMy0xMS4yNC0xMi44OTItMTEuMjQtMjEuMzc3YzAtNi45MTgsMi42OTQtMTMuNDI0LDcuNTg3LTE4LjMxNmw3NC44MjMtNzQuODIzYzMuMTQzLTMuMTQzLDMuMTU0LTguMjM3LDAuMDI0LTExLjM5MiAgICBjLTAuMDM4LTAuMDM4LTAuMDc2LTAuMDc3LTAuMTE1LTAuMTE1Yy0zLjE0Ny0zLjE3Mi04LjI3Ni0zLjE4LTExLjQzNS0wLjAyMWwtNTguNzQxLDU4Ljc0MWwtMjguNzc1LTI4Ljc3NSAgICBjLTMuMTA4LTMuMTA4LTUuMTYyLTcuMjE3LTUuNzg0LTExLjU2OGwtNC41LTMxLjQ5OGMtMC45MzQtNi41MzYtNC4xMzYtMTIuNDM5LTguNzA0LTE3LjIwNiAgICBjLTUuMTQ5LTUuMzczLTUuMDgxLTEzLjkzNCwwLjIwOC0xOS4yMjFMMTQ4LjU2NywzMS4zMThjMi4xODctMi4xODcsNS4wNzctMy42MjIsOC4xNjctMy43NjVjMy4zNjctMC4xNTUsNi41NiwxLjA2Nyw4Ljk0NiwzLjQwNiAgICBjNS41ODIsNS40NzEsMTIuODQ0LDguODg1LDIwLjY2LDguODg1YzExLjMwNywwLDI1Ljc5MiwwLDM0LjgwMiwwYzUuNDIzLDAsMTAuNjE5LDIuMTU0LDE0LjQ1Myw1Ljk4OWwxMTguNDg0LDExOC40ODQgICAgYzEwLjI0NiwxMC4yNDYsMTAuNTE4LDI3LjI4NywwLjEsMzcuMzU4Yy0xMC4xMjMsOS43ODYtMjYuMzIyLDkuNjgzLTM2LjMxNy0wLjMxMWwtODAuNzczLTgwLjc3MyAgICBjLTYuMDY5LTYuMDY5LTE1LjkwNy02LjA2OS0yMS45NzYsMGwtNjEuNTIsNjEuNTJjLTMuMTUyLDMuMTUyLTMuMTUyLDguMjYxLDAsMTEuNDExbDAuMTE1LDAuMTE1ICAgIGMzLjE1MiwzLjE1Miw4LjI2MSwzLjE1MiwxMS40MTEsMGw2MC45ODEtNjAuOTgxbDc5LjY0Miw3OS42NDNjMTYuNTIsMTYuNTIsNDQuMDQ5LDE3LjAyMiw2MC40NjcsMC40MDEgICAgYzguMDQ5LTguMTQ4LDEyLjM4Ni0xOC45OTcsMTIuMTY0LTMwLjQ5NGMtMC4yMTUtMTEuMTM1LTUuMDM5LTIxLjY4OC0xMi45MTUtMjkuNTYybC03OS4xOTMtNzkuMTkzICAgIGM2LjU0MS00LjY3NywxNC4xODgtNy43ODEsMjIuMTctOC45MjFsOS40MTEtMS4zNDRjMTQuNDA1LTIuMDU4LDI3LjczOC04Ljc4MiwzNy45NTctMTkuMTQxbDYuMTM5LTYuMjI0ICAgIGMwLjU0OS0wLjU1NiwxLjE3OC0wLjY3NSwxLjYwOC0wLjY3NmMwLjQ1Ni0wLjAwMSwxLjA2MiwwLjExMywxLjYxMywwLjY2NEw0OTUuMDQsMTY3LjY4NmMwLjU0OSwwLjU1LDAuNjY1LDEuMTc3LDAuNjY1LDEuNjA1ICAgIEM0OTUuNzA3LDE2OS43MDMsNDk1LjU5OSwxNzAuMjk3LDQ5NS4xMDMsMTcwLjgzMXoiIGZpbGw9IiM0MTY5ZTEiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                    />
                    <p><a href="#" target="_blank">p2ptranslators 2017</p>
            </div>
        </div>
    </div>
</footer>
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>

</body>
    </html>
    */
}

function oops() {
    /*
    <html>
    <head>
        <title><%= ctx.secrets.SLACK_ORG %> signup</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    </head>
    <body style="padding-top: 30px;">
        <div class="container">
            <div class="jumbotron col-md-6 col-md-offset-3 text-center">
        <img width="100" height="100" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNi41NjgsMTU2LjE1OEwzNzYuNjkyLDI2LjI4MWMtMy41MjQtMy41MjQtOC4xODMtNS40NDYtMTMuMTk2LTUuNDM4Yy00Ljk4NCwwLjAxNy05LjY1NywxLjk4MS0xMy4xNTgsNS41MjkgICAgbC02LjE0LDYuMjI1Yy03LjY2OSw3Ljc3NS0xNy44NDUsMTIuOTA2LTI4LjY1NSwxNC40NWwtOS40MTEsMS4zNDRjLTExLjQ1NywxLjYzNy0yMi4zOTMsNi4zMjctMzEuNTA4LDEzLjQxNmwtMjcuNTAzLTI3LjUwMSAgICBjLTYuOTQxLTYuOTQxLTE2LjE2OS0xMC43NjMtMjUuOTg2LTEwLjc2M0gxODcuMDFjLTMuNjcsMC03LjEyMS0xLjQyOS05LjcxNi00LjAyNGMtNS4zNC01LjM0LTEyLjQzOS04LjI4MS0xOS45OTEtOC4yODEgICAgcy0xNC42NTEsMi45NDEtMTkuOTkxLDguMjgxTDguNzg1LDE0OC4wNDhjLTExLjcxMywxMS43MTMtMTEuNzEzLDMwLjc3MiwwLDQyLjQ4NmMyLjA4OCwyLjA4OCwzLjQ2OCw0Ljg0OCwzLjg4NSw3Ljc3MiAgICBsNC41LDMxLjQ5OGMxLjExNyw3LjgxOSw0LjgwOCwxNS4yMDIsMTAuMzk0LDIwLjc4OWwyOC43NzUsMjguNzc1bC00LjU1Niw0LjU1NmMtMTYuNDU2LDE2LjQ1Ni0xNi40NTYsNDMuMjMsMCw1OS42ODYgICAgYzcuOTcxLDcuOTcxLDE4LjU3LDEyLjM2MiwyOS44NDMsMTIuMzYyYzIuMTg1LDAsNC4zNDUtMC4xNjUsNi40NjUtMC40ODljLTEuOTY3LDEyLjgzOSwxLjk4MywyNi40MTgsMTEuODUxLDM2LjI4NiAgICBjOS44NjgsOS44NjgsMjMuNDQ2LDEzLjgxNywzNi4yODYsMTEuODUxYy0wLjMyNCwyLjEyLTAuNDg5LDQuMjgtMC40ODksNi40NjVjMCwxMS4yNzMsNC4zOTEsMjEuODcxLDEyLjM2MiwyOS44NDIgICAgczE4LjU3LDEyLjM2MiwyOS44NDMsMTIuMzYyYzIuMTg1LDAsNC4zNDUtMC4xNjUsNi40NjUtMC40ODljLTEuOTY3LDEyLjgzOSwxLjk4MywyNi40MTgsMTEuODUxLDM2LjI4NiAgICBjOC4yMjgsOC4yMjgsMTkuMDM1LDEyLjM0MSwyOS44NDMsMTIuMzQxYzkuODAyLDAsMTkuNTk3LTMuMzk2LDI3LjQ3NC0xMC4xNjRjNy44MjgsNi45OTYsMTcuNjk1LDEwLjQ5OCwyNy41NjUsMTAuNDk4ICAgIGMxMC42MDIsMCwyMS4yMDMtNC4wMzUsMjkuMjczLTEyLjEwN2wwLjAwMS0wLjAwMWwxLjEzOC0xLjEzOWM5LjYyMS05LjYyLDEzLjUwNC0yMi44MzYsMTEuNjU3LTM1LjM2MyAgICBjMi4wMTgsMC4yOTgsNC4wNTQsMC40NSw2LjA5LDAuNDVjMTAuNjAyLDAsMjEuMjAyLTQuMDM1LDI5LjI3Mi0xMi4xMDRsMS4xNDEtMS4xNDFjOS42MjEtOS42MjEsMTMuNTA0LTIyLjgzOCwxMS42NTctMzUuMzY0ICAgIGMyLjAxOCwwLjI5OCw0LjA1NCwwLjQ1LDYuMDksMC40NWMxMC42MDIsMCwyMS4yMDItNC4wMzUsMjkuMjczLTEyLjEwNmwxLjEzOS0xLjEzOWM5LjYyLTkuNjIsMTMuNTA0LTIyLjgzNiwxMS42NTctMzUuMzYzICAgIGMyLjAxOCwwLjI5OCw0LjA1NCwwLjQ1LDYuMDg5LDAuNDVjMTAuNjAxLDAsMjEuMjAzLTQuMDM1LDI5LjI3My0xMi4xMDdsMC4wMDEtMC4wMDFsMS4xMzgtMS4xMzkgICAgYzE1LjU1Mi0xNS41NTIsMTYuMTE0LTQwLjQ5NiwxLjY5Ni01Ni43MzVsMTEuNTk1LTExLjU5NWMxMi41NjUtMTIuNTY1LDE5LjQ4Ni0yOS4yNzIsMTkuNDg2LTQ3LjA0MnYtMi4zNiAgICBjMC0xNi4xOTksNi4zMDktMzEuNDMsMTcuNzYzLTQyLjg4NEM1MTMuODA5LDE3NS4xODEsNTEzLjgwOSwxNjMuMzk5LDUwNi41NjgsMTU2LjE1OHogTTIyNi4xMDIsNDg0LjE0NSAgICBjLTYuOTE4LDAtMTMuNDI0LTIuNjk0LTE4LjMxNi03LjU4N2MtNC44OTItNC44OTMtNy41ODctMTEuMzk3LTcuNTg3LTE4LjMxN2MwLTUuOTM4LDEuOTktMTEuNTY3LDUuNjQ1LTE2LjEzOCAgICBjMS4wOTksMS40MzUsMi4yOTMsMi44MiwzLjYwNSw0LjEzMmwzMi40OTUsMzIuNDk1QzIzNy40MjcsNDgyLjIzNywyMzEuOTEzLDQ4NC4xNDUsMjI2LjEwMiw0ODQuMTQ1eiBNMzAwLjAyNCw0NzUuOTg4ICAgIGwtMS4xMzgsMS4xMzljLTkuNzg0LDkuNzg1LTI1LjcwNyw5Ljc4Ni0zNS40OTMsMGwtNDIuNDE4LTQyLjQxOGMtOS43ODUtOS43ODUtOS43ODUtMjUuNzA4LDAtMzUuNDkzbDEuMTM5LTEuMTM5ICAgIGM0Ljg5My00Ljg5MywxMS4zMi03LjMzOSwxNy43NDctNy4zMzlzMTIuODUzLDIuNDQ2LDE3Ljc0Niw3LjMzOWw0Mi40MTgsNDIuNDE4QzMwOS44MTEsNDUwLjI4MSwzMDkuODExLDQ2Ni4yMDIsMzAwLjAyNCw0NzUuOTg4ICAgIHogTTM0OC4xODYsNDI3LjgyOGwtMS4xNCwxLjEzOWMwLDAsMCwwLjAwMS0wLjAwMSwwLjAwMWMtOS43ODUsOS43ODUtMjUuNzA3LDkuNzg1LTM1LjQ5MiwwbC00Mi40MTgtNDIuNDE4ICAgIGMtOS43ODUtOS43ODUtOS43ODUtMjUuNzA4LDAtMzUuNDkzbDEuMTM5LTEuMTM5YzQuODkzLTQuODkzLDExLjMyLTcuMzM5LDE3Ljc0Ni03LjMzOWM2LjQyNiwwLDEyLjg1NCwyLjQ0NiwxNy43NDcsNy4zMzkgICAgbDQyLjQxOCw0Mi40MThDMzU3Ljk3LDQwMi4xMjIsMzU3Ljk3LDQxOC4wNDQsMzQ4LjE4Niw0MjcuODI4eiBNMzk2LjM0MywzNzkuNjcxbC0xLjEzOSwxLjEzOSAgICBjLTkuNzg1LDkuNzg1LTI1LjcwNyw5Ljc4NS0zNS40OTIsMGwtNDIuNDE4LTQyLjQxOGMtNC43NDEtNC43NC03LjM1MS0xMS4wNDMtNy4zNTEtMTcuNzQ2YzAtNi43MDMsMi42MS0xMy4wMDUsNy4zNTMtMTcuNzQ3ICAgIGwxLjEzOC0xLjEzOWM0Ljg5My00Ljg5MywxMS4zMTktNy4zMzksMTcuNzQ2LTcuMzM5YzYuNDI2LDAsMTIuODU0LDIuNDQ2LDE3Ljc0Niw3LjMzOWw0Mi40MTgsNDIuNDE5ICAgIEM0MDYuMTI4LDM1My45NjQsNDA2LjEyOCwzNjkuODg1LDM5Ni4zNDMsMzc5LjY3MXogTTQ0NC41LDMzMS41MTNsLTEuMTM4LDEuMTM5Yy05Ljc4NCw5Ljc4NC0yNS43MDcsOS43ODUtMzUuNDkzLDAgICAgbC00Mi40MTgtNDIuNDE5Yy05Ljc4NS05Ljc4NS05Ljc4NS0yNS43MDcsMC0zNS40OTJsMS4xMzktMS4xMzljNC44OTMtNC44OTMsMTEuMzItNy4zMzksMTcuNzQ3LTcuMzM5ICAgIGM2LjQyNywwLDEyLjg1MywyLjQ0NiwxNy43NDYsNy4zMzlsNDIuNDE4LDQyLjQxOEM0NTQuMjg2LDMwNS44MDUsNDU0LjI4NiwzMjEuNzI3LDQ0NC41LDMzMS41MTN6IE00OTUuMTAzLDE3MC44MzEgICAgYy0xMy42MzMsMTQuNjY2LTIyLjU5OSwzMy4wMy0yMi41OTksNTMuMDU0djMuNzgzYzAsMTMuMzIxLTUuMjkyLDI2LjA5Ni0xNC43MTEsMzUuNTE1bC0xMS41MzcsMTEuNTM3bC0zMi42NDYtMzIuNjQ2ICAgIGMtMTYuMTY3LTE2LjE2Ny00Mi4zNzktMTYuMTY3LTU4LjU0NywwbC0xLjEzOSwxLjEzOWMtOS42MjEsOS42Mi0xMy41MDQsMjIuODM2LTExLjY1NywzNS4zNjMgICAgYy0xMi41MjYtMS44NDctMjUuNzQyLDIuMDM2LTM1LjM2NSwxMS42NTdsLTAuNjM5LDAuNjM5Yy03LjM0Miw3LjM0OS0xMS45OTMsMTcuMDgtMTIuNTYxLDI3LjQ1MyAgICBjLTAuMTU3LDIuODQ3LTAuMDIzLDUuNjU5LDAuMzc5LDguNDA0Yy0xMi41MTktMS44MzgtMjUuNzIyLDIuMDQ3LTM1LjMzNiwxMS42NjFsLTEuMTM5LDEuMTM5ICAgIGMtOS42MjEsOS42MjEtMTMuNTA0LDIyLjgzNy0xMS42NTcsMzUuMzY0Yy0xMi41MjYtMS44NDgtMjUuNzQyLDIuMDM1LTM1LjM2NCwxMS42NTdsLTEuMTM5LDEuMTM5ICAgIGMtMTAuNTg4LDEwLjU4OS0xNC4yMzEsMjUuNTM0LTEwLjkyNywzOS4xMmMtMC44MTcsMC4zODktMS41ODcsMC45MTMtMi4yNjMsMS41ODljLTExLjIwNCwxMS4yMDQtMzAuMjAxLDkuOTc5LTM5LjcwMS0zLjY3NCAgICBjLTIuMDg5LTMuMDAzLTMuNTEtNi40NS00LjEyNi0xMC4wNTZjLTEuNDY1LTguNTgyLDEuMjMzLTE2LjkzOCw3LjE5Ni0yMi45bDQ0LjcxOS00NC43MTljMy4yNDItMy4yNDIsMy4xODItOC41MzYtMC4xOC0xMS43MDEgICAgYy0zLjI0OS0zLjA1OS04LjQzMy0yLjczOS0xMS41ODksMC40MTdsLTQ0LjQ3Niw0NC40NzdjLTEwLjIyOSwxMC4yMjgtMjYuOTUzLDEwLjA5Ny0zNy4wMTUtMC4zOTIgICAgYy05LjUtOS45MDQtOS4yMzMtMjUuNjYtMC4wMDItMzUuODE0bDAuMzkxLTAuNDNsNDQuNzE0LTQ0LjcxM2MzLjE4My0zLjE4MywzLjE4My04LjM0NCwwLTExLjUyNiAgICBjLTMuMTgyLTMuMTg0LTguMzQzLTMuMTgzLTExLjUyNiwwbC00NC43MjgsNDQuNzI4Yy02LjAwOSw2LjAwMS0xNC40NDQsOC42OTEtMjMuMDkyLDcuMTVjLTMuNTQyLTAuNjMxLTYuOTI4LTIuMDM3LTkuODc2LTQuMDk5ICAgIGMtNy4xODgtNS4wMy0xMS4yNC0xMi44OTItMTEuMjQtMjEuMzc3YzAtNi45MTgsMi42OTQtMTMuNDI0LDcuNTg3LTE4LjMxNmw3NC44MjMtNzQuODIzYzMuMTQzLTMuMTQzLDMuMTU0LTguMjM3LDAuMDI0LTExLjM5MiAgICBjLTAuMDM4LTAuMDM4LTAuMDc2LTAuMDc3LTAuMTE1LTAuMTE1Yy0zLjE0Ny0zLjE3Mi04LjI3Ni0zLjE4LTExLjQzNS0wLjAyMWwtNTguNzQxLDU4Ljc0MWwtMjguNzc1LTI4Ljc3NSAgICBjLTMuMTA4LTMuMTA4LTUuMTYyLTcuMjE3LTUuNzg0LTExLjU2OGwtNC41LTMxLjQ5OGMtMC45MzQtNi41MzYtNC4xMzYtMTIuNDM5LTguNzA0LTE3LjIwNiAgICBjLTUuMTQ5LTUuMzczLTUuMDgxLTEzLjkzNCwwLjIwOC0xOS4yMjFMMTQ4LjU2NywzMS4zMThjMi4xODctMi4xODcsNS4wNzctMy42MjIsOC4xNjctMy43NjVjMy4zNjctMC4xNTUsNi41NiwxLjA2Nyw4Ljk0NiwzLjQwNiAgICBjNS41ODIsNS40NzEsMTIuODQ0LDguODg1LDIwLjY2LDguODg1YzExLjMwNywwLDI1Ljc5MiwwLDM0LjgwMiwwYzUuNDIzLDAsMTAuNjE5LDIuMTU0LDE0LjQ1Myw1Ljk4OWwxMTguNDg0LDExOC40ODQgICAgYzEwLjI0NiwxMC4yNDYsMTAuNTE4LDI3LjI4NywwLjEsMzcuMzU4Yy0xMC4xMjMsOS43ODYtMjYuMzIyLDkuNjgzLTM2LjMxNy0wLjMxMWwtODAuNzczLTgwLjc3MyAgICBjLTYuMDY5LTYuMDY5LTE1LjkwNy02LjA2OS0yMS45NzYsMGwtNjEuNTIsNjEuNTJjLTMuMTUyLDMuMTUyLTMuMTUyLDguMjYxLDAsMTEuNDExbDAuMTE1LDAuMTE1ICAgIGMzLjE1MiwzLjE1Miw4LjI2MSwzLjE1MiwxMS40MTEsMGw2MC45ODEtNjAuOTgxbDc5LjY0Miw3OS42NDNjMTYuNTIsMTYuNTIsNDQuMDQ5LDE3LjAyMiw2MC40NjcsMC40MDEgICAgYzguMDQ5LTguMTQ4LDEyLjM4Ni0xOC45OTcsMTIuMTY0LTMwLjQ5NGMtMC4yMTUtMTEuMTM1LTUuMDM5LTIxLjY4OC0xMi45MTUtMjkuNTYybC03OS4xOTMtNzkuMTkzICAgIGM2LjU0MS00LjY3NywxNC4xODgtNy43ODEsMjIuMTctOC45MjFsOS40MTEtMS4zNDRjMTQuNDA1LTIuMDU4LDI3LjczOC04Ljc4MiwzNy45NTctMTkuMTQxbDYuMTM5LTYuMjI0ICAgIGMwLjU0OS0wLjU1NiwxLjE3OC0wLjY3NSwxLjYwOC0wLjY3NmMwLjQ1Ni0wLjAwMSwxLjA2MiwwLjExMywxLjYxMywwLjY2NEw0OTUuMDQsMTY3LjY4NmMwLjU0OSwwLjU1LDAuNjY1LDEuMTc3LDAuNjY1LDEuNjA1ICAgIEM0OTUuNzA3LDE2OS43MDMsNDk1LjU5OSwxNzAuMjk3LDQ5NS4xMDMsMTcwLjgzMXoiIGZpbGw9IiM0MTY5ZTEiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                        />
                <h2>Something is not quite right...</h2>
                <p><%= error.message %></p>
            </div>
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center">
                </div>
            </div>
        </div>
    </body>
    </html>
    */
}