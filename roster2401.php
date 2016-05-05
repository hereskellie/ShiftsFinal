<!--

* roster2401.php

* Roster 2401 interface 

*

* Version information e.g. Version 6

*

* Date e.g. 19/04/2016

* @author Kellie Hughes, X12388761

*

*/

-->

<?php

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="favicon.ico">

    <title>Shifts</title>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">

    <!-- Scripts -->
    <script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
    <script src="ie-emulation-modes-warning.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script type="text/javascript" src="userauth.js"></script>
    <script src="rosterjava.js" type="text/javascript"></script>

    <!-- Custom styles for this template -->
    <link href="softwareproject.css" rel="stylesheet">

    <div id='cssmenu'>
<ul>
   <li class='active'><a href='rosters3101.php'><span>Rosters</span></a></li>
   <li><a href='request.php'><span>Request</span></a></li>
   <li><a href='chat2.php'><span>Chat</span></a></li>
   <li class='last'><a href='manager.php'><span>Manager</span></a></li>
   <li id='logout' class='pull-right'><a href='index.php'><span>Log Out</span></a></li>
</ul>
</div>
  </head>

  <body background="dark.jpg">

    <div class="container">

      
        <center><img src="company.png" width="750" height="100"></center>
        <h2 class="form-signin-heading"><font color="white"><center>Roster for Week Ending <h3 id="DateEnd1"></h3></center></font></h2>
<center><div class="tg-wrap"><table class="roster">
  <tr>
    <th class="tg-jlrw">Name</th>
    <th class="tg-yw4l" id="Date9"></th>
    <th class="tg-yw4l" id="Date10"></th>
    <th class="tg-yw4l" id="Date11"></th>
    <th class="tg-yw4l" id="Date12"></th>
    <th class="tg-yw4l" id="Date13"></th>
    <th class="tg-yw4l" id="Date14"></th>
    <th class="tg-yw4l" id="Date15"></th>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp1"></td>
    <td class="tg-yw4l" id="Emp1Mon1"></td>
    <td class="tg-yw4l" id="Emp1Tue1"></td>
    <td class="tg-yw4l" id="Emp1Wed1"></td>
    <td class="tg-yw4l" id="Emp1Thur1"></td>
    <td class="tg-yw4l" id="Emp1Fri1"></td>
    <td class="tg-yw4l" id="Emp1Sat1"></td>
    <td class="tg-yw4l" id="Emp1Sun1"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp2"></td>
    <td class="tg-yw4l" id="Emp2Mon1"></td>
    <td class="tg-yw4l" id="Emp2Tue1"></td>
    <td class="tg-yw4l" id="Emp2Wed1"></td>
    <td class="tg-yw4l" id="Emp2Thur1"></td>
    <td class="tg-yw4l" id="Emp2Fri1"></td>
    <td class="tg-yw4l" id="Emp2Sat1"></td>
    <td class="tg-yw4l" id="Emp2Sun1"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp3"></td>
    <td class="tg-yw4l" id="Emp3Mon1"></td>
    <td class="tg-yw4l" id="Emp3Tue1"></td>
    <td class="tg-yw4l" id="Emp3Wed1"></td>
    <td class="tg-yw4l" id="Emp3Thur1"></td>
    <td class="tg-yw4l" id="Emp3Fri1"></td>
    <td class="tg-yw4l" id="Emp3Sat1"></td>
    <td class="tg-yw4l" id="Emp3Sun1"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp4"></td>
    <td class="tg-yw4l" id="Emp4Mon1"></td>
    <td class="tg-yw4l" id="Emp4Tue1"></td>
    <td class="tg-yw4l" id="Emp4Wed1"></td>
    <td class="tg-yw4l" id="Emp4Thur1"></td>
    <td class="tg-yw4l" id="Emp4Fri1"></td>
    <td class="tg-yw4l" id="Emp4Sat1"></td>
    <td class="tg-yw4l" id="Emp4Sun1"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp5"></td>
    <td class="tg-yw4l" id="Emp5Mon1"></td>
    <td class="tg-yw4l" id="Emp5Tue1"></td>
    <td class="tg-yw4l" id="Emp5Wed1"></td>
    <td class="tg-yw4l" id="Emp5Thur1"></td>
    <td class="tg-yw4l" id="Emp5Fri1"></td>
    <td class="tg-yw4l" id="Emp5Sat1"></td>
    <td class="tg-yw4l" id="Emp5Sun1"></td>
  </tr>
</table></div></center>


</br>

<center>
<table border="0">
<tr>
<td><form action="roster2401.php">
<input type="submit" class="rosterclicks" value="Last Week">
</form></td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td><form action="roster3101.php">
<input type="submit" class="rosterclicks" value="Next Week">
</form></td>
</tr>
</table>
</center>
  </body>
</html>